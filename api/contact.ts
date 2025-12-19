import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

type Body = {
  name?: string;
  email?: string;
  service?: string;
  date?: string;
  message?: string;
  // honeypot (your current frontend uses this)
  company?: string;
  // optional: if you later add a consent checkbox
  consent?: boolean;
};

const RATE = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clampText(value: string, max: number) {
  const v = value.trim();
  return v.length > max ? v.slice(0, max) : v;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(input: string) {
  return input.replace(/\r\n|\n|\r/g, '<br/>');
}

function getClientIp(req: VercelRequest) {
  const xf = req.headers['x-forwarded-for'];
  if (typeof xf === 'string' && xf.length) return xf.split(',')[0].trim();
  if (Array.isArray(xf) && xf[0]) return xf[0].split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' });

  if (!req.headers['content-type']?.includes('application/json')) {
    return res.status(400).json({ ok: false, error: 'INVALID_CONTENT_TYPE' });
  }

  const body: Body = (req.body || {}) as Body;

  // Honeypot (bots)
  if (body.company && String(body.company).trim().length > 0) {
    return res.status(200).json({ ok: true });
  }

  // Best-effort rate limit
  const ip = getClientIp(req);
  const now = Date.now();
  const bucket = (RATE.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (bucket.length >= MAX_PER_WINDOW) {
    RATE.set(ip, bucket);
    return res.status(429).json({ ok: false, error: 'RATE_LIMIT' });
  }
  bucket.push(now);
  RATE.set(ip, bucket);

  // Optional consent gate: only enforce if the field exists in the payload
  if (typeof body.consent === 'boolean' && body.consent !== true) {
    return res.status(400).json({ ok: false, error: 'CONSENT_REQUIRED' });
  }

  const nameRaw = typeof body.name === 'string' ? body.name : '';
  const emailRaw = typeof body.email === 'string' ? body.email : '';
  const serviceRaw = typeof body.service === 'string' ? body.service : '';
  const dateRaw = typeof body.date === 'string' ? body.date : '';
  const messageRaw = typeof body.message === 'string' ? body.message : '';

  const name = clampText(nameRaw, 120);
  const email = clampText(emailRaw, 180);
  const service = clampText(serviceRaw, 160);
  const date = clampText(dateRaw, 120);
  const message = clampText(messageRaw, 5000);

  if (!name || name.length < 2) return res.status(400).json({ ok: false, error: 'INVALID_NAME' });
  if (!email || !isEmail(email)) return res.status(400).json({ ok: false, error: 'INVALID_EMAIL' });
  if (!message || message.length < 10) return res.status(400).json({ ok: false, error: 'INVALID_MESSAGE' });

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_RECIPIENT;
  const secure = process.env.SMTP_SECURE === 'true';

  if (!host || !user || !pass || !recipient) {
    return res.status(500).json({ ok: false, error: 'SMTP_NOT_CONFIGURED' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service || '—');
  const safeDate = escapeHtml(date || '—');
  const safeMessageHtml = nl2br(escapeHtml(message));

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    // Helps catch misconfigured SMTP early (keeps errors clean)
    await transporter.verify();

    await transporter.sendMail({
      from: `"MyClean Service" <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `Neue Anfrage – ${service || 'Kontaktformular'}`,
      text: [
        'Neue Kontaktanfrage (MyClean Service)',
        '',
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Leistung: ${service || '-'}`,
        `Wunschtermin: ${date || '-'}`,
        '',
        'Nachricht:',
        message,
      ].join('\n'),
      html: `
        <div style="background:#f4f8ff;padding:28px 16px">
          <div style="max-width:680px;margin:0 auto">
            <div style="background:linear-gradient(135deg, rgba(28,91,191,0.10), rgba(47,127,239,0.06));border:1px solid rgba(28,91,191,0.18);border-radius:22px;padding:18px 18px 16px;box-shadow:0 24px 70px rgba(15,23,42,0.10)">
              <div style="font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;color:#0F3D8C;letter-spacing:0.08em;text-transform:uppercase;font-size:12px;opacity:0.9">MyClean Service · Kontakt</div>
              <h2 style="margin:10px 0 6px;font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:22px;line-height:1.25;color:#0B2447">Neue Anfrage</h2>
              <p style="margin:0 0 12px;font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:13px;color:rgba(11,36,71,0.72)">Eine neue Nachricht ist über das Kontaktformular eingegangen.</p>

              <div style="display:block;background:rgba(255,255,255,0.65);border:1px solid rgba(15,61,140,0.10);border-radius:18px;padding:14px 14px 12px;margin-top:14px">
                <div style="font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:13px;color:rgba(11,36,71,0.85)">
                  <div style="margin:0 0 6px"><strong style="color:#0B2447">Name:</strong> ${safeName}</div>
                  <div style="margin:0 0 6px"><strong style="color:#0B2447">E-Mail:</strong> <a href="mailto:${safeEmail}" style="color:#1C5BBF;text-decoration:none">${safeEmail}</a></div>
                  <div style="margin:0 0 6px"><strong style="color:#0B2447">Leistung:</strong> ${safeService}</div>
                  <div style="margin:0"><strong style="color:#0B2447">Wunschtermin:</strong> ${safeDate}</div>
                </div>
              </div>

              <div style="margin-top:14px;background:rgba(255,255,255,0.55);border:1px solid rgba(15,61,140,0.08);border-radius:18px;padding:14px">
                <div style="font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:rgba(11,36,71,0.65)">Nachricht</div>
                <div style="margin-top:10px;font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:14px;line-height:1.65;color:rgba(11,36,71,0.92)">${safeMessageHtml}</div>
              </div>

              <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
                <a href="mailto:${safeEmail}" style="display:inline-block;padding:10px 14px;border-radius:999px;background:#1C5BBF;color:#ffffff;font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-weight:700;font-size:13px;text-decoration:none">Antworten</a>
                <span style="display:inline-block;padding:10px 14px;border-radius:999px;border:1px solid rgba(15,61,140,0.14);background:rgba(255,255,255,0.45);color:rgba(11,36,71,0.72);font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:13px">IP: ${escapeHtml(ip)}</span>
              </div>

              <div style="margin-top:14px;font-family:Manrope,Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:12px;color:rgba(11,36,71,0.50)">
                Hinweis: Diese Nachricht wurde automatisch über das Kontaktformular gesendet.
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    const e = err as { message?: string; code?: string; responseCode?: number };
    console.error('MAIL_FAILED', {
      message: e?.message,
      code: e?.code,
      responseCode: e?.responseCode,
      host,
      port,
      secure,
    });
    return res.status(500).json({ ok: false, error: 'MAIL_FAILED' });
  }
}
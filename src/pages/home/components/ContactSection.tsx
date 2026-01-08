import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Field colors come from CSS variables (no hardcoded hex here)
  const fieldClass =
    'w-full px-4 py-3 rounded-2xl border bg-[var(--section-glass)] border-[rgba(15,23,42,0.14)] dark:border-white/10 text-[color:var(--page-fg-solid)] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/15 focus:border-transparent';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      date: formData.get('date')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-[var(--page-bg)] text-[color:var(--page-fg-solid)]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-[color:var(--page-fg-solid)]">
          Kontakt &amp; Anfrage
        </h2>

        <p className="text-base md:text-lg mb-6 text-center text-[color:var(--page-fg-80)]">
          Für Angebote, Besichtigungen und Rückfragen können Sie uns telefonisch erreichen oder das Formular nutzen.
          Wir melden uns mit Rückfragen oder einem passenden Vorschlag für Ihr Objekt.
        </p>

        <div className="mt-2 grid gap-10 md:grid-cols-[1.05fr,1.15fr] items-start">
          <div className="space-y-6 text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                href="tel:+4915217782301"
                size="md"
                className="gap-2 px-6 py-3 rounded-full bg-[color:var(--accent-solid)] text-white border border-[color:rgba(var(--accent),0.55)] shadow-[0_12px_30px_rgba(15,23,42,0.18)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.22)] tracking-[0.18em] uppercase text-[0.7rem]"
              >
                <i className="ri-phone-line text-lg mr-1" />
                Direkt anrufen
              </Button>
              <Button
                href="mailto:info@myclean-service.de"
                size="md"
                className="gap-2 px-6 py-3 rounded-full bg-[color:var(--accent-solid)] text-white border border-[rgba(var(--accent),0.55)] shadow-[0_12px_30px_rgba(15,23,42,0.18)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.22)] tracking-[0.18em] uppercase text-[0.7rem]"
              >
                <i className="ri-mail-line text-lg mr-1" />
                E-Mail schreiben
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-[color:var(--page-fg-solid)]">
                So läuft Ihre Anfrage
              </h3>
              <p className="text-base leading-relaxed text-center text-[color:var(--page-fg-80)]">
                Über das Formular können Sie uns kurz Ihr Objekt und den gewünschten Reinigungsumfang schildern. Wir
                prüfen Ihre Angaben und melden uns mit Rückfragen, einem Vorschlag oder einem Rückruf.
              </p>
            </div>

            <ul className="space-y-2 text-sm md:text-base text-center text-[color:var(--page-fg-80)]">
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent-solid)]" />
                <span>Regelmäßige Unterhaltsreinigung für Büros, Praxen, Treppenhäuser und Objekte in Berlin.</span>
              </li>
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent-solid)]" />
                <span>Flexible Intervalle und klare Zuständigkeiten – abgestimmt auf Nutzung und Anforderungen.</span>
              </li>
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent-solid)]" />
                <span>
                  Für kurzfristige Rückfragen erreichen Sie uns am besten telefonisch, für Angebote nutzen Sie das
                  Formular.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] shadow-[0_18px_60px_rgba(15,61,140,0.22)] px-6 py-7 md:px-7 md:py-8">
            <form className="grid gap-6 md:grid-cols-2 text-left" onSubmit={handleSubmit}>
              <div className="md:col-span-2">
                <p className="text-sm text-[color:var(--page-fg-80)]">
                  Über dieses Formular erreichen Sie myclean für Angebote und Rückfragen rund um Ihre Reinigung. Wir
                  prüfen Ihre Angaben und melden uns mit Rückfragen, einem Vorschlag oder einem Rückruf.
                </p>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[color:var(--page-fg-solid)]">Name*</label>
                <input type="text" required className={fieldClass} name="name" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[color:var(--page-fg-solid)]">E-Mail*</label>
                <input type="email" required className={fieldClass} name="email" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[color:var(--page-fg-solid)]">Anliegen*</label>
                <select required className={fieldClass} style={{ backgroundPosition: 'right 1rem center' }} name="service">
                  <option value="">Bitte auswählen</option>
                  <option value="unterhaltsreinigung">Unterhaltsreinigung Büro / Praxis</option>
                  <option value="treppenhausreinigung">Treppenhausreinigung</option>
                  <option value="glasreinigung">Glas- &amp; Fensterreinigung</option>
                  <option value="sonderreinigung">Sonderreinigung / Grundreinigung</option>
                  <option value="wohnanlage-gewerbe">Wohnanlage / Gewerbeobjekt</option>
                  <option value="sonstiges">Sonstiges Anliegen</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[color:var(--page-fg-solid)]">Wunschtermin (optional)</label>
                <input type="date" className={fieldClass} name="date" />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-[color:var(--page-fg-solid)]">Nachricht*</label>
                <textarea
                  required
                  rows={4}
                  className={fieldClass}
                  placeholder="z. B. Objektart, Größe, Reinigungsumfang, gewünschte Intervalle, Adresse und Telefonnummer"
                  name="message"
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-semibold text-[0.75rem] sm:text-sm md:text-base shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:shadow-[0_22px_55px_rgba(15,23,42,0.22)] transition-all duration-300 border border-[rgba(var(--accent),0.55)] bg-[color:var(--accent-solid)] tracking-[0.22em] uppercase text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="md:col-span-2 text-right text-sm text-emerald-500">Deine Anfrage wurde erfolgreich gesendet.</div>
              )}
              {submitStatus === 'error' && (
                <div className="md:col-span-2 text-right text-sm text-red-500">
                  Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

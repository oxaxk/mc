import React, { useEffect, useState } from 'react';

type ConsentStatus = 'accepted' | 'rejected' | 'unset';

const STORAGE_KEY = 'cookie-consent-v1';

function getInitialStatus(): ConsentStatus {
  if (typeof window === 'undefined') return 'unset';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'accepted' || stored === 'rejected') return stored;
  return 'unset';
}

function loadGoogleAdsTag() {
  if (typeof window === 'undefined') return;

  if ((window as any).googleAdsLoaded) {
    return;
  }

  (window as any).googleAdsLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-412662118';
  document.head.appendChild(script);

  const inline = document.createElement('script');
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-412662118');
  `;
  document.head.appendChild(inline);
}

export default function CookieBanner() {
  const [status, setStatus] = useState<ConsentStatus>('unset');
  const [forceOpen, setForceOpen] = useState(false);
  const isVisible = status === 'unset' || forceOpen;

  useEffect(() => {
    const initial = getInitialStatus();
    setStatus(initial);
    if (initial === 'accepted') {
      loadGoogleAdsTag();
    }

    const onOpen = () => setForceOpen(true);
    window.addEventListener('open-cookie-banner', onOpen);
    return () => window.removeEventListener('open-cookie-banner', onOpen);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setStatus('accepted');
    setForceOpen(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: { status: 'accepted' } }));
    loadGoogleAdsTag();
  };

  const handleReject = () => {
    window.localStorage.setItem(STORAGE_KEY, 'rejected');
    setStatus('rejected');
    setForceOpen(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: { status: 'rejected' } }));
    // Hier sicherstellen: keine optionalen Cookies / Tracker laden.
  };

  const CookieWidget = (
    <button
      type="button"
      onClick={() => setForceOpen(true)}
      aria-label="Cookie-Einstellungen öffnen"
      className="fixed right-5 bottom-[calc(env(safe-area-inset-bottom)+20px)] sm:bottom-5 z-[9998] w-12 h-12 rounded-full border border-white/20 bg-black/55 backdrop-blur-xl shadow-[0_14px_40px_rgba(15,23,42,0.65)] hover:border-[#22d3ee]/60 hover:shadow-[0_0_18px_rgba(34,211,238,0.55)] transition"
    >
      <span className="sr-only">Cookie-Einstellungen</span>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto text-white/90">
        <path d="M12 2.6c.55 0 1 .45 1 1 0 1.1.9 2 2 2 .55 0 1 .45 1 1 0 1.38 1.12 2.5 2.5 2.5.55 0 1 .45 1 1 0 6.02-4.88 10.9-10.9 10.9S1.7 18.12 1.7 12.1C1.7 6.08 6.58 1.2 12.6 1.2c.55 0 1 .45 1 1 0 .22-.02.43-.06.63-.09.45-.49.77-.94.77h-.6Z" fill="currentColor" opacity="0.95"/>
        <circle cx="9.2" cy="12" r="1.2" fill="currentColor" opacity="0.55" />
        <circle cx="13.4" cy="14.4" r="1" fill="currentColor" opacity="0.55" />
        <circle cx="12.6" cy="9.1" r="0.9" fill="currentColor" opacity="0.55" />
        <circle cx="16.3" cy="11.3" r="0.8" fill="currentColor" opacity="0.55" />
      </svg>
    </button>
  );

  if (!isVisible) return <>{CookieWidget}</>;

  return (
    <>
      {CookieWidget}
      <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/60">
        <div className="w-full sm:max-w-xl mx-4 mb-4 sm:mb-0 rounded-3xl bg-white shadow-[0_18px_50px_rgba(15,23,42,0.35)] p-5 sm:p-6">
          {forceOpen && status !== 'unset' && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setForceOpen(false)}
                aria-label="Schließen"
                className="-mt-1 -mr-1 w-9 h-9 rounded-full flex items-center justify-center text-[#0F172A]/70 hover:text-[#0F172A] hover:bg-black/5 transition"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                ×
              </button>
            </div>
          )}
          <h2
            className="text-base sm:text-lg font-semibold mb-2"
            style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}
          >
            Cookies &amp; Datenschutz
          </h2>
          <p
            className="text-xs sm:text-sm text-[#0F172A]/80 mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Wir verwenden technisch notwendige Cookies, um diese Webseite zu betreiben. 
            Optionale Cookies für Statistik oder Marketing setzen wir nur, wenn du zustimmst. 
            Details findest du in unserer&nbsp;
            <a href="/datenschutz" className="underline hover:no-underline">
              Datenschutzerklärung
            </a>
            &nbsp;und in den&nbsp;
            <a href="/cookie" className="underline hover:no-underline">
              Cookie-Einstellungen
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              onClick={handleReject}
              className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[#0F3D8C]/30 text-[#0F3D8C] hover:bg-[#0F3D8C]/5 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Nur notwendige Cookies
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
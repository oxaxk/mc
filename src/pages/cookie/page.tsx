import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function CookieSettingsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const openBanner = () => {
    window.dispatchEvent(new CustomEvent('cookie-banner:open', { detail: { mode: 'settings' } }));
  };

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 md:pt-32">
        <section>
          <div className="rounded-2xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] shadow-[0_18px_50px_rgba(15,23,42,0.18)] p-8 lg:p-12">
            <p className="text-xs tracking-[0.22em] uppercase text-sky-700">Cookies</p>
            <h1 className="text-3xl md:text-4xl font-semibold mt-4 mb-4 text-[color:var(--page-fg)]">
              Cookie-Einstellungen
            </h1>

            <p className="mt-2 text-base leading-relaxed text-[color:var(--page-fg)]/80">
              Auf dieser Webseite werden ausschließlich technisch notwendige Cookies verwendet.
            </p>
            <p className="mt-2 text-base leading-relaxed text-[color:var(--page-fg)]/80">
              Es werden keine Tracking-, Marketing- oder Analyse-Cookies gesetzt. Externe Dienste werden ohne deine Zustimmung nicht geladen.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={openBanner}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold tracking-[0.12em] uppercase bg-sky-700 text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)] hover:bg-sky-800 transition-colors"
              >
                Cookie-Banner öffnen
              </button>

              <Link
                to="/datenschutz"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold tracking-[0.12em] uppercase bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 transition-colors"
              >
                Datenschutzerklärung
              </Link>

              <Link
                to="/impressum"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold tracking-[0.12em] uppercase bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 transition-colors"
              >
                Impressum
              </Link>
            </div>

            <h2 className="mt-10 text-xl md:text-2xl font-semibold text-[color:var(--page-fg)]">
              Cookie-Kategorien
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--page-fg)]/75">
              Es gibt nur eine Kategorie: technisch notwendige Cookies. Diese sind für den Betrieb der Webseite unverzichtbar.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="bg-[var(--card-glass)]/70 border border-[rgba(15,23,42,0.18)] dark:border-white/15 rounded-2xl p-5">
                <div className="font-semibold text-[color:var(--page-fg)] tracking-[0.16em] uppercase text-xs mb-1">
                  Notwendig
                </div>
                <div className="mt-1 text-sm text-[color:var(--page-fg)]/80">
                  Speicherung der Cookie-Auswahl, Betrieb des Kontaktformulars, Sicherheit und Grundfunktionen dieser Seite. Keine Weitergabe an Dritte.
                </div>
              </div>
            </div>

            <h2 className="mt-10 text-lg md:text-xl font-semibold text-[color:var(--page-fg)]">
              Eingesetzte Dienste
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--page-fg)]/80 list-disc list-inside">
              <li>
                Keine externen Tracking-, Analyse- oder Marketing-Dienste im Einsatz. Keine Google-Dienste, keine Social Media Pixel.
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[rgba(15,23,42,0.14)] dark:border-white/10">
              <p className="text-xs opacity-70 text-[color:var(--page-fg)]">Stand: Januar 2026</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

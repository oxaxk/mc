import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function CookieSettingsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 md:pt-32">
        <section>
          <div className="rounded-2xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] shadow-[0_18px_50px_rgba(15,23,42,0.18)] p-8 lg:p-12">
            <p className="text-xs tracking-[0.22em] uppercase text-sky-700">Cookies</p>
            <h1 className="text-3xl md:text-4xl font-semibold mt-4 mb-4 text-[color:var(--page-fg)]">
              Cookie-Hinweis
            </h1>

            <p className="mt-2 text-base leading-relaxed text-[color:var(--page-fg)]/80">
              Diese Website setzt nach aktuellem Stand keine Analyse-, Marketing- oder Tracking-Cookies ein und
              speichert keine Cookie-Auswahl in Ihrem Browser.
            </p>
            <p className="mt-2 text-base leading-relaxed text-[color:var(--page-fg)]/80">
              Technisch erforderliche Zugriffsdaten können durch den Hosting-Anbieter verarbeitet werden. Details
              finden Sie in der Datenschutzerklärung.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                to="/datenschutz"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold tracking-[0.12em] uppercase bg-sky-700 text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)] hover:bg-sky-800 transition-colors"
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
              Eingesetzte Dienste
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--page-fg)]/80 list-disc list-inside">
              <li>Hosting und technische Bereitstellung der Website.</li>
              <li>Kontaktformular mit E-Mail-Versand an den Websitebetreiber.</li>
              <li>Keine externen Analyse- oder Marketing-Dienste.</li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[rgba(15,23,42,0.14)] dark:border-white/10">
              <p className="text-xs opacity-70 text-[color:var(--page-fg)]">Stand: Mai 2026</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

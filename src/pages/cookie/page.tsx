import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function CookieInfoPage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16 md:pt-32">
        <section>
          <div className="rounded-2xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] shadow-[0_18px_50px_rgba(15,23,42,0.18)] p-8 lg:p-12">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              Cookie-Hinweis
            </h1>

            <p className="text-base leading-relaxed opacity-85">
              Diese Website verwendet keine Cookies, kein Tracking und keine Analyse- oder Marketing-Tools.
            </p>

            <p className="mt-4 text-base leading-relaxed opacity-85">
              Es werden keine personenbezogenen Daten zu Analyse- oder Werbezwecken gespeichert oder ausgewertet.
              Es gibt daher keine Cookie-Einstellungen, die angepasst werden müssen.
            </p>

            <p className="mt-4 text-base leading-relaxed opacity-85">
              Beim Aufruf der Website können technisch notwendige Server-Log-Daten anfallen
              (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp), die ausschließlich der
              sicheren Bereitstellung der Website dienen.
            </p>

            <p className="mt-6 text-sm opacity-70">
              Hosting erfolgt über Vercel. Weitere Informationen findest du in der Datenschutzerklärung.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

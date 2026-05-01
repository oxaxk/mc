import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 md:pt-32">
        <div className="rounded-2xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] shadow-[0_18px_50px_rgba(15,23,42,0.18)] p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-[color:var(--page-fg)]">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:text-[color:var(--page-fg)] prose-p:text-[color:var(--page-fg)] prose-li:text-[color:var(--page-fg)] prose-strong:text-[color:var(--page-fg)] prose-a:text-[#0F3D8C] dark:prose-a:text-[#22d3ee] prose-a:underline hover:prose-a:no-underline">
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 DDG</h2>

            <p className="mb-8">
              <strong>MyClean Service</strong>
              <br />
              Inhaber: Aldan Sabotic
              <br />
              Wollankstr. 61c
              <br />
              13359 Berlin
              <br />
              Deutschland
              <br />
              E-Mail:{' '}
              <a href="mailto:info@myclean-service.de" className="text-[#0F3D8C] dark:text-[#22d3ee] hover:underline">
                info@myclean-service.de
              </a>
              <br />
              Telefon:{' '}
              <a href="tel:+4915217782301" className="text-[#0F3D8C] dark:text-[#22d3ee] hover:underline">
                +49 152 17782301
              </a>
              <br />
              Website:{' '}
              <a href="https://www.myclean-service.de" className="text-[#0F3D8C] dark:text-[#22d3ee] hover:underline">
                https://www.myclean-service.de
              </a>
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Verantwortlich für den Inhalt</h2>
            <p className="mb-8">
              Verantwortlich nach § 18 Abs. 2 MStV:
              <br />
              Aldan Sabotic, Anschrift wie oben.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Verbraucherstreitbeilegung</h2>
            <p className="mb-8">
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Hinweis zu Bildmaterial</h2>
            <p className="mb-8">
              Auf dieser Website werden eigene, lizenzierte oder im Rahmen zulässiger Nutzungsrechte bereitgestellte
              Bild- und Gestaltungselemente verwendet. Sollten Sie der Ansicht sein, dass Rechte Dritter betroffen
              sind, bitten wir um einen Hinweis an die oben genannte Kontaktadresse.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Urheberrecht</h2>
            <p className="mb-4">
              Die Inhalte dieser Website unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung,
              Verbreitung oder sonstige Nutzung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen
              Zustimmung des jeweiligen Rechteinhabers.
            </p>

            <div className="mt-12 pt-8 border-t border-[rgba(15,23,42,0.14)] dark:border-white/10">
              <p className="text-sm opacity-70 text-[color:var(--page-fg)]">Stand: Mai 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

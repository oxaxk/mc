import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 md:pt-32">
        <div className="rounded-2xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] shadow-[0_18px_50px_rgba(15,23,42,0.18)] p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-[color:var(--page-fg)]">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:text-[color:var(--page-fg)] prose-p:text-[color:var(--page-fg)] prose-li:text-[color:var(--page-fg)] prose-strong:text-[color:var(--page-fg)] prose-a:text-[#0F3D8C] dark:prose-a:text-[#22d3ee] prose-a:underline hover:prose-a:no-underline">
            <h2 className="text-2xl font-semibold mb-4 mt-8">1. Allgemeine Hinweise</h2>
            <p className="mb-4">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verarbeitet personenbezogene Daten ausschließlich im technisch notwendigen Umfang.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">2. Hosting</h2>
            <p className="mb-4">
              Diese Website wird über den Hosting-Dienstleister Vercel betrieben. Beim Aufruf der Website werden durch den Hosting-Anbieter automatisch technische Informationen verarbeitet (z. B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs), die für den sicheren und stabilen Betrieb der Website erforderlich sind.
            </p>
            <p className="mb-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren Bereitstellung der Website).
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">3. Kontaktaufnahme</h2>
            <p className="mb-4">
              Wenn Sie uns über ein Kontaktformular oder per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (z. B. Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <p className="mb-4">
              Diese Daten werden nicht an Dritte weitergegeben und nur so lange gespeichert, wie dies zur Bearbeitung der Anfrage erforderlich ist.
            </p>
            <p className="mb-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) bzw. Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">4. Cookies und Tracking</h2>
            <p className="mb-4">
              Diese Website setzt ausschließlich technisch notwendige Cookies ein.
            </p>
            <p className="mb-4">
              Bestimmte Darstellungs- und Komfortfunktionen (z. B. Icons oder UI-Komponenten aus externen Bibliotheken) werden erst nach Ihrer ausdrücklichen Zustimmung über den Cookie-Hinweis geladen.
            </p>
            <p className="mb-4">
              Es findet kein Tracking statt. Es werden keine Analyse-, Marketing- oder Werbedienste (z. B. Google Analytics, Google Ads, Meta Pixel) eingesetzt.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">5. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden Datenschutzgesetze das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten.
            </p>
            <p className="mb-4">
              Hierzu können Sie sich jederzeit über die im Impressum angegebene Kontaktmöglichkeit an uns wenden.
            </p>

            <div className="mt-12 pt-8 border-t border-[rgba(15,23,42,0.14)] dark:border-white/10">
              <p className="text-sm opacity-70 text-[color:var(--page-fg)]">Stand: Januar 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

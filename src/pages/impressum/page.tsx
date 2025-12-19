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
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG (Telemediengesetz)</h2>

            <div className="mb-8">
              <p className="mb-2">
                <strong>MyClean Service</strong>
                <br />
                Inhaber: Aldan Sabotic
                <br />
                Wollankstr 61c
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
                <a href="https://myclean-service.de" className="text-[#0F3D8C] dark:text-[#22d3ee] hover:underline">
                  https://myclean-service.de
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
            <p className="mb-8">
              Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV:
              <br />
              Aldan Sabotic (Anschrift wie oben)
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Alternative Streitbeilegung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>{' '}
              finden.
            </p>
            <p className="mb-8">
              Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mb-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
              einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
              wir diese Inhalte umgehend entfernen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Links</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mb-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mb-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Bildernachweise</h2>
            <p className="mb-4">
              Wir verwenden Grafiken, Bilder und Videos aus der Canva Pro-Bibliothek. Diese Inhalte sind durch die
              Lizenzen von Canva abgedeckt und dürfen im Rahmen unserer Onlinepräsenz genutzt werden.
            </p>

            <p className="mb-4">
              © Copyright 2025 MyClean Service – Alle Rechte vorbehalten.
            </p>

            <div className="mt-12 pt-8 border-t border-[rgba(15,23,42,0.14)] dark:border-white/10">
              <p className="text-sm opacity-70 text-[color:var(--page-fg)]">Stand: 01.02.2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
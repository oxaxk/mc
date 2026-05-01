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
            <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
            <p className="mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
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
              <a href="mailto:info@myclean-service.de">info@myclean-service.de</a>
              <br />
              Telefon:{' '}
              <a href="tel:+4915217782301">+49 152 17782301</a>
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">2. Hosting und Server-Logfiles</h2>
            <p className="mb-4">
              Diese Website wird über den Hosting-Dienstleister Vercel betrieben. Beim Aufruf der Website verarbeitet
              der Hosting-Anbieter technisch erforderliche Zugriffsdaten, insbesondere IP-Adresse, Datum und Uhrzeit
              des Zugriffs, aufgerufene URL, Referrer-URL, Browsertyp, Betriebssystem und übertragene Datenmenge.
            </p>
            <p className="mb-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
              liegt in der sicheren, stabilen und effizienten Bereitstellung der Website. Empfänger der Daten ist der
              Hosting-Anbieter. Eine Verarbeitung außerhalb der Europäischen Union kann abhängig von der technischen
              Infrastruktur des Hosting-Anbieters nicht ausgeschlossen werden.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">3. Kontaktaufnahme und Kontaktformular</h2>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen
              angegebenen Daten, insbesondere Name, E-Mail-Adresse, Anliegen, Wunschtermin, Nachricht und freiwillig
              mitgeteilte Kontakt- oder Objektdaten. Diese Daten verwenden wir zur Bearbeitung Ihrer Anfrage und zur
              Kommunikation mit Ihnen.
            </p>
            <p className="mb-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf vorvertragliche Maßnahmen oder
              eine Vertragsdurchführung gerichtet ist. In anderen Fällen ist Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO;
              unser berechtigtes Interesse liegt in der Beantwortung eingehender Anfragen.
            </p>
            <p className="mb-4">
              Beim Versand des Kontaktformulars wird außerdem die IP-Adresse verarbeitet, um Missbrauch und Spam zu
              begrenzen. Die Formularinhalte werden per E-Mail an uns übermittelt. Empfänger können dabei technische
              Dienstleister für Hosting und E-Mail-Versand sein.
            </p>
            <p className="mb-4">
              Anfragen speichern wir nur so lange, wie dies zur Bearbeitung erforderlich ist. Soweit gesetzliche
              Aufbewahrungspflichten bestehen oder die Anfrage zu einem Vertragsverhältnis führt, können längere
              Speicherfristen gelten.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">4. Telefon- und E-Mail-Links</h2>
            <p className="mb-4">
              Wenn Sie Telefon- oder E-Mail-Links auf dieser Website nutzen, erfolgt die weitere Kommunikation über
              Ihren Telefonanbieter bzw. Ihr E-Mail-Programm. Dabei können je nach Anbieter eigene Datenschutzregeln
              gelten.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">5. Cookies, Tracking und externe Dienste</h2>
            <p className="mb-4">
              Diese Website setzt nach aktuellem Stand keine Analyse-, Marketing- oder Tracking-Cookies ein. Es werden
              keine Google-Analytics-, Meta-Pixel- oder vergleichbaren Tracking-Dienste geladen. Technisch notwendige
              Zugriffsdaten können durch den Hosting-Anbieter verarbeitet werden.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">6. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben nach Maßgabe der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit sowie das Recht, einer Verarbeitung auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO zu widersprechen.
            </p>
            <p className="mb-4">
              Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig kann
              insbesondere die Berliner Beauftragte für Datenschutz und Informationsfreiheit sein.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">7. Aktualität dieser Datenschutzerklärung</h2>
            <p className="mb-4">
              Wir passen diese Datenschutzerklärung an, wenn sich die Website, eingesetzte Dienste oder rechtliche
              Anforderungen ändern.
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

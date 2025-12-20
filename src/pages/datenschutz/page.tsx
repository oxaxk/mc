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
            <h2 className="text-2xl font-semibold mb-4 mt-8">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie dieser
              Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie
              dem Impressum dieser Website entnehmen.
            </p>
            <p className="mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
              erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <p className="mb-4">
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
              Daten können zur Analyse Ihres Nutzerverhaltens oder für Werbezwecke verwendet werden, sofern Sie hierin
              eingewilligt haben.
            </p>
            <p className="mb-4">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
              zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="mb-4">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">2. Hosting</h2>
            <p className="mb-4">
              Diese Website wird bei einem externen Dienstleister (Hoster) betrieben. Die personenbezogenen Daten, die auf
              dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich vor allem
              um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mb-4">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
              Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mb-4">
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
              von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies
              oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG
              umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
              sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung
              erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
              geschieht.
            </p>
            <p className="mb-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
              möglich.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
              die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
              entscheidet.
            </p>
            <p className="mb-4">
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist der im Impressum genannte
              Diensteanbieter. Die entsprechenden Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
              personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
              Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
              Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
              Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
            </h3>
            <p className="mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach
              Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
              personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1
              lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
              (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von
              § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
              verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
              Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6
              Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach
              Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
              folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Empfänger von personenbezogenen Daten</h3>
            <p className="mb-4">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist
              teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben
              personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung
              erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden),
              wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
              sonstige Rechtsgrundlage die Datenweitergabe erlaubt.
            </p>
            <p className="mb-4">
              Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines
              gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag
              über gemeinsame Verarbeitung geschlossen.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p className="mb-4 font-semibold">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
              RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
              PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
              PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
              DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
              MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE
              IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
              VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>
            <p className="mb-4 font-semibold">
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
              WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
              EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
              WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG
              VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
              insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
              mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p className="mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen,
              erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Auskunft, Berichtigung und Löschung</h3>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft
              über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
              Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu
              können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden
              Fällen:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li className="mb-2">
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der
                Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li className="mb-2">
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der
                Löschung die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li className="mb-2">
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und
                unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
            <p className="mb-4">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer
              Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen
              eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Keine Abmahnung ohne vorherige Kontaktaufnahme
            </h3>
            <p className="mb-4">
              Im Falle von wettbewerbsrechtlichen, domainrechtlichen, urheberrechtlichen oder ähnlichen Problemen bitten wir
              Sie, uns zur Vermeidung unnötiger Rechtsstreitigkeiten und Kosten bereits im Vorfeld zu kontaktieren. Eine
              Kostennote einer anwaltlichen Abmahnung ohne vorhergehende Kontaktaufnahme mit uns wird im Sinne der
              Schadensminderungspflicht als unbegründet zurückgewiesen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die
              Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p className="mb-4">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu
              müssen die Server-Log-Files erfasst werden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
              Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In
              allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung
              der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Anfrage per E-Mail oder Telefon</h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
              verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
              Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In
              allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung
              der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Kommunikation via WhatsApp</h3>
            <p className="mb-4">
              Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen wir unter anderem den
              Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal
              Harbour, Dublin 2, Irland.
            </p>
            <p className="mb-4">
              Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass WhatsApp
              oder sonstige Dritte Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp erhält jedoch Zugriff auf
              Metadaten, die im Zuge des Kommunikationsvorgangs entstehen (z. B. Absender, Empfänger und Zeitpunkt).
            </p>
            <p className="mb-4">
              Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und
              effektiven Kommunikation mit Kunden, Interessenten und sonstigen Geschäfts- und Vertragspartnern (Art. 6 Abs. 1
              lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Datenverarbeitung
              ausschließlich auf Grundlage der Einwilligung; diese ist jederzeit mit Wirkung für die Zukunft widerrufbar.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">
              5. Cookies, Einwilligungen und eingesetzte Dienste
            </h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Cookies & Consent-Management</h3>
            <p className="mb-4">
              Unsere Website verwendet ein Consent-Management-Tool (Cookie-Banner), mit dem Ihre Einwilligungen in die
              Speicherung bestimmter Cookies bzw. die Nutzung bestimmter Technologien eingeholt und verwaltet werden. Die
              Nutzung dieses Tools erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen nachweisen zu können und unsere
              Cookie-Einstellungen transparent zu steuern (Art. 6 Abs. 1 lit. c und f DSGVO).
            </p>
            <p className="mb-4">
              Je nach Auswahl im Cookie-Banner werden nur solche Cookies und Tools aktiviert, in die Sie eingewilligt haben.
              Sie können Ihre Auswahl jederzeit über den Link „Cookie-Einstellungen“ am Seitenende anpassen und Einwilligungen
              widerrufen oder erteilen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">6. Analyse-Tools und Werbung</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Google Tag / Google Ads Conversion-Tracking</h3>
            <p className="mb-4">
              Diese Website nutzt das Google-Tag-System bzw. das Global Site Tag (gtag.js) zur Einbindung von
              Conversion-Tracking für Google Ads. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin
              4, Irland.
            </p>
            <p className="mb-4">
              Über das Google Tag können wir erfassen, welche Aktionen Nutzer nach einem Klick auf eine unserer Anzeigen
              durchführen (z. B. Kontaktanfrage, Seitenaufrufe). Hierfür werden – je nach Ihrer Einwilligung im
              Cookie-Banner – Informationen wie Ihre IP-Adresse, aufgerufene Seiten, verwendeter Browser sowie Uhrzeit der
              Anfrage verarbeitet und in der Regel an Server von Google übertragen.
            </p>
            <p className="mb-4">
              Die Nutzung des Google Tags und des Google Ads Conversion-Trackings erfolgt ausschließlich auf Grundlage Ihrer
              Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit über die
              Cookie-Einstellungen widerrufbar.
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie in der Datenschutzerklärung von Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">7. Schriftarten & Icons</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Schriftarten (Fonts)</h3>
            <p className="mb-4">
              Für die Darstellung der Inhalte verwenden wir primär systemnahe Standardschriftarten (z. B. „system-ui“,
              „-apple-system“, „Segoe UI“ oder vergleichbare Schriften). Diese sind bereits auf Ihrem Endgerät installiert,
              sodass hierfür keine Verbindung zu externen Schriftservern aufgebaut werden muss.
            </p>
            <p className="mb-4">
              Sofern wir zusätzliche Webfonts einsetzen (z. B. zur Darstellung spezieller Schriftschnitte), werden diese
              entweder lokal auf unserem Server bereitgestellt oder – sofern ausnahmsweise über externe Anbieter geladen –
              ausschließlich nach Ihrer vorherigen Einwilligung über das Cookie-Banner aktiviert. In diesem Fall können
              insbesondere Ihre IP-Adresse und technische Informationen (Browser, Betriebssystem, Seitenaufrufe) an den
              jeweiligen Anbieter übermittelt werden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Icon-Bibliotheken (z. B. Font Awesome, Remix Icons)</h3>
            <p className="mb-4">
              Zur Darstellung von Symbolen können Icon-Bibliotheken wie z. B. Font Awesome oder Remix Icons eingesetzt
              werden. Soweit diese über ein Content Delivery Network (CDN) eingebunden werden, erfolgt der Abruf der
              entsprechenden Dateien – je nach Konfiguration – ausschließlich nach Ihrer Einwilligung im Cookie-Banner. In
              diesem Fall kann Ihre IP-Adresse an den CDN-Betreiber übertragen werden.
            </p>
            <p className="mb-4">
              Die Nutzung solcher Icon-Bibliotheken erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einer konsistenten und technisch sauberen Darstellung der Website) bzw. auf Grundlage Ihrer
              Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, sofern eine Einwilligung abgefragt wurde.
              Eine erteilte Einwilligung können Sie jederzeit über die Cookie-Einstellungen widerrufen.
            </p>

            <div className="mt-12 pt-8 border-t border-[rgba(15,23,42,0.14)] dark:border-white/10">
              <p className="text-sm opacity-70 text-[color:var(--page-fg)]">Stand: Dezember 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

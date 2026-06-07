export type ServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  heroImage: string;
  forWhom: string[];
  included: string[];
  process: string[];
  faq: Array<{ question: string; answer: string }>;
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: 'bueroreinigung-berlin',
    title: 'Büroreinigung in Berlin',
    eyebrow: 'Büros · Praxen · Arbeitsflächen',
    metaTitle: 'Büroreinigung Berlin | MyClean Service',
    metaDescription:
      'Büroreinigung in Berlin für Unternehmen, Praxen und Arbeitsflächen. MyClean reinigt nach klarer Absprache, festen Intervallen und Objektbeschreibung.',
    summary:
      'MyClean übernimmt die laufende Büroreinigung in Berlin für Unternehmen, Praxen und gewerbliche Flächen. Umfang, Zeiten und Intervalle werden vor Start klar abgestimmt.',
    heroImage: '/images/services/6-720.webp',
    forWhom: ['Büros und Agenturen', 'Praxen und Empfangsbereiche', 'Besprechungsräume', 'Küchen und Sanitärbereiche'],
    included: ['Arbeitsplätze und Oberflächen', 'Böden und Laufwege', 'Sanitärbereiche', 'Küchen und Gemeinschaftsflächen'],
    process: ['Objekt kurz beschreiben', 'Umfang und Intervall abstimmen', 'Angebot erhalten', 'Reinigung planbar starten'],
    related: ['unterhaltsreinigung-berlin', 'praxisreinigung-berlin', 'glasreinigung-berlin'],
    faq: [
      {
        question: 'Wann findet die Büroreinigung statt?',
        answer: 'Die Zeiten werden passend zum Betrieb abgestimmt, zum Beispiel vor Arbeitsbeginn, nach Feierabend oder in vereinbarten Zeitfenstern.'
      },
      {
        question: 'Gibt es feste Reinigungsintervalle?',
        answer: 'Ja. Je nach Nutzung sind tägliche, mehrmals wöchentliche oder wöchentliche Intervalle möglich.'
      }
    ]
  },
  {
    slug: 'unterhaltsreinigung-berlin',
    title: 'Unterhaltsreinigung in Berlin',
    eyebrow: 'Regelmäßig · Planbar · Objektbezogen',
    metaTitle: 'Unterhaltsreinigung Berlin | MyClean Service',
    metaDescription:
      'Unterhaltsreinigung in Berlin für Büros, Praxen, Treppenhäuser und gewerbliche Objekte. Regelmäßige Reinigung nach vereinbartem Leistungsumfang.',
    summary:
      'Die Unterhaltsreinigung sorgt dafür, dass genutzte Flächen dauerhaft sauber, gepflegt und repräsentativ bleiben. MyClean stimmt Leistungsumfang und Rhythmus passend zum Objekt ab.',
    heroImage: '/images/services/5-720.webp',
    forWhom: ['Büros', 'Praxen', 'Wohnanlagen', 'Gewerbliche Flächen'],
    included: ['regelmäßige Bodenpflege', 'Oberflächenreinigung', 'Sanitär- und Küchenbereiche', 'Müll- und Sichtkontrollen nach Absprache'],
    process: ['Flächen und Nutzung klären', 'Reinigungsplan definieren', 'feste Intervalle starten', 'bei Bedarf nachjustieren'],
    related: ['bueroreinigung-berlin', 'treppenhausreinigung-berlin', 'praxisreinigung-berlin'],
    faq: [
      {
        question: 'Was bedeutet Unterhaltsreinigung?',
        answer: 'Unterhaltsreinigung ist die regelmäßig wiederkehrende Reinigung von genutzten Flächen nach einem festgelegten Leistungsumfang.'
      },
      {
        question: 'Kann der Umfang angepasst werden?',
        answer: 'Ja. Wenn sich Nutzung, Frequenz oder Anforderungen ändern, kann der Reinigungsumfang angepasst werden.'
      }
    ]
  },
  {
    slug: 'treppenhausreinigung-berlin',
    title: 'Treppenhausreinigung in Berlin',
    eyebrow: 'Hausverwaltungen · Wohnanlagen · Eingänge',
    metaTitle: 'Treppenhausreinigung Berlin | MyClean Service',
    metaDescription:
      'Treppenhausreinigung in Berlin für Wohnanlagen, Mietshäuser und Hausverwaltungen. Saubere Eingänge, Flure, Treppen und Gemeinschaftsbereiche.',
    summary:
      'MyClean reinigt Treppenhäuser, Eingänge, Flure und Gemeinschaftsbereiche in Berliner Wohnanlagen nach klar abgesprochenem Umfang und Intervall.',
    heroImage: '/images/services/7-720.webp',
    forWhom: ['Hausverwaltungen', 'Mehrfamilienhäuser', 'Wohnanlagen', 'Eigentümergemeinschaften'],
    included: ['Treppen und Podeste', 'Eingangsbereiche', 'Geländer und Handläufe', 'Aufzüge und Gemeinschaftsflächen nach Absprache'],
    process: ['Objekt und Etagen klären', 'Intervall festlegen', 'Leistungsumfang dokumentieren', 'regelmäßige Ausführung starten'],
    related: ['unterhaltsreinigung-berlin', 'sonderreinigung-berlin', 'glasreinigung-berlin'],
    faq: [
      {
        question: 'Wie oft sollte ein Treppenhaus gereinigt werden?',
        answer: 'Das hängt von Bewohnerzahl, Nutzung und Objektgröße ab. Häufig sind wöchentliche oder zweiwöchentliche Intervalle sinnvoll.'
      },
      {
        question: 'Reinigt MyClean auch Eingangsbereiche?',
        answer: 'Ja. Eingänge, Flure, Aufzüge und Gemeinschaftsbereiche können in den Leistungsumfang aufgenommen werden.'
      }
    ]
  },
  {
    slug: 'praxisreinigung-berlin',
    title: 'Praxisreinigung in Berlin',
    eyebrow: 'Praxen · Studios · sensible Bereiche',
    metaTitle: 'Praxisreinigung Berlin | MyClean Service',
    metaDescription:
      'Praxisreinigung in Berlin für medizinische und sensible Bereiche. Reinigung nach klarer Absprache, abgestimmten Zeiten und festen Routinen.',
    summary:
      'Für Praxen und sensible Bereiche braucht Reinigung klare Abläufe und verlässliche Abstimmung. MyClean reinigt Empfang, Behandlungs- und Nebenbereiche nach vereinbartem Plan.',
    heroImage: '/images/services/9-720.webp',
    forWhom: ['Arztpraxen', 'Therapiepraxen', 'Kosmetik- und Studios', 'Empfangs- und Wartebereiche'],
    included: ['Empfang und Wartebereiche', 'Behandlungsräume nach Absprache', 'Sanitärbereiche', 'Böden und häufig genutzte Oberflächen'],
    process: ['Anforderungen klären', 'Zeitfenster abstimmen', 'Leistungsplan erstellen', 'regelmäßige Reinigung starten'],
    related: ['bueroreinigung-berlin', 'unterhaltsreinigung-berlin', 'sonderreinigung-berlin'],
    faq: [
      {
        question: 'Reinigt MyClean außerhalb der Öffnungszeiten?',
        answer: 'Das kann je nach Praxis und Zugangslösung abgestimmt werden.'
      },
      {
        question: 'Werden besondere Anforderungen berücksichtigt?',
        answer: 'Ja. Anforderungen werden vor Start besprochen und im Leistungsumfang festgehalten.'
      }
    ]
  },
  {
    slug: 'glasreinigung-berlin',
    title: 'Glasreinigung in Berlin',
    eyebrow: 'Fenster · Glasflächen · Eingänge',
    metaTitle: 'Glasreinigung Berlin | MyClean Service',
    metaDescription:
      'Glasreinigung in Berlin für Fenster, Glasflächen, Eingänge und gewerbliche Objekte. Einmalig oder in regelmäßigen Intervallen nach Absprache.',
    summary:
      'MyClean übernimmt Glas- und Fensterreinigung für Büros, Eingangsbereiche und Objekte in Berlin. Die Ausführung erfolgt nach Objekt, Zugänglichkeit und vereinbartem Umfang.',
    heroImage: '/images/services/8-720.webp',
    forWhom: ['Büros', 'Gewerbeflächen', 'Eingangsbereiche', 'Objekte mit regelmäßiger Glasreinigung'],
    included: ['Fensterflächen', 'Glasflächen im Eingangsbereich', 'Rahmen nach Absprache', 'regelmäßige oder einmalige Reinigung'],
    process: ['Glasflächen beschreiben', 'Zugang und Umfang klären', 'Angebot abstimmen', 'Termin einplanen'],
    related: ['bueroreinigung-berlin', 'unterhaltsreinigung-berlin', 'sonderreinigung-berlin'],
    faq: [
      {
        question: 'Ist regelmäßige Glasreinigung möglich?',
        answer: 'Ja. Die Glasreinigung kann einmalig oder regelmäßig in vereinbarten Intervallen erfolgen.'
      },
      {
        question: 'Wovon hängt der Preis ab?',
        answer: 'Entscheidend sind Fläche, Zugänglichkeit, Verschmutzungsgrad und gewünschtes Intervall.'
      }
    ]
  },
  {
    slug: 'sonderreinigung-berlin',
    title: 'Sonderreinigung in Berlin',
    eyebrow: 'Grundreinigung · Bauendreinigung · Extra-Einsatz',
    metaTitle: 'Sonderreinigung Berlin | MyClean Service',
    metaDescription:
      'Sonderreinigung in Berlin für einmalige, intensive oder besondere Reinigungsaufgaben. MyClean klärt Umfang, Objekt und Termin individuell.',
    summary:
      'Wenn eine Fläche mehr braucht als die laufende Reinigung, plant MyClean Sonderreinigungen nach Objektbeschreibung, Besichtigung und abgestimmtem Leistungsumfang.',
    heroImage: '/images/services/10-720.webp',
    forWhom: ['einmalige Grundreinigung', 'Bauendreinigung', 'stärker genutzte Flächen', 'besondere Reinigungsanlässe'],
    included: ['individuelle Objektprüfung', 'abgestimmter Leistungsumfang', 'Termin nach Verfügbarkeit', 'Kombination mit laufender Reinigung möglich'],
    process: ['Anlass beschreiben', 'Objekt prüfen', 'Leistungsumfang festlegen', 'Termin und Ausführung planen'],
    related: ['unterhaltsreinigung-berlin', 'treppenhausreinigung-berlin', 'glasreinigung-berlin'],
    faq: [
      {
        question: 'Wann ist eine Sonderreinigung sinnvoll?',
        answer: 'Wenn eine Fläche einmalig intensiver gereinigt werden soll, zum Beispiel nach Arbeiten, Umzug, stärkerer Nutzung oder vor Übergaben.'
      },
      {
        question: 'Ist eine Besichtigung nötig?',
        answer: 'Je nach Umfang ist eine Besichtigung oder eine genaue Objektbeschreibung sinnvoll, damit das Angebot realistisch ist.'
      }
    ]
  }
];

export const getServicePage = (slug: string | undefined) =>
  servicePages.find((service) => service.slug === slug);

import type { ServicePage } from './servicePages';

export type Industry = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  needs: string[];
  services: ServicePage['slug'][];
};

export type MagazinePost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  heroImage: string;
  relatedServices: ServicePage['slug'][];
  sections: Array<{ heading: string; body: string }>;
  faq: Array<{ question: string; answer: string }>;
};

export const industries: Industry[] = [
  {
    slug: 'bueros-agenturen',
    title: 'Büros, Agenturen und Arbeitsflächen',
    eyebrow: 'Büro & Gewerbe',
    summary:
      'Planbare Büroreinigung für Flächen, die täglich genutzt werden: Arbeitsplätze, Besprechungsräume, Küchen, Sanitärbereiche und Laufwege.',
    image: '/images/services/6-720.webp',
    needs: ['Reinigung außerhalb der Arbeitszeiten', 'klare Zonen und feste Intervalle', 'repräsentative Flächen für Team und Kunden'],
    services: ['bueroreinigung-berlin', 'unterhaltsreinigung-berlin', 'glasreinigung-berlin']
  },
  {
    slug: 'praxen-studios',
    title: 'Praxen, Studios und sensible Bereiche',
    eyebrow: 'Hygiene & Routine',
    summary:
      'Reinigung mit klaren Abläufen für Empfang, Wartebereiche, Behandlungsräume und Sanitärflächen nach abgestimmtem Leistungsumfang.',
    image: '/images/services/9-720.webp',
    needs: ['verlässliche Zeitfenster', 'sorgfältige Oberflächenroutinen', 'diskrete Ausführung im laufenden Betrieb'],
    services: ['praxisreinigung-berlin', 'unterhaltsreinigung-berlin', 'sonderreinigung-berlin']
  },
  {
    slug: 'hausverwaltungen-wohnen',
    title: 'Hausverwaltungen und Wohnanlagen',
    eyebrow: 'Treppenhaus & Objektpflege',
    summary:
      'Treppenhäuser, Eingänge, Flure, Aufzüge und Gemeinschaftsbereiche mit nachvollziehbaren Intervallen und Objektbezug.',
    image: '/images/services/7-720.webp',
    needs: ['regelmäßige Treppenhauspflege', 'saubere Eingänge und Handläufe', 'klare Abstimmung mit Verwaltung oder Eigentümern'],
    services: ['treppenhausreinigung-berlin', 'glasreinigung-berlin', 'sonderreinigung-berlin']
  },
  {
    slug: 'gewerbe-und-sonderflaechen',
    title: 'Gewerbe- und Sonderflächen',
    eyebrow: 'Sonderfälle & Turnus',
    summary:
      'Für Flächen mit besonderer Nutzung oder einmaligem Anlass: Grundreinigung, Bauendreinigung, Extra-Einsätze und Turnuspflege.',
    image: '/images/services/10-720.webp',
    needs: ['Objektprüfung vor Start', 'realistischer Leistungsumfang', 'Kombination aus einmaligem Einsatz und laufender Betreuung'],
    services: ['sonderreinigung-berlin', 'unterhaltsreinigung-berlin', 'glasreinigung-berlin']
  }
];

export const magazinePosts: MagazinePost[] = [
  {
    slug: 'bueroreinigung-berlin-leistungen',
    title: 'Büroreinigung in Berlin: Welche Leistungen sind wirklich sinnvoll?',
    category: 'Büro & Gewerbe',
    date: '2026-06-07',
    readTime: '5 Min.',
    description:
      'Welche Aufgaben in eine Büroreinigung gehören, wie Intervalle geplant werden und woran Unternehmen ein sauberes Angebot erkennen.',
    heroImage: '/images/services/6-720.webp',
    relatedServices: ['bueroreinigung-berlin', 'unterhaltsreinigung-berlin', 'glasreinigung-berlin'],
    sections: [
      {
        heading: 'Nicht jede Fläche braucht denselben Rhythmus',
        body:
          'Ein gut geplanter Reinigungsumfang trennt stark genutzte Bereiche von Nebenflächen. Sanitärbereiche, Küchen und Laufwege brauchen meist andere Intervalle als Besprechungsräume oder Lagerzonen.'
      },
      {
        heading: 'Leistungsumfang sichtbar machen',
        body:
          'Für Unternehmen ist wichtig, dass klar beschrieben wird, welche Aufgaben regelmäßig erfolgen und welche Leistungen nach Bedarf ergänzt werden. Das verhindert Missverständnisse und macht Angebote vergleichbar.'
      },
      {
        heading: 'Besichtigung vor pauschaler Zusage',
        body:
          'Gerade bei Büros in Berlin hängen Aufwand und Preis von Fläche, Nutzung, Zugänglichkeit und gewünschtem Zeitfenster ab. Eine kurze Objektklärung macht den Start realistischer.'
      }
    ],
    faq: [
      {
        question: 'Wie oft sollte ein Büro gereinigt werden?',
        answer: 'Das hängt von Teamgröße, Nutzung, Kundenverkehr und Sanitärbereichen ab. Häufig sind mehrere Einsätze pro Woche sinnvoll.'
      },
      {
        question: 'Kann Glasreinigung ergänzt werden?',
        answer: 'Ja. Glas- und Fensterreinigung kann als fester Turnus oder als Zusatztermin eingeplant werden.'
      }
    ]
  },
  {
    slug: 'unterhaltsreinigung-reinigungsplan',
    title: 'Unterhaltsreinigung: Was gehört in einen guten Reinigungsplan?',
    category: 'Hygiene & Standards',
    date: '2026-06-07',
    readTime: '4 Min.',
    description:
      'Ein Reinigungsplan macht Zuständigkeiten, Intervalle und Flächen transparent. So bleibt Reinigung planbar statt spontan.',
    heroImage: '/images/services/5-720.webp',
    relatedServices: ['unterhaltsreinigung-berlin', 'bueroreinigung-berlin', 'praxisreinigung-berlin'],
    sections: [
      {
        heading: 'Flächen nach Nutzung sortieren',
        body:
          'Ein Plan sollte nicht nur Räume auflisten, sondern Nutzungsintensität und Priorität festhalten. So werden stark frequentierte Bereiche zuverlässig betreut.'
      },
      {
        heading: 'Regelaufgaben und Zusatzleistungen trennen',
        body:
          'Regelmäßige Aufgaben gehören in den festen Umfang. Sonderleistungen wie Grundreinigung, Glasflächen oder Extra-Termine sollten separat beschrieben werden.'
      },
      {
        heading: 'Nachjustierung einplanen',
        body:
          'Gute Unterhaltsreinigung bleibt flexibel. Wenn sich Nutzung, Personalzahl oder Öffnungszeiten ändern, sollte der Plan angepasst werden.'
      }
    ],
    faq: [
      {
        question: 'Ist ein Reinigungsplan für kleine Büros nötig?',
        answer: 'Ja, auch kleine Flächen profitieren von klaren Aufgaben und Intervallen, weil Erwartungen eindeutig werden.'
      },
      {
        question: 'Wer legt den Umfang fest?',
        answer: 'Der Umfang wird nach Objekt, Nutzung und gewünschtem Ergebnis gemeinsam abgestimmt.'
      }
    ]
  },
  {
    slug: 'treppenhausreinigung-wie-oft',
    title: 'Wie oft sollte ein Treppenhaus gereinigt werden?',
    category: 'Treppenhaus & Wohnimmobilien',
    date: '2026-06-07',
    readTime: '4 Min.',
    description:
      'Wohnanlage, Bewohnerzahl, Wetter und Nutzung bestimmen den passenden Turnus für Treppenhausreinigung in Berlin.',
    heroImage: '/images/services/7-720.webp',
    relatedServices: ['treppenhausreinigung-berlin', 'sonderreinigung-berlin', 'glasreinigung-berlin'],
    sections: [
      {
        heading: 'Nutzung entscheidet über den Turnus',
        body:
          'Ein kleines Haus mit wenigen Parteien braucht meist weniger Einsätze als eine stark genutzte Wohnanlage mit Aufzug, viel Laufverkehr oder Gewerbe im Erdgeschoss.'
      },
      {
        heading: 'Eingänge und Handläufe nicht vergessen',
        body:
          'Treppenhausreinigung endet nicht bei Stufen. Eingangsbereiche, Geländer, Aufzüge und Gemeinschaftsflächen prägen den ersten Eindruck des Objekts.'
      },
      {
        heading: 'Saisonal nachsteuern',
        body:
          'Im Winter oder bei schlechtem Wetter kann ein anderer Rhythmus sinnvoll sein. Ein guter Plan erlaubt solche Anpassungen.'
      }
    ],
    faq: [
      {
        question: 'Ist wöchentliche Reinigung Standard?',
        answer: 'Wöchentlich ist häufig sinnvoll, aber nicht automatisch für jedes Objekt richtig. Nutzung und Zustand entscheiden.'
      },
      {
        question: 'Kann MyClean auch Aufzüge reinigen?',
        answer: 'Ja, Aufzüge und Gemeinschaftsbereiche können nach Absprache Teil des Leistungsumfangs sein.'
      }
    ]
  },
  {
    slug: 'praxisreinigung-hygieneanforderungen',
    title: 'Praxisreinigung: Hygieneanforderungen im Alltag einfach erklärt',
    category: 'Praxen & Gesundheitsbereiche',
    date: '2026-06-07',
    readTime: '5 Min.',
    description:
      'Was Praxen bei Reinigungsabläufen, Zeitfenstern und sensiblen Bereichen beachten sollten, ohne unnötig kompliziert zu planen.',
    heroImage: '/images/services/9-720.webp',
    relatedServices: ['praxisreinigung-berlin', 'unterhaltsreinigung-berlin', 'sonderreinigung-berlin'],
    sections: [
      {
        heading: 'Abläufe müssen eindeutig sein',
        body:
          'In Praxen ist wichtig, dass Bereiche, Reihenfolge und Zeiten klar abgestimmt werden. Das schützt den Praxisbetrieb und verhindert Lücken im Alltag.'
      },
      {
        heading: 'Empfang, Wartezimmer und Sanitärbereiche',
        body:
          'Diese Bereiche sind sichtbar und stark genutzt. Sie sollten im Reinigungsplan klar priorisiert werden, damit Patienten und Team eine gepflegte Umgebung vorfinden.'
      },
      {
        heading: 'Keine pauschalen Versprechen',
        body:
          'Jede Praxis hat eigene Anforderungen. Deshalb sollte der konkrete Umfang vor Start besprochen und dokumentiert werden.'
      }
    ],
    faq: [
      {
        question: 'Reinigt MyClean außerhalb der Öffnungszeiten?',
        answer: 'Das kann je nach Praxis und Zugangslösung abgestimmt werden.'
      },
      {
        question: 'Gibt es feste Routinen?',
        answer: 'Ja. Der Leistungsumfang wird als wiederkehrender Ablauf festgelegt und bei Bedarf angepasst.'
      }
    ]
  }
];

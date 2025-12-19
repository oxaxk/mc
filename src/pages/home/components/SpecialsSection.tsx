import React, { useState } from 'react';
import Button from '../../../components/base/Button';

const faqs = [
  {
    question: 'Welche Objekte reinigt ihr?',
    answer:
      'Wir sind auf die regelmäßige Reinigung von Büros, Praxen, Treppenhäusern, gewerblichen Flächen und Wohnanlagen in Berlin und Umgebung spezialisiert. Zusätzlich übernehmen wir Glas- und Sonderreinigungen nach Absprache.',
  },
  {
    question: 'Wie läuft die Anfrage ab?',
    answer:
      'Sie melden sich per Telefon, E-Mail oder über das Kontaktformular und schildern kurz, welche Flächen gereinigt werden sollen und in welchem Rhythmus. Auf dieser Basis vereinbaren wir eine Besichtigung oder klären die Details digital.',
  },
  {
    question: 'In welchen Intervallen bietet ihr Reinigung an?',
    answer:
      'Je nach Objekt und Nutzung sind tägliche, mehrmals wöchentliche, wöchentliche oder zweiwöchentliche Intervalle sinnvoll. Wir richten uns nach Ihrem Bedarf und passen die Intervalle bei Bedarf flexibel an.',
  },
  {
    question: 'Wie setzt sich der Preis zusammen?',
    answer:
      'Die Kosten hängen von der Größe der Flächen, dem Verschmutzungsgrad, der gewünschten Leistungsart und der Reinigungsfrequenz ab. Nach Besichtigung oder genauer Beschreibung erhalten Sie ein transparentes, nachvollziehbares Angebot.',
  },
];

export default function SpecialsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.22em] uppercase mb-3 text-[color:var(--accent-solid)]">
              Fragen &amp; Antworten
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-0 text-[color:var(--page-fg)]">
              FAQ zum Reinigungsservice myclean
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed max-w-xl text-[color:var(--page-fg)]/80">
            Hier beantworten wir die wichtigsten Fragen rund um den Reinigungsservice myclean in Berlin und Umgebung.
            Wenn etwas offen bleibt, melden Sie sich einfach kurz bei uns.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-3xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] shadow-[0_12px_30px_rgba(15,23,42,0.08)] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
                >
                  <span className="text-sm md:text-base font-medium text-[color:var(--page-fg)]">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(15,23,42,0.14)] dark:border-white/12 bg-[var(--card-glass)] text-[color:var(--page-fg)] text-sm transition-transform duration-200 ${
                      isActive ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={
                    `grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none border-t ` +
                    (isActive
                      ? 'opacity-100 grid-rows-[1fr] border-[rgba(15,23,42,0.14)] dark:border-white/10'
                      : 'opacity-0 grid-rows-[0fr] border-transparent')
                  }
                  aria-hidden={!isActive}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-4 md:px-6 md:pb-5">
                      <p className="text-sm md:text-base leading-relaxed text-[color:var(--page-fg)]/80">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-12">
          <div className="rounded-3xl bg-[var(--card-glass)] border border-[rgba(15,23,42,0.14)] dark:border-white/10 px-5 py-5 md:px-6 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <p className="text-sm md:text-base text-[color:var(--page-fg)]/85">
              Nicht die passende Antwort gefunden? Schicken Sie uns Ihre Anfrage oder rufen Sie direkt an.
            </p>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Anfrage & Kurzbeschreibung',
      description:
        'Sie melden sich per Telefon, E-Mail oder Kontaktformular und schildern kurz, um welche Fläche es geht – z. B. Büro, Praxis, Treppenhaus oder Objekt.',
      icon: 'ri-chat-3-line'
    },
    {
      number: '02',
      title: 'Besichtigung & Angebot',
      description:
        'Wir verschaffen uns einen Überblick vor Ort oder digital, besprechen Reinigungsumfang, Intervalle und besondere Anforderungen und erstellen ein transparentes Angebot.',
      icon: 'ri-file-list-3-line'
    },
    {
      number: '03',
      title: 'Start der Reinigung',
      description:
        'Nach Freigabe planen wir feste Touren, definieren Zuständigkeiten und starten die regelmäßige Reinigung – abgestimmt auf Ihre Öffnungs- und Nutzungszeiten.',
      icon: 'ri-sparkling-2-line'
    },
    {
      number: '04',
      title: 'Laufende Betreuung',
      description:
        'Wir bleiben Ihr fester Ansprechpartner, passen Intervalle bei Bedarf an und sorgen durch regelmäßige Kontrollen dafür, dass die Qualität langfristig stimmt.',
      icon: 'ri-refresh-line'
    }
  ];

  return (
    <section className="py-24 bg-[var(--page-bg)] text-[color:var(--page-fg)] scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight text-[color:var(--page-fg)]">
              So läuft die Zusammenarbeit mit myclean
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[color:var(--page-fg)]/80">
              Von der ersten Anfrage bis zur laufenden Betreuung – in vier klaren Schritten setzen wir Ihre
              Reinigungsleistungen für Büros, Praxen, Treppenhäuser und Objekte in Berlin und Umgebung auf.
            </p>
          </div>

          <div className="hidden lg:block text-right text-xs tracking-[0.22em] uppercase text-[color:var(--page-fg)]/60">
            <span>
              Ablauf · Schritt für Schritt
            </span>
          </div>
        </div>

        <div className="relative mt-14">
          {/* Horizontale Linie hinter den Steps (nur Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[2%] right-[2%] h-px bg-[rgba(var(--accent),0.22)]" />

          <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="group flex flex-col items-stretch text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-2xl bg-[color:var(--accent-solid)] border border-[rgba(var(--accent),0.55)] flex items-center justify-center shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
                      <i className={`${step.icon} text-lg text-[#F9FAFB]`} />
                    </div>
                    <span
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--page-bg)] border border-[rgba(var(--accent),0.55)] text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[color:var(--page-fg)]"
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase text-[color:var(--page-fg)]">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-[color:var(--page-fg)]/80">
                  {step.description}
                </p>

                {/* Mobile: Vertikale Verbindungslinie */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 w-px h-10 bg-[rgba(var(--accent),0.28)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

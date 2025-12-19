import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          {/* Intro-Text links */}
          <div>
            <p className="text-xs tracking-[0.22em] uppercase mb-4 text-[color:var(--accent-solid)]">
              Über myclean
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-[color:var(--page-fg)]">
              Ihr Reinigungsservice für Berlin &amp; Umgebung
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[color:var(--page-fg)]/80 max-w-xl">
              myclean ist ein spezialisierter Reinigungsservice aus Berlin. Wir kümmern uns um die
              regelmäßige Unterhaltsreinigung, Büro- und Praxisreinigung, Treppenhausreinigung sowie
              Glas- und Sonderreinigung – zuverlässig, gründlich und mit klaren Absprachen.
            </p>
          </div>

          {/* Feature-Liste rechts */}
          <div className="space-y-5 lg:space-y-6">
            <div className="relative rounded-3xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] px-6 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-none md:backdrop-blur-sm">
              <div className="absolute -left-3 top-8 hidden sm:block h-10 w-[3px] rounded-full bg-[#1C5BBF]" />
              <h3 className="text-sm md:text-base font-medium tracking-[0.18em] uppercase mb-3 text-[color:var(--page-fg)]">
                Zuverlässige Unterhaltsreinigung
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[color:var(--page-fg)]/80">
                Regelmäßige Reinigung von Büros, Praxen und Treppenhäusern nach festen Intervallen –
                damit deine Flächen dauerhaft sauber, gepflegt und repräsentativ bleiben.
              </p>
            </div>

            <div className="relative rounded-3xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] px-6 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-none md:backdrop-blur-sm">
              <div className="absolute -left-3 top-8 hidden sm:block h-10 w-[3px] rounded-full bg-[#1C5BBF]" />
              <h3 className="text-sm md:text-base font-medium tracking-[0.18em] uppercase mb-3 text-[color:var(--page-fg)]">
                Berlin &amp; Umgebung
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[color:var(--page-fg)]/80">
                Touren in allen Berliner Bezirken und im direkten Umland – von Mietshäusern über Büroflächen
                bis hin zu gewerblichen Objekten und Eingangsbereichen.
              </p>
            </div>

            <div className="relative rounded-3xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] px-6 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-none md:backdrop-blur-sm">
              <div className="absolute -left-3 top-8 hidden sm:block h-10 w-[3px] rounded-full bg-[#1C5BBF]" />
              <h3 className="text-sm md:text-base font-medium tracking-[0.18em] uppercase mb-3 text-[color:var(--page-fg)]">
                Transparent &amp; planbar
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[color:var(--page-fg)]/80">
                Klare Angebote, feste Intervalle und transparente Konditionen – ohne versteckte Kosten.
                Auf Wunsch mit detaillierter Aufstellung für Verwaltung, Verwaltung oder Steuerbüro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
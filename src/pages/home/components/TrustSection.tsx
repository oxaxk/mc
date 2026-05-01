import { BadgeCheck, ClipboardCheck, ShieldCheck, Timer } from 'lucide-react';
import Button from '../../../components/base/Button';

const proofPoints = [
  { value: 'Plan', label: 'Reinigungsumfang und Intervalle werden vor Start schriftlich abgestimmt' },
  { value: 'Kontakt', label: 'direkte Abstimmung per Telefon, E-Mail oder Kontaktformular' },
  { value: 'Objekt', label: 'Angebot nach Besichtigung oder konkreter Objektbeschreibung' },
  { value: 'Routine', label: 'feste Abläufe für Büro-, Praxis- und Treppenhausreinigung' },
];

const segments = [
  { icon: ClipboardCheck, title: 'Büros', text: 'Arbeitsplätze, Meetingräume, Küchen und Sanitärbereiche nach Checkliste.' },
  { icon: ShieldCheck, title: 'Praxen', text: 'Planbare Reinigung sensibler Bereiche mit festen Hygiene-Routinen.' },
  { icon: BadgeCheck, title: 'Hausverwaltungen', text: 'Treppenhäuser, Eingänge, Aufzüge und Gemeinschaftsflächen.' },
];

export default function TrustSection() {
  return (
    <section className="border-y border-[rgba(15,23,42,0.08)] bg-[rgba(var(--accent),0.05)] py-14 text-[color:var(--page-fg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase mb-3 text-[color:var(--accent-solid)]">
              Vertrauen vor dem ersten Termin
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              Für Unternehmen, die Reinigung nicht jede Woche neu kontrollieren wollen.
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-[color:var(--page-fg)]/78">
              MyClean arbeitet mit festen Zuständigkeiten, dokumentierten Abläufen und direkter Erreichbarkeit.
              Der Einstieg ist bewusst einfach: kurze Anfrage, Objekt prüfen, klares Angebot.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="#kontakt" className="gap-2">
                <Timer className="h-5 w-5" aria-hidden="true" />
                Angebot anstoßen
              </Button>
              <Button href="tel:+4915217782301" variant="secondary">
                Direkt sprechen
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-3">
              {proofPoints.map((item) => (
                <div key={item.value} className="rounded-2xl border border-[rgba(var(--accent),0.18)] bg-[var(--card-glass)] px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                  <p className="text-2xl font-semibold text-[color:var(--page-fg)]">{item.value}</p>
                  <p className="mt-1 text-xs sm:text-sm leading-snug text-[color:var(--page-fg)]/70">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {segments.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-[rgba(var(--accent),0.18)] bg-[var(--card-glass)] px-4 py-4">
                    <Icon className="h-5 w-5 text-[color:var(--accent-solid)]" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[color:var(--page-fg)]/70">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

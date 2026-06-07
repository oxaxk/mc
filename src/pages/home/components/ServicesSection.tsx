import {
  ArrowDownUp,
  Building2,
  ClipboardPen,
  Home,
  Hospital,
  Phone,
  Sparkles,
  SquareStack,
} from 'lucide-react';
import Button from '../../../components/base/Button';
import { servicePages } from '../../../data/servicePages';

const iconBySlug = {
  'unterhaltsreinigung-berlin': Home,
  'bueroreinigung-berlin': Building2,
  'treppenhausreinigung-berlin': ArrowDownUp,
  'glasreinigung-berlin': SquareStack,
  'praxisreinigung-berlin': Hospital,
  'sonderreinigung-berlin': Sparkles,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-[var(--page-bg)] text-[color:var(--page-fg)] scroll-mt-28 md:scroll-mt-32 overflow-x-clip"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-6xl lg:mb-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs tracking-[0.22em] uppercase text-[color:var(--accent-solid)]">
                Leistungen &amp; Reinigungsbereiche
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight text-[color:var(--page-fg)] sm:text-4xl lg:text-5xl">
                Reinigungsleistungen in Berlin, sauber geplant statt improvisiert.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--page-fg)]/80 sm:text-base lg:text-right">
              Unterhaltsreinigung, Büro- und Praxisreinigung, Treppenhaus- sowie Glasreinigung mit festen
              Intervallen, klaren Zuständigkeiten und einem Leistungsumfang, der zum Objekt passt.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[rgba(15,23,42,0.12)] bg-[var(--section-glass)] p-3 shadow-[0_22px_60px_rgba(15,23,42,0.14)] sm:p-5 lg:p-6">
          <div className="grid min-w-0 auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {servicePages.map((svc) => {
              const Icon = iconBySlug[svc.slug as keyof typeof iconBySlug] ?? Sparkles;

              return (
                <article
                  key={svc.slug}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.65rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] shadow-[0_18px_46px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent),0.42)] hover:shadow-[0_28px_70px_rgba(15,23,42,0.16)]"
                >
                  <a href={`/leistungen/${svc.slug}`} className="flex h-full flex-col focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(var(--accent),0.35)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={svc.heroImage}
                        alt={svc.title}
                        width={720}
                        height={520}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/42 via-transparent to-transparent" />
                    </div>
                    <div className="flex min-h-[17rem] flex-1 flex-col p-5 sm:p-6">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(var(--accent),0.35)] bg-[rgba(var(--accent),0.14)]">
                          <Icon className="h-5 w-5 text-[color:var(--accent-solid)]" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-solid)]">
                            {svc.eyebrow}
                          </p>
                          <h3 className="text-pretty break-words text-lg font-semibold leading-snug text-[color:var(--page-fg)] [overflow-wrap:anywhere]">
                            {svc.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 line-clamp-4 text-sm leading-7 text-[color:var(--page-fg)]/78">
                        {svc.summary}
                      </p>
                      <span className="mt-auto inline-flex pt-5 text-sm font-semibold text-[color:var(--accent-solid)]">
                        Mehr zur Leistung
                      </span>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="/leistungen"
            size="lg"
            className="w-fit min-w-[12rem] justify-center gap-2 px-6 py-3.5 text-[0.75rem] uppercase tracking-[0.18em] sm:text-sm"
          >
            <ClipboardPen className="h-5 w-5" aria-hidden="true" />
            Alle Leistungen
          </Button>
          <Button
            href="tel:+4915217782301"
            size="lg"
            className="w-fit min-w-[12rem] justify-center gap-2 px-6 py-3.5 text-[0.75rem] uppercase tracking-[0.18em] sm:text-sm"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Jetzt anrufen
          </Button>
        </div>
      </div>
    </section>
  );
}

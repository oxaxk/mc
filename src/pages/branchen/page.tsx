import { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/base/Button';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { industries } from '../../data/siteContent';
import { getServicePage } from '../../data/servicePages';
import { setPageSeo } from '../../lib/seo';
import StickyCTA from '../home/components/StickyCTA';

export default function BranchenPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Reinigung für Branchen in Berlin | MyClean Service',
      description:
        'MyClean Service für Büros, Praxen, Hausverwaltungen, Wohnanlagen und Gewerbeflächen in Berlin mit objektbezogenen Reinigungsplänen.',
      path: '/branchen'
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] pb-20 text-[color:var(--page-fg)] md:pb-0">
      <Header />
      <main>
        <section className="pt-36 pb-16 md:pt-44">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[color:var(--accent-solid)]">
                Branchen & Objektarten
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Für jede Objektart der passende Reinigungsplan.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--page-fg)]/80 sm:text-lg">
                Nicht jedes Objekt braucht dieselbe Reinigung. MyClean trennt Nutzung, Frequenz, sensible
                Bereiche und Zusatzleistungen, damit Angebote realistisch und Abläufe nachvollziehbar bleiben.
              </p>
            </div>

            <div className="mt-12 grid gap-6">
              {industries.map((industry, index) => (
                <article
                  key={industry.slug}
                  className="grid overflow-hidden rounded-[2rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] shadow-[0_22px_60px_rgba(15,23,42,0.12)] lg:grid-cols-[0.8fr_1.2fr]"
                >
                  <div className={`relative aspect-[16/10] overflow-hidden bg-[rgba(var(--accent),0.08)] ${index % 2 ? 'lg:order-2' : ''}`}>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      width={720}
                      height={520}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-solid)]">
                      {industry.eyebrow}
                    </p>
                    <h2 className="mt-3 break-words text-3xl font-semibold leading-tight [overflow-wrap:anywhere]">{industry.title}</h2>
                    <p className="mt-4 text-base leading-8 text-[color:var(--page-fg)]/78">{industry.summary}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {industry.needs.map((need) => (
                        <span key={need} className="flex gap-2 text-sm leading-6 text-[color:var(--page-fg)]/78">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-solid)]" />
                          {need}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {industry.services.map((slug) => {
                        const service = getServicePage(slug);
                        if (!service) return null;
                        return (
                          <Link
                            key={slug}
                            to={`/leistungen/${slug}`}
                            className="inline-flex max-w-full items-center gap-2 rounded-full border border-[rgba(var(--accent),0.26)] bg-[rgba(var(--accent),0.08)] px-4 py-2 text-sm font-semibold text-[color:var(--page-fg)]/82"
                          >
                            {service.title.replace(' in Berlin', '')}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border border-[rgba(var(--accent),0.26)] bg-[rgba(var(--accent),0.08)] p-6 text-center sm:p-8">
              <h2 className="text-2xl font-semibold">Objekt passt nicht in eine Kategorie?</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[color:var(--page-fg)]/78">
                Dann beschreiben Sie kurz Fläche, Nutzung und gewünschte Intervalle. MyClean prüft den passenden Ablauf.
              </p>
              <Button href="/kontakt" className="mt-6 justify-center">
                Anfrage starten
              </Button>
            </div>
          </div>
        </section>
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
}

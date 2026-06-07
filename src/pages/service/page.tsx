import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CalendarCheck, CheckCircle2, Phone } from 'lucide-react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import StickyCTA from '../home/components/StickyCTA';
import { getServicePage, servicePages } from '../../data/servicePages';

const baseUrl = 'https://www.myclean-service.de';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServicePage(slug);

  useEffect(() => {
    if (!service) return;

    document.title = service.metaTitle;

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = service.metaDescription;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${baseUrl}/leistungen/${service.slug}`;
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const relatedServices = service.related
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'CleaningService',
      name: 'MyClean Service',
      telephone: '+49 152 17782301',
      areaServed: 'Berlin'
    },
    areaServed: {
      '@type': 'City',
      name: 'Berlin'
    },
    url: `${baseUrl}/leistungen/${service.slug}`,
    description: service.summary
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <Header />
      <main>
        <section className="pt-36 md:pt-44 pb-16 bg-[var(--page-bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(var(--accent),0.24)] shadow-[0_28px_80px_rgba(15,23,42,0.18)] bg-[rgba(var(--accent),0.08)]">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="h-[340px] md:h-[520px] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div>
                <p className="text-xs tracking-[0.22em] uppercase mb-4 text-[color:var(--accent-solid)]">
                  {service.eyebrow}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] font-semibold leading-tight text-[color:var(--page-fg)]">
                  {service.title}
                </h1>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-[color:var(--page-fg)]/85 max-w-2xl">
                  {service.summary}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="/#kontakt" size="lg" className="gap-2 justify-center text-sm md:text-base px-7 py-4">
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    Angebot anfragen
                  </Button>
                  <Button href="tel:+4915217782301" variant="secondary" size="lg" className="gap-2 justify-center text-sm md:text-base px-7 py-4">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Direkt anrufen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--page-bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-3">
            {[
              ['Geeignet für', service.forWhom],
              ['Leistungsumfang', service.included],
              ['Ablauf', service.process]
            ].map(([title, items]) => (
              <article key={title as string} className="rounded-[1.75rem] border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] p-6 shadow-[0_18px_48px_rgba(15,23,42,0.10)]">
                <h2 className="text-xl font-semibold text-[color:var(--page-fg)]">{title as string}</h2>
                <ul className="mt-5 space-y-3">
                  {(items as string[]).map((item) => (
                    <li key={item} className="flex gap-3 text-sm md:text-base leading-relaxed text-[color:var(--page-fg)]/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent-solid)]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[var(--section-glass)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase mb-3 text-[color:var(--accent-solid)]">
                  Fragen zur Leistung
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--page-fg)]">
                  Häufige Fragen zu {service.title}
                </h2>
              </div>
              <div className="space-y-4">
                {service.faq.map((item) => (
                  <article key={item.question} className="rounded-3xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] p-6">
                    <h3 className="text-lg font-semibold text-[color:var(--page-fg)]">{item.question}</h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-[color:var(--page-fg)]/80">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--page-bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase mb-3 text-[color:var(--accent-solid)]">
                  Weitere Reinigungsleistungen
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--page-fg)]">
                  Passende Leistungen
                </h2>
              </div>
              <Button href="/#kontakt" variant="secondary" className="gap-2">
                Besichtigung anfragen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link
                  key={related!.slug}
                  to={`/leistungen/${related!.slug}`}
                  className="rounded-3xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 bg-[var(--card-glass)] p-5 transition-all hover:-translate-y-1 hover:border-[rgba(var(--accent),0.45)]"
                >
                  <span className="text-xs tracking-[0.18em] uppercase text-[color:var(--accent-solid)]">MyClean Service</span>
                  <h3 className="mt-3 text-lg font-semibold text-[color:var(--page-fg)]">{related!.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--page-fg)]/75">{related!.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
}

export { servicePages };

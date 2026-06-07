import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ClipboardPen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/base/Button';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { servicePages } from '../../data/servicePages';
import { setPageSeo } from '../../lib/seo';
import StickyCTA from '../home/components/StickyCTA';

export default function LeistungenPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Reinigungsleistungen Berlin | MyClean Service',
      description:
        'Alle Reinigungsleistungen von MyClean Service in Berlin: Büroreinigung, Unterhaltsreinigung, Treppenhausreinigung, Praxisreinigung, Glasreinigung und Sonderreinigung.',
      path: '/leistungen',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Reinigungsleistungen MyClean Service',
        itemListElement: servicePages.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.title,
          url: `https://www.myclean-service.de/leistungen/${service.slug}`
        }))
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] pb-20 text-[color:var(--page-fg)] md:pb-0">
      <Header />
      <main>
        <section className="pt-36 pb-16 md:pt-44">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[color:var(--accent-solid)]">
                  Leistungen in Berlin
                </p>
                <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Reinigung als System: klar geplant, sauber ausgeführt.
                </h1>
              </div>
              <div className="rounded-[2rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
                <p className="text-base leading-8 text-[color:var(--page-fg)]/80">
                  MyClean bündelt alle relevanten Reinigungsbereiche für Büros, Praxen, Treppenhäuser,
                  Wohnanlagen und Gewerbeflächen. Jede Leistung bekommt einen klaren Umfang, feste
                  Intervalle und eine saubere Anfragebasis.
                </p>
                <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
                  <Button href="/kontakt" className="justify-center gap-2">
                    <ClipboardPen className="h-5 w-5" />
                    Besichtigung anfragen
                  </Button>
                  <Button href="/magazin" variant="secondary" className="justify-center">
                    Ratgeber lesen
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  to={`/leistungen/${service.slug}`}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.8rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] shadow-[0_18px_48px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent),0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={service.heroImage} alt={service.title} width={720} height={520} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-solid)]">
                      {service.eyebrow}
                    </p>
                    <h2 className="mt-3 break-words text-2xl font-semibold leading-tight [overflow-wrap:anywhere]">{service.title}</h2>
                    <p className="mt-4 line-clamp-4 text-sm leading-7 text-[color:var(--page-fg)]/76">{service.summary}</p>
                    <div className="mt-5 space-y-2">
                      {service.included.slice(0, 3).map((item) => (
                        <span key={item} className="flex gap-2 text-sm text-[color:var(--page-fg)]/78">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-solid)]" />
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[color:var(--accent-solid)]">
                      Leistung ansehen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import { ArrowRight, BookOpen, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/base/Button';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { magazinePosts } from '../../data/siteContent';
import { setPageSeo } from '../../lib/seo';
import StickyCTA from '../home/components/StickyCTA';

export default function MagazinPage() {
  const featured = magazinePosts[0];
  const rest = magazinePosts.slice(1);

  useEffect(() => {
    setPageSeo({
      title: 'Reinigungsratgeber Berlin | MyClean Magazin',
      description:
        'Praxiswissen zu Büroreinigung, Unterhaltsreinigung, Treppenhausreinigung, Praxisreinigung und Reinigungsplänen in Berlin.',
      path: '/magazin',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'MyClean Magazin',
        url: 'https://www.myclean-service.de/magazin'
      }
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
                Magazin & Reinigungswissen
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Praxiswissen für saubere, sichere und professionell betreute Immobilien.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--page-fg)]/80 sm:text-lg">
                Das Magazin macht aus der Website eine Referenz: hilfreiche Inhalte, interne Links zu Leistungen
                und klare Antworten auf Suchfragen aus Berlin.
              </p>
            </div>

            {featured && (
              <Link
                to={`/magazin/${featured.slug}`}
                className="group mt-12 grid overflow-hidden rounded-[2.2rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] shadow-[0_24px_70px_rgba(15,23,42,0.14)] lg:grid-cols-[1.08fr_0.92fr]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[rgba(var(--accent),0.08)]">
                  <img src={featured.heroImage} alt={featured.title} width={720} height={520} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                </div>
                <div className="p-6 sm:p-8 lg:p-10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(var(--accent),0.10)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-solid)]">
                    <BookOpen className="h-4 w-4" />
                    Leitartikel
                  </span>
                  <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{featured.title}</h2>
                  <p className="mt-5 text-base leading-8 text-[color:var(--page-fg)]/78">{featured.description}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[color:var(--accent-solid)]">
                    Artikel lesen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )}

            <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  to={`/magazin/${post.slug}`}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.8rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] shadow-[0_18px_48px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent),0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={post.heroImage} alt={post.title} width={720} height={520} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[color:var(--page-fg)]/62">
                      <span className="font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-solid)]">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight">{post.title}</h2>
                    <p className="mt-4 line-clamp-4 text-sm leading-7 text-[color:var(--page-fg)]/76">{post.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[color:var(--accent-solid)]">
                      Weiterlesen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button href="/kontakt" className="justify-center">
                Eigene Reinigung anfragen
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

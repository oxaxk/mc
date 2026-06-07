import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Button from '../../components/base/Button';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { magazinePosts } from '../../data/siteContent';
import { getServicePage } from '../../data/servicePages';
import { setPageSeo } from '../../lib/seo';
import StickyCTA from '../home/components/StickyCTA';

export default function MagazinArticlePage() {
  const { slug } = useParams();
  const post = magazinePosts.find((item) => item.slug === slug);

  useEffect(() => {
    if (!post) return;
    setPageSeo({
      title: `${post.title} | MyClean Magazin`,
      description: post.description,
      path: `/magazin/${post.slug}`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: { '@type': 'Organization', name: 'MyClean Service' },
        publisher: { '@type': 'Organization', name: 'MyClean Service' },
        mainEntityOfPage: `https://www.myclean-service.de/magazin/${post.slug}`
      }
    });
  }, [post]);

  if (!post) return <Navigate to="/magazin" replace />;

  return (
    <div className="min-h-screen bg-[var(--page-bg)] pb-20 text-[color:var(--page-fg)] md:pb-0">
      <Header />
      <main>
        <article>
          <section className="pt-36 pb-12 md:pt-44">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <Link to="/magazin" className="text-sm font-semibold text-[color:var(--accent-solid)]">
                Magazin
              </Link>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[color:var(--accent-solid)]">
                {post.category}
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--page-fg)]/80">{post.description}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[color:var(--page-fg)]/68">
                <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[rgba(var(--accent),0.08)] shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
            <img
              src={post.heroImage}
              alt={post.title}
              width={720}
              height={520}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            </div>
          </div>

          <section className="py-14">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
              <aside className="h-fit rounded-[1.6rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] p-6 shadow-[0_16px_42px_rgba(15,23,42,0.10)]">
                <h2 className="text-lg font-semibold">Passende Leistungen</h2>
                <div className="mt-4 space-y-3">
                  {post.relatedServices.map((slug) => {
                    const service = getServicePage(slug);
                    if (!service) return null;
                    return (
                      <Link
                        key={slug}
                        to={`/leistungen/${slug}`}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-[rgba(var(--accent),0.20)] bg-[rgba(var(--accent),0.07)] px-4 py-3 text-sm font-semibold"
                      >
                        {service.title.replace(' in Berlin', '')}
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </Link>
                    );
                  })}
                </div>
                <Button href="/kontakt" className="mt-6 w-fit justify-center">
                  Anfrage starten
                </Button>
              </aside>

              <div className="space-y-8">
                {post.sections.map((section) => (
                  <section key={section.heading} className="rounded-[1.6rem] border border-[rgba(15,23,42,0.10)] bg-[var(--section-glass)] p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold leading-tight">{section.heading}</h2>
                    <p className="mt-4 text-base leading-8 text-[color:var(--page-fg)]/80">{section.body}</p>
                  </section>
                ))}

                <section className="rounded-[1.6rem] border border-[rgba(var(--accent),0.24)] bg-[rgba(var(--accent),0.08)] p-6 sm:p-8">
                  <h2 className="text-2xl font-semibold">Kurz beantwortet</h2>
                  <div className="mt-5 space-y-4">
                    {post.faq.map((item) => (
                      <div key={item.question} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[color:var(--accent-solid)]" />
                        <div>
                          <h3 className="font-semibold">{item.question}</h3>
                          <p className="mt-1 text-sm leading-7 text-[color:var(--page-fg)]/78">{item.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>
        </article>
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
}

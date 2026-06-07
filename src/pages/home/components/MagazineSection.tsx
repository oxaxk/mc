import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';
import { magazinePosts } from '../../../data/siteContent';

export default function MagazineSection() {
  return (
    <section className="bg-[var(--section-glass)] py-20 text-[color:var(--page-fg)] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[color:var(--accent-solid)]">
              Magazin & Reinigungswissen
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Antworten, bevor Kunden überhaupt fragen.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--page-fg)]/78 sm:text-base lg:text-right">
            Das MyClean Magazin erklärt Leistungen, Intervalle, Objektarten und sinnvolle Reinigungspläne.
            So wird die Website zur Referenz statt nur zur Visitenkarte.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
          {magazinePosts.map((post) => (
            <Link
              key={post.slug}
              to={`/magazin/${post.slug}`}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.7rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] shadow-[0_18px_46px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent),0.42)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={post.heroImage} alt={post.title} width={720} height={520} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-solid)]">
                  <BookOpen className="h-4 w-4" />
                  {post.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-tight">{post.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-7 text-[color:var(--page-fg)]/76">{post.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[color:var(--accent-solid)]">
                  Lesen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/magazin" className="justify-center">
            Alle Artikel ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}

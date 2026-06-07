import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { setPageSeo } from '../../lib/seo';
import StickyCTA from '../home/components/StickyCTA';

const principles = [
  'Objekt zuerst verstehen, dann Umfang festlegen',
  'Reinigungsintervalle realistisch planen',
  'klare Kommunikation statt unklarer Pauschalen',
  'Leistungen dokumentieren und bei Bedarf nachjustieren'
];

export default function UeberUnsPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Über MyClean Service Berlin',
      description:
        'MyClean Service steht für planbare Reinigung in Berlin: klare Abläufe, objektbezogene Angebote und persönliche Abstimmung.',
      path: '/ueber-uns'
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] pb-20 text-[color:var(--page-fg)] md:pb-0">
      <Header />
      <main>
        <section className="pt-36 pb-16 md:pt-44">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[color:var(--accent-solid)]">
                Über MyClean
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Reinigungsservice für Berlin mit ruhigem Ablauf und klarer Verantwortung.
              </h1>
              <p className="mt-6 text-base leading-8 text-[color:var(--page-fg)]/80 sm:text-lg">
                MyClean arbeitet objektbezogen: Wir klären Fläche, Nutzung, Intervall und Priorität, bevor ein
                Angebot entsteht. So wissen beide Seiten, was regelmäßig passiert und wo Zusatzleistungen sinnvoll sind.
              </p>
              <Button href="/kontakt" className="mt-8 justify-center">
                Kennenlernen anfragen
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:aspect-[16/11]">
              <img src="/images/services/5-720.webp" alt="MyClean Reinigung in Berlin" width={720} height={520} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((item) => (
                <article key={item} className="h-full rounded-[1.5rem] border border-[rgba(15,23,42,0.12)] bg-[var(--card-glass)] p-6">
                  <CheckCircle2 className="h-6 w-6 text-[color:var(--accent-solid)]" />
                  <p className="mt-4 text-base font-semibold leading-7">{item}</p>
                </article>
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

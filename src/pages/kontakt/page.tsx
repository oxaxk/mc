import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { setPageSeo } from '../../lib/seo';
import ContactSection from '../home/components/ContactSection';
import StickyCTA from '../home/components/StickyCTA';

export default function KontaktPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Kontakt & Anfrage | MyClean Service Berlin',
      description:
        'Kontakt zu MyClean Service Berlin: Anfrage für Büroreinigung, Unterhaltsreinigung, Treppenhausreinigung, Praxisreinigung, Glasreinigung und Sonderreinigung stellen.',
      path: '/kontakt'
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] pb-20 text-[color:var(--page-fg)] md:pb-0">
      <Header />
      <main className="pt-24 md:pt-28">
        <ContactSection />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
}

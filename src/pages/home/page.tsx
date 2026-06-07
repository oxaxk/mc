// File: src/pages/home/page.tsx
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TeamSection from './components/TeamSection';
import SpecialsSection from './components/SpecialsSection';
import MagazineSection from './components/MagazineSection';
import ContactSection from './components/ContactSection';
import StickyCTA from './components/StickyCTA';

const Home = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <SpecialsSection />
        <MagazineSection />
        <ContactSection />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
};

export default Home;

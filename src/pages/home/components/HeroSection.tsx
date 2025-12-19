import { useEffect, useState } from 'react';
import type React from 'react';
import Button from '../../../components/base/Button';

const heroImages = [
  {
    src: '/images/hero/1.png',
    alt: 'myclean – Reinigungsteam bei der Büroreinigung in Berlin'
  },
  {
    src: '/images/hero/2.png',
    alt: 'myclean – Gründliche Unterhaltsreinigung in modernen Räumen'
  },
  {
    src: '/images/hero/3.png',
    alt: 'myclean – Glas- und Fensterreinigung mit Blick über Berlin'
  },
  {
    src: '/images/hero/4.png',
    alt: 'myclean – Treppenhausreinigung in einem Mehrfamilienhaus in Berlin'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMoreClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof document === 'undefined') return;

    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="order-1 md:order-2 max-w-xl mx-auto md:mx-0 flex flex-col items-stretch text-center md:text-left bg-[var(--card-glass)] backdrop-blur-none md:backdrop-blur-xl rounded-3xl border border-[rgba(15,23,42,0.14)] dark:border-white/10 px-5 sm:px-7 py-7 shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
            <p className="text-xs tracking-[0.22em] uppercase mb-4 text-[color:var(--accent-solid)]">
              Unterhaltsreinigung · Büroreinigung · Treppenhaus · Glas
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold leading-tight mb-3 text-[color:var(--page-fg)]">
              Saubere Räume. Klare Abläufe.
              <span className="block">
                Reinigungsservice für Berlin &amp; Umgebung.
              </span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[color:var(--page-fg)]/85 max-w-xl mx-auto md:mx-0">
              MyClean übernimmt die regelmäßige Reinigung von Büros, Praxen, Treppenhäusern und Objekten in Berlin.
              Sie bekommen feste Intervalle, klare Zuständigkeiten und zuverlässig saubere Ergebnisse – ergänzt durch
              Glas- und Sonderreinigungen nach Bedarf.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-4 w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3">
                <Button
                  href="#kontakt"
                  size="lg"
                  className="gap-2 w-full sm:w-[15.5rem] justify-center text-[0.75rem] sm:text-sm md:text-base px-7 py-3.5 tracking-[0.22em] uppercase"
                >
                  <i className="ri-edit-line text-xl sm:text-2xl" />
                  Angebot anfordern
                </Button>

                <Button
                  href="tel:+4915217782301"
                  size="lg"
                  className="gap-2 w-full sm:w-[15.5rem] justify-center text-[0.75rem] sm:text-sm md:text-base px-7 py-3.5 tracking-[0.22em] uppercase"
                >
                  <i className="ri-phone-line text-xl sm:text-2xl" />
                  Jetzt anrufen
                </Button>
              </div>

              <div className="flex justify-center md:justify-start">
                <Button
                  href="#services"
                  onClick={handleMoreClick}
                  size="lg"
                  className="gap-2 w-full sm:w-[15.5rem] justify-center text-[0.75rem] sm:text-sm md:text-base px-7 py-3.5 tracking-[0.22em] uppercase"
                >
                  Unsere Leistungen
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-16 -right-6 w-44 h-44 bg-[#60A5FA]/35 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-10 w-48 h-48 bg-[#1D4ED8]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5] rounded-[2.25rem] overflow-hidden shadow-[0_32px_80px_rgba(15,23,42,0.55)] border border-[#1C5BBF] bg-gradient-to-br from-[#0F3D8C] via-[#1C5BBF] to-[#2F7FEF]">
              {heroImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="h-9 w-9 rounded-full bg-black/70 text-white flex items-center justify-center text-lg backdrop-blur-sm border border-white/10 hover:bg-black/85 transition-colors"
                >
                  ‹
                </button>

                <div className="flex items-center gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full border border-white/70 ${
                        idx === currentIndex ? 'bg-white' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="h-9 w-9 rounded-full bg-black/70 text-white flex items-center justify-center text-lg backdrop-blur-sm border border-white/10 hover:bg-black/85 transition-colors"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
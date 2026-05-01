import { useEffect, useState } from 'react';
import type React from 'react';
import { ArrowRight, CalendarCheck, Phone } from 'lucide-react';
import Button from '../../../components/base/Button';

const heroImages = [
  {
    src: '/images/hero/1-640.webp',
    srcSet: '/images/hero/1-640.webp 640w, /images/hero/1-960.webp 960w',
    alt: 'myclean – Reinigungsteam bei der Büroreinigung in Berlin'
  },
  {
    src: '/images/hero/2-640.webp',
    srcSet: '/images/hero/2-640.webp 640w, /images/hero/2-960.webp 960w',
    alt: 'myclean – Gründliche Unterhaltsreinigung in modernen Räumen'
  },
  {
    src: '/images/hero/3-640.webp',
    srcSet: '/images/hero/3-640.webp 640w, /images/hero/3-960.webp 960w',
    alt: 'myclean – Glas- und Fensterreinigung mit Blick über Berlin'
  },
  {
    src: '/images/hero/4-640.webp',
    srcSet: '/images/hero/4-640.webp 640w, /images/hero/4-960.webp 960w',
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
          <div className="order-1 md:order-2 max-w-xl mx-auto md:mx-0 flex flex-col items-stretch text-center md:text-left">
            <p className="text-xs tracking-[0.18em] uppercase mb-4 text-[color:var(--accent-solid)]">
              Büroreinigung Berlin · Praxen · Hausverwaltungen
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] font-semibold leading-tight mb-4 text-[color:var(--page-fg)]">
              Büroreinigung in Berlin, die zuverlässig funktioniert.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[color:var(--page-fg)]/85 max-w-xl mx-auto md:mx-0">
              Weniger Abstimmungsaufwand bei der laufenden Reinigung. MyClean übernimmt
              Unterhaltsreinigung für Büros, Praxen und Wohnanlagen mit festen Teams, klaren Checklisten und
              einem Angebot nach Besichtigung oder konkreter Objektbeschreibung.
            </p>

            <div className="mt-8 space-y-4 w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3">
                <Button
                  href="#kontakt"
                  size="lg"
                  className="gap-2 w-full sm:w-auto justify-center text-sm md:text-base px-7 py-4"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  Besichtigung anfragen
                </Button>

                <Button
                  href="tel:+4915217782301"
                  variant="secondary"
                  size="lg"
                  className="hidden md:inline-flex gap-2 w-full sm:w-auto justify-center text-sm md:text-base px-7 py-4"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Jetzt anrufen
                </Button>
              </div>

              <div className="hidden sm:grid grid-cols-3 gap-3 text-left">
                {[
                  ['Plan', 'klare Abläufe'],
                  ['Objekt', 'individuelles Angebot'],
                  ['Berlin', 'regionaler Service']
                ].map(([value, label]) => (
                  <div key={value} className="rounded-2xl border border-[rgba(var(--accent),0.20)] bg-[rgba(var(--accent),0.07)] px-3 py-3">
                    <p className="text-lg font-semibold text-[color:var(--page-fg)]">{value}</p>
                    <p className="text-xs leading-snug text-[color:var(--page-fg)]/70">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <a
                  href="#services"
                  onClick={handleMoreClick}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-solid)] hover:underline"
                >
                  Leistungen ansehen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1 relative">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(15,23,42,0.35)] border border-[rgba(var(--accent),0.32)] bg-[rgba(var(--accent),0.08)]">
              {heroImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes="(min-width: 768px) 448px, 85vw"
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  decoding="async"
                />
              ))}

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Vorheriges Hero-Bild"
                  className="h-11 w-11 rounded-full bg-black/70 text-white flex items-center justify-center text-xl backdrop-blur-sm border border-white/10 hover:bg-black/85 transition-colors"
                >
                  ‹
                </button>

                <div className="flex items-center gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Hero-Bild ${idx + 1} anzeigen`}
                      aria-current={idx === currentIndex}
                      className={`h-11 w-11 rounded-full border border-white/30 flex items-center justify-center ${
                        idx === currentIndex ? 'bg-white' : 'bg-white/20'
                      }`}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-black/70" />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Nächstes Hero-Bild"
                  className="h-11 w-11 rounded-full bg-black/70 text-white flex items-center justify-center text-xl backdrop-blur-sm border border-white/10 hover:bg-black/85 transition-colors"
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

import React, { useEffect, useState } from 'react';
import Button from '../../../components/base/Button';

const socialImages = [
  {
    src: '/images/projects/11.png',
    alt: 'myclean – Büroreinigung in modernen Räumen in Berlin'
  },
  {
    src: '/images/projects/12.png',
    alt: 'myclean – Treppenhausreinigung in einem Mehrfamilienhaus in Berlin'
  },
  {
    src: '/images/projects/13.png',
    alt: 'myclean – Glas- und Fensterreinigung in einem Bürogebäude in Berlin'
  }
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % socialImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="einsaetze" className="py-24 bg-[var(--page-bg)] text-[color:var(--page-fg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.22em] uppercase mb-3 text-[color:var(--accent-solid)]">
              Einblicke in unsere Arbeit
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-0 leading-tight text-[color:var(--page-fg)]">
              Bilder aus unseren Reinigungsprojekten
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed max-w-xl text-[color:var(--page-fg)]/80">
            Hier bekommen Sie einen Eindruck von typischen Reinigungsprojekten – von Büro- und Praxisreinigung über
            Treppenhäuser bis hin zu Glas- und Sonderreinigung in den Berliner Bezirken und im Umland.
          </p>
        </div>

        <div className="mt-10">
          <div className="rounded-3xl bg-[var(--card-glass)] border border-[rgba(15,23,42,0.14)] dark:border-white/10 px-4 sm:px-6 py-7 sm:py-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
            <div className="max-w-[380px] mx-auto sm:max-w-none">
              {/* Mobile: Single fading card, Desktop: Collage */}
              <div>
                {/* Mobile Carousel */}
                <div className="sm:hidden flex justify-center">
                  <div className="relative w-full max-w-xs mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.35)]">
                    {socialImages.map((image, index) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                          index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Desktop Collage */}
                <div className="hidden sm:grid sm:grid-cols-[1.1fr_0.9fr_0.9fr] sm:gap-5">
                  {socialImages.map((image, index) => (
                    <div key={image.src} className="flex items-stretch">
                      <div className="w-full rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.35)]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <Button
                  href="tel:+4915217782301"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[0.75rem] sm:text-sm md:text-base tracking-[0.22em] uppercase rounded-full bg-[color:var(--accent-solid)] text-white border border-[rgba(var(--accent),0.55)] shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:shadow-[0_22px_55px_rgba(15,23,42,0.22)] hover:brightness-105"
                >
                  <i className="ri-phone-line w-5 h-5" />
                  Direkt anrufen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

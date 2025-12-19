import React, { useState, useRef, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const [slideStep, setSlideStep] = useState(0);

  const services = [
    {
      icon: 'ri-home-4-line',
      title: 'Unterhaltsreinigung',
      description:
        'Regelmäßige Reinigung von Büros, Praxen und gewerblichen Flächen – nach festen Intervallen und klar definierten Leistungsumfängen.',
      image: '/images/services/5.png'
    },
    {
      icon: 'ri-building-4-line',
      title: 'Büro- & Praxisreinigung',
      description:
        'Gründliche Reinigung von Arbeitsplätzen, Besprechungsräumen, Sanitärbereichen und Empfangszonen – auch außerhalb Ihrer Öffnungszeiten.',
      image: '/images/services/6.png'
    },
    {
      icon: 'ri-arrow-up-down-line',
      title: 'Treppenhausreinigung',
      description:
        'Saubere Treppenhäuser, Eingangsbereiche und Flure in Mietshäusern und Wohnanlagen – inklusive Geländer, Aufzüge und Briefkastenanlagen.',
      image: '/images/services/7.png'
    },
    {
      icon: 'ri-window-2-line',
      title: 'Glas- & Fensterreinigung',
      description:
        'Streifenfreie Glas- und Rahmenreinigung für Büros, Eingangsbereiche und Auslagen – auf Wunsch in regelmäßigen Intervallen.',
      image: '/images/services/8.png'
    },
    {
      icon: 'ri-hospital-line',
      title: 'Sensible Bereiche',
      description:
        'Reinigung von Praxen, Studios und sensiblen Bereichen mit klaren Hygiene-Routinen und abgestimmten Reinigungsplänen.',
      image: '/images/services/9.png'
    },
    {
      icon: 'ri-sparkling-2-line',
      title: 'Sonderreinigung',
      description:
        'Grundreinigung, Bauendreinigung oder einmalige Intensivreinigung – wenn Flächen einen extra gründlichen Reinigungsdurchgang brauchen.',
      image: '/images/services/10.png'
    }
  ];

  const goToSlide = (index: number) => {
    const normalizedIndex = (index + services.length) % services.length;
    if (normalizedIndex === currentIndex) return;

    setCurrentIndex(normalizedIndex);

    const el = mobileScrollRef.current;
    if (el && slideStep > 0) {
      el.scrollTo({
        left: normalizedIndex * slideStep,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goToSlide(currentIndex + 1);
    setTimeout(() => setIsTransitioning(false), 350);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goToSlide(currentIndex - 1);
    setTimeout(() => setIsTransitioning(false), 350);
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const compute = () => {
      const first = el.querySelector<HTMLElement>('[data-slide]');
      if (!first) return;

      // width + gap (Tailwind gap-6 => 24px)
      const gap = 24;
      setSlideStep(first.offsetWidth + gap);
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(el);

    return () => {
      ro.disconnect();
    };
  }, []);

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el || slideStep <= 0) return;

    const newIndex = Math.round(el.scrollLeft / slideStep);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);


  return (
    <section
      id="services"
      className="py-24 bg-[var(--page-bg)] text-[color:var(--page-fg)] scroll-mt-28 md:scroll-mt-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p
                className="text-xs tracking-[0.22em] uppercase mb-3 text-[color:var(--accent-solid)]"
              >
                Leistungen &amp; Reinigungsbereiche
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-3 lg:mb-0 text-[color:var(--page-fg)]"
              >
                Reinigungsleistungen in Berlin &amp; Umgebung
              </h2>
            </div>
            <p
              className="text-sm lg:text-base opacity-90 max-w-xl lg:text-right text-[color:var(--page-fg)]/85"
            >
              Unterhaltsreinigung, Büro- und Praxisreinigung, Treppenhaus- sowie Glasreinigung – in allen Berliner Bezirken
              und im direkten Umland. Mit festen Intervallen, klaren Zuständigkeiten und transparenten Absprachen.
            </p>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Card Container in eigenem Panel */}
          <div className="w-full px-0 lg:px-4">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-5 sm:px-6 py-6 rounded-3xl bg-[var(--section-glass)] border border-[rgba(15,23,42,0.14)] dark:border-white/10 shadow-[0_22px_60px_rgba(15,23,42,0.18)] no-scrollbar select-none"
              onScroll={handleMobileScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((svc) => (
                <div key={svc.title} data-slide className="shrink-0 w-[88%] sm:w-[78%] md:w-[44%] lg:w-[34%] snap-center">
                  <div className="bg-[var(--card-glass)] border border-[rgba(15,23,42,0.14)] dark:border-white/10 rounded-[1.9rem] overflow-hidden shadow-[0_22px_70px_rgba(15,23,42,0.16)] transition-all duration-200 h-[520px] sm:h-[500px] md:h-[460px] lg:h-[480px] flex flex-col md:hover:border-[#22d3ee]/40 md:hover:shadow-[0_30px_90px_rgba(34,211,238,0.18)]">
                    <div className="relative h-[54%] overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="px-6 pt-5 pb-6 md:pb-5 flex flex-col justify-start h-[40%]">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(var(--accent),0.16)] border border-[rgba(var(--accent),0.35)]">
                          <i className={`${svc.icon} text-xl text-[color:var(--accent-solid)]`} />
                        </span>
                        <h3 className="text-sm md:text-base lg:text-lg font-semibold tracking-[0.16em] uppercase text-[color:var(--page-fg)]">
                          {svc.title}
                        </h3>
                      </div>
                      <p
                        className="mt-3 leading-relaxed text-sm md:text-base text-[color:var(--page-fg)]/80"
                      >
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Dots Navigation mit Pfeilen */}
          <div className="flex flex-col items-center justify-center mt-8 lg:mt-12 gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(var(--accent),0.28)] bg-[var(--card-glass)] hover:border-[rgba(var(--accent),0.55)] hover:shadow-[0_0_18px_rgba(34,211,238,0.18)] transition-all duration-200 cursor-pointer disabled:opacity-40"
              >
                <i className="ri-arrow-left-s-line text-lg text-[color:var(--page-fg)]" />
              </button>

              <div className="flex items-center gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    className={`h-2.5 rounded-full bg-[color:var(--accent-solid)] transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                      currentIndex === index ? 'w-7 opacity-100' : 'w-2.5 opacity-40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(var(--accent),0.28)] bg-[var(--card-glass)] hover:border-[rgba(var(--accent),0.55)] hover:shadow-[0_0_18px_rgba(34,211,238,0.18)] transition-all duration-200 cursor-pointer disabled:opacity-40"
              >
                <i className="ri-arrow-right-s-line text-lg text-[color:var(--page-fg)]" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 mt-16">
          <Button
            href="#kontakt"
            size="lg"
            className="w-full sm:w-[15.5rem] justify-center gap-2 text-[0.75rem] sm:text-sm md:text-base px-7 py-3.5 tracking-[0.22em] uppercase"
          >
            <i className="ri-edit-line text-2xl" />
            Angebot anfragen
          </Button>
          <Button
            href="tel:+4915217782301"
            size="lg"
            className="w-full sm:w-[15.5rem] justify-center gap-2 text-[0.75rem] sm:text-sm md:text-base px-7 py-3.5 tracking-[0.22em] uppercase"
          >
            <i className="ri-phone-line text-2xl" />
            Jetzt anrufen
          </Button>
        </div>
      </div>
    </section>
  );
}

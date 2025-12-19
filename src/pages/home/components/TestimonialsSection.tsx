import React, { useEffect, useRef, useState } from 'react';

type Testimonial = {
  name: string;
  rating: number;
  text: string;
  image: string | null;
};

const testimonials: Testimonial[] = [
  {
    name: 'Büroreinigung Berlin-Mitte',
    rating: 5,
    text: 'Unsere Büros werden seit Monaten von myclean gereinigt. Schreibtische, Besprechungsräume und Sanitärbereiche sind jedes Mal top – und die Teams arbeiten zuverlässig außerhalb unserer Öffnungszeiten.',
    image: null
  },
  {
    name: 'Treppenhaus Neukölln',
    rating: 5,
    text: 'Das Treppenhaus in unserem Mietshaus war vorher ständig verschmutzt. Seit myclean übernommen hat, sind Böden, Geländer und Briefkästen dauerhaft sauber. Rückmeldungen aus der Hausgemeinschaft sind durchweg positiv.',
    image: null
  },
  {
    name: 'Praxisreinigung Charlottenburg',
    rating: 5,
    text: 'Für unsere Praxis sind Hygiene und Verlässlichkeit entscheidend. myclean arbeitet strukturiert nach festen Plänen, geht sorgfältig mit sensiblen Bereichen um und reagiert schnell auf Sonderwünsche.',
    image: null
  },
  {
    name: 'Glasreinigung Showroom Friedrichshain',
    rating: 5,
    text: 'Die großen Schaufenster in unserem Showroom waren immer ein Thema. myclean sorgt für streifenfreie Glasflächen und klare Sicht – auch bei wechselndem Wetter und starkem Publikumsverkehr.',
    image: null
  },
  {
    name: 'Unterhaltsreinigung Co-Working Space',
    rating: 5,
    text: 'Viele Menschen, viele Arbeitsplätze – und trotzdem bleibt unser Co-Working Space ordentlich. myclean hat klare Routinen etabliert und stimmt die Reinigungszeiten gut auf unsere Nutzung ab.',
    image: null
  },
  {
    name: 'Wohnanlage Lichtenberg',
    rating: 5,
    text: 'myclean übernimmt bei uns die Treppenhaus- und Eingangsreinigung. Absprachen laufen unkompliziert, Mängel werden schnell behoben und die Anlage macht insgesamt einen deutlich gepflegteren Eindruck.',
    image: null
  }
];

function TestimonialCard({
  testimonial,
  className = ''
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <article
      className={`relative flex flex-col h-full rounded-3xl bg-[var(--card-glass)] border border-[rgba(15,23,42,0.14)] dark:border-white/10 shadow-[0_18px_55px_rgba(15,23,42,0.18)] px-6 py-6 md:px-7 md:py-7 overflow-hidden md:hover:-translate-y-1 md:hover:shadow-[0_28px_90px_rgba(34,211,238,0.18)] transition-all duration-200 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 via-white/0 to-transparent" />
      <div className="flex items-center gap-4 mb-4">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-[color:var(--accent-solid)] border border-[rgba(var(--accent),0.35)] dark:border-white/15 flex items-center justify-center text-sm font-semibold text-white">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{testimonial.name.charAt(0)}</span>
          )}
        </div>

        <div className="flex-1">
          <h4 className="text-lg md:text-xl font-semibold leading-snug text-[color:var(--page-fg)]">
            {testimonial.name}
          </h4>
          <div className="mt-1 flex items-center gap-1.5">
            {Array.from({ length: testimonial.rating }).map((_, idx) => (
              <i key={idx} className="ri-star-fill text-[0.8rem] text-[#FBBF24]" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm md:text-[0.95rem] leading-relaxed italic text-[color:var(--page-fg)]/80">
        “{testimonial.text}”
      </p>
    </article>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const lastScrollAtRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef<number | null>(null);
  const currentXRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 768) return;

      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        const container = mobileScrollRef.current;
        if (container) {
          const width = container.clientWidth;
          container.scrollTo({
            left: next * width,
            behavior: 'auto'
          });
        }
        return next;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current || startXRef.current === null || currentXRef.current === null) {
      isDraggingRef.current = false;
      startXRef.current = null;
      currentXRef.current = null;
      return;
    }

    const diff = currentXRef.current - startXRef.current;
    const THRESHOLD = 50;

    if (Math.abs(diff) > THRESHOLD) {
      if (diff < 0) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      } else {
        setActiveIndex((prev) => {
          const next = (prev - 1 + testimonials.length) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      }
    }

    isDraggingRef.current = false;
    startXRef.current = null;
    currentXRef.current = null;
  };

  const handleHorizontalScroll = () => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const { scrollLeft, clientWidth } = container;
    if (!clientWidth) return;

    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-[var(--page-bg)] text-[color:var(--page-fg)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.22em] uppercase mb-4 text-[color:var(--accent-solid)]">
              Kundenstimmen
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight text-[color:var(--page-fg)]">
              Was Kund:innen über myclean sagen
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-xl leading-relaxed text-[color:var(--page-fg)]/80">
            Ob Unterhaltsreinigung, Büro- und Praxisreinigung oder Treppenhaus- und Glasreinigung – wichtig
            ist, dass Sie sich auf kontinuierlich saubere Ergebnisse verlassen können. Die Rückmeldungen unserer
            Kund:innen aus Berlin zeigen, worauf wir Wert legen: Gründlichkeit, Zuverlässigkeit und klare Absprachen.
          </p>
        </div>

        {/* Mobile: Scroll-/Auto-Carousel im Service-Style */}
        <div className="mt-10 md:hidden">
          <div className="relative overflow-hidden">
            <div
              ref={mobileScrollRef}
              className="flex w-full overflow-x-auto no-scrollbar snap-x snap-mandatory"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onScroll={handleHorizontalScroll}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 snap-center px-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2 md:hidden">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`h-2.5 w-2.5 rounded-full transition-colors border ${
                  idx === activeIndex
                    ? 'bg-[color:var(--accent-solid)] border-[rgba(var(--accent),0.60)]'
                    : 'bg-[rgba(var(--accent),0.18)] border-[rgba(var(--accent),0.30)]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Horizontales Carousel mit drei Karten pro Reihe */}
        <div className="mt-10 hidden md:block">
          <div className="relative overflow-hidden">
            <div className="flex w-full overflow-x-auto no-scrollbar gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-1"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  const handleEmailClick = () => {
    if (typeof window === 'undefined') return;

    const el = document.querySelector('#kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      return;
    }

    window.location.href = '/#kontakt';
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    if (typeof window === 'undefined') return;
    // WhatsApp: Berlin number
    window.open('https://wa.me/4915217782301', '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  };

  const scrollToId = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  };

  const handleHelpClick = () => {
    if (typeof window === 'undefined') return;

    const ok = scrollToId('#faq');
    if (ok) {
      setIsMenuOpen(false);
      return;
    }

    window.location.href = '/#faq';
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const currentY = window.scrollY || window.pageYOffset;
      const lastY = lastScrollYRef.current;

      const THRESHOLD = 16;

      if (Math.abs(currentY - lastY) < THRESHOLD) {
        return;
      }

      if (currentY > lastY && currentY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkClasses =
    'relative text-[0.7rem] lg:text-xs font-medium tracking-[0.22em] uppercase text-[#0F3D8C] hover:text-[#1C5BBF] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#1C5BBF] after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_10px_30px_rgba(15,61,140,0.12)] transform transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-[#0F3D8C] via-[#1C5BBF] to-[#2F7FEF] text-[0.65rem] text-white/85">
        <div className="max-w-7xl mx-auto px-3 py-1.5 flex items-center gap-3">
          <span
            className="inline-flex items-center tracking-[0.18em] uppercase"
            style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            myclean · Professionelle Reinigung in Berlin &amp; Umgebung
          </span>
        </div>
      </div>

      {/* MAIN ROW */}
      <div className="max-w-7xl mx-auto px-4 md:px-3 py-3 md:py-3.5 flex items-center gap-4">
        {/* LEFT — LOGO */}
        <a href="/#hero" className="cursor-pointer flex items-center gap-3">
          <img src="/images/logo.png" alt="myclean Logo" className="h-10 md:h-12 w-auto" />
          <span
            className="text-base md:text-lg font-semibold tracking-[0.20em] uppercase text-[#1C5BBF]"
            style={{
              fontFamily:
                'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            MyClean Service
          </span>
        </a>

        {/* DESKTOP NAV (ONEPAGER ANCHORS) */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <a
            href="/#hero"
            className={linkClasses}
            style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            Home
          </a>
          <a
            href="/#about"
            className={linkClasses}
            style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            Über uns
          </a>
          <a
            href="/#services"
            className={linkClasses}
            style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            Leistungen
          </a>
          <a
            href="/#faq"
            className={linkClasses}
            style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            FAQ
          </a>
          <a
            href="/#kontakt"
            className={linkClasses}
            style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            Kontakt
          </a>
        </nav>

        {/* MOBILE MENU TOGGLE + ACTION BUTTONS (CALL + MAIL) */}
        <div className="md:hidden flex items-center justify-end gap-3 ml-auto">
          <button
            type="button"
            onClick={handleEmailClick}
            aria-label="Kontaktformular"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--accent-solid)] border border-[rgba(var(--accent),0.55)] hover:brightness-105 transition-colors shadow-[0_10px_26px_rgba(15,23,42,0.22)]"
          >
            <i className="ri-phone-line text-base text-white" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center bg-transparent border-none hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menü"
          >
            <span className="relative flex h-5 w-7 items-center justify-center">
              <span
                className={`absolute h-[2px] w-7 rounded-full bg-[#111827] transition-transform duration-300 ${
                  isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5 rotate-0'
                }`}
              />
              <span
                className={`absolute h-[2px] w-7 rounded-full bg-[#111827] transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute h-[2px] w-7 rounded-full bg-[#111827] transition-transform duration-300 ${
                  isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5 rotate-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden border-t border-black/5 px-6 overflow-hidden transform transition-all duration-300 ease-out ${
          isMenuOpen
            ? 'bg-white/90 backdrop-blur-xl py-6 opacity-100 max-h-96'
            : 'bg-transparent backdrop-blur-0 py-0 opacity-0 max-h-0'
        }`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--accent-solid)] border border-[rgba(var(--accent),0.55)] shadow-[0_10px_26px_rgba(15,23,42,0.22)] hover:brightness-105 transition-colors"
            >
              <i className="ri-whatsapp-line text-lg text-white" />
            </button>
            <button
              type="button"
              onClick={handleHelpClick}
              aria-label="FAQ"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.14)] border border-[rgba(var(--accent),0.40)] shadow-[0_10px_26px_rgba(15,23,42,0.10)] hover:bg-[rgba(var(--accent),0.20)] hover:border-[rgba(var(--accent),0.60)] transition-colors"
            >
              <i className="ri-question-line text-lg text-[color:var(--page-fg-solid)]" />
            </button>
          </div>

          <div className="flex flex-col space-y-5">
            <a
              href="/#hero"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#0F3D8C' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#0F3D8C' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </a>
            <a
              href="/#services"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#0F3D8C' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Leistungen
            </a>
            <a
              href="/#faq"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#0F3D8C' }}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="/#kontakt"
              className="text-xs font-medium tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#0F3D8C' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { CircleHelp, Menu, Phone, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/branchen', label: 'Branchen' },
  { href: '/magazin', label: 'Magazin' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const linkClasses =
    'relative whitespace-nowrap text-[0.68rem] 2xl:text-xs font-medium tracking-[0.18em] uppercase text-[color:var(--accent-solid)] hover:opacity-80 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[color:var(--accent-solid)] after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_10px_30px_rgba(15,61,140,0.12)]"
    >
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-[#142033] via-[#1c3557] to-[#2f84a4] text-[0.65rem] text-white/85">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-3 md:py-3.5 flex items-center gap-4">
        {/* LEFT — LOGO */}
        <a href="/" className="cursor-pointer flex min-w-0 items-center gap-3">
          <img
            src="/images/myclean-logo-lockup.svg"
            alt="myclean Service Berlin Logo"
            className="h-10 w-auto max-w-[170px] sm:h-12 sm:max-w-[215px] xl:h-14"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 ml-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClasses}
              style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/kontakt"
          className="hidden xl:inline-flex items-center justify-center rounded-full bg-[color:var(--accent-solid)] px-5 py-3 text-xs font-semibold tracking-[0.16em] uppercase text-white shadow-[0_14px_32px_rgba(15,23,42,0.18)] hover:brightness-105"
        >
          Anfrage starten
        </a>

        {/* MOBILE MENU TOGGLE + ACTION BUTTONS (CALL + MAIL) */}
        <div className="xl:hidden flex items-center justify-end gap-3 ml-auto">
          <button
            type="button"
            onClick={handleEmailClick}
            aria-label="Kontaktformular öffnen"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--accent-solid)] border border-[rgba(var(--accent),0.55)] hover:brightness-105 transition-colors shadow-[0_10px_26px_rgba(15,23,42,0.22)]"
          >
            <Phone className="h-4 w-4 text-white" aria-hidden="true" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center bg-transparent border-none hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menü"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-[#111827]" aria-hidden="true" /> : <Menu className="h-6 w-6 text-[#111827]" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`xl:hidden border-t border-black/5 px-6 overflow-hidden transform transition-[max-height,opacity,padding,background-color] duration-300 ease-out ${
          isMenuOpen
            ? 'bg-white/90 backdrop-blur-xl py-6 opacity-100 max-h-[calc(100vh-6.75rem)] overflow-y-auto'
            : 'bg-transparent backdrop-blur-0 py-0 opacity-0 max-h-0'
        }`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <a
              href="tel:+4915217782301"
              aria-label="Telefonisch kontaktieren"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--accent-solid)] border border-[rgba(var(--accent),0.55)] shadow-[0_10px_26px_rgba(15,23,42,0.22)] hover:brightness-105 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-5 w-5 text-white" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={handleHelpClick}
              aria-label="FAQ"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.14)] border border-[rgba(var(--accent),0.40)] shadow-[0_10px_26px_rgba(15,23,42,0.10)] hover:bg-[rgba(var(--accent),0.20)] hover:border-[rgba(var(--accent),0.60)] transition-colors"
            >
              <CircleHelp className="h-5 w-5 text-[color:var(--page-fg-solid)]" aria-hidden="true" />
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[rgba(15,23,42,0.10)] bg-white/80 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent-solid)]"
                style={{ fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

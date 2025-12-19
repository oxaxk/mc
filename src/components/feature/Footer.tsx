import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (hash: string) => {
    const id = hash.replace('#', '');
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(scroll, 60);
    } else {
      scroll();
    }
  };

  const goToPageTop = (path: string) => {
    if (location.pathname !== path) navigate(path);
    window.setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
  };

  const openCookieSettings = () => {
    window.dispatchEvent(new Event('open-cookie-banner'));
    window.setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
  };

  return (
    <footer className="py-14 bg-white/80 backdrop-blur-xl border-t border-black/10 text-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo & Beschreibung */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <button
              type="button"
              onClick={() => goToSection('#hero')}
              className="mb-4 flex items-center gap-3 justify-center md:justify-start"
            >
              <img
                src="/images/logo.png"
                alt="myclean Logo"
                className="h-20 md:h-28 w-auto"
              />
            </button>
            <p className="text-[#111827]/70 mb-6 max-w-md text-sm md:text-base">
              MyClean Service – Ihr Reinigungsservice für Berlin und Umgebung. Unterhaltsreinigung, Büro- und
              Praxisreinigung, Treppenhausreinigung sowie Glas- und Sonderreinigung mit klaren Abläufen
              und transparenten Konditionen.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="tel:+4915217782301"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-black/5 backdrop-blur-xl border border-black/20 shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:bg-black/10 hover:border-black/40 transition-colors"
              >
                <i className="ri-phone-line text-[#111827] text-lg" />
              </a>
              <a
                href="mailto:info@myclean-service.de"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-black/5 backdrop-blur-xl border border-black/20 shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:bg-black/10 hover:border-black/40 transition-colors"
              >
                <i className="ri-mail-line text-[#111827] text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4
              className="font-semibold text-xl md:text-2xl mb-4"
              style={{
                color: '#111827',
                fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
              }}
            >
              Schnellzugriff
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <button type="button" onClick={() => goToSection('#hero')} className="text-[#111827]/70 hover:text-[#111827] transition-colors">
                  Startseite
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('#services')} className="text-[#111827]/70 hover:text-[#111827] transition-colors">
                  Unsere Leistungen
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('#faq')} className="text-[#111827]/70 hover:text-[#111827] transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection('#kontakt')} className="text-[#111827]/70 hover:text-[#111827] transition-colors">
                  Kontakt & Anfrage
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#111827]/60 text-xs md:text-sm text-center md:text-left">
            © 2025 myclean. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-2 md:mt-0 justify-center md:justify-end text-xs md:text-sm">
            <button type="button" onClick={() => goToPageTop('/impressum')} className="text-[#111827]/60 hover:text-[#111827] transition-colors">
              Impressum
            </button>
            <button type="button" onClick={() => goToPageTop('/datenschutz')} className="text-[#111827]/60 hover:text-[#111827] transition-colors">
              Datenschutz
            </button>
            <button type="button" onClick={openCookieSettings} className="text-[#111827]/60 hover:text-[#111827] transition-colors">
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

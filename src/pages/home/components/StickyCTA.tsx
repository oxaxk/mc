import { CalendarCheck, Phone } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(15,23,42,0.10)] bg-white/92 px-3 py-3 shadow-[0_-12px_35px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href="#kontakt"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--accent-solid)] px-4 text-sm font-semibold text-white"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Anfrage
        </a>
        <a
          href="tel:+4915217782301"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgba(var(--accent),0.28)] bg-[rgba(var(--accent),0.08)] px-4 text-sm font-semibold text-[color:var(--page-fg)]"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Anrufen
        </a>
      </div>
    </div>
  );
}

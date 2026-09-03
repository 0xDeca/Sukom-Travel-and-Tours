import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Visa Services", href: "/visa-services" },
    { label: "Tours", href: "/tours" },
    { label: "Flights", href: "/flights" },
    { label: "Consultation", href: "/consultation" },
    { label: "Travel Resources", href: "/resources" },
  ],
  company: [
    { label: "About Sukom", href: "/about" },
    { label: "Our Process", href: "/about#process" },
    { label: "Contact", href: "/about#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Visa Disclaimer", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center gap-0 mb-6">
                <img src="/sukomlogo.png" alt="Sukom Travel & Tours" className="h-10 brightness-0 invert" />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Visa advisory, flight bookings, tour packages, and travel support — helping you navigate your journey from start to finish. IATA Accredited.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <div className="demo-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Demo Experience
                </div>
              </div>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 text-sm text-sukom-400 hover:text-sukom-300 transition-colors group"
              >
                Book a consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 mb-5">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 mb-5">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 mb-5">
                    Legal
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Sukom Travel & Tours. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-600">
            Visa decisions are determined by relevant authorities. Sukom provides advisory support.
          </p>
        </div>
      </div>
    </footer>
  );
}

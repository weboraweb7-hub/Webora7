import React from 'react';
import { BrandLogo } from './BrandLogo';
import { MessageSquare, Mail, Phone, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenForm: () => void;
  onOpenGoogleSheetsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenForm, onOpenGoogleSheetsModal }) => {
  const whatsappUrl =
    'https://wa.me/919019418535?text=Hi%20Webora%20Web%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business.';

  const emailUrl =
    'mailto:weboraweb7@gmail.com?subject=Website%20Enquiry%20%E2%80%94%20Webora%20Web&body=Hi%20Webora%20Web%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business.%20Please%20share%20the%20details%20and%20pricing.';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070e] border-t border-slate-800/80 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Taglines */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" showTagline={true} />
            <p className="text-sm font-semibold text-sky-300 font-['Outfit']">
              “Your Customers Are Online. Are You?”
            </p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Webora Web creates modern, professional, mobile-responsive websites that help small and
              local businesses look trustworthy, attract customers, and grow online.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-slate-400 hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp: +91 90194 18535</span>
              </a>

              <a
                href={emailUrl}
                className="flex items-center gap-2.5 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Email: weboraweb7@gmail.com</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenForm}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-purple-600 rounded-xl shadow-md"
              >
                GET MY WEBSITE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Webora Web. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenGoogleSheetsModal}
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              Sheets Integration
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

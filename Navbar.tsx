import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { MessageSquare, Phone, Mail, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl =
    'https://wa.me/919019418535?text=Hi%20Webora%20Web%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business.';

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Why Webora', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070913]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogo
            size="md"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="nav-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-400/60 rounded-full transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-get-website-btn"
              onClick={onOpenForm}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-full shadow-lg shadow-sky-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              <span>GET MY WEBSITE</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenForm}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-purple-600 rounded-full shadow-md shadow-sky-500/20"
            >
              Get Website
            </button>
            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-xl"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070913]/98 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2.5 text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-850 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 rounded-xl"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp (+91 90194 18535)
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-sky-500/30"
              >
                <span>GET MY WEBSITE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Quick turnaround • 100% Mobile Ready</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

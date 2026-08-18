import React, { useState } from 'react';
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Zap,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ExternalLink,
  Laptop,
  Tablet,
  ChevronRight,
  Star,
  Search,
} from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  const whatsappMessage = encodeURIComponent(
    'Hi Webora Web, I’m interested in getting a website for my business.'
  );
  const whatsappUrl = `https://wa.me/919019418535?text=${whatsappMessage}`;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow-hero"
    >
      {/* Background Decorative Tech Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-sky-600/15 via-indigo-600/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Trust Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            <span>Webora Web • Digital Growth & Website Development</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] mb-6 font-['Outfit']">
            YOUR CUSTOMERS ARE{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent underline decoration-sky-500/40 decoration-wavy decoration-2">
              ONLINE.
            </span>
            <br />
            ARE{' '}
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              YOU?
            </span>
          </h1>

          {/* Psychological Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 tracking-tight mb-4 font-['Outfit']">
            Your business deserves to be found, trusted and remembered.
          </p>

          {/* Supporting paragraph */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
            We create modern, professional, mobile-responsive websites that help small and local businesses
            build instant credibility, outshine competitors, attract high-paying customers, and grow online.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <button
              id="hero-primary-cta"
              onClick={onOpenForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-sky-500/30 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
            >
              <Sparkles className="w-5 h-5 text-sky-200 group-hover:rotate-12 transition-transform" />
              <span>GET MY WEBSITE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="hero-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 hover:border-emerald-400 rounded-2xl shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>

          {/* 4 Key Pillars Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
            <div className="glass-card p-3.5 sm:p-4 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                <Globe className="w-4 h-4 sm:w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Modern Websites</p>
                <p className="text-[11px] text-slate-400">Tailored to your brand</p>
              </div>
            </div>

            <div className="glass-card p-3.5 sm:p-4 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <Zap className="w-4 h-4 sm:w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Fast Delivery</p>
                <p className="text-[11px] text-slate-400">Quick turnaround</p>
              </div>
            </div>

            <div className="glass-card p-3.5 sm:p-4 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <Smartphone className="w-4 h-4 sm:w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Mobile Responsive</p>
                <p className="text-[11px] text-slate-400">Flawless on all screens</p>
              </div>
            </div>

            <div className="glass-card p-3.5 sm:p-4 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Clean Code</p>
                <p className="text-[11px] text-slate-400">SEO & WhatsApp Ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Realistic Mockup Visual Container */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          {/* Outer Glowing Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-sky-500/30 via-purple-500/20 to-transparent shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
            <div className="bg-[#0b0f1d] rounded-[18px] sm:rounded-[22px] border border-slate-800/80 overflow-hidden">
              {/* Browser Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1326] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-400 text-xs w-full max-w-md justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-300 font-mono text-[11px]">https://yourbusiness.com</span>
                  <span className="text-emerald-400 text-[10px] font-semibold bg-emerald-950/60 px-1.5 py-0.2 rounded">
                    SSL SECURED
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveDevice('desktop')}
                    className={`p-1.5 rounded-lg text-xs transition-colors ${
                      activeDevice === 'desktop'
                        ? 'bg-sky-500/20 text-sky-300'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title="Desktop Preview"
                  >
                    <Laptop className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveDevice('mobile')}
                    className={`p-1.5 rounded-lg text-xs transition-colors ${
                      activeDevice === 'mobile'
                        ? 'bg-sky-500/20 text-sky-300'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Inside Realistic Business Website Simulation */}
              <div className="p-4 sm:p-8 bg-gradient-to-b from-[#090e20] to-[#060a14] min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
                {/* Website Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                      YB
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">Your Business Brand</p>
                      <p className="text-[10px] text-slate-400">Local Authority • Verified</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-6 text-xs text-slate-300 font-medium">
                    <span className="text-sky-400">Home</span>
                    <span className="hover:text-white cursor-pointer">Services</span>
                    <span className="hover:text-white cursor-pointer">Customer Reviews</span>
                    <span className="hover:text-white cursor-pointer">About Us</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Open Now
                    </span>
                    <button
                      onClick={onOpenForm}
                      className="px-3.5 py-1.5 text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 rounded-lg shadow-md transition-all"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>

                {/* Website Simulated Hero Banner */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
                  <div className="lg:col-span-7 text-left space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30 text-sky-300 text-[11px] font-semibold">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>4.9 / 5.0 Rating • 280+ Verified Customers</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight font-['Outfit']">
                      Transform Your Experience with Premium Professional Care
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Trusted by thousands of local clients. Instant direct bookings, verified pricing,
                      and 24/7 WhatsApp consultation support.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>100% Guaranteed</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                        <span>Same-Day WhatsApp Reply</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 shadow-xl text-left space-y-3">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                        <span className="font-bold text-white">Live Customer Inquiry</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Just Now</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/60 flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                            WA
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200 text-[11px]">“Hi, I saw your website and want to schedule an appointment today!”</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">— Verified Customer from Google</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-400">Conversion Impact</span>
                        <span className="text-xs font-bold text-emerald-400">+340% More Inquiries</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Google Search Optimized
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Ultra-Fast Loading (&lt; 0.8s)
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Designed & Engineered by Webora Web</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Conversion Badges */}
          <div className="hidden md:flex absolute -bottom-6 -left-6 glass-card p-3.5 rounded-2xl border border-sky-500/30 shadow-2xl items-center gap-3 animate-bounce duration-1000">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-white">99+ Google Speed Score</p>
              <p className="text-[11px] text-emerald-400 font-semibold">Loads instantly on any phone</p>
            </div>
          </div>

          <div className="hidden md:flex absolute -top-6 -right-6 glass-card p-3.5 rounded-2xl border border-purple-500/30 shadow-2xl items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-white">Direct WhatsApp Leads</p>
              <p className="text-[11px] text-purple-300 font-semibold">Zero lost customer inquiries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

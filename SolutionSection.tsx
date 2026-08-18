import React from 'react';
import {
  Briefcase,
  Smartphone,
  Layout,
  Zap,
  MessageSquare,
  Search,
  Target,
  Inbox,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface SolutionSectionProps {
  onOpenForm: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenForm }) => {
  const solutions = [
    {
      id: 'professional-sites',
      icon: Briefcase,
      title: 'Professional Business Websites',
      description: 'Clean, elegant, credible design tailored to your specific industry and brand identity.',
      tag: 'Bespoke Design',
      color: 'from-sky-500/20 to-sky-500/5 text-sky-400 border-sky-500/30',
    },
    {
      id: 'mobile-responsive',
      icon: Smartphone,
      title: 'Mobile-Responsive Websites',
      description: 'Pixel-perfect fluid layouts that look and function smoothly on every smartphone, tablet, and laptop.',
      tag: '100% Responsive',
      color: 'from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/30',
    },
    {
      id: 'modern-ui-ux',
      icon: Layout,
      title: 'Modern UI / UX Architecture',
      description: 'Intuitive navigation, high-contrast readable typography, and effortless user flow designed for conversions.',
      tag: 'Zero Friction',
      color: 'from-indigo-500/20 to-indigo-500/5 text-indigo-400 border-indigo-500/30',
    },
    {
      id: 'fast-loading',
      icon: Zap,
      title: 'Fast-Loading Pages',
      description: 'Optimized assets and lightweight clean code ensuring lightning-fast load times under 1 second.',
      tag: 'Ultra Fast',
      color: 'from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/30',
    },
    {
      id: 'whatsapp-buttons',
      icon: MessageSquare,
      title: 'Clear Contact & WhatsApp Buttons',
      description: 'Prominently placed 1-click WhatsApp, call, and email buttons turning casual readers into immediate inquiries.',
      tag: 'Instant Chat',
      color: 'from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30',
    },
    {
      id: 'seo-structure',
      icon: Search,
      title: 'SEO-Friendly Structure',
      description: 'Structured semantic metadata, fast tags, and local search optimization so customers find you on Google.',
      tag: 'Search Ready',
      color: 'from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/30',
    },
    {
      id: 'business-focused',
      icon: Target,
      title: 'Business-Focused Layouts',
      description: 'Strategically structured sections built to communicate value, answer questions, and prompt buying actions.',
      tag: 'High Conversion',
      color: 'from-fuchsia-500/20 to-fuchsia-500/5 text-fuchsia-400 border-fuchsia-500/30',
    },
    {
      id: 'enquiry-systems',
      icon: Inbox,
      title: 'Easy Customer Enquiry Systems',
      description: 'Interactive lead forms with automated WhatsApp routing and optional Google Sheets storage for zero lost leads.',
      tag: 'Lead Capture',
      color: 'from-cyan-500/20 to-cyan-500/5 text-cyan-400 border-cyan-500/30',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-[#090d1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Webora Web Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 font-['Outfit']">
            WE MAKE YOUR BUSINESS LOOK AS GOOD ONLINE AS IT DOES IN{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              REAL LIFE.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Every website we build is custom-engineered to elevate your brand reputation, highlight your real-world
            strengths, and make customer contact effortless.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 font-['Outfit'] group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-sky-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Included Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>GET A WEBSITE FOR YOUR BUSINESS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

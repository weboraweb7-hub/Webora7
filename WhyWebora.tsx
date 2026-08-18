import React from 'react';
import {
  Palette,
  Smartphone,
  Zap,
  Target,
  MessageCircle,
  PiggyBank,
  Check,
  X,
  ShieldCheck,
  ArrowRight,
  Star,
} from 'lucide-react';

interface WhyWeboraProps {
  onOpenForm: () => void;
}

export const WhyWebora: React.FC<WhyWeboraProps> = ({ onOpenForm }) => {
  const pillars = [
    {
      icon: Palette,
      title: 'Modern Design',
      tagline: 'Stand Out Elegantly',
      description: 'Professional layouts designed to make your business stand out in a sea of generic competitors.',
      color: 'from-sky-500/20 to-sky-500/5 text-sky-400 border-sky-500/30',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      tagline: 'Flawless on Every Screen',
      description: 'Your website looks great and functions smoothly on phones, tablets and computers without distortion.',
      color: 'from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/30',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      tagline: 'Quick Turnaround',
      description: 'Simple websites can be designed, reviewed, and delivered quickly without months of agonizing delays.',
      color: 'from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/30',
    },
    {
      icon: Target,
      title: 'Business Focused',
      tagline: 'Engineered for Inquiries',
      description: 'Every section is specifically designed around your target customers and generating real inquiries.',
      color: 'from-rose-500/20 to-rose-500/5 text-rose-400 border-rose-500/30',
    },
    {
      icon: MessageCircle,
      title: 'Direct Contact',
      tagline: 'Frictionless Communication',
      description: 'Make it effortlessly easy for customers to contact you through WhatsApp, direct phone call, or email.',
      color: 'from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30',
    },
    {
      icon: PiggyBank,
      title: 'Affordable',
      tagline: 'High Value, Low Overhead',
      description: 'Professional websites tailored to your budget without unnecessary bloated complexity or hidden costs.',
      color: 'from-indigo-500/20 to-indigo-500/5 text-indigo-400 border-indigo-500/30',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Tailored for Small & Local Businesses',
      webora: true,
      diyBuilders: 'Generic templates',
      traditionalAgency: 'Expensive enterprise bloat',
    },
    {
      feature: 'Built-in 1-Click WhatsApp Lead Routing',
      webora: true,
      diyBuilders: false,
      traditionalAgency: 'Complex plugins (₹₹₹)',
    },
    {
      feature: 'Mobile-First Optimization & Sub-Second Speeds',
      webora: true,
      diyBuilders: 'Often slow & bloated',
      traditionalAgency: true,
    },
    {
      feature: 'Clear, Transparent & Affordable Pricing',
      webora: true,
      diyBuilders: 'Recurring hidden fees',
      traditionalAgency: 'Very high retainers',
    },
    {
      feature: 'Fast 4-Step Delivery Process',
      webora: true,
      diyBuilders: 'Steep learning curve',
      traditionalAgency: '3–6 months delays',
    },
    {
      feature: 'Zero Fake Promises / 100% Real Guidance',
      webora: true,
      diyBuilders: false,
      traditionalAgency: false,
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 relative bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Webora Web Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4 font-['Outfit']">
            WHY BUSINESSES CHOOSE{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              WEBORA WEB
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            We bridge the gap between expensive big-city agencies and complicated DIY builders by delivering
            clean, trustworthy, high-performing websites built for results.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-slate-800/80 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 font-['Outfit'] group-hover:text-sky-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-bold text-sky-400 mb-3 uppercase tracking-wider">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Guaranteed Quality</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 bg-slate-900/80 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                How Webora Web Compares
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                A modern solution designed specifically for businesses that want professional results without complexity.
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
              ✓ Tailored for Small Businesses
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60">
                  <th className="py-4 px-6 font-semibold">Key Capabilities</th>
                  <th className="py-4 px-6 font-bold text-sky-400 bg-sky-950/30 border-x border-sky-500/20">
                    Webora Web
                  </th>
                  <th className="py-4 px-6 font-medium text-slate-400">DIY Builders (Wix/WP)</th>
                  <th className="py-4 px-6 font-medium text-slate-400">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-200">{row.feature}</td>
                    <td className="py-4 px-6 bg-sky-950/20 border-x border-sky-500/20 font-bold text-sky-300">
                      {row.webora === true ? (
                        <div className="flex items-center gap-2 text-emerald-400 font-bold">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Included</span>
                        </div>
                      ) : (
                        row.webora
                      )}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {row.diyBuilders === false ? (
                        <X className="w-4 h-4 text-rose-400" />
                      ) : (
                        row.diyBuilders
                      )}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {row.traditionalAgency === true ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : row.traditionalAgency === false ? (
                        <X className="w-4 h-4 text-rose-400" />
                      ) : (
                        row.traditionalAgency
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>GET MY PROFESSIONAL WEBSITE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

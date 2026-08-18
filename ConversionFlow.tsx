import React, { useState } from 'react';
import {
  Users,
  Layout,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

interface ConversionFlowProps {
  onOpenForm: () => void;
}

export const ConversionFlow: React.FC<ConversionFlowProps> = ({ onOpenForm }) => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      step: '01',
      title: 'Visitor',
      subtitle: 'Searching for local solutions',
      description: 'A potential client searches Google, Instagram, or Maps looking for trusted services in your area.',
      icon: Users,
      color: 'from-sky-500/20 to-sky-500/5 text-sky-400 border-sky-500/40',
      badge: 'Targeted Traffic',
    },
    {
      step: '02',
      title: 'Website',
      subtitle: 'Instant modern first impression',
      description: 'They land on your lightning-fast, beautifully branded Webora Web design that looks established and elite.',
      icon: Layout,
      color: 'from-indigo-500/20 to-indigo-500/5 text-indigo-400 border-indigo-500/40',
      badge: 'Sub-second Load',
    },
    {
      step: '03',
      title: 'Trust',
      subtitle: 'Confidence & credibility built',
      description: 'Clear pricing, authentic photos, verified services, and strong proofs eliminate hesitation and doubt.',
      icon: ShieldCheck,
      color: 'from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/40',
      badge: 'Zero Doubt',
    },
    {
      step: '04',
      title: 'Enquiry',
      subtitle: 'Frictionless direct contact',
      description: 'With 1-click WhatsApp buttons and clean inquiry forms, the visitor effortlessly reaches out to you.',
      icon: MessageSquare,
      color: 'from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/40',
      badge: 'Instant Lead',
    },
    {
      step: '05',
      title: 'Customer',
      subtitle: 'Revenue & long-term growth',
      description: 'You close the deal and welcome a happy paying customer who refers others and leaves 5-star feedback.',
      icon: Sparkles,
      color: 'from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/40',
      badge: 'Business Growth',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#090d1d] border-y border-slate-800/80 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-600/10 via-purple-600/10 to-emerald-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>The Psychology of Conversion</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4 font-['Outfit']">
            A WEBSITE ISN’T JUST A{' '}
            <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              DIGITAL CARD.
            </span>
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-sky-300 font-['Outfit']">
            It’s where your next customer decides whether to trust you.
          </p>
        </div>

        {/* 5-Step Visual Conversion Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isCurrent = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 border transition-all duration-300 relative flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-900/90 border-sky-400 shadow-xl shadow-sky-500/20 scale-105 z-10'
                    : 'glass-card border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500">{item.step}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 font-['Outfit']">{item.title}</h3>
                  <p className="text-xs font-semibold text-sky-300 mb-3">{item.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                    <ArrowRight className="w-5 h-5 text-sky-400/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Takeaway Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-['Outfit']">
              Every detail in a Webora Web build is calibrated for this pipeline.
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We remove every ounce of friction between customer discovery and closed business.
            </p>
          </div>

          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-purple-600 rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
          >
            <span>Start Converting More Visitors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SearchX, ShieldAlert, UserMinus, Sparkle, AlertCircle, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onOpenForm: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenForm }) => {
  const problems = [
    {
      id: 'hard-to-find',
      icon: SearchX,
      title: 'Hard to Find',
      description: 'Customers searching online may not find your business.',
      detail:
        'When local buyers search Google or Maps for services in your area, businesses without a website are practically invisible.',
      accent: 'border-sky-500/30 hover:border-sky-400/60',
      iconColor: 'text-sky-400 bg-sky-500/10',
    },
    {
      id: 'less-trust',
      icon: ShieldAlert,
      title: 'Less Trust',
      description: 'A professional online presence can make your business look more established.',
      detail:
        'Without a dedicated website, modern consumers may hesitate, question your legitimacy, or look for businesses with verified proof.',
      accent: 'border-purple-500/30 hover:border-purple-400/60',
      iconColor: 'text-purple-400 bg-purple-500/10',
    },
    {
      id: 'lost-opportunities',
      icon: UserMinus,
      title: 'Lost Opportunities',
      description: 'Customers may move to competitors who are easier to find online.',
      detail:
        'Every day a customer cannot easily view your offerings, hours, or WhatsApp contact, that revenue flows straight to competitors.',
      accent: 'border-rose-500/30 hover:border-rose-400/60',
      iconColor: 'text-rose-400 bg-rose-500/10',
    },
    {
      id: 'first-impressions',
      icon: Sparkle,
      title: 'First Impressions Matter',
      description: 'Your website can become your business’s digital first impression.',
      detail:
        'In today’s digital era, your website is often the very first handshake with a prospective client before they ever step into your store or call.',
      accent: 'border-indigo-500/30 hover:border-indigo-400/60',
      iconColor: 'text-indigo-400 bg-indigo-500/10',
    },
  ];

  return (
    <section id="problems" className="py-20 sm:py-28 relative bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Overcoming Hidden Barriers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-['Outfit']">
            WITHOUT A WEBSITE, YOU MAY BE{' '}
            <span className="bg-gradient-to-r from-rose-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
              LOSING CUSTOMERS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            Consumer buying habits have changed permanently. Having no web presence or an outdated page
            silently costs your business inquiries every single week.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.id}
                className={`glass-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 group flex flex-col justify-between ${problem.accent}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${problem.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-['Outfit'] group-hover:text-sky-300 transition-colors">
                    {problem.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-300 mb-3 leading-snug">
                    {problem.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {problem.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span>Webora Solves This</span>
                  <span className="text-sky-400 font-bold">100% Fixed →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-base font-bold text-white">Don’t let your competitors take your customers.</p>
            <p className="text-xs text-slate-400">Get a modern, fast, professional website engineered by Webora Web.</p>
          </div>
          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-all shadow-md shrink-0"
          >
            <span>Stop Losing Customers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

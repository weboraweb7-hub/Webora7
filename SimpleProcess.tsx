import React from 'react';
import { FileText, Palette, CheckSquare, Rocket, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface SimpleProcessProps {
  onOpenForm: () => void;
}

export const SimpleProcess: React.FC<SimpleProcessProps> = ({ onOpenForm }) => {
  const steps = [
    {
      number: '01',
      title: 'TELL US ABOUT YOUR BUSINESS',
      shortDesc: 'Submit your business details.',
      details: 'Fill out our quick 60-second form with your business name, services, and website goals.',
      icon: FileText,
      duration: 'Step 1 • Instant',
      color: 'from-sky-500/20 to-sky-500/5 text-sky-400 border-sky-500/40',
    },
    {
      number: '02',
      title: 'WE DESIGN',
      shortDesc: 'We create a website concept around your business.',
      details: 'Our team crafts a custom, mobile-optimized, high-converting design tailored to your industry.',
      icon: Palette,
      duration: 'Step 2 • Rapid Design',
      color: 'from-indigo-500/20 to-indigo-500/5 text-indigo-400 border-indigo-500/40',
    },
    {
      number: '03',
      title: 'YOU REVIEW',
      shortDesc: 'You provide feedback and approve the website.',
      details: 'Test your interactive preview, request any adjustments, and make sure you love every detail.',
      icon: CheckSquare,
      duration: 'Step 3 • 100% Satisfaction',
      color: 'from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/40',
    },
    {
      number: '04',
      title: 'GO LIVE',
      shortDesc: 'Your business gets its professional online presence.',
      details: 'We launch your website live with SSL, Google SEO setup, and WhatsApp lead buttons ready to receive clients.',
      icon: Rocket,
      duration: 'Step 4 • Ready for Customers',
      color: 'from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/40',
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 relative bg-[#090d1d] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Effortless 4-Step Journey</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4 font-['Outfit']">
            SIMPLE, TRANSPARENT{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              PROCESS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Getting your business online should be exciting and easy. Here is how we take you from idea to live website.
          </p>
        </div>

        {/* Timeline Layout (Desktop Horizontal / Mobile Vertical) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 relative flex flex-col justify-between group hover:border-sky-500/40 transition-all duration-300"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-['Outfit'] text-2xl font-black bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                      {step.duration}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white mb-2 font-['Outfit'] tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-sky-300 mb-2">
                    {step.shortDesc}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {step.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Webora Managed</span>
                  <span className="text-sky-400 font-bold">Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 max-w-3xl mx-auto text-center space-y-4">
          <h4 className="text-xl font-bold text-white font-['Outfit']">
            Ready to start Step 01?
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Share your business details today and get a tailored concept and pricing roadmap within hours.
          </p>
          <div>
            <button
              onClick={onOpenForm}
              className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>START STEP 01 NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MessageSquare, Mail, Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface FinalCtaProps {
  onOpenForm: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenForm }) => {
  const whatsappUrl =
    'https://wa.me/919019418535?text=Hi%20Webora%20Web%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business.';

  const emailSubject = encodeURIComponent('Website Enquiry — Webora Web');
  const emailBody = encodeURIComponent(
    'Hi Webora Web, I’m interested in getting a website for my business. Please share the details and pricing.'
  );
  const emailUrl = `mailto:weboraweb7@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="py-20 sm:py-28 relative bg-gradient-to-b from-[#070913] via-[#0b1022] to-[#070913] border-t border-slate-800/80 overflow-hidden">
      {/* Background glowing sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-600/15 via-purple-600/20 to-pink-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-sky-500/30 shadow-2xl relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Take Action Today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4 font-['Outfit']">
            READY TO GET YOUR BUSINESS{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              ONLINE?
            </span>
          </h2>

          <p className="text-lg sm:text-2xl font-bold text-sky-300 mb-8 font-['Outfit']">
            Your next customer could already be searching for you.
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Do not let another day go by losing potential clients to your competitors.
            Reach out right now for a tailored quote and consultation.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8">
            <a
              id="final-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-2xl shadow-xl shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>WHATSAPP US</span>
            </a>

            <a
              id="final-email-btn"
              href={emailUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-5 h-5 text-sky-400" />
              <span>EMAIL US</span>
            </a>
          </div>

          {/* Direct Credentials info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp: <strong>+91 90194 18535</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-sky-400" /> Email: <strong>weboraweb7@gmail.com</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

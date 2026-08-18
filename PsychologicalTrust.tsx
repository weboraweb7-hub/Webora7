import React from 'react';
import {
  Search,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  XCircle,
  Eye,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';

interface PsychologicalTrustProps {
  onOpenForm: () => void;
}

export const PsychologicalTrust: React.FC<PsychologicalTrustProps> = ({ onOpenForm }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0a0e1c] border-y border-slate-800/80 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-sky-600/10 via-purple-600/10 to-indigo-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Statement Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-5">
            <Search className="w-3.5 h-3.5 text-purple-400" />
            <span>The Reality of Modern Business</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] mb-4 font-['Outfit']">
            YOUR NEXT CUSTOMER IS{' '}
            <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              SEARCHING FOR YOU.
            </span>
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-6 font-['Outfit']">
            Will they find your business — or your competitor?
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Today, customers search online before deciding where to buy, visit or contact a business.
            A professional website gives your business credibility and makes it easier for customers to choose you.
          </p>
        </div>

        {/* High-Impact Visual Comparison: Lost Customers vs Winning Customers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Scenario 1: Without a Professional Website */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-rose-500/20 bg-gradient-to-b from-rose-950/10 to-slate-900/40 relative overflow-hidden">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Without a Website</h3>
                  <p className="text-xs text-rose-400 font-medium">Invisible to 80%+ of online searchers</p>
                </div>
              </div>
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-500/30 rounded-full">
                Lost Revenue
              </span>
            </div>

            <div className="space-y-4 my-6 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Customer searches online:</strong> Your business does not show up or has an outdated directory listing.
                </span>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Lack of trust:</strong> Prospective customers wonder if you are still open, legitimate, or active.
                </span>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Competitor takes the sale:</strong> They click on your competitor who has a clean website and easy WhatsApp button.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 bg-rose-950/20 -mx-6 -mb-6 p-4 px-6 text-xs text-rose-300 font-medium flex items-center justify-between">
              <span>Result: Daily lost phone calls and walk-in clients</span>
              <span className="font-bold">❌ High Opportunity Cost</span>
            </div>
          </div>

          {/* Scenario 2: With Webora Web */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-sky-500/40 bg-gradient-to-b from-sky-950/20 via-slate-900/60 to-purple-950/20 relative overflow-hidden shadow-xl shadow-sky-950/20">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">With Webora Web</h3>
                  <p className="text-xs text-sky-400 font-medium">Instant credibility & 24/7 lead conversion</p>
                </div>
              </div>
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 border border-sky-500/40 rounded-full">
                Maximum Trust
              </span>
            </div>

            <div className="space-y-4 my-6 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Instant first impression:</strong> A fast, beautiful website displays your photos, services, and credentials.
                </span>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Unshakable credibility:</strong> Customers feel confident choosing you over competitors with no web presence.
                </span>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Frictionless contact:</strong> Direct WhatsApp link and phone calls turn curious visitors into paying customers.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 bg-sky-950/30 -mx-6 -mb-6 p-4 px-6 text-xs text-sky-300 font-medium flex items-center justify-between">
              <span>Result: Sustainable growth and higher customer lifetime value</span>
              <span className="font-bold text-emerald-400">✓ 24/7 Automated Growth</span>
            </div>
          </div>
        </div>

        {/* Section Call to Action */}
        <div className="text-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>GET MY BUSINESS ONLINE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

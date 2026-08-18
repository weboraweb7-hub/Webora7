import React, { useState } from 'react';
import { MessageSquare, Sparkles, X, Phone, ArrowRight } from 'lucide-react';

interface FloatingContactProps {
  onOpenForm: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl =
    'https://wa.me/919019418535?text=Hi%20Webora%20Web%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Drawer */}
      {isOpen && (
        <div className="glass-card rounded-2xl p-5 border border-sky-500/30 shadow-2xl w-72 mb-2 animate-fadeIn text-left">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Webora Web Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 my-3 leading-relaxed">
            Ready to grow your business online? Chat with our lead web strategist right now.
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenForm();
              }}
              className="w-full py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-purple-600 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Website Details</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-semibold shadow-xl hover:text-white hover:border-sky-400 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Chat with us</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Open quick contact options"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7" />}
        </button>
      </div>
    </div>
  );
};

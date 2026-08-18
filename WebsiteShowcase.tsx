import React, { useState } from 'react';
import { SHOWCASE_DATA } from '../data/mockupsData';
import { WebsiteShowcaseItem } from '../types';
import {
  Laptop,
  Smartphone,
  Tablet,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  Eye,
  Utensils,
  Flame,
  Wine,
  Heart,
  Crown,
  Building,
  Compass,
  TrendingUp,
  Hammer,
  Layers,
  Users,
  Target,
  BookOpen,
  Activity,
  Smile,
  Clock,
  PhoneCall,
  MessageSquare,
} from 'lucide-react';

interface WebsiteShowcaseProps {
  onOpenForm: () => void;
}

export const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({ onOpenForm }) => {
  const [selectedNicheId, setSelectedNicheId] = useState<string>('restaurant');
  const [activeDevice, setActiveDevice] = useState<'laptop' | 'tablet' | 'mobile'>('laptop');
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  const currentItem: WebsiteShowcaseItem =
    SHOWCASE_DATA.find((item) => item.id === selectedNicheId) || SHOWCASE_DATA[0];

  // Helper icon resolver
  const renderCardIcon = (iconName: string) => {
    const iconProps = { className: 'w-4 h-4' };
    switch (iconName) {
      case 'Utensils': return <Utensils {...iconProps} />;
      case 'Flame': return <Flame {...iconProps} />;
      case 'Wine': return <Wine {...iconProps} />;
      case 'Sparkles': return <Sparkles {...iconProps} />;
      case 'Heart': return <Heart {...iconProps} />;
      case 'Crown': return <Crown {...iconProps} />;
      case 'Building': return <Building {...iconProps} />;
      case 'Compass': return <Compass {...iconProps} />;
      case 'TrendingUp': return <TrendingUp {...iconProps} />;
      case 'Hammer': return <Hammer {...iconProps} />;
      case 'Layers': return <Layers {...iconProps} />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'Target': return <Target {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'Activity': return <Activity {...iconProps} />;
      case 'Smile': return <Smile {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section id="showcase" className="py-20 sm:py-28 relative bg-[#070913] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-indigo-500/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Industry Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4 font-['Outfit']">
            IMAGINE YOUR BUSINESS{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              HERE.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            We design your website around your business, your customers and your goals.
          </p>
        </div>

        {/* Niche Category Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {SHOWCASE_DATA.map((item) => {
            const isActive = item.id === selectedNicheId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedNicheId(item.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {item.category.split('&')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Device Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              {currentItem.title}
            </span>
            <span className="hidden md:inline text-xs text-slate-400 font-normal">
              — {currentItem.tagline}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium mr-1">Preview Screen:</span>
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveDevice('laptop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeDevice === 'laptop'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Laptop</span>
              </button>
              <button
                onClick={() => setActiveDevice('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeDevice === 'tablet'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setActiveDevice('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeDevice === 'mobile'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Responsive Mockup Display Stage */}
        <div className="flex justify-center mb-10 transition-all duration-300">
          {/* Laptop View */}
          {activeDevice === 'laptop' && (
            <div className="w-full max-w-5xl rounded-2xl bg-[#0e1324] border border-slate-700/80 shadow-2xl overflow-hidden transition-all">
              {/* Laptop Header */}
              <div className="bg-[#12182d] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="bg-slate-900 border border-slate-700/60 px-4 py-1 rounded-full text-slate-300 text-xs font-mono flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>https://{currentItem.id}.yourbrand.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span>99+ Speed Score</span>
                </div>
              </div>

              {/* Mockup Canvas */}
              <div className="p-6 sm:p-10 bg-gradient-to-b from-[#0a0f22] via-[#060a16] to-[#040710] min-h-[460px] text-left">
                {/* Brand Navigation */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 to-purple-600 flex items-center justify-center font-black text-white text-sm shadow-md">
                      {currentItem.title.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base leading-none">{currentItem.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1">{currentItem.category}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
                    {currentItem.desktopMockup.navItems.map((item, idx) => (
                      <span
                        key={item}
                        className={idx === 0 ? 'text-sky-400 font-bold' : 'hover:text-white cursor-pointer'}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenForm}
                    className="px-4 py-2 text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 rounded-lg shadow-md transition-all"
                  >
                    {currentItem.desktopMockup.ctaText}
                  </button>
                </div>

                {/* Hero Inside Mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-sky-300 text-xs font-semibold border border-sky-500/30">
                      {currentItem.desktopMockup.badge}
                    </span>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight font-['Outfit']">
                      {currentItem.desktopMockup.heroTitle}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {currentItem.desktopMockup.heroSubtitle}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={onOpenForm}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md hover:opacity-95"
                      >
                        {currentItem.desktopMockup.ctaText}
                      </button>
                      <a
                        href={`https://wa.me/919019418535?text=${encodeURIComponent(
                          `Hi Webora Web, I saw the ${currentItem.category} demo and want a website like this!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/50 inline-flex items-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Direct WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                      <img
                        src={currentItem.heroImage}
                        alt={currentItem.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <div className="flex items-center justify-between w-full text-xs text-white">
                          <span className="font-semibold">Verified High-Converting UX</span>
                          <span className="text-emerald-400 font-bold">100% Custom</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Showcase Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                  {currentItem.desktopMockup.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                          {renderCardIcon(card.icon)}
                        </div>
                        {card.meta && (
                          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                            {card.meta}
                          </span>
                        )}
                      </div>
                      <h5 className="font-bold text-white text-sm">{card.title}</h5>
                      <p className="text-xs text-slate-400 leading-normal">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tablet View */}
          {activeDevice === 'tablet' && (
            <div className="w-full max-w-2xl rounded-3xl bg-[#0e1324] border-4 border-slate-700 shadow-2xl p-4 transition-all">
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-6 text-left">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                      {currentItem.title.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-bold text-white text-sm">{currentItem.title}</span>
                  </div>
                  <button
                    onClick={onOpenForm}
                    className="px-3 py-1.5 text-xs font-bold text-white bg-sky-500 rounded-lg"
                  >
                    {currentItem.desktopMockup.ctaText}
                  </button>
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded-full border border-sky-500/30">
                    {currentItem.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {currentItem.desktopMockup.heroTitle}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {currentItem.desktopMockup.heroSubtitle}
                  </p>
                </div>

                <img
                  src={currentItem.heroImage}
                  alt={currentItem.title}
                  className="w-full h-48 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {currentItem.desktopMockup.cards.slice(0, 2).map((card, idx) => (
                    <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <p className="text-xs font-bold text-white">{card.title}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile View */}
          {activeDevice === 'mobile' && (
            <div className="w-full max-w-sm rounded-[36px] bg-[#0c1020] border-8 border-slate-800 shadow-2xl p-3 relative transition-all">
              {/* Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2" />

              <div className="bg-slate-900 rounded-[24px] p-4 border border-slate-800 space-y-4 text-left">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-400 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                      {currentItem.title.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-bold text-white text-xs truncate max-w-[120px]">
                      {currentItem.title}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 text-[10px] font-bold rounded">
                    Open
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-black text-white leading-tight">
                    {currentItem.desktopMockup.heroTitle}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {currentItem.desktopMockup.heroSubtitle}
                  </p>
                </div>

                <img
                  src={currentItem.heroImage}
                  alt={currentItem.title}
                  className="w-full h-36 object-cover rounded-xl shadow-md"
                  referrerPolicy="no-referrer"
                />

                <div className="space-y-2 pt-1">
                  <button
                    onClick={onOpenForm}
                    className="w-full py-2.5 text-xs font-bold text-white bg-sky-500 rounded-xl shadow-md"
                  >
                    {currentItem.desktopMockup.ctaText}
                  </button>
                  <a
                    href={`https://wa.me/919019418535?text=${encodeURIComponent(
                      `Hi Webora Web, I want a mobile-first website for my ${currentItem.category} business!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Showcase Bottom Details & Metrics Bar */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <h4 className="text-lg font-bold text-white mb-1 font-['Outfit']">
              Why this layout converts
            </h4>
            <p className="text-xs text-slate-400">
              {currentItem.description}
            </p>
          </div>

          <div className="flex items-center justify-around gap-2 border-y md:border-y-0 md:border-x border-slate-800 py-4 md:py-0">
            {currentItem.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-lg sm:text-xl font-black text-sky-400 font-['Outfit']">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onOpenForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>BUILD MY WEBSITE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

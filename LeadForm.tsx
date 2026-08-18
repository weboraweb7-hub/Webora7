import React, { useState } from 'react';
import { LeadFormData } from '../types';
import {
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  Mail,
  Copy,
  Check,
  Building,
  User,
  Phone,
  Globe,
  DollarSign,
  HelpCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface LeadFormProps {
  onOpenGoogleSheetsModal: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onOpenGoogleSheetsModal }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessName: '',
    whatsappNumber: '',
    email: '',
    businessCategory: 'Retail / Local Store',
    currentWebsite: '',
    businessDescription: '',
    websiteType: 'Business Website',
    approximateBudget: 'Standard (₹15,000 - ₹35,000)',
    additionalRequirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const websiteTypes = [
    'Business Website',
    'Portfolio',
    'Restaurant / Cafe',
    'E-commerce Store',
    'Landing Page',
    'Other Custom Web',
  ];

  const businessCategories = [
    'Restaurant & Cafe',
    'Beauty Salon & Spa',
    'Real Estate & Property',
    'Construction & Contractor',
    'Healthcare & Dental Clinic',
    'Personal Brand & Coaching',
    'Legal & Financial Services',
    'Fitness & Gym',
    'Automotive & Detailing',
    'Other Local Business',
  ];

  const budgetRanges = [
    'Essential (₹8,000 - ₹15,000)',
    'Standard (₹15,000 - ₹35,000)',
    'Professional (₹35,000 - ₹75,000)',
    'Custom / Enterprise (₹75,000+)',
    'Flexible / Discuss on Call',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = (data: LeadFormData) => {
    return `WEBORA WEB — NEW WEBSITE ENQUIRY

Name: ${data.fullName || 'N/A'}
Business: ${data.businessName || 'N/A'}
WhatsApp: ${data.whatsappNumber || 'N/A'}
Email: ${data.email || 'N/A'}
Business Category: ${data.businessCategory || 'N/A'}
Website Type: ${data.websiteType || 'N/A'}
Budget: ${data.approximateBudget || 'N/A'}
Current Website: ${data.currentWebsite ? data.currentWebsite : 'None (Starting Fresh)'}
Business Description: ${data.businessDescription || 'N/A'}
Requirements: ${data.additionalRequirements ? data.additionalRequirements : 'Standard best practices'}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.fullName.trim()) {
      setError('Please provide your Full Name.');
      return;
    }
    if (!formData.businessName.trim()) {
      setError('Please provide your Business Name.');
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setError('Please provide your WhatsApp contact number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid business email address.');
      return;
    }
    if (!formData.businessDescription.trim()) {
      setError('Please tell us briefly what your business does.');
      return;
    }

    setLoading(true);

    try {
      // GitHub Pages is static hosting, so store the enquiry locally and
      // open a pre-filled WhatsApp message instead of calling /api/leads.
      const createdAt = new Date().toISOString();
      const existing = JSON.parse(localStorage.getItem('webora_leads') || '[]');
      existing.unshift({ ...formData, createdAt });
      localStorage.setItem('webora_leads', JSON.stringify(existing));

      const message = generateWhatsAppMessage(formData);
      window.open(
        `https://wa.me/919019418535?text=${encodeURIComponent(message)}`,
        '_blank',
        'noopener,noreferrer'
      );

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please contact us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappText = generateWhatsAppMessage(formData);
  const whatsappUrl = `https://wa.me/919019418535?text=${encodeURIComponent(whatsappText)}`;

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(whatsappText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#070913]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-sky-600/10 via-indigo-600/15 to-purple-600/15 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Get Started in 60 Seconds</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-['Outfit']">
            LET’S BUILD YOUR{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              ONLINE PRESENCE
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Tell us a little about your business. We’ll get back to you with the next steps.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Row 1: Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    1. Full Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    2. Business Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Studio & Spa"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: WhatsApp Number & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    3. WhatsApp Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="e.g. +91 90194 18535"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">We’ll prepare a direct WhatsApp summary</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    4. Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. contact@yourbrand.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">For formal quotes and design concepts</p>
                </div>
              </div>

              {/* Row 3: Business Category & Current Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    5. Business Category <span className="text-rose-400">*</span>
                  </label>
                  <select
                    name="businessCategory"
                    value={formData.businessCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
                  >
                    {businessCategories.map((cat) => (
                      <option key={cat} value={cat} className="bg-slate-900 text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    6. Current Website — <span className="text-slate-400 font-normal">Optional</span>
                  </label>
                  <input
                    type="url"
                    name="currentWebsite"
                    value={formData.currentWebsite}
                    onChange={handleChange}
                    placeholder="https://example.com (or leave empty)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: What does your business do? */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  7. What does your business do? <span className="text-rose-400">*</span>
                </label>
                <textarea
                  name="businessDescription"
                  rows={3}
                  value={formData.businessDescription}
                  onChange={handleChange}
                  placeholder="Describe your products, services, target customers, or what makes your business special..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              {/* Row 5: What type of website do you need? */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  8. What type of website do you need? <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {websiteTypes.map((type) => {
                    const isSelected = formData.websiteType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData((prev) => ({ ...prev, websiteType: type }))}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                          isSelected
                            ? 'bg-sky-500/20 border-sky-400 text-sky-200 shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {isSelected && '✓ '}
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 6: Approximate Budget & Additional Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    9. Approximate Budget
                  </label>
                  <select
                    name="approximateBudget"
                    value={formData.approximateBudget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
                  >
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} className="bg-slate-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    10. Additional Requirements — <span className="text-slate-400 font-normal">Optional</span>
                  </label>
                  <input
                    type="text"
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleChange}
                    placeholder="e.g. WhatsApp ordering, Google booking, bilingual..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-purple-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-sky-200" />
                      <span>GET MY WEBSITE DETAILS</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No spam • Direct agency consultation
                </span>
                <button
                  type="button"
                  onClick={onOpenGoogleSheetsModal}
                  className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Google Sheets Sync Ready</span>
                </button>
              </div>
            </form>
          ) : (
            /* Post-Submission Success Card with Structured WhatsApp Action */
            <div className="text-center py-6 sm:py-8 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                  Thank you! We’ve received your enquiry.
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Webora Web will contact you shortly. For the fastest response, send your details directly via WhatsApp below.
                </p>
              </div>

              {/* Structured Summary Preview Box */}
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 text-left max-w-lg mx-auto text-xs space-y-2 font-mono text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-sans font-bold text-sky-400">
                  <span>Structured Enquiry Summary</span>
                  <button
                    onClick={handleCopyDetails}
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p><span className="text-slate-500 font-sans font-semibold">Business:</span> {formData.businessName}</p>
                <p><span className="text-slate-500 font-sans font-semibold">Contact:</span> {formData.fullName} ({formData.whatsappNumber})</p>
                <p><span className="text-slate-500 font-sans font-semibold">Type & Budget:</span> {formData.websiteType} • {formData.approximateBudget}</p>
                <p><span className="text-slate-500 font-sans font-semibold">Details:</span> {formData.businessDescription}</p>
              </div>

              {/* Prominent WhatsApp Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>SEND DETAILS ON WHATSAPP</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-4 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-2xl transition-all"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

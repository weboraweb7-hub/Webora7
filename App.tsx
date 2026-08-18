/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PsychologicalTrust } from './components/PsychologicalTrust';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { WebsiteShowcase } from './components/WebsiteShowcase';
import { ConversionFlow } from './components/ConversionFlow';
import { WhyWebora } from './components/WhyWebora';
import { SimpleProcess } from './components/SimpleProcess';
import { LeadForm } from './components/LeadForm';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { GoogleSheetsIntegrationModal } from './components/GoogleSheetsIntegrationModal';

export default function App() {
  const [sheetsModalOpen, setSheetsModalOpen] = useState(false);

  const handleOpenLeadForm = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-cyan-500 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar onOpenForm={handleOpenLeadForm} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenForm={handleOpenLeadForm} />

        {/* Psychological Trust Transition */}
        <PsychologicalTrust onOpenForm={handleOpenLeadForm} />

        {/* Problem Section: Without a Website */}
        <ProblemSection onOpenForm={handleOpenLeadForm} />

        {/* Solution Section: We make your business look good online */}
        <SolutionSection onOpenForm={handleOpenLeadForm} />

        {/* Interactive Showcase Mockups */}
        <WebsiteShowcase onOpenForm={handleOpenLeadForm} />

        {/* Conversion Sequence Flow */}
        <ConversionFlow onOpenForm={handleOpenLeadForm} />

        {/* Why Webora Web & Comparisons */}
        <WhyWebora onOpenForm={handleOpenLeadForm} />

        {/* 4-Step Simple Process */}
        <SimpleProcess onOpenForm={handleOpenLeadForm} />

        {/* Lead Capture Form & WhatsApp Lead Generator */}
        <LeadForm onOpenGoogleSheetsModal={() => setSheetsModalOpen(true)} />

        {/* Final Conversion Section */}
        <FinalCta onOpenForm={handleOpenLeadForm} />
      </main>

      {/* Footer */}
      <Footer
        onOpenForm={handleOpenLeadForm}
        onOpenGoogleSheetsModal={() => setSheetsModalOpen(true)}
      />

      {/* Floating Instant Contact Widget */}
      <FloatingContact onOpenForm={handleOpenLeadForm} />

      {/* Google Sheets Integration & Code Modal */}
      <GoogleSheetsIntegrationModal
        isOpen={sheetsModalOpen}
        onClose={() => setSheetsModalOpen(false)}
      />
    </div>
  );
}

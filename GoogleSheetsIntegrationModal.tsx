import React, { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  Copy,
  Check,
  Download,
  ExternalLink,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { LeadFormData } from '../types';

interface GoogleSheetsIntegrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSheetsIntegrationModal: React.FC<GoogleSheetsIntegrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [leads, setLeads] = useState<LeadFormData[]>([]);
  const [copiedScript, setCopiedScript] = useState(false);
  const [activeTab, setActiveTab] = useState<'script' | 'leads'>('script');

  useEffect(() => {
    if (isOpen) {
      // GitHub Pages is static hosting, so leads are stored in this browser.
      try {
        const local = JSON.parse(localStorage.getItem('webora_leads') || '[]');
        setLeads(Array.isArray(local) ? local : []);
      } catch {
        setLeads([]);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const googleAppsScriptCode = `/**
 * Webora Web — Google Sheets Lead Capture Integration Script
 * 
 * 1. Open your Google Sheet
 * 2. Click Extensions > Apps Script
 * 3. Replace all code with this snippet and click Deploy > New Deployment
 * 4. Select Type: "Web App"
 * 5. Set "Execute as: Me" and "Who has access: Anyone"
 * 6. Copy the resulting Web App URL and paste into GOOGLE_SHEETS_WEBHOOK_URL in .env
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Business Name",
        "WhatsApp Number",
        "Email",
        "Business Category",
        "Current Website",
        "Website Type",
        "Budget",
        "Business Description",
        "Requirements"
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#0f172a").setFontColor("#38bdf8");
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.createdAt || new Date().toISOString(),
      data.fullName || "",
      data.businessName || "",
      data.whatsappNumber || "",
      data.email || "",
      data.businessCategory || "",
      data.currentWebsite || "None",
      data.websiteType || "",
      data.approximateBudget || "",
      data.businessDescription || "",
      data.additionalRequirements || ""
    ]);
    
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Lead saved successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(googleAppsScriptCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const handleDownloadCsv = () => {
    if (leads.length === 0) return;
    const headers = [
      'Timestamp',
      'Full Name',
      'Business Name',
      'WhatsApp Number',
      'Email',
      'Business Category',
      'Current Website',
      'Website Type',
      'Budget',
      'Business Description',
      'Requirements',
    ];

    const rows = leads.map((l) => [
      `"${l.createdAt || new Date().toISOString()}"`,
      `"${l.fullName || ''}"`,
      `"${l.businessName || ''}"`,
      `"${l.whatsappNumber || ''}"`,
      `"${l.email || ''}"`,
      `"${l.businessCategory || ''}"`,
      `"${l.currentWebsite || ''}"`,
      `"${l.websiteType || ''}"`,
      `"${l.approximateBudget || ''}"`,
      `"${(l.businessDescription || '').replace(/"/g, '""')}"`,
      `"${(l.additionalRequirements || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `webora_web_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0b1020] rounded-3xl border border-slate-700/80 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden text-left">
        {/* Header */}
        <div className="p-6 bg-[#0e1428] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Outfit']">
                Google Sheets Lead Storage Integration
              </h3>
              <p className="text-xs text-slate-400">
                Secure backend bridge • Zero exposed client API keys
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 px-6 pt-3 bg-slate-950/40 gap-4">
          <button
            onClick={() => setActiveTab('script')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'script'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            1-Click Apps Script Setup
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'leads'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Stored Enquiries</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-sky-300">
              {leads.length}
            </span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'script' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Ready-to-Deploy Google Apps Script Code
                </span>
                <button
                  onClick={handleCopyScript}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 text-xs font-semibold border border-sky-500/30"
                >
                  {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedScript ? 'Copied to Clipboard!' : 'Copy Script'}</span>
                </button>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300 max-h-60 overflow-y-auto leading-relaxed">
                <pre>{googleAppsScriptCode}</pre>
              </div>

              <div className="space-y-2 text-xs text-slate-400 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <p className="font-bold text-slate-200">How to activate in 60 seconds:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Create a new spreadsheet at <strong className="text-sky-400">sheets.new</strong>.</li>
                  <li>Click <strong className="text-slate-200">Extensions &gt; Apps Script</strong>.</li>
                  <li>Paste the code above, click <strong className="text-slate-200">Deploy &gt; New deployment</strong>, select <strong className="text-slate-200">Web App</strong>, and allow access to <strong className="text-slate-200">Anyone</strong>.</li>
                  <li>Paste the deployment URL into <code className="text-sky-300 bg-slate-950 px-1 py-0.5 rounded">GOOGLE_SHEETS_WEBHOOK_URL</code> in <code className="text-slate-300">.env</code>.</li>
                </ol>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Live Captured Leads ({leads.length})
                </span>
                {leads.length > 0 && (
                  <button
                    onClick={handleDownloadCsv}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-xs font-semibold border border-emerald-500/30"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CSV</span>
                  </button>
                )}
              </div>

              {leads.length === 0 ? (
                <div className="text-center py-10 bg-slate-950/60 rounded-xl border border-slate-800 text-slate-500 text-xs">
                  No enquiries received yet. Submit the lead form to test!
                </div>
              ) : (
                <div className="space-y-3">
                  {leads.map((lead, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">{lead.businessName}</span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {lead.createdAt ? new Date(lead.createdAt).toLocaleString() : 'Recent'}
                        </span>
                      </div>
                      <p className="text-slate-300">
                        <span className="text-slate-500">Contact:</span> {lead.fullName} • {lead.whatsappNumber} • {lead.email}
                      </p>
                      <p className="text-slate-300">
                        <span className="text-slate-500">Requirements:</span> {lead.websiteType} ({lead.approximateBudget}) — {lead.businessDescription}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0e1428] border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

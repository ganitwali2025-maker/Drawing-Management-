import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, HelpCircle, Send, CheckCircle2, ChevronDown, ShieldCheck, FileText } from 'lucide-react';
import { LandingHeader } from '../components/Navbar';

interface ContactViewProps {
  onLogin: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onLogin }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    department: 'Engineering Support',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        department: 'Engineering Support',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const faqs = [
    { q: 'How do I request access to the Drawing Index Register?', a: 'Authorized vendors and engineering partners can request access tokens through the project manager. Once approved, credentials will be sent to your registered email.' },
    { q: 'Are my engineering drawings encrypted in storage?', a: 'Yes. All drawing database connections use high-security SSL encryption, and files are stored in access-controlled environments in compliance with industrial guidelines.' },
    { q: 'How is revision control handled for updated drawings?', a: 'When an edited sheet is uploaded, our register automatically deprecates the previous file and creates a new revision entry (e.g. Rev 1) linked to the revision details.' },
    { q: 'Can I import drawings from Google Sheets directly?', a: 'Yes. The dashboard synchronizes in real-time with our Google Sheets API, allowing drawing lists to update instantly.' },
    { q: 'Who reviews and signs off on submitted designs?', a: 'The workflow routes submissions to the Lead Discipline Engineer, followed by the Chief Project Manager, before final approval is stamped on site execution blueprints.' }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#111827] flex flex-col selection:bg-[#5D8F2A]/20 selection:text-[#5D8F2A] antialiased relative overflow-hidden">
      {/* Premium background lighting effects */}
      <div className="absolute top-[-10%] right-[10%] w-[50%] h-[50%] rounded-full bg-[#5D8F2A]/[0.03] blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F97316]/[0.03] blur-[100px] pointer-events-none z-0"></div>

      {/* Header */}
      <LandingHeader onLogin={onLogin} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10 w-full">
        
        {/* Hero Section */}
        <section className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-8 flex-1 flex flex-col justify-start">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 relative">
            <div className="w-full lg:w-[55%] flex flex-col justify-start animate-in fade-in slide-in-from-bottom-8 duration-700">
              <span className="text-[12px] font-[800] text-[#5D8F2A] tracking-widest uppercase mb-3">Get in Touch</span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[50px] font-[800] text-[#111827] tracking-tight leading-[1.1] mb-4">
                Contact Engineering Team
              </h1>
              <p className="text-[16px] lg:text-[18px] text-[#4b5563] mb-4 leading-[1.6] font-medium">
                Have questions regarding structural indices, database syncs, or drawing revisions? Reach out to our technical department for engineering support.
              </p>
            </div>
            
            {/* Right Side: Illustration */}
            <div className="w-full lg:w-[42%] flex justify-end items-center pointer-events-none">
              <div className="relative w-full max-w-[500px] ml-auto p-4 bg-white/70 backdrop-blur-xl border border-slate-200 rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden">
                <div className="absolute inset-0 bg-radial from-[#5D8F2A]/5 to-transparent blur-2xl rounded-full -z-10"></div>
                <img 
                  src="/sketch-elec.png" 
                  alt="Engineering Diagram Schema" 
                  className="w-full h-auto object-contain opacity-90 scale-[1.05]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact coordinates & Form section */}
        <section className="bg-slate-50/50 border-t border-b border-slate-100 py-16">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col xl:flex-row gap-12">
              
              {/* Left Column: Form & Address Details */}
              <div className="w-full xl:w-[60%] flex flex-col gap-8">
                {/* Coordinates grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: MapPin, label: 'Office Address', value1: 'Refrasynth Minerals India Pvt Ltd', value2: 'Industrial Area, Odisha, India', color: 'text-[#5D8F2A]' },
                    { icon: Phone, label: 'Phone Number', value1: '+91 94370 00000', value2: 'Mon-Sat 9 AM - 6 PM', color: 'text-[#F97316]' },
                    { icon: Mail, label: 'Email Address', value1: 'support@passary.com', value2: 'engineering@refrasynth.com', color: 'text-[#5D8F2A]' },
                    { icon: Clock, label: 'Working Hours', value1: 'Monday - Saturday', value2: '09:00 AM - 06:00 PM IST', color: 'text-[#F97316]' }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-white border border-[#E8E8E8] p-5 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${card.color} flex-shrink-0`}>
                        <card.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-[12px] font-[800] text-slate-400 uppercase tracking-widest mb-1.5">{card.label}</h4>
                        <p className="text-[13px] font-bold text-slate-800 leading-tight">{card.value1}</p>
                        <p className="text-[12px] text-slate-500 font-semibold mt-0.5">{card.value2}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                <div className="bg-white border border-[#E8E8E8] p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden">
                  <h3 className="text-[18px] font-[800] text-[#111827] mb-6 tracking-wide uppercase">Send Message</h3>
                  
                  {submitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-[#5D8F2A] mb-4">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="text-[18px] font-[800] text-[#111827] mb-1">Message Sent Successfully!</h4>
                      <p className="text-[14px] text-slate-500 font-medium">Our engineering support desk will review and respond shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[11px] font-[700] text-slate-500 uppercase tracking-wider">Full Name *</label>
                          <input 
                            type="text" 
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="h-[46px] px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D8F2A]/10 focus:border-[#5D8F2A] transition-all bg-slate-50"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[11px] font-[700] text-slate-500 uppercase tracking-wider">Company Name</label>
                          <input 
                            type="text" 
                            placeholder="Engineering Partners Ltd"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="h-[46px] px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D8F2A]/10 focus:border-[#5D8F2A] transition-all bg-slate-50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[11px] font-[700] text-slate-500 uppercase tracking-wider">Email Address *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="h-[46px] px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D8F2A]/10 focus:border-[#5D8F2A] transition-all bg-slate-50"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[11px] font-[700] text-slate-500 uppercase tracking-wider">Phone Number</label>
                          <input 
                            type="text" 
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-[46px] px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D8F2A]/10 focus:border-[#5D8F2A] transition-all bg-slate-50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[11px] font-[700] text-slate-500 uppercase tracking-wider">Department</label>
                          <select 
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            className="h-[46px] px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D8F2A]/10 focus:border-[#5D8F2A] transition-all bg-slate-50"
                          >
                            <option>Engineering Support</option>
                            <option>Drawing Revision Team</option>
                            <option>DCS & Instrumentation</option>
                            <option>Civil & Layout Drafting</option>
                            <option>Project Management Office (PMO)</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[11px] font-[700] text-slate-500 uppercase tracking-wider">Subject</label>
                          <input 
                            type="text" 
                            placeholder="Need drawing access tokens..."
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="h-[46px] px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D8F2A]/10 focus:border-[#5D8F2A] transition-all bg-slate-50"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-[700] text-slate-500 uppercase tracking-wider">Message *</label>
                        <textarea 
                          rows={4}
                          required
                          placeholder="Your message regarding engineering data..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="p-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D8F2A]/10 focus:border-[#5D8F2A] transition-all bg-slate-50 resize-none"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="h-[50px] bg-[#5D8F2A] hover:bg-[#4b7322] text-white text-[13px] font-[800] rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center tracking-widest uppercase gap-2 mt-2"
                      >
                        Send Message
                        <Send className="w-4.5 h-4.5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: Map Placeholder */}
              <div className="w-full xl:w-[40%] flex flex-col gap-6">
                <div className="bg-white border border-[#E8E8E8] rounded-[24px] p-4 flex-1 min-h-[400px] flex flex-col overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative">
                  <div className="text-[12px] font-[800] text-slate-400 uppercase tracking-widest mb-3 px-2">Engineering HQ Map Placeholder</div>
                  
                  {/* Google Map Mock Illustration */}
                  <div className="flex-1 bg-slate-50 rounded-xl relative overflow-hidden border border-slate-100 flex items-center justify-center">
                    {/* Grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
                    
                    {/* Abstract roads mock */}
                    <div className="absolute w-[3px] h-full bg-[#EAEAEA] left-1/3"></div>
                    <div className="absolute w-[3px] h-full bg-[#EAEAEA] left-2/3"></div>
                    <div className="absolute h-[3px] w-full bg-[#EAEAEA] top-1/2"></div>
                    <div className="absolute h-[3px] w-full bg-[#EAEAEA] top-1/4"></div>

                    {/* HQ Pointer */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#F97316]/10 border border-[#F97316] text-[#F97316] rounded-full flex items-center justify-center animate-bounce shadow-md">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="bg-white border border-[#E8E8E8] px-3.5 py-1.5 rounded-lg text-[11px] font-bold text-slate-800 shadow-md mt-2 tracking-wide uppercase">
                        Refrasynth HQ
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="w-full max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <HelpCircle className="w-10 h-10 text-[#5D8F2A] mx-auto mb-4" strokeWidth={1.5} />
              <h2 className="text-[28px] sm:text-[34px] font-[800] text-[#111827] tracking-tight">Frequently Asked Questions</h2>
              <p className="text-[15px] text-slate-500 mt-2 font-medium">Quick answers regarding register workflow operations, user access levels, and sheet indices.</p>
            </div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="bg-white border border-[#E8E8E8] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all">
                    <button 
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
                    >
                      <span className="text-[15px] font-[800] text-slate-800 tracking-wide">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#5D8F2A]' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 border-t border-slate-50 text-[14px] text-slate-500 font-medium leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Search, Bell, Shield, Settings, Sun, User, LogOut, Lock, Eye, ChevronDown, Activity,
  Home, FileText, PlusCircle, RefreshCw, CheckSquare,
  FolderOpen, Grid, BarChart3, BookOpen, Users,
  Building2, Factory, Settings as GearIcon, Waypoints, Zap, Gauge, Box, LayoutTemplate,
  ArrowRight, MoreHorizontal, FileDown, ShieldCheck, Clock, Palette, Target, TrendingUp,
  Loader2, CheckCircle2, Flame, Layers, Component, Hammer, Filter, Plus,
  MoreVertical, ChevronsUpDown, FileSpreadsheet, X, UploadCloud
} from 'lucide-react';

const baseData = [
  { desc: 'Feed hopper', dwgNo: 'SIES-RMIPL-CVL-FDHP-001-R01', title: 'CIVIL FOUNDATION, PLAN, FOOTING, AND TIE BEAM DETAIL DRAWING OF FEED HOPPER', discipline: 'Civil', link: '#', rev: 'R01', date: '23/08/2023', remark: '' },
  { desc: 'Feed hopper', dwgNo: 'SIES-RMIPL-STR-FDHP-01', title: 'INSERT PLATE DETAILS AT 4.0 LVL', discipline: 'Structure', link: '#', rev: '0', date: '20/06/2023', remark: '' },
  { desc: 'Feed hopper', dwgNo: 'SIES-RMIPL-STR-FDHP-02', title: 'STRUCTURE DETAIL DRAWING OF FEED HOPPER', discipline: 'Structure', link: '#', rev: '0', date: '10/10/2023', remark: '' },
  { desc: 'Feed hopper', dwgNo: 'SIES-RMIPL-STR-FDHP-03', title: 'GRIZZLY DETAIL FOR FEED HOPPER', discipline: 'Structure', link: '#', rev: '0', date: '02/08/2024', remark: '' },
  { desc: 'Feed hopper', dwgNo: 'AAMD/066/23-24/AVF/G.A.- 001', title: 'GENERAL ARRANGEMENT DRAWING OF VIBRO FEEDER SIZE - 800 X 700', discipline: 'Equipment', link: '#', rev: '0', date: '19/08/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-CVL-JAWC-01', title: 'FOUNDATION DETAIL FOR JAW CRUSHER BUILDING AT 0.000M LEVEL', discipline: 'Civil', link: '#', rev: '0', date: '23/03/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-CVL-JAWC-02', title: 'COLUMN DETAIL FOR JAW CRUSHER BUILDING UPTO 2.175 M LVL', discipline: 'Civil', link: '#', rev: '0', date: '10/08/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-CVL-JAWC-03', title: 'INSERT PLATE DETAIL FOR JAW CRUSHER BUILDING AT 0.000M LEVEL', discipline: 'Civil', link: '#', rev: '0', date: '19/08/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-GA-JAWC-01', title: 'GENERAL ARRANGEMENT DRAWING OF JAW CRUSHER BUILDING', discipline: 'General arrangement', link: '#', rev: '0', date: '19/10/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-STR-JAWC-01', title: 'PLAN DETAIL FOR JAW CRUSHER BUILDING AT 2.500M LEVEL', discipline: 'Structure', link: '#', rev: '0', date: '20/10/2023', remark: '' },
];

const dummyData = Array.from({ length: 50 }, (_, i) => ({
  ...baseData[i % baseData.length],
  sr: i + 1,
}));

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <button
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active
        ? 'bg-[#2E7D32] text-white shadow-lg shadow-green-900/20'
        : 'text-slate-600 hover:bg-green-50 hover:text-[#2E7D32]'
    }`}
  >
    <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-slate-400 group-hover:text-[#2E7D32]'}`} />
    <span className="font-medium">{label}</span>
  </button>
);

const DisciplineCard = ({ icon: Icon, title, desc, count, image, imgSize = "", imgClass = "", blendMode = "mix-blend-multiply" }: { icon: any, title: string, desc: string, count: number, image?: string, imgSize?: string, imgClass?: string, blendMode?: string }) => (
  <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm hover:shadow-[0_4px_15px_rgba(249,115,22,0.15)] hover:border-[#F97316] transition-all duration-300 group flex flex-col h-[360px] cursor-pointer relative overflow-hidden">
    
    {/* Header Bar */}
    <div className="px-6 py-4 border-b border-slate-100 flex items-center space-x-4 bg-slate-50/50 relative z-10">
      <div className="w-[48px] h-[48px] rounded-2xl bg-gradient-to-br from-[#6b8e23]/10 to-transparent border border-[#6b8e23]/20 text-[#6b8e23] flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:from-[#F97316] group-hover:to-[#ea580c] group-hover:text-white group-hover:border-[#F97316] shadow-inner transition-all duration-300">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <h3 className="text-[19px] font-poppins font-[800] text-slate-800 leading-none tracking-wide group-hover:text-[#F97316] transition-colors">{title}</h3>
    </div>

    {/* Image Area */}
    <div className="flex-1 relative w-full overflow-hidden bg-gradient-to-b from-white to-[#f8fafc]">
      {image && (
        <div className={`absolute inset-0 z-0 pointer-events-none p-4 flex items-center justify-center ${imgSize}`}>
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-contain object-center ${blendMode} transition-transform duration-700 group-hover:scale-[1.05] ${imgClass}`}
          />
        </div>
      )}
    </div>

    {/* Footer Bar */}
    <div className="px-6 py-4 border-t border-slate-100 bg-white relative z-10 flex items-center justify-between mt-auto">
      <div className="flex items-center space-x-2">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Drawings</span>
        <span className="text-lg text-slate-800">{count}</span>
      </div>
      <span className="text-sm font-bold text-[#6b8e23] group-hover:text-[#F97316] group-hover:translate-x-1 transition-all flex items-center">
        View <ArrowRight className="w-4 h-4 ml-1" />
      </span>
    </div>
  </div>
);

const ActionCard = ({ icon: Icon, title, desc, btnText, colorTheme, onClick }: { icon: any, title: string, desc: string, btnText: string, colorTheme: 'green' | 'purple' | 'orange' | 'amber', onClick?: () => void }) => {
  const themes = {
    green: { bg: 'bg-green-100', text: 'text-green-700', hover: 'hover:border-green-300', border: 'border-green-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', hover: 'hover:border-purple-300', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', hover: 'hover:border-orange-300', border: 'border-orange-200' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-700', hover: 'hover:border-amber-300', border: 'border-amber-200' },
  };
  const theme = themes[colorTheme];

  return (
    <div onClick={onClick} className={`bg-white rounded-[20px] p-6 border shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col items-center text-center ${theme.border} ${theme.hover} cursor-pointer group`}>
      <div className={`w-16 h-16 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      <h3 className={`text-lg font-bold mb-2 text-slate-800 group-hover:${theme.text} transition-colors`}>{title}</h3>
      <p className="text-sm text-slate-500 mb-6 flex-1">{desc}</p>
      <button className={`px-5 py-2.5 rounded-xl text-sm font-semibold border ${theme.border} ${theme.text} ${theme.bg} w-full flex items-center justify-center space-x-2 group-hover:opacity-90 transition-opacity`}>
        <span>{btnText}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

function DashboardView({ onLogout, onRegister, counts }: { onLogout: () => void, onRegister: () => void, counts: any }) {
  return (
    <div className="min-h-screen bg-[#F4F6F4] font-sans text-slate-900 flex overflow-hidden selection:bg-[#2E7D32]/20 selection:text-[#2E7D32] antialiased relative">
      {/* Ambient background blur for color mixing */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#2E7D32]/[0.03] blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] rounded-full bg-[#FF6B35]/[0.02] blur-[120px] pointer-events-none z-0"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        
        {/* Header */}
        <header className="h-[76px] bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center space-x-3.5">
            <div className="flex items-center justify-center w-[44px] h-[44px] overflow-hidden">
              <div className="w-full h-full bg-[#6b8e23] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
            </div>
            <div className="flex items-center pt-1">
              <span className="text-[28px] font-[800] text-[#6b8e23] tracking-tight">Passary Refractories</span>
              <span className="text-[#F97316] text-[28px] font-[700] tracking-tight ml-3 mt-0.5">Forging Energy-Efficient Solutions</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 rounded-full border border-slate-100 shadow-[0_2px_8px_rgb(0,0,0,0.04)] flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
              <Settings className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            
            <button 
              onClick={onLogout}
              className="ml-2 px-6 py-2.5 bg-[#ed5f2b] hover:bg-[#d45224] text-white text-[14px] font-bold rounded-full shadow-sm transition-all active:scale-95 flex items-center justify-center tracking-wide uppercase"
            >
              BACK
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 scrollbar-hide pb-24">
          <div className="max-w-[1600px] mx-auto space-y-10">
            
            {/* Hero Card */}
            <div className="relative bg-white rounded-[24px] overflow-hidden border border-slate-200/60 min-h-[320px] flex items-center shadow-sm group">
              {/* Premium Abstract Background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9]/80 via-white to-[#FFE8D6]/40"></div>
                {/* Decorative faint dot grid */}
                <div className="absolute left-0 top-0 w-2/3 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNkMWQ1ZGIiLz48L3N2Zz4=')] opacity-50 mix-blend-multiply"></div>
              </div>

              {/* Hero Content (Left Side - 55%) */}
              <div className="relative z-10 px-10 py-12 lg:px-14 lg:py-14 w-full lg:w-[55%] h-full flex flex-col justify-center">
                <div className="mb-2.5">
                  <span className="text-[18px] font-bold text-[#6b8e23] tracking-wide">Welcome to Passary Refractories</span>
                </div>
                <h1 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 mb-4 tracking-tight leading-[1.15]">
                  Drawing Management Dashboard
                </h1>
                <p className="text-[14px] text-slate-600 mb-8 max-w-[460px] leading-[1.6] font-medium">
                  Manage all engineering drawings in one place. Easily organize files, find the required drawings, upload new documents, and keep project information secure and well arranged.
                </p>
                
                {/* Quick Access Buttons */}
                <div className="mt-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <button onClick={onRegister} className="flex items-center gap-3 px-3 py-2 bg-green-50/80 border border-green-100 rounded-xl hover:bg-green-100/80 transition-colors group">
                      <div className="w-7 h-7 rounded-lg bg-green-100/80 flex items-center justify-center text-green-700 group-hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px] font-bold text-green-700">Drawing Register</span>
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </button>
                    
                    <button className="flex items-center gap-3 px-3 py-2 bg-purple-50/80 border border-purple-100 rounded-xl hover:bg-purple-100/80 transition-colors group">
                      <div className="w-7 h-7 rounded-lg bg-purple-100/80 flex items-center justify-center text-purple-700 group-hover:scale-105 transition-transform">
                        <PlusCircle className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px] font-bold text-purple-700">Add New Drawing</span>
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Hero Illustration (Right Side) */}
              <div className="absolute right-12 lg:right-24 bottom-0 w-[45%] h-full hidden lg:flex items-end justify-end z-0 pointer-events-none">
                <img 
                  src="/hero-illustration.png" 
                  alt="Engineering Factory Illustration" 
                  className="w-full h-[130%] object-contain object-right-bottom mix-blend-multiply brightness-[1.08] contrast-[1.15] transition-transform duration-700 origin-bottom scale-100 group-hover:scale-[1.05] -translate-y-2"
                />
              </div>
            </div>

            {/* Discipline Modules */}
            <div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DisciplineCard icon={Building2} title="Civil" desc="View all civil foundation, structural and architectural drawings." count={counts.civil} image="/civil-drawing-v3.png" />
                <DisciplineCard icon={Factory} title="Structural" desc="Manage structural steel, fabrication and erection drawings." count={counts.structural} image="/structural-drawing.png" />
                <DisciplineCard icon={GearIcon} title="Mechanical" desc="Access mechanical equipment, assembly and part drawings." count={counts.mechanical} image="/mechanical-drawing-white-final.png" />
                <DisciplineCard icon={Waypoints} title="Piping" desc="Review piping layouts, isometrics and P&ID diagrams." count={counts.piping} image="/piping-drawing.png" />
                <DisciplineCard icon={Zap} title="Electrical" desc="Electrical layouts, single line diagrams and wiring schemes." count={counts.electrical} image="/electrical-drawing.jpg" />
                <DisciplineCard icon={Gauge} title="Instrumentation" desc="Instrumentation loop diagrams, hook-ups and logic diagrams." count={counts.instrument} image="/instrumentation-drawing.jpg" />
                <DisciplineCard icon={Box} title="Equipment" desc="Vendor equipment drawings, datasheets and manuals." count={counts.equipment} image="/equipment-drawing.jpg" />
                <DisciplineCard icon={LayoutTemplate} title="General Arrangement" desc="Plant general arrangement and overall layout drawings." count={counts.general} image="/ga-drawing.jpg" />
              </div>
            </div>

            <div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ActionCard 
                  icon={FileText} 
                  title="Drawing Register" 
                  desc="View, search and manage all drawings in the centralized system."
                  btnText="Go to Register"
                  colorTheme="green"
                  onClick={onRegister}
                />
                <ActionCard 
                  icon={PlusCircle} 
                  title="Add New Drawing" 
                  desc="Upload and create new drawing records with metadata."
                  btnText="Add Drawing"
                  colorTheme="purple"
                />
                <ActionCard 
                  icon={RefreshCw} 
                  title="Revision Management" 
                  desc="Manage drawing revisions, history and version control."
                  btnText="Manage Revisions"
                  colorTheme="orange"
                />
                <ActionCard 
                  icon={ShieldCheck} 
                  title="Approval Workflow" 
                  desc="Review, approve and track drawing approval workflows."
                  btnText="Go to Workflow"
                  colorTheme="amber"
                />
              </div>
            </div>


          </div>
        </main>
      </div>
    </div>
  );
}

function LandingView({ view, setView, onLogin }: { view: 'landing' | 'login', setView: any, onLogin: () => void }) {

  if (view === 'login') {
    // Reverting back to simple login card
  }

  return (
    <div className="min-h-screen bg-[#F4F6F4] font-sans text-slate-900 flex flex-col selection:bg-[#6b8e23]/20 selection:text-[#6b8e23] antialiased relative overflow-hidden">
      {/* Ambient background blur for color mixing */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-[#6b8e23]/[0.06] blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F97316]/[0.04] blur-[100px] pointer-events-none z-0"></div>
      {/* Header */}
      <header className="h-[84px] bg-white/50 backdrop-blur-md border-b border-white/40 flex items-center justify-between px-8 lg:px-12 sticky top-0 z-50 shadow-[0_4px_30px_rgb(0,0,0,0.02)]">
        <div className="flex items-center space-x-3.5">
          <div className="flex items-center justify-center w-[48px] h-[48px] overflow-hidden">
            <div className="w-full h-full bg-[#6b8e23] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
          </div>
          <div className="flex items-center pt-1">
            <span className="text-[28px] font-[800] text-[#6b8e23] tracking-tight">Passary Refractories</span>
            <span className="text-[#F97316] text-[28px] font-[700] tracking-tight ml-3 mt-0.5">Forging Energy-Efficient Solutions</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-8 text-[14px] font-bold text-slate-900 tracking-wider">
          <a href="#" className="hover:text-[#F97316] transition-colors">HOME</a>
          <a href="#" className="hover:text-[#F97316] transition-colors">ABOUT US</a>
          <a href="#" className="hover:text-[#F97316] transition-colors">SERVICES</a>
          <a href="#" className="hover:text-[#F97316] transition-colors">CONTACT</a>
          
          <button 
            onClick={onLogin}
            className="px-8 py-3 bg-[#F97316] hover:bg-[#ea580c] text-white text-[14px] font-bold rounded-xl shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all active:scale-95 flex items-center justify-center tracking-wide uppercase group"
          >
            START
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Hero / Login Area */}
      <main className="flex-1 flex flex-col justify-center items-center relative overflow-hidden bg-transparent">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#6b8e23]/5 to-transparent rounded-bl-full"></div>
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-8 lg:px-20 py-12 flex relative z-10 items-center justify-between">
          {/* Left Side: Content */}
          <div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col justify-center">
              <div className="animate-in fade-in slide-in-from-left-4 duration-500">

                <h1 className="text-[52px] lg:text-[64px] font-[800] text-slate-900 mb-2 tracking-tight leading-[1.1]">
                  Factory Engineering<br/>Drawing Management
                </h1>
                
                <div className="w-24 h-[3px] mt-4 bg-[#F97316] mb-8 rounded-full"></div>
                
                <p className="text-[18px] text-slate-900 mb-12 max-w-[560px] leading-[1.7] font-medium">
                  We deliver accurate, high-quality engineering drawings that streamline planning, ensure seamless execution, and drive reliable industrial performance.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10 max-w-[700px]">
                  {/* Accuracy */}
                  <div className="flex flex-col items-center text-center group bg-white border border-slate-100 p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(53,94,59,0.08)] hover:-translate-y-1 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#F97316] group-hover:scale-110 transition-transform">
                      <Target className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <h3 className="text-[13px] font-[800] text-[#6b8e23] mb-2 tracking-wide uppercase">Accuracy</h3>
                    <p className="text-[12px] text-black font-medium leading-relaxed">Precise drawings<br/>you can rely on.</p>
                  </div>
                  {/* Efficiency */}
                  <div className="flex flex-col items-center text-center group bg-white border border-slate-100 p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(53,94,59,0.08)] hover:-translate-y-1 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#F97316] group-hover:scale-110 transition-transform">
                      <GearIcon className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <h3 className="text-[13px] font-[800] text-[#6b8e23] mb-2 tracking-wide uppercase">Efficiency</h3>
                    <p className="text-[12px] text-black font-medium leading-relaxed">Streamlined planning,<br/>better results.</p>
                  </div>
                  {/* Reliability */}
                  <div className="flex flex-col items-center text-center group bg-white border border-slate-100 p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(53,94,59,0.08)] hover:-translate-y-1 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#F97316] group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <h3 className="text-[13px] font-[800] text-[#6b8e23] mb-2 tracking-wide uppercase">Reliability</h3>
                    <p className="text-[12px] text-black font-medium leading-relaxed">Built on standards,<br/>delivered with trust.</p>
                  </div>
                  {/* Performance */}
                  <div className="flex flex-col items-center text-center group bg-white border border-slate-100 p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(53,94,59,0.08)] hover:-translate-y-1 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#F97316] group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <h3 className="text-[13px] font-[800] text-[#6b8e23] mb-2 tracking-wide uppercase">Performance</h3>
                    <p className="text-[12px] text-black font-medium leading-relaxed">Engineering excellence<br/>that drives progress.</p>
                  </div>
                </div> 
              </div>
          </div>


        </div>

        {/* Footer Area for Disciplines */}
          <div className="w-full max-w-[1600px] mx-auto px-8 pb-10 mt-auto relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 -translate-y-[15px] lg:-translate-y-[20px]">
            <p className="text-[15px] lg:text-[16px] font-bold text-slate-900 leading-[2.2] text-center w-full tracking-wide">
              Civil • Structural • Mechanical • Piping • Electrical • Instrumentation • Equipment • General Arrangement (GA) • Architectural • Process • P&ID • Isometric • Fabrication • As-Built • Vendor Drawings
            </p>
          </div>
        {/* Theme Wallpaper Background (Absolute to entire screen) */}
        <div className="absolute right-0 bottom-0 w-[48%] lg:w-[50%] max-w-[1200px] pointer-events-none z-[0] flex items-end justify-end pr-8 pb-4">
          <img 
            src="/hero-illustration.png" 
            alt="Workspace Wallpaper" 
            className="w-full h-auto object-contain object-right-bottom mix-blend-multiply brightness-[1.08] contrast-[1.15] opacity-95 scale-[1.25] lg:scale-[1.35] origin-bottom-right -translate-y-[120px] lg:-translate-y-[160px]"
          />
        </div>
      </main>
    </div>
  );
}

function LoadingView({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const duration = 4000;
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400); // Wait a bit after hitting 100%
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
        `}
      </style>
      <div className="h-screen w-screen bg-white font-poppins flex flex-col relative overflow-hidden selection:bg-[#6b8e23]/20">
        
        {/* Header */}
        <header className="h-[84px] bg-white/50 backdrop-blur-md border-b border-white/40 flex items-center justify-between px-8 lg:px-12 sticky top-0 z-50 shadow-[0_4px_30px_rgb(0,0,0,0.02)] flex-shrink-0">
          <div className="flex items-center space-x-3.5">
            <div className="flex items-center justify-center w-[48px] h-[48px] overflow-hidden">
              <div className="w-full h-full bg-[#6b8e23] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
            </div>
            <div className="flex items-center pt-1">
              <span className="text-[28px] font-[800] text-[#6b8e23] tracking-tight">Passary Refractories</span>
              <span className="text-[#F97316] text-[28px] font-[700] tracking-tight ml-3 mt-0.5">Forging Energy-Efficient Solutions</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-[14px] font-bold text-slate-900 tracking-wider">
            <a href="#" className="hover:text-[#F97316] transition-colors">HOME</a>
            <a href="#" className="hover:text-[#F97316] transition-colors">ABOUT US</a>
            <a href="#" className="hover:text-[#F97316] transition-colors">SERVICES</a>
            <a href="#" className="hover:text-[#F97316] transition-colors">CONTACT</a>
            
            <button 
              disabled
              className="px-8 py-3 bg-[#F97316] text-white text-[14px] font-bold rounded-xl shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all flex items-center justify-center tracking-wide uppercase opacity-80 cursor-not-allowed"
            >
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              LOADING
            </button>
          </div>
        </header>

        <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden">
          {/* Main Container - No shadow or borders, pure flat layout */}
          <div className="relative z-10 w-full max-w-[1100px] px-10 py-16 flex flex-col items-center justify-center animate-in fade-in zoom-in-[0.98] duration-700">
          
          {/* Text Section Removed as per request */}

          {/* Center Animation (3D Gears) */}
          <div className="relative mb-20 mt-8 flex items-center justify-center w-full h-[140px]">
             {/* Soft glow behind gears */}
             <div className="absolute w-64 h-32 bg-[#6b8e23]/15 rounded-full blur-[40px]"></div>
             
             {/* 3 Interlocking Gears */}
             <div className="relative flex items-center justify-center">
                
                {/* Left Gear (Silver) */}
                <div className="relative z-0 -mr-[15px] animate-spin" style={{ animationDuration: '4s', animationTimingFunction: 'linear' }}>
                  <div style={{ transform: 'rotate(22.5deg)' }} className="relative flex items-center justify-center">
                    <Settings className="w-[76px] h-[76px] text-slate-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] absolute" fill="currentColor" strokeWidth={0} />
                    <Settings className="w-[76px] h-[76px] text-slate-400" fill="url(#silverGrad)" strokeWidth={0} />
                    <div className="absolute w-[30px] h-[30px] bg-white rounded-full shadow-[inset_0_3px_8px_rgba(0,0,0,0.3)] flex items-center justify-center border border-slate-200">
                       <div className="w-[14px] h-[14px] rounded-full bg-slate-200 shadow-sm border border-slate-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Center Gear (Green) */}
                <div className="relative z-10 animate-spin" style={{ animationDuration: '4s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}>
                  <div className="relative flex items-center justify-center scale-[1.05]">
                    <Settings className="w-[110px] h-[110px] text-[#4d6b14] drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)] absolute" fill="currentColor" strokeWidth={0} />
                    <Settings className="w-[110px] h-[110px] text-[#6b8e23]" fill="url(#greenGrad)" strokeWidth={0} />
                    <div className="absolute w-[44px] h-[44px] bg-white rounded-full shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center border border-[#4d6b14]/20">
                       <div className="w-[20px] h-[20px] rounded-full bg-slate-100 shadow-sm border border-slate-300"></div>
                    </div>
                  </div>
                </div>

                {/* Right Gear (Silver) */}
                <div className="relative z-0 -ml-[15px] animate-spin" style={{ animationDuration: '4s', animationTimingFunction: 'linear' }}>
                  <div style={{ transform: 'rotate(22.5deg)' }} className="relative flex items-center justify-center">
                    <Settings className="w-[76px] h-[76px] text-slate-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] absolute" fill="currentColor" strokeWidth={0} />
                    <Settings className="w-[76px] h-[76px] text-slate-400" fill="url(#silverGrad)" strokeWidth={0} />
                    <div className="absolute w-[30px] h-[30px] bg-white rounded-full shadow-[inset_0_3px_8px_rgba(0,0,0,0.3)] flex items-center justify-center border border-slate-200">
                       <div className="w-[14px] h-[14px] rounded-full bg-slate-200 shadow-sm border border-slate-300"></div>
                    </div>
                  </div>
                </div>

             </div>

             {/* SVG Gradients Definition */}
             <svg width="0" height="0" className="absolute pointer-events-none">
               <defs>
                 <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#8fae47" />
                   <stop offset="50%" stopColor="#6b8e23" />
                   <stop offset="100%" stopColor="#4d6b14" />
                 </linearGradient>
                 <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#f1f5f9" />
                   <stop offset="50%" stopColor="#cbd5e1" />
                   <stop offset="100%" stopColor="#94a3b8" />
                 </linearGradient>
               </defs>
             </svg>
          </div>

          {/* Loading Text & Progress Bar */}
          <div className="w-full max-w-[540px] flex flex-col items-center">
            <p className="text-[18px] font-[700] text-[#111827] mb-6 tracking-wide">Loading Dashboard...</p>
            
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-5 relative shadow-inner">
               <div 
                 className="h-full bg-gradient-to-r from-[#8fae47] to-[#4d6b14] rounded-full transition-all duration-100 ease-linear"
                 style={{ width: `${progress}%` }}
               >
               </div>
            </div>
            
            <span className="text-[18px] font-[800] text-[#F97316] tracking-wide">{progress}%</span>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

function AddDrawingModal({ isOpen, onClose, onSuccess }: { isOpen: boolean, onClose: () => void, onSuccess: () => void }) {
  const [formData, setFormData] = React.useState({
    desc: '', dwgNo: '', title: '', discipline: '', rev: '', date: '', remark: ''
  });
  const [file, setFile] = React.useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.type !== 'application/pdf') {
        setErrorMsg('Please upload a valid PDF file.');
        setFile(null);
        return;
      }
      if (selected.size > 5 * 1024 * 1024) { // 5MB limit for Apps Script safety
        setErrorMsg('File size exceeds 5MB limit.');
        setFile(null);
        return;
      }
      setErrorMsg('');
      setFile(selected);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.desc || !formData.dwgNo || !formData.title || !formData.discipline || !file) {
      setErrorMsg('Please fill all mandatory fields and select a PDF file.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Data = (reader.result as string).split(',')[1];
        
        const payload = {
          ...formData,
          filename: file.name,
          mimeType: file.type,
          base64: base64Data
        };

        const sheetUrl = 'https://script.google.com/macros/s/AKfycbxP08_ft6yvOy8UoL0FsxJ4WK4OgGrLKhkG7AIc48cNTVSaw1QNR7KNZHgb8jlu1TE/exec';
        
        const response = await fetch(sheetUrl, {
          method: 'POST',
          // Apps Script requires text/plain to avoid CORS preflight issues sometimes, but application/json usually works if deployed correctly.
          // Using text/plain is safer for Apps Script web apps to avoid CORS OPTIONS block.
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        
        if (result && result.status === 'success') {
          setFormData({ desc: '', dwgNo: '', title: '', discipline: '', rev: '', date: '', remark: '' });
          setFile(null);
          onSuccess();
          onClose();
        } else {
          setErrorMsg(result.message || 'Error saving to Google Sheets.');
        }
        setIsSubmitting(false);
      };
      reader.onerror = () => {
        setErrorMsg('Failed to read file.');
        setIsSubmitting(false);
      };
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[700px] max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-slate-800">Add New Drawing</h2>
              <p className="text-[12px] text-slate-500 font-medium">Upload drawing details and PDF file.</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <form id="add-drawing-form" onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Drawing No. <span className="text-red-500">*</span></label>
                <input required name="dwgNo" value={formData.dwgNo} onChange={handleInputChange} type="text" placeholder="e.g. SIES-RMIPL-CVL..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Discipline <span className="text-red-500">*</span></label>
                <select required name="discipline" value={formData.discipline} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors">
                  <option value="">Select Discipline</option>
                  <option value="Civil">Civil</option>
                  <option value="Structure">Structure</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Piping">Piping</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Instrumentation">Instrumentation</option>
                  <option value="Equipment">Equipment</option>
                  <option value="General arrangement">General Arrangement</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-700">Drawing Title <span className="text-red-500">*</span></label>
              <input required name="title" value={formData.title} onChange={handleInputChange} type="text" placeholder="Detailed Title..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Description <span className="text-red-500">*</span></label>
                <input required name="desc" value={formData.desc} onChange={handleInputChange} type="text" placeholder="e.g. Feed hopper" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Revision</label>
                <input name="rev" value={formData.rev} onChange={handleInputChange} type="text" placeholder="e.g. 0 or R01" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Date</label>
                <input name="date" value={formData.date} onChange={handleInputChange} type="date" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Remark</label>
                <input name="remark" value={formData.remark} onChange={handleInputChange} type="text" placeholder="Any remarks..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
            </div>

            {/* File Upload */}
            <div className="pt-2">
              <label className="text-[13px] font-bold text-slate-700 mb-2 block">Upload PDF Drawing <span className="text-red-500">*</span></label>
              <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-purple-50/50 hover:border-purple-300 transition-colors relative group">
                <input required type="file" accept="application/pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-purple-600 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>
                {file ? (
                  <div className="text-center">
                    <p className="text-[14px] font-bold text-slate-800">{file.name}</p>
                    <p className="text-[12px] font-medium text-slate-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB • PDF Document</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-[14px] font-bold text-slate-700">Click or drag PDF file to upload</p>
                    <p className="text-[12px] font-medium text-slate-500 mt-1">Maximum file size: 5MB</p>
                  </div>
                )}
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-[13px] font-bold flex items-center gap-2">
                <Shield className="w-4 h-4 shrink-0" />
                <p>{errorMsg}</p>
              </div>
            )}

          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50 rounded-b-2xl">
          <button type="button" onClick={onClose} disabled={isSubmitting} className="px-5 py-2.5 rounded-xl font-bold text-[13px] text-slate-600 hover:bg-slate-200 transition-colors">
            Cancel
          </button>
          <button type="submit" form="add-drawing-form" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-[13px] text-white bg-[#8b5cf6] hover:bg-[#7c3aed] shadow-sm transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Uploading to Sheet...</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>Submit & Upload</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}

function DrawingRegisterView({ onBack, tableData, loading, counts, onRefresh }: { onBack: () => void, tableData: any[], loading: boolean, counts: any, onRefresh: () => void }) {
  const [showAddModal, setShowAddModal] = React.useState(false);

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      <AddDrawingModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onSuccess={onRefresh} />
      
      {/* Main Passary Header */}
      <header className="shrink-0 h-[76px] bg-white border-b border-slate-200 flex items-center justify-between px-8 z-50 shadow-sm">
        <div className="flex items-center space-x-3.5">
          <div className="flex items-center justify-center w-[44px] h-[44px] overflow-hidden">
            <div className="w-full h-full bg-[#6b8e23] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
          </div>
          <div className="flex items-center pt-1">
            <span className="text-[28px] font-[800] text-[#6b8e23] tracking-tight">Passary Refractories</span>
            <span className="text-[#F97316] text-[28px] font-[800] tracking-tight ml-3 mt-0.5">- DRAWING INDEX REGISTER</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={onBack}
            className="px-6 py-2.5 bg-[#ed5f2b] hover:bg-[#d45224] text-white text-[14px] font-bold rounded-full shadow-sm transition-all active:scale-95 flex items-center justify-center tracking-wide uppercase"
          >
            BACK
          </button>
        </div>
      </header>

      {/* Register Content */}
      <div className="flex-1 flex flex-col p-6 max-w-[1600px] mx-auto w-full overflow-hidden">
        
        {/* Top 8 Stat Cards */}
        <div className="flex flex-wrap items-center gap-3 w-full mb-5 shrink-0">
          {[
            { icon: Building2, title: 'CIVIL', count: counts.civil, iconBg: 'bg-blue-50', textCol: 'text-blue-600' },
            { icon: Layers, title: 'STRUCTURAL', count: counts.structural, iconBg: 'bg-orange-50', textCol: 'text-orange-600' },
            { icon: GearIcon, title: 'MECHANICAL', count: counts.mechanical, iconBg: 'bg-purple-50', textCol: 'text-purple-600' },
            { icon: Zap, title: 'ELECTRICAL', count: counts.electrical, iconBg: 'bg-amber-50', textCol: 'text-amber-600' },
            { icon: Waypoints, title: 'PIPING', count: counts.piping, iconBg: 'bg-cyan-50', textCol: 'text-cyan-600' },
            { icon: Gauge, title: 'INSTRUMENT', count: counts.instrument, iconBg: 'bg-pink-50', textCol: 'text-pink-600' },
            { icon: Box, title: 'EQUIPMENT', count: counts.equipment, iconBg: 'bg-emerald-50', textCol: 'text-emerald-600' },
            { icon: LayoutTemplate, title: 'GENERAL ARR.', count: counts.general, iconBg: 'bg-slate-100', textCol: 'text-slate-600' }
          ].map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex-1 min-w-[140px]">
              <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center ${card.textCol}`}>
                <card.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className={`text-[10px] font-bold ${card.textCol} uppercase tracking-wider`}>{card.title}</div>
                <div className="text-[20px] font-black text-slate-800 leading-none mt-1 mb-0.5">{card.count}</div>
                <div className="text-[10px] font-semibold text-slate-500">Drawings</div>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar Area */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-4 px-2 w-full shrink-0">
          
          {/* Left: Search */}
          <div className="relative flex-1 max-w-[400px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Drawing No., Title, Description..." 
              className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-slate-700 w-full focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 placeholder:text-slate-400" 
            />
          </div>

          {/* Center: Empty Space for Layout */}
          <div></div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden xl:block w-px h-8 bg-slate-200 mx-1"></div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 text-green-700 font-bold text-[13px] rounded-lg shadow-sm transition-all active:scale-95">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-4 py-2 bg-[#155e30] hover:bg-[#114b26] text-white font-bold text-[13px] rounded-lg shadow-sm transition-all active:scale-95">
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              <span>Add New</span>
            </button>
            <button onClick={onRefresh} className="flex items-center justify-center w-9 h-9 bg-white border border-slate-200 text-green-700 hover:border-slate-300 rounded-lg shadow-sm transition-all active:scale-95">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table Area */}
        <div className="flex-1 overflow-auto border border-slate-300 rounded-sm shadow-sm bg-white">
          <table className="w-full text-[13px] text-center border-collapse min-w-[1200px]">
            <thead className="bg-[#155e30] text-white sticky top-0 z-10 shadow-sm">
              <tr>
                {[
                  { label: 'Sr. No.', w: 'w-[60px]' },
                  { label: 'Description', w: 'min-w-[120px]' },
                  { label: 'Drawing No.', w: 'min-w-[200px]' },
                  { label: 'Drawing Title', w: 'min-w-[300px]' },
                  { label: 'Discipline', w: 'min-w-[100px]' },
                  { label: 'Drawing Link', w: 'min-w-[120px]' },
                  { label: 'Revision', w: 'w-[80px]' },
                  { label: 'Date', w: 'w-[100px]' },
                  { label: 'Remark', w: 'w-[80px]', noSort: true }
                ].map((th, i) => (
                  <th key={i} className={`py-3 px-2 border-r border-green-800 font-bold sticky top-0 bg-[#155e30] z-20 shadow-sm ${th.w}`}>
                    <div className="flex items-center justify-center gap-1.5">
                      <span>{th.label}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {loading ? (
                <tr>
                  <td colSpan={9} className="py-10 text-center text-slate-500 font-medium">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-[#6b8e23]" />
                    Loading drawings...
                  </td>
                </tr>
              ) : tableData.map((row, idx) => (
                <tr key={idx} className={`border-b border-slate-200 hover:bg-green-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}`}>
                  <td className="py-3 px-2 border-r border-slate-200 font-bold text-slate-800">{row.sr}</td>
                  <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.desc}</td>
                  <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.dwgNo}</td>
                  <td className="py-3 px-4 border-r border-slate-200 text-left uppercase text-[11px] font-bold text-slate-600 leading-snug">{row.title}</td>
                  <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.discipline}</td>
                  <td className="py-3 px-2 border-r border-slate-200">
                    {row.link && row.link !== '' ? (
                      <a href={row.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-1.5 bg-green-50 text-[#155e30] border border-green-200 rounded-md font-bold text-[12px] hover:bg-green-100 transition-colors mx-auto">
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Drawing</span>
                      </a>
                    ) : (
                      <span className="text-slate-400 font-medium text-[12px]">-</span>
                    )}
                  </td>
                  <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.rev}</td>
                  <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.date}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-bold text-slate-600">{row.remark || '–'}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <div className="flex justify-between items-center mt-3 text-[12px] text-slate-600 font-semibold px-2 shrink-0">
          <div>Note : This is system generated register</div>
          <div></div>
          <div>Date : 21/05/2025 | Time : 11:30 AM</div>
        </div>

      </div>
    </div>
  );
}

export default function App() {
  const [authState, setAuthState] = useState<'landing' | 'login' | 'loading' | 'dashboard' | 'register'>('landing');

  const [tableData, setTableData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchSheetData = async () => {
      const sheetUrl = 'https://script.google.com/macros/s/AKfycbxP08_ft6yvOy8UoL0FsxJ4WK4OgGrLKhkG7AIc48cNTVSaw1QNR7KNZHgb8jlu1TE/exec';
      if (!sheetUrl) {
        setTableData(dummyData);
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(sheetUrl);
        const result = await response.json();
        if (result && result.length > 0) {
          setTableData(result);
        } else {
          setTableData(dummyData);
        }
      } catch (err) {
        console.error("Failed to fetch sheet data", err);
        setTableData(dummyData);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSheetData();
  }, []);

  const refreshData = () => {
    setLoading(true);
    const sheetUrl = 'https://script.google.com/macros/s/AKfycbxP08_ft6yvOy8UoL0FsxJ4WK4OgGrLKhkG7AIc48cNTVSaw1QNR7KNZHgb8jlu1TE/exec';
    fetch(sheetUrl)
      .then(r => r.json())
      .then(res => {
        if (res && res.length > 0) setTableData(res);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const getDisciplineCount = (keywords: string[]) => {
    if (loading) return 0;
    return tableData.filter(row => {
      const disc = (row.discipline || '').toLowerCase();
      return keywords.some(k => disc.includes(k));
    }).length;
  };

  const disciplineCounts = {
    civil: getDisciplineCount(['civil']),
    structural: getDisciplineCount(['structur']),
    mechanical: getDisciplineCount(['mechanic']),
    electrical: getDisciplineCount(['electric']),
    piping: getDisciplineCount(['piping', 'pipe']),
    instrument: getDisciplineCount(['instrument']),
    equipment: getDisciplineCount(['equip']),
    general: getDisciplineCount(['general', 'ga', 'g.a']),
  };

  if (authState === 'dashboard') {
    return <DashboardView onLogout={() => setAuthState('landing')} onRegister={() => setAuthState('register')} counts={disciplineCounts} />;
  }
  
  if (authState === 'register') {
    return <DrawingRegisterView onBack={() => setAuthState('dashboard')} tableData={tableData} loading={loading} counts={disciplineCounts} onRefresh={refreshData} />;
  }
  
  if (authState === 'loading') {
    return <LoadingView onComplete={() => setAuthState('dashboard')} />;
  }

  return <LandingView view={authState as 'landing' | 'login'} setView={setAuthState} onLogin={() => setAuthState('loading')} />;
}

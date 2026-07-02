import React, { useState } from 'react';
import {
  Search, Bell, Shield, Settings, Sun, User, LogOut, Lock, Eye, ChevronDown, Activity,
  Home, FileText, PlusCircle, RefreshCw, CheckSquare,
  FolderOpen, Grid, BarChart3, BookOpen, Users,
  Building2, Factory, Settings as GearIcon, Waypoints, Zap, Gauge, Box, LayoutTemplate,
  ArrowRight, MoreHorizontal, FileDown, ShieldCheck, Clock, Palette, Target, TrendingUp,
  Loader2, CheckCircle2
} from 'lucide-react';

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
  <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-[360px] cursor-pointer relative overflow-hidden">
    
    {/* Header Bar */}
    <div className="px-6 py-4 border-b border-slate-100 flex items-center space-x-4 bg-slate-50/50 relative z-10">
      <div className="w-[42px] h-[42px] rounded-xl bg-white shadow-sm border border-slate-200 text-[#2E7D32] flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2E7D32] group-hover:text-white transition-all duration-300">
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>
      <h3 className="text-[18px] font-bold text-slate-800 leading-none tracking-tight group-hover:text-[#2E7D32] transition-colors">{title}</h3>
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
        <span className="text-lg font-black text-slate-800">{count}</span>
      </div>
      <span className="text-sm font-bold text-[#2E7D32] group-hover:translate-x-1 transition-transform flex items-center">
        View <ArrowRight className="w-4 h-4 ml-1" />
      </span>
    </div>
  </div>
);

const ActionCard = ({ icon: Icon, title, desc, btnText, colorTheme }: { icon: any, title: string, desc: string, btnText: string, colorTheme: 'green' | 'purple' | 'orange' | 'amber' }) => {
  const themes = {
    green: { bg: 'bg-[#E8F5E9]', text: 'text-[#2E7D32]', border: 'border-green-100', hover: 'hover:border-green-300' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', hover: 'hover:border-purple-300' },
    orange: { bg: 'bg-orange-50', text: 'text-[#FF6B35]', border: 'border-orange-100', hover: 'hover:border-orange-300' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', hover: 'hover:border-amber-300' },
  };
  const theme = themes[colorTheme];

  return (
    <div className={`bg-white rounded-[20px] p-6 border shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col items-center text-center ${theme.border} ${theme.hover} cursor-pointer group`}>
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

function DashboardView({ onLogout }: { onLogout: () => void }) {
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
                    <button className="flex items-center gap-3 px-3 py-2 bg-green-50/80 border border-green-100 rounded-xl hover:bg-green-100/80 transition-colors group">
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
                <DisciplineCard icon={Building2} title="Civil" desc="View all civil foundation, structural and architectural drawings." count={128} image="/civil-drawing-v3.png" />
                <DisciplineCard icon={Factory} title="Structural" desc="Manage structural steel, fabrication and erection drawings." count={214} image="/structural-drawing.png" />
                <DisciplineCard icon={GearIcon} title="Mechanical" desc="Access mechanical equipment, assembly and part drawings." count={186} image="/mechanical-drawing-white-final.png" />
                <DisciplineCard icon={Waypoints} title="Piping" desc="Review piping layouts, isometrics and P&ID diagrams." count={162} image="/piping-drawing.png" />
                <DisciplineCard icon={Zap} title="Electrical" desc="Electrical layouts, single line diagrams and wiring schemes." count={94} image="/electrical-drawing.jpg" />
                <DisciplineCard icon={Gauge} title="Instrumentation" desc="Instrumentation loop diagrams, hook-ups and logic diagrams." count={88} image="/instrumentation-drawing.jpg" />
                <DisciplineCard icon={Box} title="Equipment" desc="Vendor equipment drawings, datasheets and manuals." count={143} image="/equipment-drawing.jpg" />
                <DisciplineCard icon={LayoutTemplate} title="General Arrangement" desc="Plant general arrangement and overall layout drawings." count={117} image="/ga-drawing.jpg" />
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
          .animate-spin-slow { animation: spin 2s linear infinite; }
        `}
      </style>
      <div className="h-screen w-screen bg-[#FAFCFA] font-poppins flex items-center justify-center relative overflow-hidden selection:bg-[#4CAF50]/20">
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Wave Gradients */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#4CAF50]/[0.04] to-transparent blur-[100px]"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-bl from-[#4CAF50]/[0.03] to-transparent blur-[100px]"></div>
          
          {/* Faint Grid / Lines */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwaXRoIGQ9Ik0wIDM5LjVoNDBWNDBIMHptMzkuNSAwdjQwaC41VjM5LjV6IiBmaWxsPSJyZ2JhKDc2LCAxNzUsIDgwLCAwLjAzKSIvPjwvc3ZnPg==')] opacity-50"></div>
          
          {/* Floating Dots */}
          <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-[#4CAF50]/30 animate-pulse"></div>
          <div className="absolute top-[35%] right-[20%] w-3 h-3 rounded-full bg-[#4CAF50]/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#4CAF50]/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-[35%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#4CAF50]/30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 w-[92%] max-w-[1100px] bg-white rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.03),0_0_80px_rgba(76,175,80,0.04)] px-10 py-16 flex flex-col items-center justify-center animate-in fade-in zoom-in-[0.98] duration-700 border border-slate-50">
          
          {/* Header (Logo + Name + Tagline) */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center space-x-3">
               <div className="w-[42px] h-[42px] bg-[#2E7D32]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
               <div className="flex flex-col items-start justify-center pt-1">
                 <span className="text-[24px] font-[800] text-[#2E7D32] tracking-tight leading-none">Passary Refractories</span>
                 <span className="text-[12px] font-bold text-[#F97316] uppercase tracking-wide mt-1">Forging Energy-Efficient Solutions</span>
               </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[18px] font-semibold text-[#4CAF50] mb-4 tracking-wide">Welcome to Passary Refractories</span>
            <h1 className="text-[44px] lg:text-[52px] font-[800] text-[#111827] mb-6 tracking-tight leading-none">Drawing Management Dashboard</h1>
            <p className="text-[17px] text-slate-500 font-medium max-w-[600px] leading-[1.7]">
              Preparing your workspace... Please wait while we load<br/>your engineering drawings and dashboard.
            </p>
          </div>

          {/* Center Animation (Spinner) */}
          <div className="relative mb-14 flex items-center justify-center">
             {/* Glow behind spinner */}
             <div className="absolute w-32 h-32 bg-[#4CAF50]/10 rounded-full blur-[25px]"></div>
             
             {/* 12-petal iOS style spinner */}
             <div className="relative w-[72px] h-[72px] animate-spin-slow">
               {[...Array(12)].map((_, i) => (
                 <div key={i} className="absolute inset-0 flex justify-center" style={{ transform: `rotate(${i * 30}deg)` }}>
                   <div className="w-[6px] h-[16px] rounded-full bg-[#4CAF50]" style={{ opacity: 0.15 + (0.85 * (i / 11)) }}></div>
                 </div>
               ))}
             </div>
          </div>

          {/* Loading Text & Progress Bar */}
          <div className="w-full max-w-[540px] flex flex-col items-center">
            <p className="text-[18px] font-[700] text-[#111827] mb-6 tracking-wide">Loading Dashboard...</p>
            
            <div className="w-full h-4 bg-slate-100/80 rounded-full overflow-hidden mb-5 relative shadow-inner border border-slate-200/50">
               <div 
                 className="h-full bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full transition-all duration-100 ease-linear shadow-[0_0_12px_rgba(76,175,80,0.5)]"
                 style={{ width: `${progress}%` }}
               >
                 <div className="absolute top-0 left-0 w-full h-[40%] bg-white/20 rounded-t-full"></div>
               </div>
            </div>
            
            <span className="text-[18px] font-[800] text-[#4CAF50] tracking-wide">{progress}%</span>
          </div>

        </div>
      </div>
    </>
  );
}

export default function App() {
  const [authState, setAuthState] = useState<'landing' | 'login' | 'loading' | 'dashboard'>('landing');

  if (authState === 'dashboard') {
    return <DashboardView onLogout={() => setAuthState('landing')} />;
  }
  
  if (authState === 'loading') {
    return <LoadingView onComplete={() => setAuthState('dashboard')} />;
  }

  return <LandingView view={authState as 'landing' | 'login'} setView={setAuthState} onLogin={() => setAuthState('loading')} />;
}

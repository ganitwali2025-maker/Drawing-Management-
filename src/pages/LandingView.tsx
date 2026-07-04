import React from 'react';
import { Target, Settings as GearIcon, ShieldCheck, TrendingUp } from 'lucide-react';
import { LandingHeader } from '../components/Navbar';

interface LandingViewProps {
  view: 'landing' | 'login';
  setView: (view: 'landing' | 'login') => void;
  onLogin: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ view, setView, onLogin }) => {
  if (view === 'login') {
    // Reverting back to simple login card
  }

  return (
    <div className="min-h-screen bg-[#F4F6F4] font-sans text-slate-900 flex flex-col selection:bg-[#6b8e23]/20 selection:text-[#6b8e23] antialiased relative overflow-hidden">
      {/* Ambient background blur for color mixing */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-[#6b8e23]/[0.06] blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F97316]/[0.04] blur-[100px] pointer-events-none z-0"></div>
      
      {/* Header */}
      <LandingHeader onLogin={onLogin} />

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

                <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] font-[700] text-slate-900 tracking-tight leading-[1.1] whitespace-nowrap flex gap-x-[0.25em]">
                  {['Refrasynth', 'Minerals', 'India', 'Private', 'Limited'].map((word, i) => (
                    <span key={i} className="relative group cursor-default inline-block">
                      <span className="relative z-10">{word}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[4px] bg-[#F97316] transition-all duration-300 ease-out group-hover:w-full"></span>
                    </span>
                  ))}
                </h1>
                <h2 className="text-[20px] sm:text-[26px] lg:text-[32px] font-[700] text-slate-900 mt-2 mb-8 tracking-tight flex gap-x-[0.25em]">
                  {['Engineering', 'Drawing'].map((word, i) => (
                    <span key={i} className="relative group cursor-default inline-block">
                      <span className="relative z-10">{word}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#F97316] transition-all duration-300 ease-out group-hover:w-full"></span>
                    </span>
                  ))}
                </h2>
                
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
          <div className="text-[15px] lg:text-[16px] font-[800] text-slate-900 leading-[2.2] text-center w-full tracking-wide flex flex-wrap justify-center items-center">
            {['Civil', 'Structural', 'Mechanical', 'Piping', 'Electrical', 'Instrumentation', 'Equipment', 'General Arrangement (GA)', 'Architectural', 'Process', 'P&ID', 'Isometric', 'Fabrication'].map((item, index, arr) => (
              <React.Fragment key={index}>
                <span className="relative group cursor-pointer inline-block mx-1.5">
                  <span className="relative z-10">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2.5px] bg-[#F97316] transition-all duration-300 ease-out group-hover:w-full"></span>
                </span>
                {index < arr.length - 1 && <span className="text-slate-900/60 mx-1">•</span>}
              </React.Fragment>
            ))}
          </div>
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
};

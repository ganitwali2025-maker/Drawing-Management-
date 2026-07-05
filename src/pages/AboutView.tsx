import React from 'react';
import { 
  ArrowRight, ShieldCheck, GitMerge, Box, TrendingUp,
  Landmark, Frame, Settings2, Wrench, Zap, Gauge, 
  Factory, LayoutTemplate, Building2, FlaskConical, PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Civil', icon: Landmark },
  { name: 'Structural', icon: Frame },
  { name: 'Mechanical', icon: Settings2 },
  { name: 'Piping', icon: Wrench },
  { name: 'Electrical', icon: Zap },
  { name: 'Instrumentation', icon: Gauge },
  { name: 'Equipment', icon: Factory },
  { name: 'GA', icon: LayoutTemplate },
  { name: 'Architectural', icon: Building2 },
  { name: 'Process', icon: FlaskConical },
  { name: 'P&ID', icon: GitMerge },
  { name: 'Isometric', icon: Box },
  { name: 'Fabrication', icon: PenTool },
];

const DisciplineMarqueeItem: React.FC<{ 
  name: string; 
  icon: React.ComponentType<any>; 
  index: number;
}> = ({ name, icon: Icon, index }) => {
  const isGreen = index % 2 === 0;
  const accentColor = isGreen ? '#5D8F2A' : '#F97316';
  
  const [bubblePopped, setBubblePopped] = React.useState(false);
  const [particles, setParticles] = React.useState<{ id: number; tx: number; ty: number }[]>([]);
  const [showRipple, setShowRipple] = React.useState(false);

  const handlePop = (e: React.MouseEvent) => {
    if (bubblePopped) return;
    setBubblePopped(true);
    setShowRipple(true);

    const particleList = Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 2 * Math.PI) / 8;
      const distance = 25 + Math.random() * 15;
      return {
        id: Date.now() + i,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
      };
    });
    setParticles(particleList);

    setTimeout(() => {
      setShowRipple(false);
    }, 600);

    setTimeout(() => {
      setBubblePopped(false);
      setParticles([]);
    }, 1500);
  };

  const iconColor = isGreen ? 'text-[#5D8F2A]' : 'text-[#F97316]';

  return (
    <div 
      onClick={handlePop}
      className="flex flex-col items-center cursor-pointer relative py-2 select-none group/item"
      style={{ width: '90px' }}
    >
      {/* Ambient floating bubbles inside item wrapper */}
      {!bubblePopped && (
        <>
          <div 
            className={`absolute rounded-full pointer-events-none opacity-0 ${isGreen ? 'bg-[#5D8F2A]/25' : 'bg-[#F97316]/25'}`}
            style={{
              width: '8px',
              height: '8px',
              left: '14px',
              bottom: '24px',
              animation: 'bubble-float-1 4.5s ease-in-out infinite',
              animationDelay: `${(index % 3) * 0.7}s`
            }}
          />
          <div 
            className={`absolute rounded-full pointer-events-none opacity-0 ${isGreen ? 'bg-[#F97316]/25' : 'bg-[#5D8F2A]/25'}`}
            style={{
              width: '11px',
              height: '11px',
              right: '10px',
              bottom: '30px',
              animation: 'bubble-float-2 5.5s ease-in-out infinite',
              animationDelay: `${(index % 2) * 1.2}s`
            }}
          />
          <div 
            className={`absolute rounded-full pointer-events-none opacity-0 ${isGreen ? 'bg-[#5D8F2A]/20' : 'bg-[#F97316]/20'}`}
            style={{
              width: '6px',
              height: '6px',
              left: '34px',
              bottom: '18px',
              animation: 'bubble-float-3 4.8s ease-in-out infinite',
              animationDelay: `${(index % 4) * 0.4}s`
            }}
          />
        </>
      )}

      {/* Glassmorphism circular button */}
      <div 
        className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-[#EAEAEA] flex items-center justify-center mb-2 shadow-sm transition-all duration-300 relative group-hover/item:-translate-y-1 group-hover/item:scale-115 group-hover/item:rotate-[8deg] group-hover/item:border-transparent group-hover/item:shadow-[0_0_15px_rgba(93,143,42,0.35),0_0_15px_rgba(249,115,22,0.35)]"
        style={{ 
          animation: 'float-gentle 4s ease-in-out infinite', 
          animationDelay: `${index * 0.15}s` 
        }}
      >
        {/* Premium glass highlight inside container on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none"></div>
        <Icon className={`w-4.5 h-4.5 ${iconColor}`} strokeWidth={1.5} />

        {/* Click ripple effect */}
        {showRipple && (
          <div 
            className="absolute w-10 h-10 rounded-full border border-dashed pointer-events-none" 
            style={{ 
              borderColor: accentColor, 
              animation: 'ripple-expand 0.6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards' 
            }}
          />
        )}

        {/* Bubble burst particles */}
        {particles.map((p, idx) => (
          <div
            key={idx}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: accentColor,
              left: '50%',
              top: '40%',
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
              animation: 'particle-explode 0.7s cubic-bezier(0.1, 0.8, 0.3, 1) forwards'
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Label */}
      <span className="text-[10px] font-[700] text-[#4b5563] uppercase tracking-wider group-hover/item:text-[#111827] transition-colors">
        {name}
      </span>
    </div>
  );
};

interface AboutViewProps {
  onLogin: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onLogin }) => {
  return (
    <div className="h-screen bg-[#FFFFFF] font-sans text-[#111827] flex flex-col selection:bg-[#5D8F2A]/20 selection:text-[#5D8F2A] antialiased relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-[-10%] right-[10%] w-[50%] h-[50%] rounded-full bg-[#5D8F2A]/[0.02] blur-[120px] pointer-events-none z-0"></div>
      
      {/* Header */}
      <header className="h-[64px] bg-[#FFFFFF]/70 backdrop-blur-xl border-b border-[#EAEAEA] flex items-center justify-between px-6 lg:px-10 sticky top-0 z-50 shadow-[0_4px_24px_rgb(0,0,0,0.02)] transition-all shrink-0">
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-[36px] h-[36px] overflow-hidden">
            <div className="w-full h-full bg-[#5D8F2A] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center">
            <span className="text-[20px] lg:text-[22px] font-[800] text-[#5D8F2A] tracking-tight leading-none">Passary Refractories</span>
            <span className="hidden lg:block text-[#EAEAEA] mx-3 text-xl font-light">|</span>
            <span className="text-[#F97316] text-[18px] lg:text-[20px] font-[700] tracking-tight leading-none lg:mt-0 mt-0.5">Drawing Management Dashboard</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8 text-[12px] font-[700] text-[#111827] tracking-widest uppercase">
          <button 
            onClick={onLogin}
            className="px-6 py-2.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-[12px] font-[800] rounded-full shadow-[0_4px_10px_rgba(249,115,22,0.25)] transition-all active:scale-95 flex items-center justify-center tracking-widest uppercase group"
          >
            GET STARTED
            <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10 w-full justify-between overflow-hidden">
        
        {/* Hero Section */}
        <section className="w-full flex-1 flex flex-col justify-center p-4 lg:px-10 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 relative">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-[50%] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-[11px] font-[900] text-[#5D8F2A] tracking-[0.2em] uppercase mb-3 bg-[#5D8F2A]/10 self-start px-3.5 py-1.5 rounded-full border border-[#5D8F2A]/20">ABOUT US</span>
              <h1 className="text-[32px] sm:text-[36px] lg:text-[46px] font-[900] text-[#111827] tracking-tight leading-[1.1] mb-2.5">
                About Refrasynth Minerals<br/>India Private Limited
              </h1>
              
              <h2 className="text-[18px] lg:text-[24px] font-[700] mb-3 tracking-tight">
                <span className="text-[#F97316]">Engineering Drawing Management Dashboard</span>
              </h2>
              
              <p className="text-[15px] lg:text-[17px] text-[#4b5563] mb-5 leading-[1.55] font-medium max-w-[600px]">
                Our platform provides a centralized, secure, and intelligent engineering drawing management system designed for industrial projects. Manage drawing revisions, approvals, workflow automation, document control, and collaboration between design, production, QA/QC, and project teams with maximum efficiency.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: ShieldCheck, title: 'Secure & Centralized', desc: 'Stored securely with role-based access.' },
                  { icon: GitMerge, title: 'Streamlined Workflow', desc: 'Automate approvals and revisions.' },
                  { icon: Box, title: 'Better Collaboration', desc: 'Real-time coordination between teams.' },
                  { icon: TrendingUp, title: 'Improved Efficiency', desc: 'Reduce errors and improve execution.' }
                ].map((feat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4 rounded-[16px] bg-[#FFFFFF] border border-[#EAEAEA] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#5D8F2A]/30 hover:shadow-[0_4px_15px_rgba(93,143,42,0.06)] transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-[#5D8F2A]/10 text-[#5D8F2A] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300">
                      <feat.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[12px] font-[800] text-[#111827] mb-1 leading-tight">{feat.title}</h3>
                    <p className="text-[11px] text-[#6b7280] font-medium leading-snug">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex">
                <button 
                  onClick={onLogin}
                  className="px-7 py-3.5 bg-[#5D8F2A] hover:bg-[#4b7322] text-white text-[13px] font-[800] rounded-full shadow-[0_4px_15px_rgba(93,143,42,0.25)] hover:shadow-[0_8px_20px_rgba(93,143,42,0.35)] transition-all active:scale-95 flex items-center justify-center tracking-widest uppercase group"
                >
                  START MANAGEMENT FLOW
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="w-full lg:w-[48%] flex justify-end items-center relative">
              <div className="relative w-full max-w-[550px] ml-auto">
                <img 
                  src="/about-3d.png" 
                  alt="Industrial Construction Visualization" 
                  className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.08)] mix-blend-multiply contrast-[1.05]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Area for Disciplines */}
        <div className="w-full bg-white/70 backdrop-blur-md border-t border-[#EAEAEA] shadow-[0_-4px_20px_rgba(0,0,0,0.02)] relative z-20 py-3 px-4 overflow-hidden shrink-0 select-none group mt-auto">
          {/* Background soft radial glow accents */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute top-0 left-1/4 w-[150px] h-[150px] rounded-full bg-[#5D8F2A]/[0.08] blur-[40px]"></div>
            <div className="absolute bottom-0 right-1/4 w-[150px] h-[150px] rounded-full bg-[#F97316]/[0.08] blur-[40px]"></div>
          </div>
          
          <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused] relative z-10 pointer-events-auto">
            {[...categories, ...categories].map((cat, index) => (
              <DisciplineMarqueeItem 
                key={index} 
                name={cat.name} 
                icon={cat.icon} 
                index={index} 
              />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

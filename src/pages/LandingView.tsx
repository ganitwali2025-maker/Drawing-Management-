import React from 'react';
import { 
  Target, Settings as GearIcon, ShieldCheck,
  Landmark, Frame, Settings2, Wrench, Zap, Gauge, 
  Factory, LayoutTemplate, Building2, FlaskConical, 
  GitMerge, Box, PenTool 
} from 'lucide-react';
import { LandingHeader } from '../components/Navbar';

interface LandingViewProps {
  view: 'landing' | 'login';
  setView: (view: 'landing' | 'login') => void;
  onLogin: () => void;
}

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

export const LandingView: React.FC<LandingViewProps> = ({ view, setView, onLogin }) => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#111827] flex flex-col selection:bg-[#5D8F2A]/20 selection:text-[#5D8F2A] antialiased relative overflow-hidden">
      {/* Premium background lighting effects */}
      <div className="absolute top-[-10%] right-[10%] w-[50%] h-[50%] rounded-full bg-[#5D8F2A]/[0.03] blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F97316]/[0.03] blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-transparent to-[#FAFAF8] blur-[80px] pointer-events-none z-0"></div>
      
      {/* Header */}
      <LandingHeader onLogin={onLogin} />

      {/* Hero Area */}
      <main className="flex-1 flex flex-col relative z-10 w-full overflow-visible">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 pt-4 lg:pt-8 pb-0 flex-1 flex flex-col justify-start">
          <div className="flex flex-col lg:flex-row items-start justify-between w-full h-full relative">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-[45%] flex flex-col justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 z-20 pt-2 lg:pt-6">
              
              <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[60px] font-[800] text-[#111827] tracking-tight leading-[1.1] mb-2 drop-shadow-sm">
                Refrasynth Minerals India<br />Private Limited
              </h1>
              
              <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-[700] mb-6 tracking-tight flex gap-2.5">
                <span className="text-[#5D8F2A]">Engineering</span>
                <span className="text-[#F97316]">Drawing</span>
              </h2>
              
              <p className="text-[17px] lg:text-[19px] text-[#4b5563] mb-10 max-w-[580px] leading-[1.6] font-medium">
                We deliver accurate, high-quality engineering drawings that streamline planning, ensure seamless execution, and drive reliable industrial performance.
              </p>

              <div className="grid grid-cols-3 gap-4 xl:gap-5 max-w-[560px] mb-8 lg:mb-0">
                {/* Accuracy */}
                <div className="flex flex-col items-center text-center group bg-[#FFFFFF] border border-[#EAEAEA] p-5 rounded-[20px] shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgb(93,143,42,0.08)] hover:-translate-y-1 transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#5D8F2A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFAF8] flex items-center justify-center mb-4 text-[#5D8F2A] group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-[12px] font-[800] text-[#111827] mb-2 tracking-widest uppercase">Accuracy</h3>
                  <p className="text-[12px] text-[#6b7280] font-medium leading-relaxed">Precise drawings<br/>you can rely on.</p>
                </div>
                {/* Efficiency */}
                <div className="flex flex-col items-center text-center group bg-[#FFFFFF] border border-[#EAEAEA] p-5 rounded-[20px] shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgb(249,115,22,0.08)] hover:-translate-y-1 transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFAF8] flex items-center justify-center mb-4 text-[#F97316] group-hover:scale-110 transition-transform">
                    <GearIcon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-[12px] font-[800] text-[#111827] mb-2 tracking-widest uppercase">Efficiency</h3>
                  <p className="text-[12px] text-[#6b7280] font-medium leading-relaxed">Streamlined planning,<br/>better results.</p>
                </div>
                {/* Reliability */}
                <div className="flex flex-col items-center text-center group bg-[#FFFFFF] border border-[#EAEAEA] p-5 rounded-[20px] shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgb(93,143,42,0.08)] hover:-translate-y-1 transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#5D8F2A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFAF8] flex items-center justify-center mb-4 text-[#5D8F2A] group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-[12px] font-[800] text-[#111827] mb-2 tracking-widest uppercase">Reliability</h3>
                  <p className="text-[12px] text-[#6b7280] font-medium leading-relaxed">Built on standards,<br/>delivered with trust.</p>
                </div>
              </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="w-full lg:w-[55%] flex justify-end items-start h-full relative z-10 pointer-events-none mt-6 lg:mt-[-40px]">
              <div className="relative w-full max-w-[1000px] xl:max-w-[1300px] ml-auto translate-x-4 lg:translate-x-12 -translate-y-[180px] lg:-translate-y-[220px]">
                {/* Soft glow behind illustration */}
                <div className="absolute inset-0 bg-radial from-[#5D8F2A]/5 to-transparent blur-3xl rounded-full scale-110 -z-10"></div>
                <img 
                  src="/hero-illustration.png" 
                  alt="Industrial Engineering Illustration" 
                  className="w-full h-auto object-contain object-right drop-shadow-sm opacity-95 scale-[1.25] lg:scale-[1.35] xl:scale-[1.45] origin-top-right"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Footer Area for Disciplines */}
        <div className="w-full bg-white/70 backdrop-blur-md rounded-[20px] border border-[#EAEAEA] shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative z-20 py-4 px-4 overflow-hidden mt-auto select-none group">
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

import React from 'react';
import { Settings } from 'lucide-react';

export const GearLoader: React.FC = () => {
  return (
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
  );
};

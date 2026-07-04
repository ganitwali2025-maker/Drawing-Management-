import React from 'react';
import { Loader2 } from 'lucide-react';
import { LoadingViewProps } from '../types/index';
import { GearLoader } from '../components/Loading';

export const LoadingView: React.FC<LoadingViewProps> = ({ onComplete }) => {
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
          
            {/* Gear Loader Component */}
            <GearLoader />

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
};

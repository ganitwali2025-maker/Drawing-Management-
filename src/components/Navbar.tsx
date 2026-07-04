import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import { LandingHeaderProps, DashboardHeaderProps, RegisterHeaderProps } from '../types/index';

export const LandingHeader: React.FC<LandingHeaderProps> = ({ onLogin }) => {
  return (
    <header className="h-[84px] bg-white/50 backdrop-blur-md border-b border-white/40 flex items-center justify-between px-8 lg:px-12 sticky top-0 z-50 shadow-[0_4px_30px_rgb(0,0,0,0.02)]">
      <div className="flex items-center space-x-3.5">
        <div className="flex items-center justify-center w-[48px] h-[48px] overflow-hidden">
          <div className="w-full h-full bg-[#6b8e23] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
        </div>
        <div className="flex items-center pt-1">
          <span className="text-[28px] font-[800] text-[#6b8e23] tracking-tight">Passary Refractories</span>
          <span className="text-[#F97316] text-[28px] font-[700] tracking-tight ml-3 mt-0.5">Drawing Management Dashboard</span>
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
  );
};

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onLogout, onRegister }) => {
  return (
    <header className="h-[76px] bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center space-x-3.5">
        <div className="flex items-center justify-center w-[44px] h-[44px] overflow-hidden">
          <div className="w-full h-full bg-[#6b8e23] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
        </div>
        <div className="flex items-center pt-1">
          <span className="text-[28px] font-[800] text-[#6b8e23] tracking-tight">Passary Refractories</span>
          <span className="text-[#F97316] text-[28px] font-[700] tracking-tight ml-3 mt-0.5">Drawing Management Dashboard</span>
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
  );
};

export const RegisterHeader: React.FC<RegisterHeaderProps> = ({ onBack }) => {
  return (
    <header className="shrink-0 h-[76px] bg-white border-b border-slate-200 flex items-center justify-between px-8 z-50 shadow-sm">
      <div className="flex items-center space-x-3.5">
        <div className="flex items-center justify-center w-[44px] h-[44px] overflow-hidden">
          <div className="w-full h-full bg-[#6b8e23] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
        </div>
        <div className="flex items-center pt-1">
          <span className="text-[28px] font-[800] text-[#6b8e23] tracking-tight">Passary Refractories</span>
          <span className="text-[#F97316] text-[28px] font-[800] tracking-tight ml-3 mt-0.5">- Drawing Index Register</span>
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
  );
};

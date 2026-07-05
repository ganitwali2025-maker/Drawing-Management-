import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LandingHeaderProps, DashboardHeaderProps, RegisterHeaderProps } from '../types/index';

export const LandingHeader: React.FC<LandingHeaderProps> = ({ onLogin }) => {
  return (
    <header className="h-[84px] bg-[#FFFFFF]/70 backdrop-blur-xl border-b border-[#EAEAEA] flex items-center justify-between px-8 lg:px-12 sticky top-0 z-50 shadow-[0_4px_24px_rgb(0,0,0,0.02)] transition-all">
      <Link to="/" className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-[44px] h-[44px] overflow-hidden">
          <div className="w-full h-full bg-[#5D8F2A] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <span className="text-[24px] lg:text-[26px] font-[800] text-[#5D8F2A] tracking-tight leading-none">Passary Refractories</span>
          <span className="hidden lg:block text-[#EAEAEA] mx-3 text-2xl font-light">|</span>
          <span className="text-[#F97316] text-[20px] lg:text-[24px] font-[700] tracking-tight leading-none lg:mt-0 mt-1">Drawing Management Dashboard</span>
        </div>
      </Link>
      
      <div className="hidden lg:flex items-center space-x-10 text-[13px] font-[700] text-[#111827] tracking-widest uppercase">
        <button 
          onClick={onLogin}
          className="px-8 py-3.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-[13px] font-[800] rounded-full shadow-[0_8px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.35)] transition-all active:scale-95 flex items-center justify-center tracking-widest uppercase group"
        >
          START
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
        </button>
      </div>
      
      <div className="lg:hidden">
        <button onClick={onLogin} className="px-6 py-2.5 bg-[#F97316] text-white text-[12px] font-[800] rounded-full shadow-[0_8px_20px_rgba(249,115,22,0.25)] flex items-center justify-center tracking-widest uppercase">
          START
        </button>
      </div>
    </header>
  );
};

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onLogout, onRegister }) => {
  return (
    <header className="h-[76px] bg-[#FFFFFF]/80 backdrop-blur-xl border-b border-[#EAEAEA] flex items-center justify-between px-8 sticky top-0 z-10 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
      <div className="flex items-center space-x-3.5">
        <div className="flex items-center justify-center w-[40px] h-[40px] overflow-hidden">
          <div className="w-full h-full bg-[#5D8F2A] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
        </div>
        <div className="flex items-center pt-1">
          <span className="text-[24px] font-[800] text-[#5D8F2A] tracking-tight">Passary Refractories</span>
          <span className="text-[#EAEAEA] mx-3 text-2xl font-light">|</span>
          <span className="text-[#F97316] text-[24px] font-[700] tracking-tight mt-0.5">Drawing Management Dashboard</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 rounded-full border border-[#EAEAEA] bg-white shadow-sm flex items-center justify-center text-[#4b5563] hover:bg-[#FAFAF8] transition-colors">
          <Settings className="w-[18px] h-[18px]" strokeWidth={2} />
        </button>
        
        <div className="w-px h-6 bg-[#EAEAEA]"></div>
        
        <button 
          onClick={onLogout}
          className="px-6 py-2.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-[13px] font-[800] rounded-full shadow-[0_8px_20px_rgba(249,115,22,0.25)] transition-all active:scale-95 flex items-center justify-center tracking-widest uppercase"
        >
          BACK
        </button>
      </div>
    </header>
  );
};

export const RegisterHeader: React.FC<RegisterHeaderProps> = ({ onBack }) => {
  return (
    <header className="shrink-0 h-[76px] bg-[#FFFFFF]/80 backdrop-blur-xl border-b border-[#EAEAEA] flex items-center justify-between px-8 z-50 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
      <div className="flex items-center space-x-3.5">
        <div className="flex items-center justify-center w-[40px] h-[40px] overflow-hidden">
          <div className="w-full h-full bg-[#5D8F2A] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
        </div>
        <div className="flex items-center pt-1">
          <span className="text-[24px] font-[800] text-[#5D8F2A] tracking-tight">Passary Refractories</span>
          <span className="text-[#EAEAEA] mx-3 text-2xl font-light">|</span>
          <span className="text-[#F97316] text-[24px] font-[800] tracking-tight mt-0.5">Drawing Index Register</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <button 
          onClick={onBack}
          className="px-6 py-2.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-[13px] font-[800] rounded-full shadow-[0_8px_20px_rgba(249,115,22,0.25)] transition-all active:scale-95 flex items-center justify-center tracking-widest uppercase"
        >
          BACK
        </button>
      </div>
    </header>
  );
};

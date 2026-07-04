import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DisciplineCardProps, ActionCardProps } from '../types/index';

export const DisciplineCard: React.FC<DisciplineCardProps> = ({ 
  icon: Icon, 
  title, 
  count, 
  image, 
  onClick
}) => {
  // Map cards to alternate Green and Orange accents
  const isOrange = ['structural', 'piping', 'instrumentation', 'general', 'general arrangement (ga)', 'general arrangement'].includes(title.toLowerCase());
  const accentClass = isOrange ? 'text-[#F97316]' : 'text-[#5D8F2A]';
  const bgClass = isOrange ? 'bg-[#F97316]/10' : 'bg-[#5D8F2A]/10';
  const borderClass = isOrange ? 'border-[#F97316]/20' : 'border-[#5D8F2A]/20';
  const hoverBgClass = isOrange ? 'group-hover:bg-[#F97316]' : 'group-hover:bg-[#5D8F2A]';
  const hoverTextClass = isOrange ? 'group-hover:text-[#F97316]' : 'group-hover:text-[#5D8F2A]';
  const hoverBtnClass = isOrange ? 'group-hover:bg-[#F97316] group-hover:border-[#F97316]' : 'group-hover:bg-[#5D8F2A] group-hover:border-[#5D8F2A]';
  const shadowGlow = isOrange ? 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)]' : 'hover:shadow-[0_20px_40px_rgba(93,143,42,0.08)]';
  const gridHoverColor = isOrange ? 'group-hover:to-[#F97316]/[0.02]' : 'group-hover:to-[#5D8F2A]/[0.02]';

  return (
    <div onClick={onClick} className={`bg-white rounded-[22px] border border-[#E8E8E8] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] ${shadowGlow} hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-[400px] cursor-pointer relative group`}>
      
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center space-x-3.5">
          <div className={`w-[42px] h-[42px] rounded-xl ${bgClass} ${accentClass} ${borderClass} border flex items-center justify-center ${hoverBgClass} group-hover:text-white transition-all duration-300 shadow-sm`}>
            <Icon className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className={`text-[17px] font-[750] text-[#111827] leading-none tracking-tight ${hoverTextClass} transition-colors`}>{title}</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Category</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[20px] font-[800] text-[#111827]">{count}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Drawings</span>
        </div>
      </div>

      {/* Image Area */}
      <div className={`flex-1 rounded-[16px] overflow-hidden bg-[#F8F9FA] border border-[#E8E8E8]/60 p-4 flex items-center justify-center relative mb-4 transition-all duration-300 group-hover:border-slate-200 bg-gradient-to-b from-[#F8F9FA] to-[#F8F9FA] ${gridHoverColor}`}>
        {/* Blueprint line grid overlay on hover */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8E8E8_1px,transparent_1px),linear-gradient(to_bottom,#E8E8E8_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.05] group-hover:opacity-[0.08] transition-opacity"></div>
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.06] mix-blend-multiply"
          />
        )}
      </div>

      {/* Footer Bar */}
      <div className="flex items-center justify-between mt-auto pt-1 relative z-10">
        <span className="text-[12px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">Access database</span>
        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8E8E8] bg-white text-xs font-bold text-[#111827] ${hoverBtnClass} group-hover:text-white transition-all duration-300`}>
          <span>View</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
};

export const ActionCard: React.FC<ActionCardProps> = ({ 
  icon: Icon, 
  title, 
  desc, 
  btnText, 
  colorTheme, 
  onClick 
}) => {
  // Map themes to clean Green / Orange accents
  const isOrange = colorTheme === 'orange' || colorTheme === 'blue';
  const bgClass = isOrange ? 'bg-[#F97316]/10' : 'bg-[#5D8F2A]/10';
  const textClass = isOrange ? 'text-[#F97316]' : 'text-[#5D8F2A]';
  const borderClass = isOrange ? 'border-[#F97316]/20' : 'border-[#5D8F2A]/20';
  const glowClass = isOrange 
    ? 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] hover:border-[#F97316]/20' 
    : 'hover:shadow-[0_20px_40px_rgba(93,143,42,0.08)] hover:border-[#5D8F2A]/20';
  const btnClass = isOrange 
    ? 'bg-[#F97316] hover:bg-[#ea580c] text-white border-[#F97316]' 
    : 'bg-[#5D8F2A] hover:bg-[#4d7622] text-white border-[#5D8F2A]';

  return (
    <div onClick={onClick} className={`bg-white rounded-[22px] p-7 border border-[#E8E8E8] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center cursor-pointer group ${glowClass}`}>
      <div className={`w-16 h-16 rounded-[20px] ${bgClass} ${textClass} border ${borderClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      <h3 className="text-[18px] font-[700] mb-2 text-[#111827] transition-colors">{title}</h3>
      <p className="text-[13px] text-slate-500 mb-6 flex-1 leading-relaxed font-medium">{desc}</p>
      <button className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-colors w-full flex items-center justify-center space-x-2 shadow-sm ${btnClass}`}>
        <span>{btnText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
};

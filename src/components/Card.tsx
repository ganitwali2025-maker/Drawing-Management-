import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DisciplineCardProps, ActionCardProps } from '../types/index';

export const DisciplineCard: React.FC<DisciplineCardProps> = ({ 
  icon: Icon, 
  title, 
  count, 
  image, 
  imgSize = "", 
  imgClass = "", 
  blendMode = "mix-blend-multiply",
  onClick
}) => {
  return (
    <div onClick={onClick} className="bg-white rounded-[24px] border border-slate-200 shadow-sm hover:shadow-[0_4px_15px_rgba(249,115,22,0.15)] hover:border-[#F97316] transition-all duration-300 group flex flex-col h-[360px] cursor-pointer relative overflow-hidden">
      
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
};

export const ActionCard: React.FC<ActionCardProps> = ({ 
  icon: Icon, 
  title, 
  desc, 
  btnText, 
  colorTheme, 
  onClick 
}) => {
  const themes = {
    green: { bg: 'bg-[#6b8e23]/10', text: 'text-[#6b8e23]', hover: 'hover:border-[#6b8e23]/40', border: 'border-[#6b8e23]/20' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:border-blue-300', border: 'border-blue-200' },
    orange: { bg: 'bg-[#F97316]/10', text: 'text-[#F97316]', hover: 'hover:border-[#F97316]/40', border: 'border-[#F97316]/20' },
    white: { bg: 'bg-slate-50', text: 'text-slate-700', hover: 'hover:border-slate-300', border: 'border-slate-200' },
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

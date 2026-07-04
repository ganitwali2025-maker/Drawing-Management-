import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, LayoutGrid, FileText, ExternalLink, FolderOpen, Copy, Settings } from 'lucide-react';
import { Drawing } from '../types/index';

interface DisciplineDrawingsViewProps {
  title: string;
  discipline: string;
  drawings: Drawing[];
  onBack: () => void;
}

export const DisciplineDrawingsView: React.FC<DisciplineDrawingsViewProps> = ({ title, discipline, drawings, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const getDisciplineImage = (disc: string) => {
    const normalized = disc.toLowerCase();
    if (normalized.includes('civil')) return '/sketch-civil.png';
    if (normalized.includes('structur')) return '/sketch-civil.png';
    if (normalized.includes('mechanic')) return '/sketch-mech.png';
    if (normalized.includes('piping') || normalized.includes('pipe')) return '/sketch-mech.png';
    if (normalized.includes('electric')) return '/sketch-elec.png';
    if (normalized.includes('instrument')) return '/sketch-elec.png';
    if (normalized.includes('equip')) return '/sketch-equip.png';
    if (normalized.includes('general') || normalized.includes('ga')) return '/sketch-equip.png';
    
    return '/sketch-civil.png'; // default fallback
  };

  // Filter drawings based on search
  const filteredDrawings = drawings.filter(d => {
    const search = searchTerm.toLowerCase();
    return (
      d.dwgNo?.toLowerCase().includes(search) || 
      d.title?.toLowerCase().includes(search) ||
      d.desc?.toLowerCase().includes(search)
    );
  });

  const totalItems = filteredDrawings.length;
  const currentDrawings = filteredDrawings;

  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#F4F6F4] font-sans text-slate-900 flex flex-col">
      {/* Top Brand Header */}
      <header className="h-[80px] bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        {/* Left Side: Logo & Brand Title */}
        <div className="flex items-center space-x-3.5">
          <div className="flex items-center justify-center w-[44px] h-[44px] overflow-hidden">
            <div className="w-full h-full bg-[#6b8e23] scale-[2.5]" style={{ maskImage: 'url(/logo.png)', maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat', WebkitMaskImage: 'url(/logo.png)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
          </div>
          <div className="flex items-center pt-1">
            <span className="text-[28px] font-[800] text-[#6b8e23] tracking-tight">Passary Refractories</span>
            <span className="text-[28px] font-[800] text-slate-300 mx-3">-</span>
            <span className="text-[24px] font-bold text-[#F97316] tracking-tight mt-1">{title}</span>
          </div>
        </div>
        
        {/* Right Side: Search & Actions */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3 mr-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search drawing number, title..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 h-[48px] border border-slate-200 rounded-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-[#6b8e23]/20 focus:border-[#6b8e23] text-sm bg-slate-50 transition-all shadow-[0_2px_8px_rgb(0,0,0,0.02)]"
              />
            </div>
            <button 
              onClick={() => navigate('/register')}
              className="flex items-center justify-center w-[48px] h-[48px] border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-600 bg-white shadow-[0_2px_8px_rgb(0,0,0,0.02)]"
              title="Quick Access to Main Sheet"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>

          <div className="h-8 w-px bg-slate-200 mx-1"></div>

          <button className="ml-2 w-[48px] h-[48px] rounded-full border border-slate-100 shadow-[0_2px_8px_rgb(0,0,0,0.04)] flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors flex-shrink-0">
            <Settings className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          
          <div className="w-[1px] h-6 bg-slate-200 mx-2"></div>
          
          <button 
            onClick={onBack} 
            className="ml-2 px-6 h-[48px] bg-[#ed5f2b] hover:bg-[#d45224] text-white text-[14px] font-bold rounded-full shadow-sm transition-all active:scale-95 flex items-center justify-center tracking-wide uppercase flex-shrink-0"
          >
            Back
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-[1600px] mx-auto w-full">
        
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mb-8">
          {currentDrawings.map((dwg, idx) => {
            const serialNumber = drawings.indexOf(dwg) + 1;
            
            return (
              <div key={idx} className="bg-white rounded-[16px] border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(27,94,32,0.12)] transition-all duration-300 hover:border-[#81C784] flex flex-col overflow-hidden group">
                
                {/* Top Section */}
                <div className="flex p-5 min-h-[220px]">
                  
                  {/* Left Column: Data */}
                  <div className="flex-1 min-w-0 pr-5 flex flex-col">
                    {/* Serial + Number */}
                    <div className="flex items-start space-x-3 mb-4">
                      {/* Serial Number */}
                      <div className="flex items-start flex-shrink-0 pt-1 pr-1">
                        <span className="text-[16px] font-bold text-black">{serialNumber}.</span>
                      </div>
                      
                      {/* Drawing Number */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className="flex items-center space-x-2">
                          <h2 className="text-[14px] sm:text-[15px] font-bold text-[#6b8e23] truncate" title={dwg.dwgNo}>{dwg.dwgNo}</h2>
                          <button className="text-[#6b8e23] opacity-70 hover:opacity-100 transition-opacity flex-shrink-0">
                             <Copy className="w-[15px] h-[15px]" strokeWidth={2} />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div className="mb-5 flex-1">
                      <div className="text-[10px] font-medium text-slate-500 mb-1">Drawing Title</div>
                      <h3 className="text-[13px] sm:text-[14px] font-bold text-[#0F172A] leading-[1.4] uppercase line-clamp-3" title={dwg.title}>
                        {dwg.title}
                      </h3>
                    </div>
                    
                    {/* Compact Metadata Row with Thin Dividers */}
                    <div className="flex items-center mt-auto text-[12px] sm:text-[13px]">
                      <div className="flex flex-col pr-4 border-r border-slate-200">
                        <span className="text-[10px] font-medium text-slate-500 mb-0.5">Discipline</span>
                        <span className="font-semibold text-slate-900">{dwg.discipline || discipline}</span>
                      </div>
                      <div className="flex flex-col px-4 border-r border-slate-200">
                        <span className="text-[10px] font-medium text-slate-500 mb-0.5">Revision</span>
                        <span className="font-semibold text-slate-900">{dwg.rev || '-'}</span>
                      </div>
                      <div className="flex flex-col pl-4">
                        <span className="text-[10px] font-medium text-slate-500 mb-0.5">Date</span>
                        <span className="font-semibold text-slate-900">{dwg.date || '-'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-[120px] sm:w-[130px] flex-shrink-0 flex items-center justify-center pl-4">
                    <img 
                      src={getDisciplineImage(dwg.discipline || discipline)}
                      alt="Thumbnail"
                      className="w-full max-h-[140px] object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all duration-300 scale-[1.2] origin-right group-hover:scale-[1.25]"
                      onError={(e) => {
                         (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="border-t border-slate-100 px-5 py-4 flex items-center justify-between bg-white mt-auto">
                  <div className="flex items-center space-x-3.5">
                    <FileText className="w-7 h-7 text-[#6b8e23] flex-shrink-0" strokeWidth={1.5} />
                    <div className="min-w-0 flex flex-col justify-center pt-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[14px] font-bold text-[#6b8e23]">ENGINEERING DRAWINGS PDF</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={dwg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center space-x-2 px-6 h-[44px] bg-white border-2 border-transparent hover:border-[#6b8e23] hover:bg-[#6b8e23]/5 text-[#F97316] rounded-[12px] font-bold transition-colors"
                  >
                    <FolderOpen className="w-[18px] h-[18px]" strokeWidth={2.5} />
                    <span className="text-[14px]">Open PDF</span>
                    <ExternalLink className="w-[18px] h-[18px] ml-1 opacity-80" strokeWidth={2.5} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {currentDrawings.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-200">
            <FileText className="w-12 h-12 text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-1">No drawings found</h3>
            <p className="text-sm text-slate-500">Try adjusting your search or filters.</p>
          </div>
        )}

      </main>
    </div>
  );
};

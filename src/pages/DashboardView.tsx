import React from 'react';
import {
  Building2, Factory, Settings as GearIcon, Waypoints, Zap, Gauge, Box, LayoutTemplate,
  FileText, PlusCircle, RefreshCw, ShieldCheck, ArrowRight
} from 'lucide-react';

import { DashboardHeader } from '../components/Navbar';
import { DisciplineCard, ActionCard } from '../components/Card';
import { DisciplineCounts } from '../types/index';

interface DashboardViewProps {
  onLogout: () => void;
  onRegister: () => void;
  onDisciplineClick?: (id: string) => void;
  counts: DisciplineCounts;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onLogout, onRegister, onDisciplineClick, counts }) => {
  return (
    <div className="min-h-screen bg-[#F4F6F4] font-sans text-slate-900 flex overflow-hidden selection:bg-[#2E7D32]/20 selection:text-[#2E7D32] antialiased relative">
      {/* Ambient background blur for color mixing */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#2E7D32]/[0.03] blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] rounded-full bg-[#FF6B35]/[0.02] blur-[120px] pointer-events-none z-0"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        
        {/* Header */}
        <DashboardHeader onLogout={onLogout} onRegister={onRegister} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 scrollbar-hide pb-24">
          <div className="max-w-[1600px] mx-auto space-y-10">
            
            {/* Hero Card */}
            <div className="relative bg-white rounded-[24px] overflow-hidden border border-slate-200/60 min-h-[320px] flex items-center shadow-sm group">
              {/* Premium Abstract Background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9]/80 via-white to-[#FFE8D6]/40"></div>
                {/* Decorative faint dot grid */}
                <div className="absolute left-0 top-0 w-2/3 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNkMWQ1ZGIiLz48L3N2Zz4=')] opacity-50 mix-blend-multiply"></div>
              </div>

              {/* Hero Content (Left Side - 55%) */}
              <div className="relative z-10 px-10 py-12 lg:px-14 lg:py-14 w-full lg:w-[55%] h-full flex flex-col justify-center">
                <div className="mb-2.5">
                  <span className="text-[18px] font-bold text-[#6b8e23] tracking-wide">Welcome to Passary Refractories</span>
                </div>
                <h1 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 mb-4 tracking-tight leading-[1.15]">
                  Drawing Management Dashboard
                </h1>
                <p className="text-[14px] text-slate-600 mb-8 max-w-[460px] leading-[1.6] font-medium">
                  Manage all engineering drawings in one place. Easily organize files, find the required drawings, upload new documents, and keep project information secure and well arranged.
                </p>
                
                {/* Quick Access Buttons */}
                <div className="mt-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <button onClick={onRegister} className="flex items-center gap-3 px-3 py-2 bg-green-50/80 border border-green-100 rounded-xl hover:bg-green-100/80 transition-colors group">
                      <div className="w-7 h-7 rounded-lg bg-green-100/80 flex items-center justify-center text-green-700 group-hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px] font-bold text-green-700">Drawing Register</span>
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </button>
                    
                    <button className="flex items-center gap-3 px-3 py-2 bg-purple-50/80 border border-purple-100 rounded-xl hover:bg-purple-100/80 transition-colors group">
                      <div className="w-7 h-7 rounded-lg bg-purple-100/80 flex items-center justify-center text-purple-700 group-hover:scale-105 transition-transform">
                        <PlusCircle className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px] font-bold text-purple-700">Add New Drawing</span>
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Hero Illustration (Right Side) */}
              <div className="absolute right-12 lg:right-24 bottom-0 w-[45%] h-full hidden lg:flex items-end justify-end z-0 pointer-events-none">
                <img 
                  src="/hero-illustration.png" 
                  alt="Engineering Factory Illustration" 
                  className="w-full h-[130%] object-contain object-right-bottom mix-blend-multiply brightness-[1.08] contrast-[1.15] transition-transform duration-700 origin-bottom scale-100 group-hover:scale-[1.05] -translate-y-2"
                />
              </div>
            </div>

            {/* Discipline Modules */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DisciplineCard icon={Building2} title="Civil" desc="View all civil foundation, structural and architectural drawings." count={counts.civil} image="/civil-drawing-v3.png" onClick={() => onDisciplineClick?.('civil')} />
                <DisciplineCard icon={Factory} title="Structural" desc="Manage structural steel, fabrication and erection drawings." count={counts.structural} image="/structural-drawing.png" onClick={() => onDisciplineClick?.('structural')} />
                <DisciplineCard icon={GearIcon} title="Mechanical" desc="Access mechanical equipment, assembly and part drawings." count={counts.mechanical} image="/mechanical-drawing-white-final.png" onClick={() => onDisciplineClick?.('mechanical')} />
                <DisciplineCard icon={Waypoints} title="Piping" desc="Review piping layouts, isometrics and P&ID diagrams." count={counts.piping} image="/piping-drawing.png" onClick={() => onDisciplineClick?.('piping')} />
                <DisciplineCard icon={Zap} title="Electrical" desc="Electrical layouts, single line diagrams and wiring schemes." count={counts.electrical} image="/electrical-drawing.jpg" onClick={() => onDisciplineClick?.('electrical')} />
                <DisciplineCard icon={Gauge} title="Instrumentation" desc="Instrumentation loop diagrams, hook-ups and logic diagrams." count={counts.instrument} image="/instrumentation-drawing.jpg" onClick={() => onDisciplineClick?.('instrumentation')} />
                <DisciplineCard icon={Box} title="Equipment" desc="Vendor equipment drawings, datasheets and manuals." count={counts.equipment} image="/equipment-drawing.jpg" onClick={() => onDisciplineClick?.('equipment')} />
                <DisciplineCard icon={LayoutTemplate} title="General Arrangement" desc="Plant general arrangement and overall layout drawings." count={counts.general} image="/ga-drawing.jpg" onClick={() => onDisciplineClick?.('general')} />
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ActionCard 
                  icon={FileText} 
                  title="Drawing Register" 
                  desc="View, search and manage all drawings in the centralized system."
                  btnText="Go to Register"
                  colorTheme="green"
                  onClick={onRegister}
                />
                <ActionCard 
                  icon={PlusCircle} 
                  title="Add New Drawing" 
                  desc="Upload and create new drawing records with metadata."
                  btnText="Add Drawing"
                  colorTheme="purple"
                />
                <ActionCard 
                  icon={RefreshCw} 
                  title="Revision Management" 
                  desc="Manage drawing revisions, history and version control."
                  btnText="Manage Revisions"
                  colorTheme="orange"
                />
                <ActionCard 
                  icon={ShieldCheck} 
                  title="Approval Workflow" 
                  desc="Review, approve and track drawing approval workflows."
                  btnText="Go to Workflow"
                  colorTheme="amber"
                />
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

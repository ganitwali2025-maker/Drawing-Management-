import React, { useState } from 'react';
import {
  Building2, Layers, Settings as GearIcon, Zap, Waypoints, Gauge, Box, LayoutTemplate,
  Filter, Plus, RefreshCw
} from 'lucide-react';

import { RegisterHeader } from '../components/Navbar';
import { AddDrawingModal } from '../components/Modal';
import { SearchBar } from '../components/SearchBar';
import { Table } from '../components/Table';
import { Drawing, DisciplineCounts } from '../types/index';

interface DrawingRegisterViewProps {
  onBack: () => void;
  tableData: Drawing[];
  loading: boolean;
  counts: DisciplineCounts;
  onRefresh: () => void;
}

export const DrawingRegisterView: React.FC<DrawingRegisterViewProps> = ({ 
  onBack, 
  tableData, 
  loading, 
  counts, 
  onRefresh 
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = tableData.filter(d => {
    const search = searchTerm.toLowerCase();
    return (
      d.desc?.toLowerCase().includes(search) ||
      d.title?.toLowerCase().includes(search) ||
      d.dwgNo?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      <AddDrawingModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onSuccess={onRefresh} />
      
      {/* Main Passary Header */}
      <RegisterHeader onBack={onBack} />

      {/* Register Content */}
      <div className="flex-1 flex flex-col p-6 max-w-[1600px] mx-auto w-full overflow-hidden">
        
        {/* Top 8 Stat Cards */}
        <div className="flex flex-wrap items-center gap-3 w-full mb-5 shrink-0">
          {[
            { icon: Building2, title: 'CIVIL', count: counts.civil, iconBg: 'bg-blue-50', textCol: 'text-blue-600' },
            { icon: Layers, title: 'STRUCTURAL', count: counts.structural, iconBg: 'bg-orange-50', textCol: 'text-orange-600' },
            { icon: GearIcon, title: 'MECHANICAL', count: counts.mechanical, iconBg: 'bg-purple-50', textCol: 'text-purple-600' },
            { icon: Zap, title: 'ELECTRICAL', count: counts.electrical, iconBg: 'bg-amber-50', textCol: 'text-amber-600' },
            { icon: Waypoints, title: 'PIPING', count: counts.piping, iconBg: 'bg-cyan-50', textCol: 'text-cyan-600' },
            { icon: Gauge, title: 'INSTRUMENT', count: counts.instrument, iconBg: 'bg-pink-50', textCol: 'text-pink-600' },
            { icon: Box, title: 'EQUIPMENT', count: counts.equipment, iconBg: 'bg-emerald-50', textCol: 'text-emerald-600' },
            { icon: LayoutTemplate, title: 'GENERAL ARR.', count: counts.general, iconBg: 'bg-slate-100', textCol: 'text-slate-600' }
          ].map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex-1 min-w-[140px]">
              <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center ${card.textCol}`}>
                <card.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className={`text-[10px] font-bold ${card.textCol} uppercase tracking-wider`}>{card.title}</div>
                <div className="text-[20px] font-black text-slate-800 leading-none mt-1 mb-0.5">{card.count}</div>
                <div className="text-[10px] font-semibold text-slate-500">Drawings</div>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar Area */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-4 px-2 w-full shrink-0">
          
          {/* Left: Search */}
          <SearchBar 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Center: Empty Space for Layout */}
          <div></div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden xl:block w-px h-8 bg-slate-200 mx-1"></div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 text-green-700 font-bold text-[13px] rounded-lg shadow-sm transition-all active:scale-95">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-4 py-2 bg-[#155e30] hover:bg-[#114b26] text-white font-bold text-[13px] rounded-lg shadow-sm transition-all active:scale-95">
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              <span>Add New</span>
            </button>
            <button onClick={onRefresh} className="flex items-center justify-center w-9 h-9 bg-white border border-slate-200 text-green-700 hover:border-slate-300 rounded-lg shadow-sm transition-all active:scale-95">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table Area */}
        <Table tableData={filteredData} loading={loading} />
        
        {/* Footer */}
        <div className="flex justify-between items-center mt-3 text-[12px] text-slate-600 font-semibold px-2 shrink-0">
          <div>Note : This is system generated register</div>
          <div></div>
          <div>Date : 21/05/2025 | Time : 11:30 AM</div>
        </div>

      </div>
    </div>
  );
};

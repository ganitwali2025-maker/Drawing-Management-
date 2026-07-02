import React from 'react';
import { 
  Home, 
  PenTool, 
  Box, 
  BarChart2, 
  Layers, 
  ListOrdered, 
  FileText, 
  Ruler, 
  Files, 
  FolderOpen, 
  Users, 
  Settings,
  Building2
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: PenTool, label: 'Drawings' },
  { icon: Box, label: '3D Models' },
  { icon: BarChart2, label: 'Analysis' },
  { icon: Layers, label: 'Sections' },
  { icon: ListOrdered, label: 'BOM / Quantities' },
  { icon: FileText, label: 'Reports' },
  { icon: Ruler, label: 'Measurements' },
  { icon: Files, label: 'Documents' },
  { icon: FolderOpen, label: 'Projects' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col fixed left-0 top-0">
      <div className="p-4 flex items-center gap-3">
        <div className="bg-green-600 text-white p-1.5 rounded-lg">
          <Building2 size={24} />
        </div>
        <div>
          <h1 className="font-bold text-gray-900 leading-tight">GREEN COLLAR</h1>
          <p className="text-xs text-gray-500 font-medium">Factory Structure Analyzer</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 scrollbar-hide">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              item.active 
                ? 'bg-green-50 text-green-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon size={18} className={item.active ? 'text-green-600' : 'text-gray-400'} />
            {item.label}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">Storage Usage</h3>
          <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
            <span className="font-medium text-gray-900">48.6 GB <span className="text-gray-400 font-normal">/ 200 GB</span></span>
            <span className="font-semibold text-gray-900">24%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-[24%]"></div>
          </div>
        </div>
        <button className="w-full py-2 px-4 border border-green-200 text-green-700 bg-green-50 rounded-lg text-sm font-semibold hover:bg-green-100 transition-colors">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
}

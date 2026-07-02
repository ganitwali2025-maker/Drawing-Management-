import React from 'react';
import { 
  FolderOpen, 
  Scissors, 
  Ruler, 
  BarChart2, 
  ArrowLeftRight, 
  ListOrdered, 
  Box, 
  ChevronDown,
  ZoomIn,
  Lightbulb
} from 'lucide-react';

const viewerActions = [
  { icon: FolderOpen, label: 'Open', active: true },
  { icon: Scissors, label: 'Section' },
  { icon: Ruler, label: 'Measure' },
  { icon: BarChart2, label: 'Analyse' },
  { icon: ArrowLeftRight, label: 'Compare' },
  { icon: ListOrdered, label: 'BOM' },
  { icon: Box, label: '3D Model' },
];

export function CenterColumn() {
  return (
    <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
      {/* Main Factory Structure Viewer */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col flex-1">
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <h2 className="font-bold text-gray-900">Main Factory Structure</h2>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="text-sm text-gray-500">No drawing opened</span>
        </div>
        
        <div className="p-3 border-b border-gray-100 flex items-center justify-between overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2">
            {viewerActions.map((action, i) => (
              <button 
                key={i}
                className={`flex flex-col items-center justify-center w-16 h-14 rounded-lg transition-colors ${
                  action.active 
                    ? 'text-green-600 bg-green-50 border border-green-100' 
                    : 'text-gray-500 hover:bg-gray-50 border border-transparent'
                }`}
              >
                <action.icon size={18} className="mb-1" />
                <span className="text-[10px] font-medium">{action.label}</span>
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors ml-4 whitespace-nowrap">
            3D View <ChevronDown size={14} />
          </button>
        </div>

        <div className="flex-1 min-h-[350px] p-6 flex flex-col items-center justify-center relative">
          <div className="border border-dashed border-gray-200 bg-gray-50/50 rounded-2xl w-full h-full absolute inset-4 -z-10"></div>
          
          <div className="relative w-48 h-32 mb-6 opacity-80">
            {/* Placeholder graphic for drawing */}
            <svg viewBox="0 0 200 150" className="w-full h-full text-green-100" fill="currentColor">
              <path d="M20 20h160v110H20z" stroke="#cbd5e1" strokeWidth="2" fill="#f8fafc"/>
              <path d="M40 40h120v70H40z" stroke="#cbd5e1" strokeWidth="1" fill="white"/>
              <path d="M50 50h40v40H50zM100 50h40v40h-40z" stroke="#cbd5e1" strokeWidth="1" fill="none"/>
              <line x1="70" y1="50" x2="70" y2="90" stroke="#cbd5e1" strokeWidth="1"/>
              <line x1="120" y1="50" x2="120" y2="90" stroke="#cbd5e1" strokeWidth="1"/>
            </svg>
            <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-3 rounded-full shadow-lg">
              <ZoomIn size={28} />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Open a Drawing to View</h3>
          <p className="text-sm text-gray-500 text-center mb-6 max-w-sm">
            Select or open any DWG drawing from the list<br/>
            Your 2D drawing, sections, analysis and 3D model will appear here.
          </p>
          <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-sm mb-8">
            <FolderOpen size={18} />
            Open Drawing
          </button>

          <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-100 px-4 py-2 rounded-lg text-sm w-full max-w-md justify-center">
            <Lightbulb size={16} className="text-green-500" />
            <span className="font-medium text-xs">Tip: Double click on any drawing from the list to open in viewer</span>
          </div>
        </div>
      </div>

      {/* Structural Sections */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-gray-900">Structural Sections</h2>
          <a href="#" className="text-green-600 text-sm font-semibold hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((section, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-2 hover:border-green-300 transition-colors cursor-pointer group">
              <div className="h-24 bg-gray-50 rounded mb-2 flex items-center justify-center overflow-hidden">
                 <svg className="w-16 h-16 text-gray-300 group-hover:text-green-200 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-8h6v8M3 11h18" />
                 </svg>
              </div>
              <div className="text-center text-xs font-semibold text-gray-700">
                Section {String.fromCharCode(65 + index)}-{String.fromCharCode(65 + index)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

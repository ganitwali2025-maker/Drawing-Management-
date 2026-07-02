import React from 'react';
import { MoreVertical, UploadCloud } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const recentDrawings = [
  { id: 1, title: 'Main Factory Structure', size: '12.4 MB', date: '24 May 2024 10:30 AM', image: 'dwg-icon' },
  { id: 2, title: 'Production Building', size: '8.7 MB', date: '22 May 2024 09:15 AM', image: 'thumbnail' },
  { id: 3, title: 'Warehouse Structure', size: '6.1 MB', date: '20 May 2024 04:20 PM', image: 'thumbnail' },
  { id: 4, title: 'Pipe Rack Structure', size: '9.3 MB', date: '18 May 2024 11:45 AM', image: 'thumbnail' },
  { id: 5, title: 'Utility Building', size: '4.8 MB', date: '15 May 2024 02:10 PM', image: 'thumbnail' },
];

const analysisData = [
  { name: 'Columns', value: 84, color: '#16a34a' },
  { name: 'Beams', value: 77, color: '#2563eb' },
  { name: 'Connections', value: 91, color: '#f59e0b' },
  { name: 'Foundations', value: 82, color: '#3b82f6' },
];

export function LeftColumn() {
  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
      {/* Recent Drawings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
        <div className="p-4 flex justify-between items-center border-b border-gray-50">
          <h2 className="font-bold text-gray-900">Recent Drawings</h2>
          <a href="#" className="text-green-600 text-sm font-semibold hover:underline">View All</a>
        </div>
        
        <div className="flex-1 p-3 space-y-2">
          {recentDrawings.map((drawing, i) => (
            <div key={drawing.id} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${i === 0 ? 'bg-green-50/50' : 'hover:bg-gray-50'}`}>
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                {drawing.image === 'dwg-icon' ? (
                  <div className="text-gray-400 font-bold text-xs relative w-full h-full bg-gray-200/50 flex flex-col items-center justify-center">
                    <span className="text-[10px] mb-1">DWG</span>
                    <span className="text-2xl text-gray-300 absolute -bottom-1 right-0 opacity-50 font-serif">T</span>
                  </div>
                ) : (
                  <div className="text-gray-300">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate">{drawing.title}</h3>
                <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                  DWG &bull; {drawing.size}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">{drawing.date}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">DWG</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-50">
          <div className="border border-dashed border-gray-300 rounded-lg bg-gray-50 p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer group">
            <UploadCloud className="mx-auto text-gray-400 mb-2 group-hover:text-green-500 transition-colors" size={24} />
            <p className="text-sm text-gray-600 mb-1">Drag & Drop your files here</p>
            <p className="text-xs text-gray-400 mb-3">or</p>
            <button className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              Browse Files
            </button>
            <p className="text-[10px] text-gray-400 mt-3">Supports: DWG, DXF, RVT, IFC, STEP, PDF</p>
          </div>
        </div>
      </div>

      {/* Structure Analysis Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <h2 className="font-bold text-gray-900 mb-4">Structure Analysis Overview</h2>
        <div className="flex items-center">
          <div className="relative w-28 h-28 flex-shrink-0">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={analysisData}
                   cx="50%"
                   cy="50%"
                   innerRadius={30}
                   outerRadius={45}
                   paddingAngle={2}
                   dataKey="value"
                   stroke="none"
                 >
                   {analysisData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <Tooltip />
               </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-xs font-semibold text-gray-500">Overall</span>
               <span className="text-sm font-bold text-green-600">Good</span>
             </div>
          </div>
          <div className="flex-1 ml-4 space-y-2">
             {analysisData.map((item, i) => (
               <div key={i} className="flex items-center justify-between text-xs">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                   <span className="text-gray-700 font-medium">{item.name}</span>
                 </div>
                 <span className="text-gray-900 font-semibold">{item.value}%</span>
               </div>
             ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-[10px] text-gray-400">Last analysis: 24 May 2024 10:30 AM</span>
          <button className="text-green-600 text-xs font-semibold border border-green-200 bg-green-50 px-3 py-1.5 rounded hover:bg-green-100 transition-colors">
            Run New Analysis
          </button>
        </div>
      </div>
    </div>
  );
}

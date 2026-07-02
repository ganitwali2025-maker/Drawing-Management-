import React from 'react';
import { 
  Info, 
  ExternalLink, 
  Download, 
  Scissors, 
  BarChart2, 
  FileText, 
  Box, 
  Share2,
  CheckCircle2,
  MoreVertical,
  ChevronRight
} from 'lucide-react';

const quickActions = [
  { icon: Scissors, label: 'Create Section' },
  { icon: BarChart2, label: 'Run Analysis' },
  { icon: FileText, label: 'Generate Report' },
  { icon: Box, label: 'Export 3D Model' },
  { icon: Share2, label: 'Share Project' },
];

const recentAnalyses = [
  { title: 'Main Factory Structure Analysis', date: '24 May 2024 10:30 AM' },
  { title: 'Production Building Analysis', date: '22 May 2024 09:20 AM' },
  { title: 'Warehouse Structure Analysis', date: '20 May 2024 04:15 PM' },
];

export function RightColumn() {
  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
      {/* Drawing Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-gray-900">Drawing Details</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <Info size={16} />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="text-green-600 font-bold text-sm mb-1">No drawing selected</div>
          <div className="text-gray-500 text-xs px-4">Please select a drawing to see details here</div>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { label: 'File Type' },
            { label: 'File Size' },
            { label: 'Upload Date' },
            { label: 'Last Modified' },
            { label: 'Status' },
          ].map((detail, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <span className="text-gray-500">{detail.label}</span>
              <span className="text-gray-300 font-medium">-</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 py-2 rounded-lg text-sm font-semibold cursor-not-allowed">
            View Full Drawing <ExternalLink size={16} />
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
            <Download size={16} /> Download
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <h2 className="font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="space-y-1">
          {quickActions.map((action, index) => (
            <button key={index} className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors group">
              <div className="flex items-center gap-3">
                <action.icon size={18} className="text-green-600" />
                <span className="text-sm font-medium">{action.label}</span>
              </div>
              <ChevronRight size={16} className="text-gray-400 group-hover:text-green-600 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Recent Analyses */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-gray-900">Recent Analyses</h2>
          <a href="#" className="text-green-600 text-sm font-semibold hover:underline">View All</a>
        </div>
        <div className="space-y-3">
          {recentAnalyses.map((analysis, index) => (
            <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <FileText size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-semibold text-gray-900 truncate">{analysis.title}</h3>
                <div className="text-[10px] text-gray-500 mt-0.5">{analysis.date}</div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100">
                  <CheckCircle2 size={10} />
                  <span className="text-[9px] font-bold">Completed</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

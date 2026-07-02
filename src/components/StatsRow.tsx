import React from 'react';
import { FileText, Box, BarChart2, Layers, MoreVertical } from 'lucide-react';

const stats = [
  { title: 'Total Drawings', value: '28', change: '+4 this week', icon: FileText, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
  { title: '3D Models', value: '16', change: '+2 this week', icon: Box, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
  { title: 'Analyses', value: '34', change: '+6 this week', icon: BarChart2, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
  { title: 'Total Sections', value: '72', change: '+10 this week', icon: Layers, iconColor: 'text-blue-500', iconBg: 'bg-blue-50' },
  { title: 'Reports', value: '18', change: '+3 this week', icon: FileText, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.iconBg} ${stat.iconColor}`}>
              <stat.icon size={24} strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-gray-900 font-bold text-xl">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.title}</div>
              <div className="text-gray-400 text-xs mt-0.5">{stat.change}</div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 self-start mt-1">
            <MoreVertical size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

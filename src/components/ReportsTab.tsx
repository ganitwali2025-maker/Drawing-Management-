import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';
import { Calendar, Award, BookOpen, Clock, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ReportsTab: React.FC = () => {
  const [reportPeriod, setReportPeriod] = useState<'weekly' | 'monthly'>('weekly');

  const studyHoursData = [
    { day: 'Mon', hours: 4.5, pages: 12 },
    { day: 'Tue', hours: 6.0, pages: 18 },
    { day: 'Wed', hours: 3.5, pages: 8 },
    { day: 'Thu', hours: 5.2, pages: 15 },
    { day: 'Fri', hours: 7.0, pages: 22 },
    { day: 'Sat', hours: 2.0, pages: 5 },
    { day: 'Sun', hours: 4.0, pages: 10 },
  ];

  const categoryBreakdownData = [
    { name: '3D Art', value: 35, color: '#8B5CF6' },
    { name: 'UI Design', value: 25, color: '#3B82F6' },
    { name: 'Typography', value: 20, color: '#EC4899' },
    { name: 'Psychology', value: 20, color: '#10B981' },
  ];

  const outcomes = [
    { subject: 'Isometric Perspective Render', score: 'A+', date: 'Jun 22, 2026', teacher: 'Prof. Albus Gable' },
    { subject: 'Typography Contrast Scale Grid', score: 'A', date: 'Jun 18, 2026', teacher: 'Elena Rostova' },
    { subject: 'User Empathy Map Assignment', score: 'B+', date: 'Jun 10, 2026', teacher: 'Sarah Jenkins' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900">Academic Analytics</h2>
          <p className="text-sm text-gray-500 mt-1 font-sans">Review reading velocity, study hours logs, and evaluation feedback scores.</p>
        </div>

        <div className="flex bg-gray-100 p-1.5 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setReportPeriod('weekly')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              reportPeriod === 'weekly' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Weekly Review
          </button>
          <button
            onClick={() => setReportPeriod('monthly')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              reportPeriod === 'monthly' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Monthly Audit
          </button>
        </div>
      </div>

      {/* Overview Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
          <span className="block text-xs text-gray-400 font-medium uppercase tracking-wider">Total Study Time</span>
          <span className="text-xl font-bold text-gray-800 font-display mt-1 block">32.2 Hours</span>
          <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
            ↑ +4.2h since last week
          </span>
        </div>
        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
          <span className="block text-xs text-gray-400 font-medium uppercase tracking-wider">Average Daily Focus</span>
          <span className="text-xl font-bold text-gray-800 font-display mt-1 block">4.6 Hours</span>
          <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
            ↑ +12% efficiency
          </span>
        </div>
        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
          <span className="block text-xs text-gray-400 font-medium uppercase tracking-wider">Pages Deciphered</span>
          <span className="text-xl font-bold text-gray-800 font-display mt-1 block">94 Pages</span>
          <span className="text-[10px] text-indigo-600 font-bold flex items-center gap-1 mt-1">
            Avg: 13.4 pages/day
          </span>
        </div>
        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
          <span className="block text-xs text-gray-400 font-medium uppercase tracking-wider">Active Streak</span>
          <span className="text-xl font-bold text-gray-800 font-display mt-1 block">14 Days</span>
          <span className="text-[10px] text-amber-600 font-bold flex items-center gap-1 mt-1">
            Personal Record: 22 Days
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Study Hours Chart Container */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 font-display flex items-center gap-1.5">
              <Clock className="w-4.5 h-4.5 text-indigo-600" /> Focus Hours Log
            </h3>
            <span className="text-[10px] font-bold text-gray-400">June 18 - June 24, 2026</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={studyHoursData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="hoursGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} />
                <Tooltip 
                  contentStyle={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '11px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }} 
                  labelClassName="font-bold text-gray-800"
                />
                <Area type="monotone" dataKey="hours" stroke="#6366F1" strokeWidth={2.5} fillOpacity={1} fill="url(#hoursGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Breakdown Pie Chart */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-gray-900 font-display flex items-center gap-1.5 mb-4">
              <BookOpen className="w-4.5 h-4.5 text-indigo-600" /> Subject Breakdown
            </h3>
            
            <div className="h-44 w-full flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {categoryBreakdownData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center">
                <span className="block text-[10px] text-gray-400 font-bold uppercase">Primary</span>
                <span className="text-sm font-extrabold text-gray-800">3D Design</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {categoryBreakdownData.map((cat) => (
              <div key={cat.name} className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span>{cat.name}</span>
                </div>
                <span className="font-bold text-gray-800">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Outcomes Breakdown */}
        <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 font-display mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600" /> Recent Learning Outcomes & Critique Scores
          </h3>

          <div className="space-y-3.5">
            {outcomes.map((out, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 font-extrabold text-sm flex items-center justify-center">
                    {out.score}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{out.subject}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">Evaluated by {out.teacher} • {out.date}</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-100 text-[10px] font-bold rounded-xl transition-all self-end sm:self-center">
                  Review Feedback Portfolio
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

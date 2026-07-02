import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, CalendarDays, Award, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const AttendanceTab: React.FC = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [streak, setStreak] = useState(14);
  
  // Custom mock calendar states: true = present, false = weekend/empty, null = pending/future, 'absent'
  const [attendanceRecords, setAttendanceRecords] = useState<Record<number, 'present' | 'absent' | 'leave' | 'pending'>>({
    1: 'present', 2: 'present', 3: 'present', 4: 'leave', 5: 'present',
    8: 'present', 9: 'present', 10: 'present', 11: 'present', 12: 'present',
    15: 'present', 16: 'present', 17: 'present', 18: 'absent', 19: 'present',
    22: 'present', 23: 'present', 24: 'present', 25: 'pending', 26: 'pending',
    29: 'pending', 30: 'pending'
  });

  const handleCheckIn = () => {
    if (checkedIn) return;
    setCheckedIn(true);
    setStreak(prev => prev + 1);
    setAttendanceRecords(prev => ({
      ...prev,
      25: 'present' // Today is June 25th in the system context
    }));
  };

  const getDayStatusClass = (status: 'present' | 'absent' | 'leave' | 'pending' | undefined, isToday: boolean) => {
    if (isToday && status === 'pending') return 'bg-indigo-50 border-2 border-dashed border-indigo-400 text-indigo-700 animate-pulse';
    switch (status) {
      case 'present': return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
      case 'absent': return 'bg-rose-100 text-rose-800 border border-rose-200';
      case 'leave': return 'bg-amber-100 text-amber-800 border border-amber-200';
      case 'pending': return 'bg-gray-50 text-gray-400 border border-gray-100';
      default: return 'bg-gray-50/50 text-gray-300';
    }
  };

  const stats = [
    { label: 'Attendance Rate', value: '94%', sub: 'Target: >90%', icon: CheckCircle, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Current Streak', value: `${streak} Days`, sub: 'Keep it up!', icon: Award, color: 'text-purple-600 bg-purple-50' },
    { label: 'Excused Leave', value: '1 Day', sub: 'Approved by Faculty', icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { label: 'Unexcused Absences', value: '1 Day', sub: 'Action required', icon: AlertCircle, color: 'text-rose-600 bg-rose-50' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900">Attendance Tracker</h2>
          <p className="text-sm text-gray-500 mt-1 font-sans">Verify daily lecture attendance, request extensions or study leaves, and track academic streak goals.</p>
        </div>

        <button
          disabled={checkedIn || attendanceRecords[25] === 'present'}
          onClick={handleCheckIn}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95 ${
            checkedIn || attendanceRecords[25] === 'present'
              ? 'bg-emerald-100 text-emerald-800 cursor-not-allowed border border-emerald-200'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          <CheckCircle className="w-4.5 h-4.5" />
          {checkedIn || attendanceRecords[25] === 'present' ? 'Already Checked-In' : 'Submit Check-In (June 25)'}
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((st) => (
          <div key={st.label} className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${st.color} shrink-0`}>
              <st.icon className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs text-gray-400 font-medium">{st.label}</span>
              <span className="text-lg font-bold text-gray-800">{st.value}</span>
              <span className="block text-[10px] text-gray-400 mt-0.5">{st.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Attendance Calendar Panel */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 font-display">
              <CalendarDays className="w-5 h-5 text-indigo-600" /> Attendance Calendar
            </h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg border border-gray-100 hover:bg-gray-50 text-gray-600">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-gray-700 w-24 text-center">June 2026</span>
              <button className="p-1.5 rounded-lg border border-gray-100 hover:bg-gray-50 text-gray-600">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2.5 text-center text-xs font-bold text-gray-400 mb-3">
            <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
          </div>

          {/* June 2026 starts on Monday (1st) */}
          <div className="grid grid-cols-7 gap-2.5">
            {/* Empty space for Sunday */}
            <span className="h-10 bg-gray-50/20 rounded-xl" />
            {Array.from({ length: 30 }).map((_, i) => {
              const dayNum = i + 1;
              const status = attendanceRecords[dayNum];
              const isWeekend = (dayNum + 1) % 7 === 0 || (dayNum + 1) % 7 === 1;
              const isToday = dayNum === 25;

              return (
                <div
                  key={dayNum}
                  className={`h-11 rounded-xl flex flex-col items-center justify-center relative text-xs font-bold transition-all ${
                    isWeekend 
                      ? 'bg-gray-50/30 text-gray-300' 
                      : getDayStatusClass(status, isToday)
                  }`}
                >
                  <span>{dayNum}</span>
                  {status === 'present' && (
                    <span className="absolute bottom-1 w-1 h-1 bg-emerald-600 rounded-full" />
                  )}
                  {status === 'absent' && (
                    <span className="absolute bottom-1 w-1 h-1 bg-rose-600 rounded-full" />
                  )}
                  {status === 'leave' && (
                    <span className="absolute bottom-1 w-1 h-1 bg-amber-600 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend indicators */}
          <div className="mt-6 pt-5 border-t border-gray-50 flex flex-wrap gap-4 text-xs font-semibold text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-md bg-emerald-100 border border-emerald-200" />
              <span>Present</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-md bg-rose-100 border border-rose-200" />
              <span>Absent</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-md bg-amber-100 border border-amber-200" />
              <span>Excused Leave</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-md bg-gray-100 border border-gray-200" />
              <span>Pending Check-in</span>
            </div>
          </div>
        </div>

        {/* Right Side: Faculty Approvals */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 font-display">Special Leaves & Requests</h3>
          
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100/70">
              <div className="flex justify-between items-start">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-extrabold uppercase">Medical Leave</span>
                <span className="text-[10px] text-gray-400 font-bold">Jun 04, 2026</span>
              </div>
              <h4 className="text-xs font-bold text-gray-800 mt-2">Excused from Cohort Lab</h4>
              <p className="text-[10px] text-gray-500 mt-1 leading-normal">Excused for dental appointment. Submitted certificate verified by Elena Rostova.</p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="text-xs font-bold text-gray-700">Request New Excused Absence</h4>
              <p className="text-[10px] text-gray-400 mt-1 leading-normal">Submit medical notices or academic representation certificates beforehand.</p>
              <button className="w-full py-2 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold rounded-xl mt-3.5 transition-colors">
                Apply for Study Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

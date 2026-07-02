import React, { useState } from 'react';
import { Teacher } from '../types';
import { Star, MessageSquare, Calendar, ShieldCheck, Mail, Video } from 'lucide-react';
import { motion } from 'motion/react';

interface TeachersTabProps {
  teachers: Teacher[];
}

export const TeachersTab: React.FC<TeachersTabProps> = ({ teachers }) => {
  const [search, setSearch] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const filteredTeachers = teachers.filter(tch =>
    tch.name.toLowerCase().includes(search.toLowerCase()) ||
    tch.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-gray-900">Academic Faculty</h2>
        <p className="text-sm text-gray-500 mt-1">Connect with industry expert tutors, schedule 1-on-1 critique boards, or review upcoming syllabus sessions.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search teachers by name or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1 max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Faculty Grid List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredTeachers.map((tch, i) => (
            <motion.div
              key={tch.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedTeacher(tch)}
              className={`p-5 bg-white rounded-3xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                selectedTeacher?.id === tch.id 
                  ? 'border-indigo-500 ring-2 ring-indigo-50/70' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={tch.avatar} 
                    alt={tch.name} 
                    className="w-16 h-16 rounded-2xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    tch.status === 'online' ? 'bg-emerald-500' : 'bg-gray-400'
                  }`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-base">{tch.name}</h3>
                    <ShieldCheck className="w-4 h-4 text-indigo-500" />
                  </div>
                  <p className="text-sm font-semibold text-indigo-600 mt-0.5">{tch.subject}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-gray-400 font-medium">{tch.experience} exp</span>
                    <span className="h-3 w-px bg-gray-200" />
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {tch.rating}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                  tch.status === 'online' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-500'
                }`}>
                  {tch.status === 'online' ? 'Online' : 'Offline'}
                </span>
                <button className="p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50 text-gray-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faculty Deep Card Detail Column */}
        <div>
          {selectedTeacher || teachers[0] ? (
            (() => {
              const tch = selectedTeacher || teachers[0];
              return (
                <motion.div 
                  layout
                  className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm sticky top-6 space-y-6"
                >
                  <div className="text-center">
                    <div className="relative inline-block">
                      <img 
                        src={tch.avatar} 
                        alt={tch.name} 
                        className="w-24 h-24 rounded-3xl object-cover mx-auto ring-4 ring-indigo-50"
                        referrerPolicy="no-referrer"
                      />
                      <span className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-4 border-white ${
                        tch.status === 'online' ? 'bg-emerald-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mt-4 font-display">{tch.name}</h3>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mt-1">{tch.subject}</p>
                  </div>

                  <div className="border-t border-b border-gray-50 py-4 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="block text-xs text-gray-400 font-medium">Weekly Slots</span>
                      <span className="text-sm font-bold text-gray-800">12 Available</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 font-medium">Student Rating</span>
                      <span className="text-sm font-bold text-amber-500 flex items-center justify-center gap-1 mt-0.5">
                        <Star className="w-3.5 h-3.5 fill-current" /> {tch.rating}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Upcoming Schedule</h4>
                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-indigo-600 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-gray-800">{tch.nextClassTime}</h5>
                        <p className="text-[10px] text-gray-500 mt-1">Cohort critique on advanced shadows and layout dynamics.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors active:scale-95 flex items-center justify-center gap-2">
                      <Video className="w-4 h-4" /> Book Consultation
                    </button>
                    <button className="px-4 py-2.5 border border-gray-100 hover:bg-gray-50 text-gray-600 font-bold rounded-xl text-sm transition-colors active:scale-95 flex items-center justify-center">
                      <MessageSquare className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })()
          ) : (
            <p className="text-sm text-gray-400 italic">Select a teacher to review full schedules.</p>
          )}
        </div>
      </div>
    </div>
  );
};

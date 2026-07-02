import React, { useState } from 'react';
import { Student } from '../types';
import { Search, UserPlus, Filter, Mail, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface StudentsTabProps {
  students: Student[];
}

export const StudentsTab: React.FC<StudentsTabProps> = ({ students }) => {
  const [search, setSearch] = useState('');
  const [filterLevel, setFilterLevel] = useState('All');
  const [studentList, setStudentList] = useState<Student[]>(students);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('Intermediate');

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    const newStudent: Student = {
      id: `std-${Date.now()}`,
      name,
      avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000)}?auto=format&fit=crop&q=80&w=120`,
      email,
      level,
      activeCourses: Math.floor(Math.random() * 4) + 1,
      attendanceRate: 90 + Math.floor(Math.random() * 11),
      progress: Math.floor(Math.random() * 80) + 20,
      joinedDate: 'Jun 2026'
    };
    setStudentList([newStudent, ...studentList]);
    setName('');
    setEmail('');
    setShowAddForm(false);
  };

  const filteredStudents = studentList.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) || 
                          student.email.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = filterLevel === 'All' || student.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900">Student Directory</h2>
          <p className="text-sm text-gray-500 mt-1">Manage active learners, track overall syllabus progress, and verify engagement metrics.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-all shadow-sm active:scale-95"
        >
          <UserPlus className="w-4 h-4" /> Add Student
        </button>
      </div>

      {/* Add Student Form */}
      {showAddForm && (
        <motion.form 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleAddStudent}
          className="p-5 bg-indigo-50/50 border border-indigo-100 rounded-2xl gap-4 grid grid-cols-1 md:grid-cols-4 items-end"
        >
          <div className="md:col-span-1">
            <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1.5">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. Irham Shidiq"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1.5">Email Address</label>
            <input 
              type="email" 
              placeholder="irham@skillset.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1.5">Skill Tier</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors"
            >
              Confirm Enrolment
            </button>
          </div>
        </motion.form>
      )}

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search student profile or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-100 rounded-xl pl-10 pr-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">Level:</span>
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((tier) => (
            <button
              key={tier}
              onClick={() => setFilterLevel(tier)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterLevel === tier 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((std, i) => (
          <motion.div
            key={std.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
          >
            {/* Top decorative accent */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
              std.level === 'Advanced' ? 'from-purple-500 to-indigo-600' :
              std.level === 'Intermediate' ? 'from-emerald-400 to-teal-500' : 'from-amber-400 to-orange-500'
            }`} />

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <img 
                  src={std.avatar} 
                  alt={std.name} 
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-gray-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{std.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                    <Mail className="w-3 h-3" />
                    <span className="truncate max-w-[150px]">{std.email}</span>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                std.level === 'Advanced' ? 'bg-purple-50 text-purple-600' :
                std.level === 'Intermediate' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {std.level}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-b border-gray-50 py-3 text-center">
              <div>
                <span className="block text-xs text-gray-400 font-medium">Courses</span>
                <span className="text-sm font-bold text-gray-800">{std.activeCourses}</span>
              </div>
              <div>
                <span className="block text-xs text-gray-400 font-medium">Attendance</span>
                <span className="text-sm font-bold text-gray-800">{std.attendanceRate}%</span>
              </div>
              <div>
                <span className="block text-xs text-gray-400 font-medium">Joined</span>
                <span className="text-[10px] font-bold text-gray-800 mt-0.5 block truncate">{std.joinedDate}</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-gray-500 font-medium">Syllabus Completion</span>
                <span className="font-bold text-gray-800">{std.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    std.progress > 80 ? 'bg-indigo-600' : std.progress > 50 ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${std.progress}%` }}
                />
              </div>
            </div>

            {/* Achievement Badge Indicator */}
            {std.progress > 80 && (
              <div className="absolute bottom-4 right-4 text-purple-600 flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase">Pro</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

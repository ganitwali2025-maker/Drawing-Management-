import React, { useState } from 'react';
import { Course } from '../types';
import { BookOpen, Star, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CoursesTabProps {
  courses: Course[];
  onEnroll: (courseId: string) => void;
}

export const CoursesTab: React.FC<CoursesTabProps> = ({ courses, onEnroll }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Design', 'Typography', 'UX Research'];

  const filteredCourses = courses.filter(crs => 
    activeCategory === 'All' || crs.category === activeCategory
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900">Syllabus Courses</h2>
          <p className="text-sm text-gray-500 mt-1">Enroll in expert structured masterclasses. Complete assignments to unlock custom profile achievements.</p>
        </div>
        
        <div className="flex bg-gray-100 p-1.5 rounded-xl self-start sm:self-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((crs, i) => (
          <motion.div
            key={crs.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Header with colorful background gradient */}
              <div className={`p-6 bg-gradient-to-br ${crs.color} text-white relative`}>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                  {crs.category}
                </div>
                <BookOpen className="w-8 h-8 opacity-90 mb-4" />
                <h3 className="font-display font-bold text-lg leading-tight h-14 line-clamp-2">
                  {crs.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={crs.instructor.avatar} 
                    alt={crs.instructor.name} 
                    className="w-8 h-8 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{crs.instructor.name}</p>
                    <p className="text-[10px] text-gray-400">Master Instructor</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-50 py-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{crs.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium justify-end">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                    <span className="font-bold text-gray-800">{crs.rating}</span>
                  </div>
                </div>

                {crs.enrolled && crs.progress !== undefined && (
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-500 font-medium">Progress</span>
                      <span className="font-bold text-gray-800">{crs.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${crs.progress}%` }} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 pt-0">
              {crs.enrolled ? (
                <div className="flex items-center justify-between p-3 bg-indigo-50/50 border border-indigo-100 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-indigo-700">
                    <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Enrolled</span>
                  </div>
                  <span className="text-xs font-extrabold text-indigo-600">{crs.lessonsCount} Modules</span>
                </div>
              ) : (
                <button
                  onClick={() => onEnroll(crs.id)}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl text-sm transition-colors active:scale-95 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" /> Enroll in Class
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

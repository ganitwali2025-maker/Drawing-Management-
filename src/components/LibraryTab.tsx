import React, { useState } from 'react';
import { Book, Achievement, BestSale } from '../types';
import { IllustrationRenderer, BestSalesIconRenderer } from './ThreeDIllustrations';
import { Star, Heart, Bookmark, ArrowRight, Eye, Sparkles, BookOpen, Clock, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LibraryTabProps {
  books: Book[];
  achievements: Achievement[];
  bestSales: BestSale[];
  onToggleBookmark: (id: string) => void;
  onToggleLike: (id: string) => void;
  onStartReading: (id: string) => void;
  onBuyBestSale: (sale: BestSale) => void;
}

export const LibraryTab: React.FC<LibraryTabProps> = ({
  books,
  achievements,
  bestSales,
  onToggleBookmark,
  onToggleLike,
  onStartReading,
  onBuyBestSale
}) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [readingActiveBook, setReadingActiveBook] = useState<Book | null>(null);
  const [simulatedPage, setSimulatedPage] = useState(1);
  const [toggleAchievements, setToggleAchievements] = useState(true);

  // Split books
  const popularBooks = books.filter(b => b.isPopular);
  const ongoingBooks = books.filter(b => b.isOngoing);

  const handleOpenDetail = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseDetail = () => {
    setSelectedBook(null);
  };

  const handleBeginReading = (book: Book) => {
    setSelectedBook(null);
    onStartReading(book.id);
    setReadingActiveBook(book);
    setSimulatedPage(1);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
      {/* Left 3 Columns: Main Library Area */}
      <div className="xl:col-span-3 space-y-8">
        
        {/* Popular Books Section */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-display font-extrabold text-gray-900 tracking-tight">Popular</h3>
            <button className="text-xs font-bold text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-wider">
              VIEW ALL
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {popularBooks.map((book) => (
              <div 
                key={book.id}
                className="bg-white border border-gray-100 rounded-3xl p-3.5 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group flex flex-col justify-between"
                onClick={() => handleOpenDetail(book)}
              >
                <div>
                  {/* Claymorphic colorful illustration stage */}
                  <div className={`aspect-square rounded-2xl bg-gradient-to-br ${book.color} flex items-center justify-center relative overflow-hidden shadow-inner`}>
                    <IllustrationRenderer icon={book.coverIcon} className="w-24 h-24 transform group-hover:scale-105 transition-transform" />
                    
                    {/* Floating icons strip */}
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(book.id);
                        }}
                        className={`p-1.5 rounded-lg backdrop-blur-md transition-all active:scale-95 ${
                          book.bookmarked 
                            ? 'bg-amber-400 text-white shadow-sm' 
                            : 'bg-white/40 text-white hover:bg-white/60'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLike(book.id);
                        }}
                        className={`p-1.5 rounded-lg backdrop-blur-md transition-all active:scale-95 ${
                          book.liked 
                            ? 'bg-rose-500 text-white shadow-sm' 
                            : 'bg-white/40 text-white hover:bg-white/60'
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Metadata */}
                  <h4 className="font-semibold text-gray-900 mt-3 text-sm leading-snug line-clamp-2 min-h-[40px] group-hover:text-indigo-600 transition-colors">
                    {book.title}
                  </h4>
                </div>

                <div className="mt-2.5">
                  <p className="text-[11px] text-gray-400 font-medium truncate">
                    This is just a general example...
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-gray-700">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    <span>{book.rating}</span>
                    <span className="text-[10px] text-gray-300 font-normal">|</span>
                    <span className="text-[10px] text-gray-400 font-normal">{book.salesCount} sold</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ongoing Books Section */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-display font-extrabold text-gray-900 tracking-tight">Ongoing</h3>
            <button className="text-xs font-bold text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-wider">
              VIEW ALL
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {ongoingBooks.map((book) => (
              <div 
                key={book.id}
                className="bg-white border border-gray-100 rounded-3xl p-3.5 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group flex flex-col justify-between"
                onClick={() => handleOpenDetail(book)}
              >
                <div>
                  {/* Stage */}
                  <div className={`aspect-square rounded-2xl bg-gradient-to-br ${book.color} flex items-center justify-center relative overflow-hidden shadow-inner`}>
                    <IllustrationRenderer icon={book.coverIcon} className="w-24 h-24 transform group-hover:scale-105 transition-transform" />
                    
                    {/* Bottom strip bookmarks */}
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(book.id);
                        }}
                        className={`p-1.5 rounded-lg backdrop-blur-md transition-all active:scale-95 ${
                          book.bookmarked 
                            ? 'bg-amber-400 text-white shadow-sm' 
                            : 'bg-white/40 text-white hover:bg-white/60'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLike(book.id);
                        }}
                        className={`p-1.5 rounded-lg backdrop-blur-md transition-all active:scale-95 ${
                          book.liked 
                            ? 'bg-rose-500 text-white shadow-sm' 
                            : 'bg-white/40 text-white hover:bg-white/60'
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-gray-900 mt-3 text-sm leading-snug line-clamp-2 min-h-[40px] group-hover:text-indigo-600 transition-colors">
                    {book.title}
                  </h4>
                </div>

                <div className="mt-2.5 space-y-2.5">
                  <p className="text-[11px] text-gray-400 font-medium truncate">
                    This is just a general example...
                  </p>

                  {/* Progress and status */}
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{book.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${book.progress}%` }} />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 pt-1">
                    <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">Reading</span>
                    {book.daysLeft && <span>{book.daysLeft} days left</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column: Achievements & Best Sales */}
      <div className="space-y-6">
        {/* Achievements Card Block */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-extrabold text-gray-900 font-display text-sm">Unlocks achievement</h3>
              <p className="text-[10px] text-gray-400 mt-0.5">Goal achieved success unlocked.</p>
            </div>
            <button 
              onClick={() => setToggleAchievements(!toggleAchievements)}
              className={`w-10 h-6 rounded-full p-1 transition-all ${toggleAchievements ? 'bg-indigo-600' : 'bg-gray-200'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-all ${toggleAchievements ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>

          {toggleAchievements && (
            <div className="space-y-3">
              {achievements.map((ach) => (
                <div key={ach.id} className="flex items-center gap-3 bg-gray-50/50 p-3 rounded-2xl border border-gray-100/30">
                  <img 
                    src={ach.avatar} 
                    alt={ach.title} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between text-[10px] font-extrabold text-gray-800">
                      <span className="truncate">{ach.title}</span>
                      <span className="text-indigo-600">{ach.progress}%</span>
                    </div>
                    {/* Progress bar and time */}
                    <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1.5">
                      <div className="bg-indigo-600 h-full" style={{ width: `${ach.progress}%` }} />
                    </div>
                    <span className="text-[9px] text-gray-400 block mt-1">{ach.daysLeft} Days left</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Best Sales block */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-gray-900 font-display text-sm">Best sales</h3>
            <button className="text-[10px] font-bold text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-wider">
              VIEW ALL
            </button>
          </div>

          <div className="space-y-3.5">
            {bestSales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between gap-3 p-1">
                <div className="flex items-center gap-3 min-w-0">
                  <BestSalesIconRenderer icon={sale.imageType} />
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-800 text-xs truncate max-w-[110px] hover:text-indigo-600 cursor-pointer">{sale.title}</h4>
                    <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-400 font-bold">
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                      <span>{sale.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => onBuyBestSale(sale)}
                  className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 text-indigo-700 font-bold rounded-lg text-[10px] transition-all active:scale-95"
                >
                  Order
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Detailed Overlay Dialog Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 max-w-lg w-full border-4 border-white shadow-clay relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={handleCloseDetail}
                  className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
                {/* Visual cover stage */}
                <div className={`sm:col-span-2 rounded-2xl bg-gradient-to-br ${selectedBook.color} aspect-square sm:aspect-auto sm:h-48 flex items-center justify-center shadow-inner relative`}>
                  <IllustrationRenderer icon={selectedBook.coverIcon} className="w-28 h-28" />
                </div>

                {/* Info details */}
                <div className="sm:col-span-3 space-y-4">
                  <div>
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md text-[10px] font-extrabold uppercase tracking-wider">{selectedBook.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 font-display mt-2 leading-tight">{selectedBook.title}</h3>
                    <p className="text-xs text-gray-400 font-medium mt-1">By {selectedBook.author}</p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      <span>{selectedBook.rating}</span>
                    </div>
                    <span className="h-3 w-px bg-gray-200" />
                    <span>{selectedBook.salesCount} Enrolled</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Guide Synopsis</h4>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {selectedBook.description}
                  </p>
                </div>

                {/* Actions bar */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => handleBeginReading(selectedBook)}
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    {selectedBook.isOngoing ? 'Resume Reading Progress' : 'Start Reading Guide'}
                  </button>

                  <button
                    onClick={() => onToggleBookmark(selectedBook.id)}
                    className={`px-3.5 rounded-xl border flex items-center justify-center transition-all ${
                      selectedBook.bookmarked 
                        ? 'border-amber-400 bg-amber-50 text-amber-600' 
                        : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <Bookmark className="w-4.5 h-4.5 fill-current" />
                  </button>

                  <button
                    onClick={() => onToggleLike(selectedBook.id)}
                    className={`px-3.5 rounded-xl border flex items-center justify-center transition-all ${
                      selectedBook.liked 
                        ? 'border-rose-400 bg-rose-50 text-rose-600' 
                        : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className="w-4.5 h-4.5 fill-current" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Immersive Reader Canvas */}
      <AnimatePresence>
        {readingActiveBook && (
          <div className="fixed inset-0 bg-slate-950 z-50 flex flex-col justify-between text-white font-sans">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-slate-900">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="font-bold text-sm line-clamp-1 max-w-[250px]">{readingActiveBook.title}</h3>
                  <p className="text-[10px] text-gray-400">By {readingActiveBook.author}</p>
                </div>
              </div>
              <button 
                onClick={() => setReadingActiveBook(null)}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-all"
              >
                Exit Reader
              </button>
            </div>

            {/* Immersive reading page container */}
            <div className="max-w-2xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center space-y-6 overflow-y-auto">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">CHAPTER {simulatedPage} : THE VISUAL COGNITION METAPHOR</span>
                <h1 className="text-2xl sm:text-3xl font-bold font-display leading-tight">Understanding Layered Clay Shading</h1>
                
                <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4 font-normal">
                  <p>
                    Claymorphism, sometimes regarded as a sibling of neumorphism, focuses primarily on establishing a tactile, pillow-like volumetric sense of structure on screens. This aesthetic depends strictly on dual light sources:
                  </p>
                  <p>
                    1. **An external primary dropshadow**: Usually situated on the bottom or bottom-right, casting a deep, extremely soft blur representing the distance of the clay card from its backplane.
                  </p>
                  <p>
                    2. **An internal dual highlights**: A white semi-transparent outline running along the top and left boundaries mimicking direct ambient light, paired with a matching dark inner shadow along the bottom and right boundaries.
                  </p>
                  <p>
                    Combined with pastel background gradients and organic 3D shapes, interfaces become highly inviting, encouraging touch interaction on mobile devices and rendering beautiful displays on high-density desktops.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer reader controls */}
            <div className="p-4 border-t border-white/10 bg-slate-900 flex justify-between items-center text-xs">
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Page {simulatedPage} of 14</span>
              </div>

              <div className="flex gap-2">
                <button 
                  disabled={simulatedPage === 1}
                  onClick={() => setSimulatedPage(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all disabled:opacity-40"
                >
                  Previous
                </button>
                <button 
                  disabled={simulatedPage === 14}
                  onClick={() => setSimulatedPage(prev => Math.min(14, prev + 1))}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all disabled:opacity-40"
                >
                  Next Page
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

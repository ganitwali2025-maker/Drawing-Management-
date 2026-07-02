import React, { useState, useEffect, useRef } from 'react';
import { LiveSession } from '../types';
import { Send, Users, Video, Volume2, Maximize, Play, Pause, Award, HelpCircle, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface LiveClassTabProps {
  liveSession: LiveSession;
  onSendMessage: (text: string) => void;
}

export const LiveClassTab: React.FC<LiveClassTabProps> = ({ liveSession, onSendMessage }) => {
  const [typedMessage, setTypedMessage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [quizOutcome, setQuizOutcome] = useState<'correct' | 'incorrect' | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const quizQuestion = {
    text: "What is the primary visual goal of Claymorphic 3D styling in interfaces?",
    options: [
      "To mimic flat skeumorphism with neon lines",
      "To create friendly, touchable, pillowy volumetric cards with layered soft shadows",
      "To render high-contrast brutalist outlines without inner shading",
      "To replace raster PNGs with simple raw code snippets strictly"
    ],
    correctIdx: 1,
    explanation: "Correct! Claymorphism combines pastel gradients, rounded corner radii, inner white shadows (highlights), and soft outer dropshadows to create friendly 'volumetric clay' shapes."
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;
    onSendMessage(typedMessage.trim());
    setTypedMessage('');
  };

  const handleQuizAnswer = (idx: number) => {
    setQuizAnswered(idx);
    if (idx === quizQuestion.correctIdx) {
      setQuizOutcome('correct');
    } else {
      setQuizOutcome('incorrect');
    }
  };

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [liveSession.messages]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-display font-bold text-gray-900">Live Virtual Studio</h2>
            <span className="animate-pulse bg-red-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full" /> LIVE
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Interact with your master tutor, review real-time live demonstrations, and participate in session quizzes.</p>
        </div>

        <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-600">
          <Users className="w-4 h-4 text-rose-500" />
          <span>{liveSession.activeViewers} students watching</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Video Player and Quiz */}
        <div className="lg:col-span-2 space-y-6">
          {/* Custom Video Player Canvas */}
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-md aspect-video group border-4 border-white shadow-clay">
            {/* Simulation Video or Backdrop */}
            {isPlaying ? (
              <video 
                src={liveSession.streamUrl} 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 to-purple-950 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white ring-4 ring-white/10 animate-bounce">
                  <Video className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-white font-bold text-lg font-display mb-1">{liveSession.title}</h3>
                <p className="text-indigo-200 text-xs mb-4">By {liveSession.teacher.name}</p>
                <button
                  onClick={() => setIsPlaying(true)}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-colors shadow-lg active:scale-95"
                >
                  Start Stream Receiver
                </button>
              </div>
            )}

            {/* Video Player overlay controls */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsPlaying(false)} className="hover:text-indigo-400 transition-colors">
                    <Pause className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono">03:45 / 45:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4" />
                  <div className="w-16 bg-white/30 h-1 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-3/4" />
                  </div>
                  <Maximize className="w-4 h-4 cursor-pointer hover:text-indigo-400" />
                </div>
              </div>
            )}
          </div>

          {/* Interactive Session Quiz */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base font-bold text-gray-900 font-display">Active Session Quiz</h3>
              </div>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-lg">50 XP Award</span>
            </div>

            <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100/50 flex gap-3">
              <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-gray-800 leading-relaxed">{quizQuestion.text}</p>
            </div>

            <div className="space-y-2.5">
              {quizQuestion.options.map((opt, idx) => {
                const isSelected = quizAnswered === idx;
                const isCorrect = idx === quizQuestion.correctIdx;
                let btnStyle = 'border-gray-100 hover:bg-gray-50/50 text-gray-700 bg-white';
                
                if (quizAnswered !== null) {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'border-rose-500 bg-rose-50 text-rose-800 font-bold';
                  } else {
                    btnStyle = 'border-gray-100 opacity-60 text-gray-400 bg-white';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={quizAnswered !== null}
                    onClick={() => handleQuizAnswer(idx)}
                    className={`w-full p-3.5 border rounded-2xl text-xs text-left transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {quizAnswered !== null && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                    {quizAnswered !== null && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {quizOutcome && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                  quizOutcome === 'correct' 
                    ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
                    : 'bg-rose-50/50 border-rose-100 text-rose-800'
                }`}
              >
                <strong>{quizOutcome === 'correct' ? 'Excellent Work! ' : 'Incorrect Choice. '}</strong>
                {quizQuestion.explanation}
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Side: Chat Panel */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm flex flex-col h-[480px] justify-between">
          <div>
            <h3 className="font-bold text-gray-900 border-b border-gray-50 pb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-500" /> Class Live Chat
            </h3>
            
            <div className="overflow-y-auto h-[320px] py-4 space-y-3 pr-1 text-xs">
              {liveSession.messages.map((msg, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${
                      msg.user === 'Irham Shidiq' ? 'text-indigo-600' : 'text-gray-700'
                    }`}>{msg.user}</span>
                    <span className="text-[9px] text-gray-400">{msg.timestamp}</span>
                  </div>
                  <p className="bg-gray-50 rounded-xl p-2.5 text-gray-600 leading-normal border border-gray-100/30">
                    {msg.text}
                  </p>
                </div>
              ))}
              <div ref={chatBottomRef} />
            </div>
          </div>

          <form onSubmit={handleSend} className="border-t border-gray-50 pt-3 flex gap-2">
            <input
              type="text"
              placeholder="Post a message to chat..."
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
            />
            <button
              type="submit"
              className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors shrink-0 active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Menu, Search, ShoppingCart, Star, FileText, 
  ExternalLink, Bell, Settings, LogOut, Factory, Plus 
} from 'lucide-react';
export function HomeTab() {
  const data = { cards: [] };

  return (
    <div className="flex-1 overflow-auto bg-gray-50 pb-20">
        {/* 1. New Header */}
        <header className="bg-white px-6 py-4 flex items-center justify-between z-20 border-b border-gray-100 shadow-sm">
          {/* Left Side: Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="text-[#547326] flex items-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 21V12A9 9 0 0 1 21 12V21H16V14H8V21H3ZM5 19H6V12A7 7 0 0 1 19 12V19H20V12A9 9 0 0 0 4 12V19ZM10 19H14V14H10V19Z" />
              </svg>
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">
              Passary Refractories <span className="text-orange-500 mx-1">-</span> <span className="text-orange-500 font-semibold text-lg md:text-xl">Forging Energy-Efficient Solutions</span>
            </h1>
          </div>
          
          {/* Right Side: Icons */}
          <div className="flex items-center gap-5">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border border-white"></div>
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
              Logout <LogOut className="w-4 h-4 ml-1" />
            </button>
          </div>
        </header>

        {/* 2. Hero Banner Section */}
        <div className="relative bg-gradient-to-r from-[#eaf2ff] via-[#f0edff] to-[#faebff] pt-8 pb-14 px-6 md:px-12 mx-4 md:mx-6 my-6 rounded-[24px] border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-60">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,60 Q50,30 100,60 L100,100 L0,100 Z" fill="rgba(255,255,255,0.4)" />
              <path d="M0,80 Q50,50 100,80 L100,100 L0,100 Z" fill="rgba(255,255,255,0.6)" />
            </svg>
          </div>

          <div className="relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full p-2 gap-6">
              
              {/* Left: Illustration & Text */}
              <div className="flex items-center gap-6">
                 <div className="w-24 h-24 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden shrink-0 shadow-inner">
                    <Factory className="w-9 h-9 mb-1 text-[#0f5926]" strokeWidth={1.5} />
                    <FileText className="w-7 h-7 absolute bottom-1 right-1 text-blue-500 opacity-80" strokeWidth={1.5} />
                 </div>
                 
                 <div className="flex flex-col">
                    <h2 className="text-[#0f5926] text-[28px] font-black tracking-wide">PASSARY REFRACTORIES</h2>
                    <h3 className="text-gray-900 text-[20px] font-bold mt-1">Engineering Drawing Management System</h3>
                    
                    <div className="flex items-center gap-5 mt-4 text-[14px] font-semibold text-gray-600">
                       <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-green-600"></div> Structural</div>
                       <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div> Civil</div>
                       <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> Equipment</div>
                       <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div> General Arrangement Drawings</div>
                    </div>
                 </div>
              </div>

              {/* Right: Actions */}
              <div className="flex flex-col items-end gap-5">
                 <button className="flex items-center gap-2 bg-[#0f5926] hover:bg-[#0a451c] text-white px-5 py-2.5 rounded text-[15px] font-medium transition-colors shadow-sm">
                   <Plus className="w-4 h-4" strokeWidth={2.5} /> Add New Drawing
                 </button>
                 
                 <div className="flex items-center border border-gray-300 rounded overflow-hidden bg-white w-full sm:w-[400px] shadow-sm">
                   <div className="pl-3 pr-2 text-gray-400">
                     <Search className="w-4 h-4" />
                   </div>
                   <input 
                     type="text" 
                     placeholder="Search Drawing No / Title / Area" 
                     className="flex-1 py-2.5 px-2 text-[15px] outline-none text-gray-700"
                   />
                   <button className="bg-[#0f5926] hover:bg-[#0a451c] px-4 py-2.5 flex items-center justify-center text-white transition-colors">
                     <Search className="w-4 h-4" />
                   </button>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3. Grid Content (Drawings/Cards) */}
        <div className="px-6 md:px-12 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Fallback cards if data is not correctly mapped */}
            {Array.from({length: 8}).map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-50 relative border-b border-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <FileText className="w-12 h-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Structural Drawing {index + 1}</h3>
                  <p className="text-gray-500 text-sm mb-3">General Arrangement and details.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full border border-blue-100">Structure</span>
                    <button className="text-[#0f5926] hover:text-[#0a451c] flex items-center text-sm font-bold transition-colors">
                      Open <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
}
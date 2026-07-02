import React from 'react';
import { Search, UploadCloud, Bell, HelpCircle, Settings, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button className="lg:hidden text-gray-500 hover:text-gray-700">
          <Menu size={24} />
        </button>
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search drawings, sections, structures, projects..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm">
          <UploadCloud size={18} />
          Upload Drawing
        </button>

        <div className="flex items-center gap-2 lg:gap-3 text-gray-500">
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-yellow-400 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <HelpCircle size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <Settings size={20} />
          </button>
        </div>

        <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block text-sm">
            <div className="font-semibold text-gray-900 leading-tight">Green Collar</div>
            <div className="text-gray-500 text-xs">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}

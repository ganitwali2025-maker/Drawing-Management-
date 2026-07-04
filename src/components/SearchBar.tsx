import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <div className="relative flex-1 max-w-[400px] font-poppins">
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      <input 
        type="text" 
        placeholder="Search Drawing No., Title, Description..." 
        className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-[15px] font-[500] text-slate-700 w-full focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 placeholder:text-slate-400 font-poppins" 
        {...props}
      />
    </div>
  );
};

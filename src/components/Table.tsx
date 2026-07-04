import React from 'react';
import { Loader2, FileText } from 'lucide-react';
import { TableProps } from '../types/index';

export const Table: React.FC<TableProps> = ({ tableData, loading }) => {
  return (
    <div className="flex-1 overflow-auto border border-slate-300 rounded-sm shadow-sm bg-white">
      <table className="w-full text-[13px] text-center border-collapse min-w-[1200px]">
        <thead className="bg-[#155e30] text-white sticky top-0 z-10 shadow-sm">
          <tr>
            {[
              { label: 'Sr. No.', w: 'w-[60px]' },
              { label: 'Description', w: 'min-w-[120px]' },
              { label: 'Drawing No.', w: 'min-w-[200px]' },
              { label: 'Drawing Title', w: 'min-w-[300px]' },
              { label: 'Discipline', w: 'min-w-[100px]' },
              { label: 'Drawing Link', w: 'min-w-[120px]' },
              { label: 'Revision', w: 'w-[80px]' },
              { label: 'Date', w: 'w-[100px]' },
              { label: 'Remark', w: 'w-[80px]', noSort: true }
            ].map((th, i) => (
              <th key={i} className={`py-3 px-2 border-r border-green-800 font-bold sticky top-0 bg-[#155e30] z-20 shadow-sm ${th.w}`}>
                <div className="flex items-center justify-center gap-1.5">
                  <span>{th.label}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-700">
          {loading ? (
            <tr>
              <td colSpan={9} className="py-10 text-center text-slate-500 font-medium">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-[#6b8e23]" />
                Loading drawings...
              </td>
            </tr>
          ) : tableData.map((row, idx) => (
            <tr key={idx} className={`border-b border-slate-200 hover:bg-green-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}`}>
              <td className="py-3 px-2 border-r border-slate-200 font-bold text-slate-800">{row.sr}</td>
              <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.desc}</td>
              <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.dwgNo}</td>
              <td className="py-3 px-4 border-r border-slate-200 text-left uppercase text-[11px] font-bold text-slate-600 leading-snug">{row.title}</td>
              <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.discipline}</td>
              <td className="py-3 px-2 border-r border-slate-200">
                {row.link && row.link !== '' ? (
                  <a href={row.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-1.5 bg-green-50 text-[#155e30] border border-green-200 rounded-md font-bold text-[12px] hover:bg-green-100 transition-colors mx-auto">
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Drawing</span>
                  </a>
                ) : (
                  <span className="text-slate-400 font-medium text-[12px]">-</span>
                )}
              </td>
              <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.rev}</td>
              <td className="py-3 px-2 border-r border-slate-200 font-semibold">{row.date}</td>
              <td className="py-3 px-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-bold text-slate-600">{row.remark || '–'}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

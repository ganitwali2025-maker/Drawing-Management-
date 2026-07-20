import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, FileText } from 'lucide-react';
import { TableProps } from '../types/index';

export const Table: React.FC<TableProps> = ({ tableData, loading }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 overflow-auto border border-slate-300 rounded-sm shadow-sm bg-white font-poppins">
      <table className="w-full text-[15px] font-[500] leading-[1.6] text-center border-collapse min-w-[1200px]">
        <thead className="bg-[#155e30] text-white sticky top-0 z-10 shadow-sm font-poppins text-[16px] font-[600] tracking-[0.2px]">
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
              <th key={i} className={`py-1.5 px-2 border-r border-green-800 font-[600] tracking-[0.2px] text-white sticky top-0 bg-[#155e30] z-20 shadow-sm align-middle font-poppins ${th.w}`}>
                <div className="flex items-center justify-center gap-1.5 h-full">
                  <span>{th.label}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#1F2937] font-poppins text-[15px] font-[500] leading-[1.6]">
          {loading ? (
            <tr>
              <td colSpan={9} className="py-10 text-center text-slate-500 font-[500] align-middle">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-[#6b8e23]" />
                Loading drawings...
              </td>
            </tr>
          ) : tableData.map((row, idx) => (
            <tr key={idx} className={`border-b border-slate-200 hover:bg-green-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}`}>
              <td className="py-3 px-2 border-r border-slate-200 font-[600] text-[#1F2937] text-center align-middle">{row.sr}</td>
              <td className="py-3 px-2 border-r border-slate-200 font-[500] text-[#1F2937] align-middle">{row.desc}</td>
              <td className="py-3 px-2 border-r border-slate-200 font-[600] text-[#1E3A5F] align-middle">{row.dwgNo}</td>
              <td className="py-3 px-4 border-r border-slate-200 text-left uppercase text-[15px] font-[600] text-[#374151] leading-[1.6] align-middle break-words whitespace-normal">{row.title}</td>
              <td className="py-3 px-2 border-r border-slate-200 font-[600] text-[#1F2937] text-center align-middle">{row.discipline}</td>
              <td className="py-3 px-2 border-r border-slate-200 align-middle">
                {row.link && row.link !== '' ? (
                  <button onClick={(e) => { e.stopPropagation(); navigate(`/drawing/detail/${encodeURIComponent(row.dwgNo)}`); }} className="flex items-center justify-center gap-2 px-3 py-1.5 bg-green-50 text-[#155e30] border border-green-200 rounded-md font-[600] text-[15px] font-poppins hover:bg-green-100 transition-colors mx-auto align-middle">
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Detail</span>
                  </button>
                ) : (
                  <span className="text-slate-400 font-[500] text-[15px] align-middle">-</span>
                )}
              </td>
              <td className="py-3 px-2 border-r border-slate-200 font-[500] text-[#1F2937] align-middle">{row.rev}</td>
              <td className="py-3 px-2 border-r border-slate-200 font-[500] text-[#1F2937] align-middle">{row.date}</td>
              <td className="py-3 px-2 align-middle">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-[500] text-[#1F2937] align-middle">{row.remark || '–'}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Building2, Layers, Settings as GearIcon, Zap, Waypoints, Gauge, Box, LayoutTemplate,
  Home, FileText, Files, Activity, CheckCircle, PieChart, Settings, LogOut,
  ChevronLeft, Download, Printer, Share2, ZoomIn, ZoomOut, Minus, Plus, Maximize, 
  FileSpreadsheet
} from 'lucide-react';
import { DashboardHeader } from '../components/Navbar';
import { DrawingDetail, DisciplineCounts } from '../types/index';

interface DrawingDetailViewProps {
  onBack: () => void;
  drawing: DrawingDetail | null;
  counts: DisciplineCounts;
  onLogout: () => void;
}

export const DrawingDetailView: React.FC<DrawingDetailViewProps> = ({ 
  onBack, 
  drawing, 
  counts,
  onLogout 
}) => {
  const [activeTab, setActiveTab] = useState('Drawing Information');

  // Dummy data if no drawing is provided
  const data: DrawingDetail = drawing || {
    desc: 'CIVIL FOUNDATION, PLAN, FOOTING, AND TIE BEAM DETAIL DRAWING OF FEED HOPPER',
    dwgNo: 'SI-REQ-CVL-FDHP-001-R01',
    title: 'CIVIL FOUNDATION, PLAN, FOOTING, AND TIE BEAM DETAIL DRAWING OF FEED HOPPER',
    discipline: 'Civil',
    link: '#',
    rev: '0',
    date: '23/08/2023',
    remark: '',
    projectName: 'RMIPL Project',
    areaLocation: 'Production Building',
    sheetSize: 'A1',
    scale: 'NTS',
    createdBy: 'Engineering Team',
    checkedBy: 'Vikram Singh',
    approvedBy: 'Lokesh Rajak',
    status: 'Approved',
    description: 'This drawing contains the foundation plan, footing details, and tie beam details for the feed hopper structure.\nAll dimensions are in mm unless otherwise specified.',
    bomItems: [
      { srNo: 1, itemDescription: 'MS Plate 10mm', materialGrade: 'IS 2062', qty: 8, length: 6.000, unitWeight: 78.50, totalWeight: 376.80 },
      { srNo: 2, itemDescription: 'MS Plate 16mm', materialGrade: 'IS 2062', qty: 6, length: 4.500, unitWeight: 125.60, totalWeight: 338.40 },
      { srNo: 3, itemDescription: 'MS Plate 20mm', materialGrade: 'IS 2062', qty: 4, length: 3.000, unitWeight: 157.00, totalWeight: 188.40 },
      { srNo: 4, itemDescription: 'ISMB 300', materialGrade: 'IS 808', qty: 2, length: 6.000, unitWeight: 42.20, totalWeight: 506.40 },
      { srNo: 5, itemDescription: 'ISMB 250', materialGrade: 'IS 808', qty: 2, length: 5.000, unitWeight: 34.30, totalWeight: 343.00 },
      { srNo: 6, itemDescription: 'ISA 100X100X10', materialGrade: 'IS 2062', qty: 6, length: 3.000, unitWeight: 15.10, totalWeight: 271.80 },
      { srNo: 7, itemDescription: 'ISA 75X75X8', materialGrade: 'IS 2062', qty: 8, length: 2.500, unitWeight: 9.20, totalWeight: 184.00 },
      { srNo: 8, itemDescription: 'M16 Anchor Bolt', materialGrade: 'IS 1364', qty: 16, length: 0.450, unitWeight: 1.58, totalWeight: 11.39 },
    ]
  };

  const totalWeight = data.bomItems?.reduce((acc, item) => acc + item.totalWeight, 0) || 0;
  const totalLength = data.bomItems?.reduce((acc, item) => acc + item.length * item.qty, 0) || 0;
  const totalSteel = totalWeight / 1000;

  const tabs = [
    'Drawing Information', 'BOM Summary', 'Material Summary', 'Revision History', 'Related Documents', 'Approval History'
  ];

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      
      <DashboardHeader onLogout={onLogout} onRegister={onBack} title="Drawing Detail View" />
      
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR */}
        <div className="w-[260px] bg-white border-r border-slate-200 flex flex-col shadow-[2px_0_10px_rgba(0,0,0,0.02)] z-20 shrink-0 h-full overflow-y-auto">
        <div className="p-5 flex items-center justify-center border-b border-slate-100 shrink-0">
           {/* Logo placeholder - normally an image, just styling for now */}
           <div className="h-10 bg-slate-100 rounded-md w-full flex items-center justify-center text-xs font-bold text-slate-400">LOGO</div>
        </div>
        
        <div className="flex-1 py-4 flex flex-col gap-1 px-3">
          <SidebarItem icon={Home} label="Dashboard" onClick={onBack} />
          <SidebarItem icon={FileText} label="Drawing Register" onClick={onBack} />
          <SidebarItem icon={Files} label="Drawing Index Register" active />
          
          <div className="mt-4 mb-2 px-3 text-[10px] font-bold text-green-700 tracking-wider uppercase">Drawing Categories</div>
          
          <SidebarCategory icon={Building2} label="Civil" count={counts.civil} active iconColor="text-green-600" bgColor="bg-green-100/50" />
          <SidebarCategory icon={Layers} label="Structural" count={counts.structural} iconColor="text-orange-600" />
          <SidebarCategory icon={GearIcon} label="Mechanical" count={counts.mechanical} iconColor="text-purple-600" />
          <SidebarCategory icon={Waypoints} label="Piping" count={counts.piping} iconColor="text-pink-600" />
          <SidebarCategory icon={Zap} label="Electrical" count={counts.electrical} iconColor="text-amber-500" />
          <SidebarCategory icon={Gauge} label="Instrumentation" count={counts.instrument} iconColor="text-indigo-600" />
          <SidebarCategory icon={Box} label="Equipment" count={counts.equipment} iconColor="text-teal-600" />
          <SidebarCategory icon={LayoutTemplate} label="General Arrangement" count={counts.general} iconColor="text-slate-600" />

          <div className="my-4 border-t border-slate-100"></div>

          <SidebarItem icon={Activity} label="Revision Management" />
          <SidebarItem icon={CheckCircle} label="Approval Workflow" />
          <SidebarItem icon={PieChart} label="Reports" />
          <SidebarItem icon={Settings} label="Settings" />
        </div>

        <div className="p-3 border-t border-slate-200 mt-auto">
          <button onClick={onLogout} className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* BREADCRUMB */}
        <div className="px-6 py-3 text-xs font-medium text-slate-500 flex items-center gap-2 shrink-0 bg-slate-50/80 backdrop-blur-sm">
          <span className="hover:text-green-700 cursor-pointer" onClick={onBack}>Home</span>
          <span className="text-slate-300">{'>'}</span>
          <span className="hover:text-green-700 cursor-pointer" onClick={onBack}>Drawing Index Register</span>
          <span className="text-slate-300">{'>'}</span>
          <span className="hover:text-green-700 cursor-pointer">{data.discipline}</span>
          <span className="text-slate-300">{'>'}</span>
          <span className="text-slate-700 font-semibold">{data.dwgNo}</span>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 scroll-smooth">
          {/* TITLE & ACTION BAR */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <button onClick={onBack} className="flex items-center gap-1 bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 mt-1">
                <ChevronLeft className="w-4 h-4" /> Back to List
              </button>
              <div>
                <h1 className="text-xl font-bold text-slate-900 mb-2 leading-tight uppercase max-w-[800px]">{data.desc}</h1>
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                  <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-md border border-green-100">Drawing No: <span className="font-bold">{data.dwgNo}</span></span>
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">Discipline: {data.discipline}</span>
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">Revision: {data.rev}</span>
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">Date: {data.date}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <button className="flex items-center gap-2 bg-white border border-green-600 text-green-700 px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-green-50 transition-colors">
                <Download className="w-4 h-4" /> View / Download
              </button>
              <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors">
                <Printer className="w-4 h-4" /> Print
              </button>
              <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-6 mb-6">
            
            {/* LEFT COL: DRAWING VIEWER */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden h-[600px]">
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold text-green-700">
                  <LayoutTemplate className="w-5 h-5" />
                  Drawing Viewer
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                  <button className="p-1.5 hover:bg-white rounded-md text-slate-600 transition-colors"><ZoomIn className="w-4 h-4" /></button>
                  <button className="p-1.5 hover:bg-white rounded-md text-slate-600 transition-colors"><ZoomOut className="w-4 h-4" /></button>
                  <div className="w-px h-4 bg-slate-300 mx-1"></div>
                  <button className="p-1.5 hover:bg-white rounded-md text-slate-600 transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="text-xs font-bold px-2">100%</span>
                  <button className="p-1.5 hover:bg-white rounded-md text-slate-600 transition-colors"><Plus className="w-4 h-4" /></button>
                  <div className="w-px h-4 bg-slate-300 mx-1"></div>
                  <button className="p-1.5 hover:bg-white rounded-md text-slate-600 transition-colors"><LayoutTemplate className="w-4 h-4" /></button>
                  <button className="p-1.5 hover:bg-white rounded-md text-slate-600 transition-colors"><Maximize className="w-4 h-4" /></button>
                  <div className="w-px h-4 bg-slate-300 mx-1"></div>
                  <button className="p-1.5 hover:bg-white rounded-md text-slate-600 transition-colors"><Download className="w-4 h-4" /></button>
                </div>
              </div>
              
              <div className="flex-1 bg-slate-100/50 p-4 relative flex items-center justify-center overflow-auto">
                <div className="w-full max-w-[600px] aspect-[4/3] bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center relative">
                  {/* Placeholder for actual PDF/Image */}
                  <div className="absolute inset-0 bg-[url('https://ai.google.dev/static/site-assets/images/share-ais-513315318.png')] bg-contain bg-center bg-no-repeat opacity-10"></div>
                  <span className="text-slate-400 font-medium z-10 text-sm border border-dashed border-slate-300 px-4 py-2 rounded">Drawing Image / PDF Renders Here</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 text-xs font-medium text-slate-500 bg-slate-50">
                <span>File: {data.dwgNo}.pdf</span>
                <div className="flex items-center gap-2">
                  <span>Page 1 of 1</span>
                  <button className="p-1 hover:bg-slate-200 rounded"><ChevronLeft className="w-3 h-3" /></button>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">1</span>
                  <button className="p-1 hover:bg-slate-200 rounded"><ChevronLeft className="w-3 h-3 rotate-180" /></button>
                </div>
              </div>
            </div>

            {/* RIGHT COL: BOM REPORT */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden h-[600px]">
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold text-green-700">
                  <FileSpreadsheet className="w-5 h-5" />
                  Steel Consumption Report <span className="text-slate-400 font-medium text-sm">(Linked to this Drawing)</span>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-100 transition-colors">
                  <FileSpreadsheet className="w-3 h-3" /> Export Excel
                </button>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-4 gap-2 p-4 pb-2">
                <div className="bg-green-50/50 border border-green-100 rounded-lg p-3 text-center">
                  <div className="text-[10px] font-bold text-green-700 uppercase mb-1">Total Items</div>
                  <div className="text-xl font-black text-slate-800">{data.bomItems?.length || 0}</div>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-center">
                  <div className="text-[10px] font-bold text-blue-700 uppercase mb-1">Total Weight (KG)</div>
                  <div className="text-xl font-black text-blue-900">{totalWeight.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                </div>
                <div className="bg-orange-50/50 border border-orange-100 rounded-lg p-3 text-center">
                  <div className="text-[10px] font-bold text-orange-700 uppercase mb-1">Total Length (M)</div>
                  <div className="text-xl font-black text-slate-800">{totalLength.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                </div>
                <div className="bg-purple-50/50 border border-purple-100 rounded-lg p-3 text-center">
                  <div className="text-[10px] font-bold text-purple-700 uppercase mb-1">Total Steel (MT)</div>
                  <div className="text-xl font-black text-purple-900">{totalSteel.toLocaleString('en-US', {minimumFractionDigits: 3, maximumFractionDigits: 3})}</div>
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto p-4 pt-2">
                <table className="w-full text-xs text-left">
                  <thead className="text-[10px] font-bold text-slate-500 uppercase bg-slate-50 sticky top-0 shadow-[0_1px_0_#e2e8f0]">
                    <tr>
                      <th className="py-2.5 px-2 text-center rounded-tl-lg">Sr. No.</th>
                      <th className="py-2.5 px-2">Item Description</th>
                      <th className="py-2.5 px-2 text-center">Material Grade</th>
                      <th className="py-2.5 px-2 text-center">Qty.</th>
                      <th className="py-2.5 px-2 text-right">Length (M)</th>
                      <th className="py-2.5 px-2 text-right">Unit Weight (KG/M)</th>
                      <th className="py-2.5 px-2 text-right rounded-tr-lg">Total Weight (KG)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {data.bomItems?.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2 px-2 text-center">{item.srNo}</td>
                        <td className="py-2 px-2 text-slate-900 font-semibold">{item.itemDescription}</td>
                        <td className="py-2 px-2 text-center">{item.materialGrade}</td>
                        <td className="py-2 px-2 text-center">{item.qty}</td>
                        <td className="py-2 px-2 text-right">{item.length.toFixed(3)}</td>
                        <td className="py-2 px-2 text-right">{item.unitWeight.toFixed(2)}</td>
                        <td className="py-2 px-2 text-right text-slate-900 font-bold">{item.totalWeight.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Table Footer */}
              <div className="p-4 bg-green-50/50 border-t border-green-100 flex items-center justify-between text-sm font-bold">
                <span className="text-green-800">Total Steel Weight (KG)</span>
                <span className="text-green-700 text-lg">{totalWeight.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
            </div>
          </div>

          {/* BOTTOM TABS */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
            <div className="flex overflow-x-auto border-b border-slate-200 hide-scrollbar">
              {tabs.map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab 
                      ? 'border-green-600 text-green-700' 
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="p-6 relative min-h-[200px]">
              {/* Right Illustration */}
              <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.15] max-w-[300px]">
                <img src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" alt="Factory Illustration" className="w-full object-cover" />
              </div>

              {activeTab === 'Drawing Information' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  <div className="space-y-4">
                    <InfoRow label="Project Name" value={data.projectName} />
                    <InfoRow label="Area / Location" value={data.areaLocation} />
                    <InfoRow label="Sheet Size" value={data.sheetSize} />
                    <InfoRow label="Scale" value={data.scale} />
                  </div>
                  <div className="space-y-4">
                    <InfoRow label="Created By" value={data.createdBy} />
                    <InfoRow label="Checked By" value={data.checkedBy} />
                    <InfoRow label="Approved By" value={data.approvedBy} />
                    <InfoRow label="Status" value={
                      <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-200 text-xs font-bold uppercase">{data.status}</span>
                    } />
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-800">Description</div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed whitespace-pre-wrap">
                      {data.description}
                    </p>
                  </div>
                </div>
              )}

              {activeTab !== 'Drawing Information' && (
                <div className="flex items-center justify-center h-full text-slate-400 font-medium text-sm pt-8">
                  Content for {activeTab} will be implemented here.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
};

// Sidebar Helper Components
const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
      active 
        ? 'bg-green-50 text-green-700' 
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
    }`}
  >
    <Icon className={`w-4.5 h-4.5 ${active ? 'text-green-600' : 'text-slate-400'}`} />
    {label}
  </button>
);

const SidebarCategory = ({ icon: Icon, label, count, active, iconColor, bgColor = 'bg-slate-50' }: { icon: any, label: string, count: number, active?: boolean, iconColor: string, bgColor?: string }) => (
  <button className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-colors group ${
    active ? 'bg-slate-100' : 'hover:bg-slate-50'
  }`}>
    <div className="flex items-center gap-3">
      <div className={`w-7 h-7 rounded flex items-center justify-center ${bgColor} group-hover:scale-105 transition-transform`}>
        <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
      </div>
      <span className={`font-semibold ${active ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>{label}</span>
    </div>
    <span className={`text-xs font-bold ${active ? 'text-slate-900' : 'text-slate-400'}`}>{count}</span>
  </button>
);

const InfoRow = ({ label, value }: { label: string, value: React.ReactNode }) => (
  <div className="grid grid-cols-[120px_auto] gap-2 text-sm">
    <div className="text-slate-500 font-semibold">{label}</div>
    <div className="text-slate-800 font-bold flex items-center gap-2">
      <span className="text-slate-300 font-normal">:</span> {value || '-'}
    </div>
  </div>
);

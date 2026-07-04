import React from 'react';
import { PlusCircle, X, UploadCloud, Shield, Loader2, FileText } from 'lucide-react';
import { AddDrawingModalProps } from '../types/index';
import { GOOGLE_SHEETS_API_URL } from '../utils/constants';

export const AddDrawingModal: React.FC<AddDrawingModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = React.useState({
    sr: '', desc: '', dwgNo: '', title: '', discipline: '', rev: '', date: '', remark: ''
  });
  const [file, setFile] = React.useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.type !== 'application/pdf') {
        setErrorMsg('Please upload a valid PDF file.');
        setFile(null);
        return;
      }
      if (selected.size > 5 * 1024 * 1024) { // 5MB limit for Apps Script safety
        setErrorMsg('File size exceeds 5MB limit.');
        setFile(null);
        return;
      }
      setErrorMsg('');
      setFile(selected);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.desc || !formData.dwgNo || !formData.title || !formData.discipline || !file) {
      setErrorMsg('Please fill all mandatory fields and select a PDF file.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        try {
          const base64Data = (reader.result as string).split(',')[1];
          
          const payload = {
            ...formData,
            filename: file.name,
            mimeType: file.type,
            base64: base64Data
          };

          const sheetUrl = GOOGLE_SHEETS_API_URL;
          
          await fetch(sheetUrl, {
            method: 'POST',
            mode: 'no-cors', // Use no-cors to prevent Google Apps script redirect CORS errors
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
          });

          // With no-cors, the response is opaque, so we can't read result.json(). 
          // We assume success if the fetch didn't throw a network error.
          setFormData({ sr: '', desc: '', dwgNo: '', title: '', discipline: '', rev: '', date: '', remark: '' });
          setFile(null);
          onSuccess();
          onClose();
        } catch (err: any) {
          console.error(err);
          setErrorMsg(err.message || 'Network error or invalid server response. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };
      reader.onerror = () => {
        setErrorMsg('Failed to read file.');
        setIsSubmitting(false);
      };
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[700px] max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-slate-800">Add New Drawing</h2>
              <p className="text-[12px] text-slate-500 font-medium">Upload drawing details and PDF file.</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <form id="add-drawing-form" onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Sr. No. <span className="text-red-500">*</span></label>
                <input required name="sr" value={formData.sr} onChange={handleInputChange} type="number" placeholder="e.g. 558" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Drawing No. <span className="text-red-500">*</span></label>
                <input required name="dwgNo" value={formData.dwgNo} onChange={handleInputChange} type="text" placeholder="e.g. SIES-RMIPL-CVL..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Drawing Title <span className="text-red-500">*</span></label>
                <input required name="title" value={formData.title} onChange={handleInputChange} type="text" placeholder="Detailed Title..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Discipline <span className="text-red-500">*</span></label>
                <select required name="discipline" value={formData.discipline} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors">
                  <option value="">Select Discipline</option>
                  <option value="Civil">Civil</option>
                  <option value="Structure">Structure</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Piping">Piping</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Instrumentation">Instrumentation</option>
                  <option value="Equipment">Equipment</option>
                  <option value="General arrangement">General Arrangement</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Description <span className="text-red-500">*</span></label>
                <input required name="desc" value={formData.desc} onChange={handleInputChange} type="text" placeholder="e.g. Feed hopper" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Revision</label>
                <input name="rev" value={formData.rev} onChange={handleInputChange} type="text" placeholder="e.g. 0 or R01" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Date</label>
                <input name="date" value={formData.date} onChange={handleInputChange} type="date" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700">Remark</label>
                <input name="remark" value={formData.remark} onChange={handleInputChange} type="text" placeholder="Any remarks..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:border-purple-500 focus:bg-white transition-colors" />
              </div>
            </div>

            {/* File Upload */}
            <div className="pt-2">
              <label className="text-[13px] font-bold text-slate-700 mb-2 block">Upload PDF Drawing <span className="text-red-500">*</span></label>
              <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-purple-50/50 hover:border-purple-300 transition-colors relative group">
                <input required type="file" accept="application/pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-purple-600 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>
                {file ? (
                  <div className="text-center">
                    <p className="text-[14px] font-bold text-slate-800">{file.name}</p>
                    <p className="text-[12px] font-medium text-slate-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB • PDF Document</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-[14px] font-bold text-slate-700">Click or drag PDF file to upload</p>
                    <p className="text-[12px] font-medium text-slate-500 mt-1">Maximum file size: 5MB</p>
                  </div>
                )}
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-[13px] font-bold flex items-center gap-2">
                <Shield className="w-4 h-4 shrink-0" />
                <p>{errorMsg}</p>
              </div>
            )}

          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50 rounded-b-2xl">
          <button type="button" onClick={onClose} disabled={isSubmitting} className="px-5 py-2.5 rounded-xl font-bold text-[13px] text-slate-600 hover:bg-slate-200 transition-colors">
            Cancel
          </button>
          <button type="submit" form="add-drawing-form" disabled={isSubmitting} className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-[13px] text-white bg-[#8b5cf6] hover:bg-[#7c3aed] shadow-sm transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Uploading to Sheet...</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>Submit & Upload</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

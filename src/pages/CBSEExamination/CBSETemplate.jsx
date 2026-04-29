import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

export function CBSETemplate() {
  const [showForm, setShowForm] = useState(false);
  
  const templates = [
    { id: 1, name: 'Modern Blue Template', type: 'High School', lastUpdated: '2026-04-20', preview: 'https://via.placeholder.com/150x200?text=Modern+Blue' },
    { id: 2, name: 'Classic Academic', type: 'Primary', lastUpdated: '2026-04-15', preview: 'https://via.placeholder.com/150x200?text=Classic+Academic' },
    { id: 3, name: 'Premium Gold Edition', type: 'Senior Secondary', lastUpdated: '2026-04-22', preview: 'https://via.placeholder.com/150x200?text=Premium+Gold' },
    { id: 4, name: 'Minimalist Professional', type: 'General', lastUpdated: '2026-04-25', preview: 'https://via.placeholder.com/150x200?text=Minimalist' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded shadow-sm">
        <div>
          <h3 className="text-gray-700 font-semibold text-lg">Marksheet Templates</h3>
          <p className="text-xs text-gray-500">Manage and design professional CBSE marksheets</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-[#5b6bc0] text-white flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm"
        >
          {showForm ? <Icons.X className="w-4 h-4" /> : <Icons.Plus className="w-4 h-4" />}
          {showForm ? 'Cancel' : 'Create Custom Template'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white border border-gray-200 rounded shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-sm">Design New Marksheet</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Basic Configuration</h4>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Template Name *</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" placeholder="e.g. Annual Result 2026" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Marksheet Title</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500" placeholder="Statement of Marks" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Left Logo</label>
                <input type="file" className="w-full text-xs text-gray-500 file:mr-4 file:py-1.5 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              </div>
            </div>
            
            <div className="space-y-4 border-l border-gray-100 pl-8">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Display Settings</h4>
              <div className="space-y-2">
                {['Photo', 'Name', 'Roll No', 'Father Name', 'Mother Name', 'Date of Birth', 'Result Status'].map((field) => (
                  <label key={field} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-[#5b6bc0] focus:ring-[#5b6bc0]" defaultChecked />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition">{field}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-l border-gray-100 pl-8 bg-gray-50/50 p-4 rounded">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Layout Preview</h4>
              <div className="border-2 border-dashed border-gray-300 rounded-lg aspect-[3/4] flex items-center justify-center relative overflow-hidden bg-white shadow-inner">
                 <div className="text-center p-4">
                   <Icons.FileText className="w-12 h-12 text-gray-200 mx-auto mb-2" />
                   <p className="text-[10px] text-gray-400">Preview changes in real-time</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b">
             <button className="px-6 py-2 rounded text-sm font-semibold text-gray-600 hover:bg-gray-200 transition">Save Draft</button>
             <button className="bg-[#5b6bc0] text-white px-8 py-2 rounded text-sm font-bold hover:bg-[#3f51b5] transition shadow-md">Publish Template</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden group hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer">
            <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
               <img src={template.preview} alt={template.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
               <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-blue-900 px-4 py-2 rounded-full text-xs font-bold shadow-xl transform -translate-y-4 group-hover:translate-y-0 transition-all">Preview Full</button>
               </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-gray-800 font-bold text-sm leading-tight group-hover:text-blue-600 transition">{template.name}</h4>
                <span className="bg-blue-50 text-blue-700 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">{template.type}</span>
              </div>
              <p className="text-[10px] text-gray-400 mb-4 flex items-center gap-1">
                <Icons.Calendar className="w-3 h-3" /> Updated: {template.lastUpdated}
              </p>
              <div className="flex gap-2 border-t border-gray-50 pt-4 mt-auto">
                <button className="flex-1 bg-gray-50 text-gray-600 py-1.5 rounded text-[11px] font-bold hover:bg-blue-50 hover:text-blue-600 transition"><Icons.Edit2 className="w-3 h-3 inline mr-1" /> Edit</button>
                <button className="bg-gray-50 text-gray-400 p-1.5 rounded hover:bg-red-50 hover:text-red-600 transition"><Icons.X className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

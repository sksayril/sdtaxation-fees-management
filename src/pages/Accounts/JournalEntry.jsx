import React from 'react';
import { Icons } from '../../components/Icons';

export function JournalEntry() {
  const journals = [
    { date: '04/28/2026', ref: 'J-101', description: 'Adjustment for library books', debit: '₹ 2000.00', credit: '₹ 2000.00' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto pb-10">
      {/* Left: Add Journal Entry Form */}
      <div className="lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm sticky top-6">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Add Journal Entry</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Date <span className="text-red-500">*</span></label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Reference No</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div className="grid grid-cols-2 gap-3">
               <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Debit (₹) *</label>
                  <input type="number" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm bg-white" />
               </div>
               <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Credit (₹) *</label>
                  <input type="number" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm bg-white" />
               </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Description</label>
              <textarea rows="3" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" placeholder="Adjustment details..."></textarea>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
            <button className="bg-[#008080] text-white px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#006666] transition shadow-sm">
              Save Entry
            </button>
          </div>
        </div>
      </div>

      {/* Right: Journal List */}
      <div className="lg:w-2/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-gray-700 font-semibold text-sm uppercase tracking-wider">Journal Entries</h3>
            <div className="flex gap-2">
               <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400"><Icons.Search className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Ref No</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3 text-right">Debit</th>
                    <th className="px-4 py-3 text-right">Credit</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {journals.map((j, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-4 text-gray-600">{j.date}</td>
                      <td className="px-4 py-4 font-mono text-[11px] font-bold text-gray-700">{j.ref}</td>
                      <td className="px-4 py-4 text-gray-600 italic leading-relaxed">{j.description}</td>
                      <td className="px-4 py-4 text-gray-800 font-bold text-right">{j.debit}</td>
                      <td className="px-4 py-4 text-gray-800 font-bold text-right">{j.credit}</td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex gap-1 justify-end">
                          <button className="bg-gray-100 p-1.5 rounded hover:bg-blue-50 text-blue-600 transition"><Icons.FileText className="w-3.5 h-3.5" /></button>
                          <button className="bg-gray-100 p-1.5 rounded hover:bg-red-50 text-red-600 transition"><Icons.X className="w-3.5 h-3.5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

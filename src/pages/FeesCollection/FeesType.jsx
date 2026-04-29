import React from 'react';
import { Icons } from '../../components/Icons';

export function FeesType() {
  const types = [
    { name: 'Admission Fee', code: 'ADM2026', description: 'One time admission fee' },
    { name: 'Monthly Tuition', code: 'TUI_M', description: 'Monthly tuition charges' },
    { name: 'Exam Fee', code: 'EXM', description: 'Term examination fee' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto pb-10">
      <div className="lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Add Fees Type</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Fees Code <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Description</label>
              <textarea rows="3" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
            <button className="bg-[#5b6bc0] text-white px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-2/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Fees Type List</h3>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <input type="text" placeholder="Search" className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white w-48" />
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Fees Code</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {types.map((item, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-blue-600 font-medium">{item.name}</td>
                      <td className="px-4 py-3 text-gray-600">{item.code}</td>
                      <td className="px-4 py-3 text-gray-600">{item.description}</td>
                      <td className="px-4 py-3 text-right">
                         <div className="flex gap-1 justify-end">
                           <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white"><Icons.Edit2 className="w-3 h-3" /></button>
                           <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white"><Icons.X className="w-3 h-3" /></button>
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

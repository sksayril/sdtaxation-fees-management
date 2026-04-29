import React from 'react';
import { Icons } from '../../components/Icons';

export function MultiClassStudent() {
  const students = [
    { name: 'Edward Thomas', id: '1800011' },
    { name: 'Sneha Patel', id: '002' },
    { name: 'Hariom Yadav', id: '003' },
    { name: 'Hariom Yadav', id: 'A003' },
    { name: 'Nisha', id: 'A004' },
    { name: 'niya', id: 'A41003' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      {/* Top Search Criteria Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Class <span className="text-red-500">*</span></label>
              <select className="w-full border border-blue-400 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600 bg-white">
                <option>Class 1</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Section <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>A</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Criteria & Cards Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {students.map((student, i) => (
            <div key={i} className="border border-gray-200 rounded flex flex-col bg-white">
               {/* Card Header */}
               <div className="flex justify-between items-center p-4 border-b border-gray-100">
                 <span className="text-sm font-semibold text-gray-700">
                   {student.name} ({student.id})
                 </span>
                 <button className="bg-[#5b6bc0] hover:bg-[#3f51b5] text-white w-6 h-6 rounded flex items-center justify-center font-bold transition shadow-sm">
                   +
                 </button>
               </div>
               
               {/* Card Body */}
               <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                 <div className="md:col-span-1">
                   <label className="block text-xs font-semibold text-gray-700 mb-1">Class</label>
                   <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                     <option>Class 1</option>
                   </select>
                 </div>
                 <div className="md:col-span-1">
                   <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
                   <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                     <option>A</option>
                   </select>
                 </div>
                 <div className="md:col-span-1 flex justify-end">
                   <button className="bg-[#d9534f] text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#c9302c] transition shadow-sm w-full md:w-auto">
                     Remove
                   </button>
                 </div>
               </div>

               {/* Card Footer */}
               <div className="bg-gray-50 border-t border-gray-100 p-3 flex justify-end mt-auto">
                 <button className="bg-[#5b6bc0] text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
                   Update
                 </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

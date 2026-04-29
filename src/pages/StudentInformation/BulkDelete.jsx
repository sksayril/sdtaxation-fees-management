import React from 'react';
import { Icons } from '../../components/Icons';

export function BulkDelete() {
  const students = [
    { admNo: '002', name: 'Sneha Patel', class: 'Class 1(A)', dob: '07/15/2016', gender: 'Female', category: '', mobile: '9876200001' },
    { admNo: '003', name: 'Hariom Yadav', class: 'Class 1(A)', dob: '04/08/2020', gender: 'Male', category: 'OBC', mobile: '' },
    { admNo: '1800011', name: 'Edward Thomas', class: 'Class 1(A)', dob: '04/08/2020', gender: 'Male', category: 'OBC', mobile: '98262573272' },
    { admNo: 'A003', name: 'Hariom Yadav', class: 'Class 1(A)', dob: '04/08/2020', gender: 'Male', category: 'OBC', mobile: '' },
    { admNo: 'A004', name: 'Nisha', class: 'Class 1(A)', dob: '04/15/2026', gender: 'Female', category: 'General', mobile: '' },
    { admNo: 'A41003', name: 'niya', class: 'Class 1(A)', dob: '04/22/2026', gender: 'Male', category: '', mobile: '' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      {/* Container */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        {/* Top Search Criteria Section */}
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Class</label>
              <select className="w-full border border-blue-400 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600 bg-white">
                <option>Class 1</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>A</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end border-b border-gray-100 pb-4">
            <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>

          {/* Action Bar */}
          <div className="flex justify-between items-center py-2">
             <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                <span className="text-sm font-bold text-gray-700">Select All</span>
             </label>
             <button className="bg-[#5b6bc0] text-white px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
               Delete
             </button>
          </div>

          {/* Table Controls */}
          <div className="flex justify-between items-center mt-2 mb-2">
            <div className="relative">
              <input type="text" placeholder="Search" className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white w-48" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
               <div className="flex items-center gap-1">
                 <select className="border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-500">
                   <option>50</option>
                 </select>
               </div>
               {/* Export Icons */}
               <div className="flex items-center gap-1 text-gray-400">
                  <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.FileText className="w-4 h-4" /></div>
                  <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.BarChart className="w-4 h-4" /></div>
                  <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.Printer className="w-4 h-4" /></div>
               </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left text-sm whitespace-nowrap min-w-max">
              <thead>
                <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                  <th className="px-4 py-4 w-10">#</th>
                  <th className="px-4 py-4">Admission No</th>
                  <th className="px-4 py-4">Student Name</th>
                  <th className="px-4 py-4">Class</th>
                  <th className="px-4 py-4">Date Of Birth</th>
                  <th className="px-4 py-4">Gender</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4 text-right">Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                    <td className="px-4 py-4">
                       <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    </td>
                    <td className="px-4 py-4 text-gray-600">{student.admNo}</td>
                    <td className="px-4 py-4 text-blue-600">{student.name}</td>
                    <td className="px-4 py-4 text-gray-600">{student.class}</td>
                    <td className="px-4 py-4 text-gray-600">{student.dob}</td>
                    <td className="px-4 py-4 text-gray-600">{student.gender}</td>
                    <td className="px-4 py-4 text-gray-600">{student.category}</td>
                    <td className="px-4 py-4 text-gray-600 text-right">{student.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 1 to 6 of 6 entries</span>
            <div className="flex gap-1">
              <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&lt;</button>
              <button className="px-2 py-1 border border-blue-200 bg-blue-50 text-blue-600 font-bold rounded">1</button>
              <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

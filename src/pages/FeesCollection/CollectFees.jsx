import React from 'react';
import { Icons } from '../../components/Icons';

export function CollectFees() {
  const students = [
    { admNo: '1011', name: 'Aarav Sharma', class: 'Class 1', section: 'A', father: 'Rajesh Sharma', dob: '12/05/2016', mobile: '9876543210' },
    { admNo: '1012', name: 'Diya Patel', class: 'Class 1', section: 'A', father: 'Amit Patel', dob: '08/22/2016', mobile: '9876543211' },
    { admNo: '1013', name: 'Rohan Gupta', class: 'Class 2', section: 'B', father: 'Sanjay Gupta', dob: '03/15/2015', mobile: '9876543212' },
    { admNo: '1014', name: 'Ananya Singh', class: 'Class 3', section: 'A', father: 'Vikram Singh', dob: '11/30/2014', mobile: '9876543213' },
    { admNo: '1015', name: 'Vivaan Reddy', class: 'Class 1', section: 'B', father: 'Kiran Reddy', dob: '01/10/2016', mobile: '9876543214' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      {/* Search Criteria Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* Left search block */}
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Class <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
                <option>A</option>
                <option>B</option>
              </select>
            </div>
            <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm mb-[1px]">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>

          {/* Right search block */}
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Search By Keyword</label>
              <input type="text" placeholder="Search By Student Name, Roll Number, etc." className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white placeholder:text-xs" />
            </div>
            <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm mb-[1px]">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Student List Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm flex items-center gap-2">
            <Icons.List className="w-4 h-4" /> Student List
          </h3>
        </div>

        <div className="p-4">
          {/* Table Controls */}
          <div className="flex justify-between items-center mb-4">
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
                  <th className="px-4 py-4">Class</th>
                  <th className="px-4 py-4">Section</th>
                  <th className="px-4 py-4">Admission No</th>
                  <th className="px-4 py-4">Student Name</th>
                  <th className="px-4 py-4">Father Name</th>
                  <th className="px-4 py-4">Date Of Birth</th>
                  <th className="px-4 py-4">Mobile Number</th>
                  <th className="px-4 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                    <td className="px-4 py-4 text-gray-600">{student.class}</td>
                    <td className="px-4 py-4 text-gray-600">{student.section}</td>
                    <td className="px-4 py-4 text-gray-600">{student.admNo}</td>
                    <td className="px-4 py-4 text-blue-600 font-medium">{student.name}</td>
                    <td className="px-4 py-4 text-gray-600">{student.father}</td>
                    <td className="px-4 py-4 text-gray-600">{student.dob}</td>
                    <td className="px-4 py-4 text-gray-600">{student.mobile}</td>
                    <td className="px-4 py-4 text-right">
                       <button className="bg-[#5b6bc0] hover:bg-[#3f51b5] text-white flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold transition shadow-sm ml-auto">
                         <Icons.IndianRupee className="w-3 h-3" /> Collect Fees
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 1 to {students.length} of {students.length} entries</span>
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

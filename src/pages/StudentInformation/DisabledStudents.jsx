import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

export function DisabledStudents() {
  const [activeTab, setActiveTab] = useState('list');

  const students = [
    { admNo: '69500', name: 'Nicholas kirton', class: 'Class 2(A)', father: 'Jason kirton', disableReason: 'Fees Not Paid', gender: 'Male', mobile: '90980678678' }
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
                <option>Class 2</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
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
              <input type="text" placeholder="Search By Student Name, Roll Number, Enroll Number, National Id, Local Id Etc." className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white placeholder:text-xs" />
            </div>
            <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm mb-[1px]">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Tabs & Table Area */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white px-2">
          <button 
            onClick={() => setActiveTab('list')}
            className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'list' ? 'border-[#5b6bc0] text-[#5b6bc0]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <Icons.List className="w-4 h-4" /> List View
          </button>
          <button 
            onClick={() => setActiveTab('details')}
            className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'details' ? 'border-[#5b6bc0] text-[#5b6bc0]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <Icons.Grid className="w-4 h-4" /> Details View
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 'list' && (
            <>
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
                      <th className="px-4 py-4">Admission No</th>
                      <th className="px-4 py-4">Student Name</th>
                      <th className="px-4 py-4">Class</th>
                      <th className="px-4 py-4">Father Name</th>
                      <th className="px-4 py-4">Disable Reason</th>
                      <th className="px-4 py-4">Gender</th>
                      <th className="px-4 py-4">Mobile Number</th>
                      <th className="px-4 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                        <td className="px-4 py-4 text-gray-600">{student.admNo}</td>
                        <td className="px-4 py-4 text-blue-600">{student.name}</td>
                        <td className="px-4 py-4 text-gray-600">{student.class}</td>
                        <td className="px-4 py-4 text-gray-600">{student.father}</td>
                        <td className="px-4 py-4 text-gray-600">{student.disableReason}</td>
                        <td className="px-4 py-4 text-gray-600">{student.gender}</td>
                        <td className="px-4 py-4 text-gray-600">{student.mobile}</td>
                        <td className="px-4 py-4 text-right">
                           <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Menu">
                              <Icons.Menu className="w-3 h-3" />
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                <span>Showing 1 to 1 of 1 entry</span>
                <div className="flex gap-1">
                  <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&lt;</button>
                  <button className="px-2 py-1 border border-blue-200 bg-blue-50 text-blue-600 font-bold rounded">1</button>
                  <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&gt;</button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'details' && (
            <div className="py-12 text-center text-gray-500 flex flex-col items-center gap-2">
              <Icons.Grid className="w-12 h-12 text-gray-300" />
              <p>Details view representation goes here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

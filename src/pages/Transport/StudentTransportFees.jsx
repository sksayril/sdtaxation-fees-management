import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

const StudentTransportFees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('Class 1');
  const [selectedSection, setSelectedSection] = useState('A');

  const students = [
    {
      id: '002',
      name: 'Sneha Patel',
      class: 'Class 1(A)',
      father: 'Ramesh Patel',
      dob: '07/15/2016',
      route: 'High Court',
      vehicle: 'VH4584',
      pickup: 'High Court'
    },
    {
      id: '003',
      name: 'Hariom Yadav',
      class: 'Class 1(A)',
      father: '',
      dob: '04/08/2020',
      route: 'Brooklyn East',
      vehicle: 'VH1001',
      pickup: 'Brooklyn North'
    },
    {
      id: '1800011',
      name: 'Edward Thomas',
      class: 'Class 1(A)',
      father: 'Olivier Thomas',
      dob: '04/08/2020',
      route: 'Brooklyn East',
      vehicle: 'VH4584',
      pickup: 'Brooklyn North'
    },
    {
      id: 'A003',
      name: 'Hariom Yadav',
      class: 'Class 1(A)',
      father: '',
      dob: '04/08/2020',
      route: 'Brooklyn East',
      vehicle: 'VH4584',
      pickup: 'Railway Station'
    },
    {
      id: 'A004',
      name: 'Nisha',
      class: 'Class 1(A)',
      father: '',
      dob: '04/15/2026',
      route: '',
      vehicle: '',
      pickup: ''
    },
    {
      id: 'A41003',
      name: 'niya',
      class: 'Class 1(A)',
      father: '',
      dob: '04/22/2026',
      route: '',
      vehicle: '',
      pickup: ''
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Select Criteria Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-700 font-serif">Select Criteria</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Class <span className="text-red-500">*</span></label>
              <div className="relative">
                <select 
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none appearance-none bg-white transition"
                >
                  <option>Class 1</option>
                  <option>Class 2</option>
                </select>
                <Icons.ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Section</label>
              <div className="relative">
                <select 
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none appearance-none bg-white transition"
                >
                  <option>A</option>
                  <option>B</option>
                </select>
                <Icons.ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-4 border-t border-gray-50">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded flex items-center gap-2 font-bold hover:bg-indigo-700 transition shadow-lg active:scale-95">
              <Icons.Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Student List Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-700 font-serif">Student Transport Fees</h2>
        </div>

        {/* Controls */}
        <div className="p-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative max-w-xs">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-3 pr-4 py-1.5 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none">
              <option>50</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 border-l pl-3 ml-1 border-gray-200">
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="Copy"><Icons.Copy className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="Excel"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="CSV"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="PDF"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="Print"><Icons.Printer className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="Columns"><Icons.List className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 font-bold border-y border-gray-200">
              <tr>
                <th className="px-4 py-3 border-r border-gray-200">Admission No <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Student Name <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Class <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Father Name <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Date Of Birth <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Route Title <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Vehicle Number <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Pickup Point <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {students.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 border-r border-gray-100">{s.id}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-indigo-600 font-medium cursor-pointer hover:underline">{s.name}</td>
                  <td className="px-4 py-3 border-r border-gray-100">{s.class}</td>
                  <td className="px-4 py-3 border-r border-gray-100">{s.father}</td>
                  <td className="px-4 py-3 border-r border-gray-100">{s.dob}</td>
                  <td className="px-4 py-3 border-r border-gray-100">{s.route}</td>
                  <td className="px-4 py-3 border-r border-gray-100">{s.vehicle}</td>
                  <td className="px-4 py-3 border-r border-gray-100">{s.pickup}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="Action">
                      <Icons.Badge className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 flex justify-between items-center text-xs text-gray-500 border-t border-gray-200">
          <span>Showing 1 to 6 of 6 entries</span>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled><Icons.ChevronDown className="w-4 h-4 rotate-90" /></button>
            <button className="px-2 py-1 bg-indigo-50 text-indigo-700 font-bold rounded border border-indigo-200 shadow-sm">1</button>
            <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled><Icons.ChevronDown className="w-4 h-4 -rotate-90" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTransportFees;

import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

const AssignClassTeacher = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedTeachers, setSelectedTeachers] = useState([]);

  const teachers = [
    { id: '9002', name: 'Shivam Verma (9002)' },
    { id: '90006', name: 'Jason Sharlton (90006)' },
    { id: '1002', name: 'Nishant Khare (1002)' },
    { id: '654', name: 'aman (654)' }
  ];

  const classTeacherList = [
    { class: 'Class 1', section: 'A', teacher: 'Shivam Verma (9002)' },
    { class: 'Class 2', section: 'A', teacher: 'Jason Sharlton (90006)' },
    { class: 'Class 3', section: 'A', teacher: 'Nishant Khare (1002)' },
    { class: 'Class 4', section: 'A', teacher: 'aman (654)' }
  ];

  const toggleTeacher = (id) => {
    setSelectedTeachers(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Assign Form */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-700 font-serif">Assign Class Teacher</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Class <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select 
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none appearance-none bg-white transition"
                  >
                    <option value="">Select</option>
                    <option>Class 1</option>
                    <option>Class 2</option>
                  </select>
                  <Icons.ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Section <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select 
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none appearance-none bg-white transition"
                  >
                    <option value="">Select</option>
                    <option>A</option>
                    <option>B</option>
                  </select>
                  <Icons.ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Class Teacher <span className="text-red-500">*</span></label>
                <div className="space-y-2">
                  {teachers.map(t => (
                    <label key={t.id} className="flex items-center gap-3 group cursor-pointer">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          className="peer appearance-none w-5 h-5 border border-gray-300 rounded checked:bg-indigo-600 checked:border-indigo-600 transition cursor-pointer"
                          checked={selectedTeachers.includes(t.id)}
                          onChange={() => toggleTeacher(t.id)}
                        />
                        <Icons.Check className="w-3.5 h-3.5 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition" />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition">{t.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-50">
                <button className="bg-indigo-600 text-white px-8 py-2 rounded font-bold hover:bg-indigo-700 transition shadow-lg active:scale-95">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: List View */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-700 font-serif">Class Teacher List</h2>
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
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-gray-50 text-gray-600 font-bold border-y border-gray-200">
                  <tr>
                    <th className="px-6 py-3 border-r border-gray-200">Class <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                    <th className="px-6 py-3 border-r border-gray-200">Section <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                    <th className="px-6 py-3 border-r border-gray-200">Class Teacher <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {classTeacherList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 border-r border-gray-100 text-gray-700">{item.class}</td>
                      <td className="px-6 py-3 border-r border-gray-100 text-gray-700">{item.section}</td>
                      <td className="px-6 py-3 border-r border-gray-100 text-gray-600">{item.teacher}</td>
                      <td className="px-6 py-3 text-right">
                        <div className="flex justify-end gap-1">
                          <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="Edit">
                            <Icons.Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="Delete">
                            <Icons.X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="p-4 flex justify-between items-center text-xs text-gray-500 border-t border-gray-200">
              <span>Showing 1 to 4 of 4 entries</span>
              <div className="flex items-center gap-1">
                <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled><Icons.ChevronDown className="w-4 h-4 rotate-90" /></button>
                <button className="px-2 py-1 bg-indigo-50 text-indigo-700 font-bold rounded border border-indigo-200 shadow-sm">1</button>
                <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled><Icons.ChevronDown className="w-4 h-4 -rotate-90" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignClassTeacher;

import React from 'react';
import { Icons } from '../../components/Icons';

export function AssignIncident() {
  const students = [
    { name: 'Aarav Sharma', admNo: '1011', class: 'Class 1(A)', incident: 'Good Conduct', date: '04/28/2026' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Assign Incident</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Class</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
              <option>Class 1</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
              <option>A</option>
            </select>
          </div>
          <button className="bg-[#5b6bc0] text-white flex items-center justify-center gap-1.5 px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
            <Icons.Search className="w-4 h-4" /> Search
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="p-4">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                <th className="px-4 py-3">Student Name</th>
                <th className="px-4 py-3">Admission No</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Incident</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-4 text-blue-600 font-medium">{s.name}</td>
                  <td className="px-4 py-4 text-gray-600">{s.admNo}</td>
                  <td className="px-4 py-4 text-gray-600">{s.class}</td>
                  <td className="px-4 py-4 text-gray-600">{s.incident}</td>
                  <td className="px-4 py-4 text-right">
                    <button className="bg-[#5b6bc0] text-white px-3 py-1 rounded text-[11px] font-bold hover:bg-[#3f51b5] transition shadow-sm">
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

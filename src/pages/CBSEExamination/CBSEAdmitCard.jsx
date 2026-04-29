import React from 'react';
import { Icons } from '../../components/Icons';

export function CBSEAdmitCard() {
  const admitCards = [
    { student: 'Aarav Sharma', roll: '123456', exam: 'Term 1 Exam', class: 'Class 10(A)', center: 'Main Campus Hall A' },
    { student: 'Kavya Singh', roll: '123457', exam: 'Term 1 Exam', class: 'Class 10(A)', center: 'Main Campus Hall A' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Print Admit Card</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Exam</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Term 1 Examination</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Class</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Admit Card Template</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Standard Admit Card</option>
              <option>Premium Color Admit Card</option>
            </select>
          </div>
          <button className="bg-[#5b6bc0] text-white flex items-center justify-center gap-1.5 px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
            <Icons.Search className="w-4 h-4" /> Search
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-gray-700 font-semibold text-xs uppercase tracking-wider">Student List</h3>
          <button className="bg-[#4caf50] text-white flex items-center gap-2 px-4 py-1 rounded text-[11px] font-bold hover:bg-[#43a047] transition">
            <Icons.FileText className="w-3.5 h-3.5" /> Print Selected
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-700 font-bold border-b border-gray-200">
                <th className="px-4 py-3"><input type="checkbox" className="rounded" /></th>
                <th className="px-4 py-3">Student Name</th>
                <th className="px-4 py-3">Roll Number</th>
                <th className="px-4 py-3">Exam</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Exam Center</th>
              </tr>
            </thead>
            <tbody>
              {admitCards.map((c, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-4"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-4 text-blue-600 font-medium">{c.student}</td>
                  <td className="px-4 py-4 font-mono text-gray-700 font-bold">{c.roll}</td>
                  <td className="px-4 py-4 text-gray-600">{c.exam}</td>
                  <td className="px-4 py-4 text-gray-600">{c.class}</td>
                  <td className="px-4 py-4 text-gray-600 font-semibold italic">{c.center}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

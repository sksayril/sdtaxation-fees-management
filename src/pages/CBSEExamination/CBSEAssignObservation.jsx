import React from 'react';
import { Icons } from '../../components/Icons';

export function CBSEAssignObservation() {
  const students = [
    { name: 'Aarav Sharma', admNo: '1011', class: 'Class 10(A)', observation: 'Leadership', rating: 'Excellent' },
    { name: 'Kavya Singh', admNo: '1022', class: 'Class 10(A)', observation: 'Teamwork', rating: 'Good' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm">Assign Observation</h3>
          <button className="bg-[#5b6bc0] text-white text-[11px] font-bold px-3 py-1 rounded hover:bg-[#3f51b5] transition">Add Parameter</button>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Class</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Class 10</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>A</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Observation Parameter</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Leadership</option>
              <option>Discipline</option>
              <option>Teamwork</option>
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
                <th className="px-4 py-3">Observation</th>
                <th className="px-4 py-3">Rating</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-4 text-blue-600 font-medium">{s.name}</td>
                  <td className="px-4 py-4 text-gray-600">{s.admNo}</td>
                  <td className="px-4 py-4 text-gray-600">{s.class}</td>
                  <td className="px-4 py-4 text-gray-600 font-semibold uppercase text-[11px]">{s.observation}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icons.Star key={star} className={`w-3 h-3 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                      ))}
                      <span className="ml-2 text-xs font-bold text-gray-700">{s.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="bg-[#5b6bc0] text-white px-3 py-1 rounded text-[11px] font-bold hover:bg-[#3f51b5] transition">Save</button>
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

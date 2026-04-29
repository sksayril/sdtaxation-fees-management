import React from 'react';
import { Icons } from '../../components/Icons';

export function CBSEExam() {
  const exams = [
    { name: 'Term 1 Examination', class: 'Class 10', date: '04/28/2026', session: '2025-26', status: 'Active' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto pb-10">
      <div className="lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Add Exam</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Exam Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Session</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>2025-26</option>
              </select>
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
            <h3 className="text-gray-700 font-semibold text-lg">Exam List</h3>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto border border-gray-200 rounded">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <th className="px-4 py-3">Exam Name</th>
                    <th className="px-4 py-3">Session</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exams.map((exam, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-blue-600 font-medium">{exam.name}</td>
                      <td className="px-4 py-3 text-gray-600">{exam.session}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">{exam.status}</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex gap-1 justify-end">
                          <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white"><Icons.Edit2 className="w-3.5 h-3.5" /></button>
                          <button className="bg-[#f44336] p-1.5 rounded hover:bg-[#e53935] text-white"><Icons.X className="w-3.5 h-3.5" /></button>
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

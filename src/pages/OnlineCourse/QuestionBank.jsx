import React from 'react';
import { Icons } from '../../components/Icons';

export function QuestionBank() {
  const questions = [
    { category: 'Mathematics', type: 'Multiple Choice', level: 'Easy', question: 'What is 2+2?' },
    { category: 'Physics', type: 'True/False', level: 'Medium', question: 'Light is a wave.' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto pb-10">
      <div className="lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Add Question</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Category <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
                <option>Mathematics</option>
                <option>Physics</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Question Type <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
                <option>Multiple Choice</option>
                <option>True/False</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Level <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Question <span className="text-red-500">*</span></label>
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
            <h3 className="text-gray-700 font-semibold text-lg">Question List</h3>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto border border-gray-200 rounded">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Level</th>
                    <th className="px-4 py-3">Question</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((q, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600">{q.category}</td>
                      <td className="px-4 py-3 text-gray-600">{q.type}</td>
                      <td className="px-4 py-3 text-gray-600">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${q.level === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{q.level}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-800 font-medium truncate max-w-[200px]">{q.question}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex gap-1 justify-end">
                          <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Edit"><Icons.Edit2 className="w-3.5 h-3.5" /></button>
                          <button className="bg-[#f44336] p-1.5 rounded hover:bg-[#e53935] text-white" title="Delete"><Icons.X className="w-3.5 h-3.5" /></button>
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

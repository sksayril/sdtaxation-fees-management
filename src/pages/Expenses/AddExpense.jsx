import React from 'react';
import { Icons } from '../../components/Icons';

export function AddExpense() {
  const expenses = [
    { name: 'Stationery Purchase', expenseHead: 'Office Supplies', date: '04/28/2026', invoice: 'EXP-501', amount: '₹ 1200.00' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto pb-10">
      <div className="lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Add Expense</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Expense Head <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
                <option>Office Supplies</option>
                <option>Maintenance</option>
                <option>Electricity</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Invoice Number</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Date <span className="text-red-500">*</span></label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Amount (₹) <span className="text-red-500">*</span></label>
              <input type="number" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Attach Document</label>
              <input type="file" className="w-full border border-gray-300 rounded px-3 py-1 text-sm bg-white" />
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
            <h3 className="text-gray-700 font-semibold text-lg">Expense List</h3>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto border border-gray-200 rounded">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Invoice Number</th>
                    <th className="px-4 py-3">Expense Head</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-right">Amount</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((exp, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-blue-600 font-medium">{exp.name}</td>
                      <td className="px-4 py-3 text-gray-600">{exp.invoice}</td>
                      <td className="px-4 py-3 text-gray-600">{exp.expenseHead}</td>
                      <td className="px-4 py-3 text-gray-600">{exp.date}</td>
                      <td className="px-4 py-3 text-red-600 font-bold text-right">{exp.amount}</td>
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

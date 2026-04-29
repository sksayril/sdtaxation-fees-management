import React from 'react';
import { Icons } from '../../components/Icons';

export function Contra() {
  const entries = [
    { date: '04/28/2026', fromAccount: 'Cash', toAccount: 'Bank (HDFC)', amount: '₹ 10000.00', ref: 'C-101', note: 'Cash deposited to bank' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto pb-10">
      <div className="lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Add Contra Entry</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">From Account <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Cash</option>
                <option>Bank</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">To Account <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Bank (HDFC)</option>
                <option>Cash</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Date <span className="text-red-500">*</span></label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Amount (₹) <span className="text-red-500">*</span></label>
              <input type="number" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Reference No</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Note</label>
              <textarea rows="2" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
            <button className="bg-[#008080] text-white px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#006666] transition shadow-sm">
              Save Entry
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-2/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Contra List</h3>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto border border-gray-200 rounded">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">From</th>
                    <th className="px-4 py-3">To</th>
                    <th className="px-4 py-3">Ref</th>
                    <th className="px-4 py-3 text-right">Amount</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((e, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600">{e.date}</td>
                      <td className="px-4 py-3 text-gray-800 font-medium">{e.fromAccount}</td>
                      <td className="px-4 py-3 text-gray-800 font-medium">{e.toAccount}</td>
                      <td className="px-4 py-3 text-gray-600 font-mono text-[11px]">{e.ref}</td>
                      <td className="px-4 py-3 text-gray-800 font-bold text-right">{e.amount}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex gap-1 justify-end">
                          <button className="bg-gray-100 p-1.5 rounded hover:bg-blue-50 text-blue-600 transition"><Icons.Edit2 className="w-3.5 h-3.5" /></button>
                          <button className="bg-gray-100 p-1.5 rounded hover:bg-red-50 text-red-600 transition"><Icons.X className="w-3.5 h-3.5" /></button>
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

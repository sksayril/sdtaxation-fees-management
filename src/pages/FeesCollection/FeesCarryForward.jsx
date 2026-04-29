import React from 'react';
import { Icons } from '../../components/Icons';

export function FeesCarryForward() {
  const students = [
    { name: 'Kavya Singh', admNo: '1025', balance: '28000.00' },
    { name: 'Vikram Aditya', admNo: '1040', balance: '16500.00' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria to Carry Forward</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Class <span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select Class</option>
              <option>Class 1</option>
            </select>
          </div>
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Section <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select Section</option>
                <option>A</option>
              </select>
            </div>
            <button className="bg-[#5b6bc0] text-white flex items-center justify-center gap-1.5 px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm mb-[1px]">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Previous Session Balance Fees</h3>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                  <th className="px-4 py-3 w-10">#</th>
                  <th className="px-4 py-3">Student Name</th>
                  <th className="px-4 py-3">Admission No</th>
                  <th className="px-4 py-3 w-64 text-right">Balance Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {students.map((st, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3"><input type="checkbox" defaultChecked className="text-blue-600 rounded border-gray-300" /></td>
                    <td className="px-4 py-3 text-blue-600 font-medium">{st.name}</td>
                    <td className="px-4 py-3 text-gray-600">{st.admNo}</td>
                    <td className="px-4 py-3">
                       <input type="text" defaultValue={st.balance} className="w-full border border-gray-300 rounded px-2 py-1 text-sm text-right focus:outline-none focus:border-blue-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
             <button className="bg-[#5b6bc0] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
               Save Due Fees
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

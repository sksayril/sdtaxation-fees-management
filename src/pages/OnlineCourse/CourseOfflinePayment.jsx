import React from 'react';
import { Icons } from '../../components/Icons';

export function CourseOfflinePayment() {
  const payments = [
    { student: 'Kavya Singh', course: 'Mathematics Advanced', mode: 'Bank Transfer', refNo: 'TXN12345', amount: '₹ 500.00', date: '04/28/2026', status: 'Pending' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Offline Course Payment</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Search By Keyword</label>
            <input type="text" placeholder="Search By Student Name, Course, Ref No" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
          </div>
          <button className="bg-[#5b6bc0] text-white flex items-center justify-center gap-1.5 px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm w-32">
            <Icons.Search className="w-4 h-4" /> Search
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="p-4">
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                  <th className="px-4 py-3">Student Name</th>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Payment Mode</th>
                  <th className="px-4 py-3">Ref No</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-4 text-blue-600 font-medium">{p.student}</td>
                    <td className="px-4 py-4 text-gray-600">{p.course}</td>
                    <td className="px-4 py-4 text-gray-600">{p.mode}</td>
                    <td className="px-4 py-4 text-gray-600">{p.refNo}</td>
                    <td className="px-4 py-4 text-gray-800 font-bold text-right">{p.amount}</td>
                    <td className="px-4 py-4 text-gray-600">{p.date}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded">{p.status}</span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex gap-1 justify-end">
                        <button className="bg-[#8bc34a] p-1.5 rounded hover:bg-[#7cb342] text-white" title="Approve"><Icons.Check className="w-3.5 h-3.5 stroke-[3]" /></button>
                        <button className="bg-[#f44336] p-1.5 rounded hover:bg-[#e53935] text-white" title="Reject"><Icons.X className="w-3.5 h-3.5 stroke-[3]" /></button>
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
  );
}

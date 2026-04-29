import React from 'react';
import { Icons } from '../../components/Icons';

export function OfflineBankPayments() {
  const payments = [
    { txId: 'TXN-9021', name: 'Aarav Sharma', class: 'Class 1(A)', mode: 'Cheque', refNo: 'CHQ-0019283', amount: '₹ 21,000.00', date: '04/28/2026', status: 'Pending' },
    { txId: 'TXN-9020', name: 'Rohan Gupta', class: 'Class 2(B)', mode: 'Bank Transfer', refNo: 'NEFT-8827391', amount: '₹ 15,500.00', date: '04/27/2026', status: 'Pending' },
    { txId: 'TXN-9015', name: 'Diya Patel', class: 'Class 1(A)', mode: 'Demand Draft', refNo: 'DD-55612', amount: '₹ 28,000.00', date: '04/25/2026', status: 'Approved' },
    { txId: 'TXN-9010', name: 'Ananya Singh', class: 'Class 3(A)', mode: 'Cheque', refNo: 'CHQ-0018822', amount: '₹ 10,000.00', date: '04/20/2026', status: 'Rejected' },
    { txId: 'TXN-9005', name: 'Vivaan Reddy', class: 'Class 1(B)', mode: 'Bank Transfer', refNo: 'IMPS-9928172', amount: '₹ 24,500.00', date: '04/18/2026', status: 'Approved' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      {/* Search Criteria Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* Left search block */}
          <div className="flex gap-4 items-end">
             <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Status</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Payment Mode</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>All</option>
                <option>Cheque</option>
                <option>Demand Draft</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm mb-[1px]">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>

          {/* Right search block */}
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Search By Keyword</label>
              <input type="text" placeholder="Search By Txn ID, Student Name, Ref No etc." className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white placeholder:text-xs" />
            </div>
            <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm mb-[1px]">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Payment List Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm flex items-center gap-2">
            <Icons.List className="w-4 h-4" /> Offline Payment List
          </h3>
        </div>

        <div className="p-4">
          {/* Table Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <input type="text" placeholder="Search" className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white w-48" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
               <div className="flex items-center gap-1">
                 <select className="border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-500">
                   <option>50</option>
                 </select>
               </div>
               {/* Export Icons */}
               <div className="flex items-center gap-1 text-gray-400">
                  <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.FileText className="w-4 h-4" /></div>
                  <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.BarChart className="w-4 h-4" /></div>
                  <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.Printer className="w-4 h-4" /></div>
               </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left text-sm whitespace-nowrap min-w-max">
              <thead>
                <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                  <th className="px-4 py-4">Transaction ID</th>
                  <th className="px-4 py-4">Student Name</th>
                  <th className="px-4 py-4">Class</th>
                  <th className="px-4 py-4">Payment Mode</th>
                  <th className="px-4 py-4">Reference Number</th>
                  <th className="px-4 py-4 text-right">Amount</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                    <td className="px-4 py-4 text-gray-600 font-medium">{payment.txId}</td>
                    <td className="px-4 py-4 text-blue-600 font-medium">{payment.name}</td>
                    <td className="px-4 py-4 text-gray-600">{payment.class}</td>
                    <td className="px-4 py-4 text-gray-600">{payment.mode}</td>
                    <td className="px-4 py-4 text-gray-600">{payment.refNo}</td>
                    <td className="px-4 py-4 text-gray-800 font-bold text-right">{payment.amount}</td>
                    <td className="px-4 py-4 text-gray-600">{payment.date}</td>
                    <td className="px-4 py-4">
                      {payment.status === 'Pending' && <span className="bg-yellow-500 text-white text-[10px] font-bold px-2 py-1 rounded">Pending</span>}
                      {payment.status === 'Approved' && <span className="bg-[#8bc34a] text-white text-[10px] font-bold px-2 py-1 rounded">Approved</span>}
                      {payment.status === 'Rejected' && <span className="bg-[#f44336] text-white text-[10px] font-bold px-2 py-1 rounded">Rejected</span>}
                    </td>
                    <td className="px-4 py-4 text-right">
                       {payment.status === 'Pending' ? (
                          <div className="flex gap-1 justify-end">
                            <button className="bg-[#8bc34a] p-1.5 rounded hover:bg-[#7cb342] text-white" title="Approve">
                               <Icons.Check className="w-3 h-3 stroke-[3]" />
                            </button>
                            <button className="bg-[#f44336] p-1.5 rounded hover:bg-[#e53935] text-white" title="Reject">
                               <Icons.X className="w-3 h-3 stroke-[3]" />
                            </button>
                          </div>
                       ) : (
                          <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="View Details">
                             <Icons.Menu className="w-3 h-3" />
                          </button>
                       )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 1 to {payments.length} of {payments.length} entries</span>
            <div className="flex gap-1">
              <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&lt;</button>
              <button className="px-2 py-1 border border-blue-200 bg-blue-50 text-blue-600 font-bold rounded">1</button>
              <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

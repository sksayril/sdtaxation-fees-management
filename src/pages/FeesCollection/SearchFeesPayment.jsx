import React from 'react';
import { Icons } from '../../components/Icons';

export function SearchFeesPayment() {
  const payments = [
    { payId: 'PAY-81902', date: '04/28/2026', name: 'Aarav Sharma', class: 'Class 1(A)', feeGroup: 'Tuition Fee', mode: 'Cash', amount: '₹ 10,500.00', discount: '₹ 0.00', fine: '₹ 0.00' },
    { payId: 'PAY-81901', date: '04/27/2026', name: 'Diya Patel', class: 'Class 1(A)', feeGroup: 'Transport Fee', mode: 'Online', amount: '₹ 2,000.00', discount: '₹ 0.00', fine: '₹ 0.00' },
    { payId: 'PAY-81895', date: '04/26/2026', name: 'Rohan Gupta', class: 'Class 2(B)', feeGroup: 'Hostel Fee', mode: 'Bank Transfer', amount: '₹ 15,000.00', discount: '₹ 500.00', fine: '₹ 0.00' },
    { payId: 'PAY-81850', date: '04/20/2026', name: 'Ananya Singh', class: 'Class 3(A)', feeGroup: 'Tuition Fee', mode: 'Cheque', amount: '₹ 12,000.00', discount: '₹ 0.00', fine: '₹ 100.00' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      {/* Search Criteria Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Search By Payment ID Block */}
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-sm">Search By Payment ID</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Payment ID</label>
              <input type="text" placeholder="Enter Payment ID" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div className="flex justify-end mt-2">
              <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
                <Icons.Search className="w-4 h-4" /> Search
              </button>
            </div>
          </div>
        </div>

        {/* Search By Date Block */}
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-sm">Search By Date Range</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Date From</label>
                  <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Date To</label>
                  <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
                </div>
             </div>
            <div className="flex justify-end mt-2">
              <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
                <Icons.Search className="w-4 h-4" /> Search
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Payment List Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm flex items-center gap-2">
            <Icons.List className="w-4 h-4" /> Payment List
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
                  <th className="px-4 py-4">Payment ID</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4">Student Name</th>
                  <th className="px-4 py-4">Class</th>
                  <th className="px-4 py-4">Fee Group / Type</th>
                  <th className="px-4 py-4">Mode</th>
                  <th className="px-4 py-4 text-right">Amount</th>
                  <th className="px-4 py-4 text-right">Discount</th>
                  <th className="px-4 py-4 text-right">Fine</th>
                  <th className="px-4 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                    <td className="px-4 py-4 text-blue-600 font-bold">{payment.payId}</td>
                    <td className="px-4 py-4 text-gray-600">{payment.date}</td>
                    <td className="px-4 py-4 text-blue-600 font-medium">{payment.name}</td>
                    <td className="px-4 py-4 text-gray-600">{payment.class}</td>
                    <td className="px-4 py-4 text-gray-600">{payment.feeGroup}</td>
                    <td className="px-4 py-4 text-gray-600">{payment.mode}</td>
                    <td className="px-4 py-4 text-gray-800 font-bold text-right">{payment.amount}</td>
                    <td className="px-4 py-4 text-green-600 font-medium text-right">{payment.discount}</td>
                    <td className="px-4 py-4 text-red-500 font-medium text-right">{payment.fine}</td>
                    <td className="px-4 py-4 text-right">
                        <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="View / Print Receipt">
                           <Icons.Printer className="w-3 h-3" />
                        </button>
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

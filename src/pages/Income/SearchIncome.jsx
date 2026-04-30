import React from 'react';
import { Icons } from '../../components/Icons';

export function SearchIncome() {
  const searchResults = [
    { name: 'Donation', incomeHead: 'Donations', date: '04/28/2026', invoice: 'INC-101', amount: '₹ 5000.00' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-full mx-auto pb-10 px-4">
      {/* Left: Tally-style Accounting Voucher UI */}
      <div className="lg:w-2/5">
        <div className="bg-[#e4f0d8] border border-gray-400 shadow-xl overflow-hidden rounded-sm font-sans text-black">
          {/* Top Bar */}
          <div className="bg-[#3e7e7b] text-white px-2 py-1 flex justify-between items-center text-[12px] font-bold">
            <span>Accounting Voucher Creation</span>
            <span>Mansarovar the School</span>
            <span className="flex items-center gap-1">Ctrl + M <Icons.X className="w-3 h-3 bg-white text-black font-bold border border-gray-400 p-0.5" /></span>
          </div>

          {/* Voucher Header */}
          <div className="p-2 border-b border-gray-400">
             <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                   <div className="bg-[#e04040] text-white px-6 py-0.5 text-[13px] font-bold shadow-sm">Receipt</div>
                   <div className="text-[13px] font-bold">No. <span className="font-bold ml-1 text-black">555</span></div>
                </div>
                <div className="text-right leading-tight text-gray-800">
                   <div className="text-[12px] font-bold">31-Mar-2025</div>
                   <div className="text-[11px]">Monday</div>
                </div>
             </div>

             <div className="mt-4 space-y-0.5 pl-2 pb-2">
                <div className="flex items-center gap-2">
                   <span className="text-[13px] w-16 text-black">Account :</span>
                   <input type="text" className="bg-transparent border-b border-transparent hover:border-gray-400 flex-1 outline-none px-1 text-[13px] font-bold focus:bg-white/40" placeholder="" />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-600">
                   <span className="w-16 italic pl-2">Cur Bal :</span>
                   <span className="font-medium"></span>
                </div>
             </div>
          </div>

          {/* Particulars Area */}
          <div className="min-h-[300px] flex flex-col bg-[#e4f0d8]">
             <div className="grid grid-cols-12 border-b-2 border-black text-[13px] font-bold bg-[#e4f0d8]">
                <div className="col-span-9 px-3 py-1 border-r border-gray-400">Particulars</div>
                <div className="col-span-3 px-3 py-1 text-right">Amount</div>
             </div>
             
             {/* Entry Row */}
             <div className="grid grid-cols-12 flex-1">
                <div className="col-span-9 border-r border-gray-400 p-3 flex flex-col gap-2">
                   <div className="flex items-start gap-2">
                      <span className="text-[13px] w-8 text-center pt-0.5"></span>
                      <textarea className="bg-transparent flex-1 outline-none px-1 py-0.5 text-[13px] resize-none h-32 focus:bg-white/40" placeholder=""></textarea>
                   </div>
                </div>
                <div className="col-span-3 p-3 text-right">
                   <input type="text" className="bg-transparent w-full outline-none px-1 py-0.5 text-[13px] text-right font-bold focus:bg-white/40" placeholder="" />
                </div>
             </div>

             {/* Footer Area */}
             <div className="p-3 pb-8">
                <div className="flex items-start gap-2">
                   <span className="text-[13px] w-20 pt-1">Narration:</span>
                   <div className="flex-1 flex flex-col gap-1">
                     <input type="text" className="bg-transparent border-b border-gray-500 outline-none px-1 py-0.5 text-[13px] focus:bg-white/40" />
                     <input type="text" className="bg-transparent border-b border-gray-500 outline-none px-1 py-0.5 text-[13px] focus:bg-white/40" />
                   </div>
                </div>
             </div>
             
             {/* Bottom Status Bar */}
             <div className="bg-[#b5c7d3] px-2 py-0.5 flex justify-between items-center text-[11px] text-gray-700 border-t border-gray-400">
                <span>Calculator</span>
                <span>Ctrl + N</span>
             </div>
          </div>
        </div>
      </div>

      {/* Right: Search and List */}
      <div className="lg:w-3/5 flex flex-col gap-6">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-gray-700 font-semibold text-sm">Student Income Search & Records</h3>
            <div className="flex gap-2">
               <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-[11px] font-bold hover:bg-blue-100 transition">Download Excel</button>
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Filter by Period</label>
              <div className="flex gap-2">
                <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm bg-white">
                  <option>Current Fiscal Year</option>
                  <option>Last Month</option>
                </select>
                <button className="bg-[#3b5998] text-white p-2 rounded hover:bg-[#2f4677] transition shadow-sm">
                  <Icons.Search className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Voucher Search</label>
              <div className="flex gap-2">
                <input type="text" placeholder="Search By Voucher No, Particulars" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm bg-white" />
                <button className="bg-[#3b5998] text-white p-2 rounded hover:bg-[#2f4677] transition shadow-sm">
                  <Icons.Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200 uppercase text-[10px] tracking-wider">
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Voucher No</th>
                    <th className="px-4 py-3">Particulars</th>
                    <th className="px-4 py-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((inc, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600 font-mono text-xs">{inc.date}</td>
                      <td className="px-4 py-3 font-bold text-gray-700">{inc.invoice}</td>
                      <td className="px-4 py-3">
                         <div className="text-blue-600 font-medium">{inc.name}</div>
                         <div className="text-[10px] text-gray-400 italic">Head: {inc.incomeHead}</div>
                      </td>
                      <td className="px-4 py-3 text-[#305496] font-black text-right">{inc.amount}</td>
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

import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

export function QuickFees() {
  const [searched, setSearched] = useState(false);

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Quick Fee Collection</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
           <div className="flex-1">
             <label className="block text-xs font-semibold text-gray-700 mb-1">Student Admission No / Barcode</label>
             <input type="text" placeholder="Scan barcode or enter Admission No" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 bg-white shadow-inner" />
           </div>
           <button onClick={() => setSearched(true)} className="bg-[#5b6bc0] text-white flex items-center justify-center gap-1.5 px-6 py-2 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm w-32">
             <Icons.Search className="w-4 h-4" /> Search
           </button>
        </div>
      </div>

      {searched && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded shadow-sm p-6 flex flex-col items-center">
                 <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-500">
                    <Icons.User className="w-12 h-12" />
                 </div>
                 <h2 className="text-lg font-bold text-gray-800">Kavya Singh</h2>
                 <p className="text-sm text-gray-500 mb-4">Admission No: 1025</p>
                 <div className="w-full grid grid-cols-2 gap-y-2 text-sm">
                   <div className="text-gray-500">Class:</div>
                   <div className="font-semibold text-gray-800 text-right">Class 2(B)</div>
                   <div className="text-gray-500">Father Name:</div>
                   <div className="font-semibold text-gray-800 text-right">Rajeev Singh</div>
                   <div className="text-gray-500">Mobile:</div>
                   <div className="font-semibold text-gray-800 text-right">9876543210</div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded shadow-sm">
                <div className="px-4 py-3 border-b border-gray-100 bg-red-50 text-red-700 font-bold flex justify-between">
                   <span>Total Due Amount</span>
                   <span>₹ 28,800.00</span>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Date <span className="text-red-500">*</span></label>
                      <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-gray-50" defaultValue="2026-04-28" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Payment Mode <span className="text-red-500">*</span></label>
                      <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                        <option>Cash</option>
                        <option>Cheque</option>
                        <option>Bank Transfer</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Amount To Pay (₹) <span className="text-red-500">*</span></label>
                    <input type="text" defaultValue="28800.00" className="w-full border border-gray-300 rounded px-3 py-2 text-lg font-bold text-gray-800 focus:outline-none focus:border-blue-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Note</label>
                    <textarea rows="2" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
                  </div>
                  <button className="bg-[#8bc34a] text-white w-full py-3 rounded text-lg font-bold hover:bg-[#7cb342] transition shadow-md flex items-center justify-center gap-2 mt-2">
                    <Icons.Check className="w-5 h-5 stroke-[3]" /> Collect Payment
                  </button>
                </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Icons } from '../../components/Icons';

export function FeesMaster() {
  const masterList = [
    { group: 'Tuition Fee', type: 'Monthly Tuition', amount: '₹ 1500.00', fine: 'Percentage', fineVal: '5.00%' },
    { group: 'Transport Fee', type: 'Bus Fare', amount: '₹ 800.00', fine: 'Fixed Amount', fineVal: '₹ 100.00' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto pb-10">
      <div className="lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Add Fees Master</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Fees Group <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
                <option>Tuition Fee</option>
                <option>Transport Fee</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Fees Type <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
                <option>Monthly Tuition</option>
                <option>Bus Fare</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Due Date <span className="text-red-500">*</span></label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Amount (₹) <span className="text-red-500">*</span></label>
              <input type="number" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input type="radio" name="fine" id="none" defaultChecked className="w-3 h-3 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="none" className="text-xs text-gray-700">None</label>
              
              <input type="radio" name="fine" id="pct" className="w-3 h-3 text-blue-600 focus:ring-blue-500 ml-2" />
              <label htmlFor="pct" className="text-xs text-gray-700">Percentage</label>
              
              <input type="radio" name="fine" id="fix" className="w-3 h-3 text-blue-600 focus:ring-blue-500 ml-2" />
              <label htmlFor="fix" className="text-xs text-gray-700">Fixed Amount</label>
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
            <h3 className="text-gray-700 font-semibold text-lg">Fees Master List</h3>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto border border-gray-200 rounded">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <th className="px-4 py-3">Fees Group</th>
                    <th className="px-4 py-3">Fees Code</th>
                    <th className="px-4 py-3 text-right">Amount</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {masterList.map((item, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-blue-600 font-medium">{item.group}</td>
                      <td className="px-4 py-3 text-gray-600">{item.type}</td>
                      <td className="px-4 py-3 text-gray-800 font-bold text-right">{item.amount}</td>
                      <td className="px-4 py-3 text-right">
                         <div className="flex gap-1 justify-end">
                           <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white"><Icons.Edit2 className="w-3 h-3" /></button>
                           <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white"><Icons.X className="w-3 h-3" /></button>
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

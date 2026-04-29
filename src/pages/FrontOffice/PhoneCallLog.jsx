import React from 'react';
import { Icons } from '../../components/Icons';

export function PhoneCallLog() {
  const callLogs = [
    { name: 'Transport Agency', phone: '9001234567', date: '04/23/2026', nextFollowUp: '04/25/2026', type: 'Outgoing' },
    { name: 'Stationery Vendor', phone: '6012345678', date: '04/19/2026', nextFollowUp: '04/21/2026', type: 'Incoming' },
    { name: 'Electricity Board', phone: '7023456789', date: '04/11/2026', nextFollowUp: '04/12/2026', type: 'Outgoing' },
    { name: 'Parent - Sharma', phone: '8034567890', date: '04/06/2026', nextFollowUp: '04/07/2026', type: 'Incoming' },
    { name: 'Book Publisher', phone: '9045678901', date: '04/02/2026', nextFollowUp: '04/04/2026', type: 'Outgoing' },
    { name: 'Telephone Office', phone: '54564646544', date: '03/25/2026', nextFollowUp: '03/31/2026', type: 'Outgoing' },
    { name: 'New Book-Stock', phone: '6463453535', date: '03/20/2026', nextFollowUp: '03/25/2026', type: 'Outgoing' },
    { name: 'Electricity Office', phone: '74465767575', date: '03/19/2026', nextFollowUp: '03/25/2026', type: 'Incoming' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Column: Form */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-sm">Add Phone Call Log</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Date <span className="text-red-500">*</span></label>
              <input type="date" defaultValue="2026-04-28" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Description</label>
              <textarea rows="3" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Next Follow Up Date</label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Call Duration</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Note</label>
              <textarea rows="3" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Call Type <span className="text-red-500">*</span></label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
                  <input type="radio" name="callType" defaultChecked className="w-3.5 h-3.5 accent-[#3b5998]" /> Incoming
                </label>
                <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
                  <input type="radio" name="callType" className="w-3.5 h-3.5 accent-[#3b5998]" /> Outgoing
                </label>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button className="bg-[#3b5998] text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#2d4373] transition shadow-sm">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: List */}
      <div className="w-full lg:w-2/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-sm">Phone Call Log List</h3>
          </div>
          
          <div className="p-4">
            {/* Table Controls */}
            <div className="flex justify-between items-center mb-4">
              <div className="relative">
                <input type="text" placeholder="Search" className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white w-48" />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                 <div className="flex items-center gap-1">
                   <select className="border border-gray-300 rounded p-1">
                     <option>50</option>
                   </select>
                 </div>
                 {/* Export Icons */}
                 <div className="flex items-center gap-1 text-gray-400">
                    <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.FileText className="w-4 h-4" /></div>
                    <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.BarChart className="w-4 h-4" /></div>
                 </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Next Follow Up Date</th>
                    <th className="px-4 py-3">Call Type</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {callLogs.map((log, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                      <td className="px-4 py-3 text-gray-600">{log.name}</td>
                      <td className="px-4 py-3 text-gray-600">{log.phone}</td>
                      <td className="px-4 py-3 text-gray-600">{log.date}</td>
                      <td className="px-4 py-3 text-gray-600">{log.nextFollowUp}</td>
                      <td className="px-4 py-3 text-gray-600">{log.type}</td>
                      <td className="px-4 py-3 text-right">
                         <div className="flex justify-end gap-1">
                            <button className="bg-[#3b5998] p-1.5 rounded hover:bg-[#2d4373] text-white" title="Details">
                               <Icons.Menu className="w-3 h-3" />
                            </button>
                            <button className="bg-[#3b5998] p-1.5 rounded hover:bg-[#2d4373] text-white" title="Edit">
                               <Icons.Edit2 className="w-3 h-3" />
                            </button>
                            <button className="bg-[#3b5998] p-1.5 rounded hover:bg-[#2d4373] text-white" title="Delete">
                               <Icons.X className="w-3 h-3" />
                            </button>
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

import React from 'react';
import { Icons } from '../../components/Icons';

export function PostalReceive() {
  const receives = [
    { fromTitle: 'NCC Camp Program', referenceNo: 'RFN6845', toTitle: 'NCC Camp Program', date: '04/30/2026' },
    { fromTitle: 'Staff Health Checkup', referenceNo: 'RFN0987', toTitle: 'Staff Health Checkup', date: '04/17/2026' },
    { fromTitle: 'Blind Literature Program', referenceNo: 'RFN0987', toTitle: 'Blind Literature Program', date: '04/09/2026' },
    { fromTitle: 'Inter-school Tournament Info', referenceNo: 'RCV20260402', toTitle: 'Sports Authority', date: '04/23/2026' },
    { fromTitle: 'Exam Guidelines', referenceNo: 'RCV20260401', toTitle: 'CBSE Board', date: '04/08/2026' },
    { fromTitle: 'Auditor General Rule-Book', referenceNo: 'RFN0987', toTitle: 'Auditor General Rule-Book', date: '03/26/2026' },
    { fromTitle: 'Telephone Office', referenceNo: 'RFN56734', toTitle: 'Telephone Office', date: '03/12/2026' },
    { fromTitle: 'Books deliver In School', referenceNo: 'RFN6845', toTitle: 'Books deliver In School', date: '03/26/2026' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Column: Form */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-sm">Add Postal Receive</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">From Title <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Reference No</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Address</label>
              <textarea rows="2" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Note</label>
              <textarea rows="3" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">To Title</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Date</label>
              <input type="date" defaultValue="2026-04-28" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Attach Document</label>
              <div className="border border-gray-300 border-dashed rounded px-4 py-3 bg-gray-50 flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition">
                <Icons.UploadCloud className="w-4 h-4 text-gray-800" />
                <span className="text-xs font-semibold text-gray-800">Drag and drop a file here or click</span>
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
            <h3 className="text-gray-700 font-semibold text-sm">Postal Receive List</h3>
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
                    <th className="px-4 py-3">From Title</th>
                    <th className="px-4 py-3">Reference No</th>
                    <th className="px-4 py-3">To Title</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {receives.map((rec, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                      <td className="px-4 py-3 text-gray-600">{rec.fromTitle}</td>
                      <td className="px-4 py-3 text-gray-600">{rec.referenceNo}</td>
                      <td className="px-4 py-3 text-gray-600">{rec.toTitle}</td>
                      <td className="px-4 py-3 text-gray-600">{rec.date}</td>
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

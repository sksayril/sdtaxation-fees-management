import React from 'react';
import { Icons } from '../../components/Icons';

export function AdmissionEnquiry() {
  const enquiries = [
    { name: 'Hariom', phone: '872376717887', source: 'Online Front Site', date: '04/23/2026', lastFollowUp: '', nextFollowUp: '04/29/2026', status: 'Active' },
    { name: 'anubhav', phone: '8766756566', source: 'Google Ads', date: '04/16/2026', lastFollowUp: '04/15/2026', nextFollowUp: '04/23/2026', status: 'Active' },
    { name: 'jaya', phone: '77625336632', source: 'Advertisement', date: '04/01/2026', lastFollowUp: '', nextFollowUp: '04/03/2026', status: 'Active' },
    { name: 'Suresh Yadav', phone: '5432109876', source: 'Social Media', date: '04/21/2026', lastFollowUp: '', nextFollowUp: '04/24/2026', status: 'Active' },
    { name: 'Rahul Sharma', phone: '9876543210', source: 'Advertisement', date: '04/03/2026', lastFollowUp: '', nextFollowUp: '04/06/2026', status: 'Active' },
    { name: 'Abhi', phone: '67574645675', source: 'Front Office', date: '03/20/2026', lastFollowUp: '03/02/2026', nextFollowUp: '03/06/2026', status: 'Active' },
    { name: 'Aarav', phone: '65543768989', source: 'Admission Campaign', date: '03/11/2026', lastFollowUp: '', nextFollowUp: '03/14/2026', status: 'Active' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Select Criteria */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Class</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Source</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Enquiry From Date <span className="text-red-500">*</span></label>
            <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Enquiry To Date <span className="text-red-500">*</span></label>
            <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Status</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Active</option>
            </select>
          </div>
          <div className="md:col-span-5 flex justify-end mt-2">
            <button className="bg-[#3b5998] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#2d4373] transition shadow-sm">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Admission Enquiry Table Area */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm">Admission Enquiry List</h3>
          <button className="bg-[#3b5998] text-white flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#2d4373] transition shadow-sm">
            <Icons.Plus className="w-3.5 h-3.5" /> Add
          </button>
        </div>
        
        <div className="p-4">
          {/* Table Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <input type="text" placeholder="Search..." className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white w-48" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
               <div className="flex items-center gap-1">
                 <select className="border border-gray-300 rounded p-1">
                   <option>50</option>
                 </select>
                 <span className="text-xs">records</span>
               </div>
               {/* Export Icons (Mock) */}
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
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Enquiry Date</th>
                  <th className="px-4 py-3">Last Follow Up Date</th>
                  <th className="px-4 py-3">Next Follow Up Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enq, i) => (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-gray-50 ${i % 2 !== 0 ? 'bg-[#f4ebeb]' : 'bg-white'}`}>
                    <td className="px-4 py-2.5 text-gray-800">{enq.name}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.phone}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.source}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.date}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.lastFollowUp}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.nextFollowUp}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.status}</td>
                    <td className="px-4 py-2.5 text-right">
                       <div className="flex justify-end gap-1">
                          <button className="bg-[#3b5998] p-1 rounded hover:bg-[#2d4373] text-white" title="Call">
                             <Icons.Phone className="w-3 h-3" />
                          </button>
                          <button className="bg-[#3b5998] p-1 rounded hover:bg-[#2d4373] text-white" title="Edit">
                             <Icons.Edit2 className="w-3 h-3" />
                          </button>
                          <button className="bg-[#3b5998] p-1 rounded hover:bg-[#2d4373] text-white" title="Delete">
                             <Icons.X className="w-3 h-3" />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 1 to 7 of 28 entries</span>
            <div className="flex gap-1">
              <button className="px-2 py-1 border border-gray-200 rounded text-gray-400">&lt;</button>
              <button className="px-2 py-1 border border-blue-200 bg-blue-50 text-blue-600 font-bold rounded">1</button>
              <button className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-50">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

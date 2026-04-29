import React from 'react';
import { Icons } from '../../components/Icons';

export function Complain() {
  const complaints = [
    { id: '383', type: 'Teacher', name: 'John', phone: '878767868768', date: '04/30/2026' },
    { id: '382', type: 'Front Office', name: 'Nishant', phone: '787656778989', date: '04/03/2026' },
    { id: '381', type: 'Study', name: 'Mohan Lal', phone: '7654012345', date: '04/17/2026' },
    { id: '380', type: 'Fees', name: 'Sunita Mehta', phone: '8765012345', date: '04/10/2026' },
    { id: '379', type: 'Transport', name: 'Rakesh Patel', phone: '9876501234', date: '04/05/2026' },
    { id: '378', type: 'Front Office', name: 'Utkarsh Srivastava', phone: '64556454747', date: '03/27/2026' },
    { id: '377', type: 'Hostel', name: 'Bella McCallum', phone: '675757576', date: '03/20/2026' },
    { id: '376', type: 'Sports', name: 'Abhishek Paradkar', phone: '65754654646', date: '03/18/2026' },
    { id: '375', type: 'Teacher', name: 'Sweta Sharma', phone: '7867565464', date: '03/11/2026' },
    { id: '374', type: 'Study', name: 'Pankaj Tiwari', phone: '67675464564', date: '03/07/2026' },
    { id: '373', type: 'Fees', name: 'Meena Choudhary', phone: '56574564644', date: '03/02/2026' },
    { id: '372', type: 'Hostel', name: 'Bella McCallum', phone: '9376743575', date: '02/17/2026' },
    { id: '371', type: 'Front Office', name: 'Deepak Jain', phone: '656546454', date: '02/21/2026' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Column: Form */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-sm">Add Complain</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Complaint Type</label>
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
              <label className="block text-xs font-semibold text-gray-700 mb-1">Complain By <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Date</label>
              <input type="date" defaultValue="2026-04-28" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Description</label>
              <textarea rows="3" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Action Taken</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Assigned</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Note</label>
              <textarea rows="3" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
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
            <h3 className="text-gray-700 font-semibold text-sm">Complaint List</h3>
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
                    <th className="px-4 py-3">Complain #</th>
                    <th className="px-4 py-3">Complaint Type</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((comp, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                      <td className="px-4 py-3 text-gray-600">{comp.id}</td>
                      <td className="px-4 py-3 text-gray-600">{comp.type}</td>
                      <td className="px-4 py-3 text-gray-600">{comp.name}</td>
                      <td className="px-4 py-3 text-gray-600">{comp.phone}</td>
                      <td className="px-4 py-3 text-gray-600">{comp.date}</td>
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

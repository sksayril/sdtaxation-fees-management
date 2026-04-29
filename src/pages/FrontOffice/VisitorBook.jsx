import React from 'react';
import { Icons } from '../../components/Icons';

export function VisitorBook() {
  const visitors = [
    { purpose: 'Trying to reach you', meetingWith: '', name: 'Wilhelmina Dalrymple (wilhelmina.dalrymple@msn.com)', phone: '', idCard: '', persons: '0', date: '04/28/2026', inTime: '', outTime: '' },
    { purpose: 'Parent Teacher Meeting', meetingWith: 'Student (Edward Thomas - 1800011)', name: 'Jaya', phone: '786534538', idCard: '', persons: '0', date: '04/01/2026', inTime: '06:40 PM', outTime: '06:40 PM' },
    { purpose: 'Marketing', meetingWith: 'Student (Edward Thomas - 1800011)', name: 'Teacher', phone: '6043210987', idCard: 'GovtID', persons: '2', date: '04/26/2026', inTime: '10:00 AM', outTime: '12:00 PM' },
    { purpose: 'Book Donation', meetingWith: 'Staff (Jason Sharlton - 90006)', name: 'NGO Representative', phone: '9054321098', idCard: 'VoterCard', persons: '4', date: '04/21/2026', inTime: '11:00 AM', outTime: '01:00 PM' },
    { purpose: 'Maintenance', meetingWith: 'Staff', name: 'Electrician Team', phone: '7065432109', idCard: 'DrivingLicense', persons: '2', date: '04/15/2026', inTime: '09:00 AM', outTime: '12:00 PM' },
    { purpose: 'Official Visit', meetingWith: 'Staff (William Abbot - 9003)', name: 'Corporate Rep', phone: '8076543210', idCard: 'PassportCard', persons: '3', date: '04/09/2026', inTime: '02:00 PM', outTime: '03:00 PM' },
    { purpose: 'Parent Meeting', meetingWith: 'Staff', name: 'Rajesh Verma', phone: '9087654321', idCard: 'AadharCard', persons: '2', date: '04/04/2026', inTime: '10:30 AM', outTime: '11:30 AM' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm">Visitor List</h3>
          <button className="bg-[#3b5998] text-white flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#2d4373] transition shadow-sm">
            <Icons.Plus className="w-3.5 h-3.5" /> Add
          </button>
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
                  <th className="px-4 py-3">Purpose</th>
                  <th className="px-4 py-3">Meeting With</th>
                  <th className="px-4 py-3">Visitor Name</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">ID Card</th>
                  <th className="px-4 py-3">Number Of Person</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">In Time</th>
                  <th className="px-4 py-3">Out Time</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                    <td className="px-4 py-3 text-gray-800">{visitor.purpose}</td>
                    <td className="px-4 py-3 text-gray-600">{visitor.meetingWith}</td>
                    <td className="px-4 py-3 text-blue-600">{visitor.name}</td>
                    <td className="px-4 py-3 text-gray-600">{visitor.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{visitor.idCard}</td>
                    <td className="px-4 py-3 text-gray-600">{visitor.persons}</td>
                    <td className="px-4 py-3 text-gray-600">{visitor.date}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-pre-wrap">{visitor.inTime.replace(' ', '\n')}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-pre-wrap">{visitor.outTime.replace(' ', '\n')}</td>
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
          
          <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 1 to 7 of 41 entries</span>
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

import React from 'react';
import { Icons } from '../../components/Icons';

export function SearchDueFees() {
  const dueStudents = [
    { name: 'Arjun Verma', admNo: '1020', class: 'Class 1(A)', dob: '05/11/2016', dueDate: '04/15/2026', amount: '₹ 25,000.00', deposit: '₹ 10,000.00', discount: '₹ 0.00', fine: '₹ 500.00', balance: '₹ 15,500.00' },
    { name: 'Kavya Singh', admNo: '1025', class: 'Class 2(B)', dob: '09/02/2015', dueDate: '04/10/2026', amount: '₹ 28,000.00', deposit: '₹ 0.00', discount: '₹ 0.00', fine: '₹ 800.00', balance: '₹ 28,800.00' },
    { name: 'Neha Sharma', admNo: '1031', class: 'Class 1(A)', dob: '11/20/2016', dueDate: '04/20/2026', amount: '₹ 25,000.00', deposit: '₹ 20,000.00', discount: '₹ 1,000.00', fine: '₹ 200.00', balance: '₹ 4,200.00' },
    { name: 'Vikram Aditya', admNo: '1040', class: 'Class 3(A)', dob: '02/14/2014', dueDate: '03/15/2026', amount: '₹ 30,000.00', deposit: '₹ 15,000.00', discount: '₹ 0.00', fine: '₹ 1,500.00', balance: '₹ 16,500.00' },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      {/* Search Criteria Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Fees Group <span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
              <option>Tuition Fee</option>
              <option>Transport Fee</option>
              <option>Hostel Fee</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Class <span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
              <option>A</option>
              <option>B</option>
            </select>
          </div>
          <div>
            <button className="bg-[#5b6bc0] text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm w-full justify-center">
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Due Fees List Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm flex items-center gap-2">
            <Icons.List className="w-4 h-4" /> Student Due Fee List
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
                  <th className="px-4 py-4">Student Name</th>
                  <th className="px-4 py-4">Admission No</th>
                  <th className="px-4 py-4">Class</th>
                  <th className="px-4 py-4">Due Date</th>
                  <th className="px-4 py-4 text-right">Amount</th>
                  <th className="px-4 py-4 text-right">Deposit</th>
                  <th className="px-4 py-4 text-right">Discount</th>
                  <th className="px-4 py-4 text-right">Fine</th>
                  <th className="px-4 py-4 text-right">Balance</th>
                  <th className="px-4 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {dueStudents.map((student, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                    <td className="px-4 py-4 text-blue-600 font-medium">{student.name}</td>
                    <td className="px-4 py-4 text-gray-600">{student.admNo}</td>
                    <td className="px-4 py-4 text-gray-600">{student.class}</td>
                    <td className="px-4 py-4 text-red-500 font-medium">{student.dueDate}</td>
                    <td className="px-4 py-4 text-gray-600 text-right">{student.amount}</td>
                    <td className="px-4 py-4 text-gray-600 text-right">{student.deposit}</td>
                    <td className="px-4 py-4 text-green-600 font-medium text-right">{student.discount}</td>
                    <td className="px-4 py-4 text-red-500 font-medium text-right">{student.fine}</td>
                    <td className="px-4 py-4 text-gray-800 font-bold text-right">{student.balance}</td>
                    <td className="px-4 py-4 text-right">
                       <button className="bg-[#5b6bc0] hover:bg-[#3f51b5] text-white flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold transition shadow-sm ml-auto">
                         <Icons.IndianRupee className="w-3 h-3" /> Collect Fees
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 1 to {dueStudents.length} of {dueStudents.length} entries</span>
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

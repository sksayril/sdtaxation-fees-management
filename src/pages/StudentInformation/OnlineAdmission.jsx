import React from 'react';
import { Icons } from '../../components/Icons';

export function OnlineAdmission() {
  const students = [
    { refNo: 'OA20260402', name: 'Sneha Patel', class: 'Class 1(A)', father: 'Ramesh Patel', dob: '07/15/2016', gender: 'Female', category: '', mobile: '9876200001', formStatus: 'Not Submitted', paymentStatus: 'Unpaid', enrolled: true, createdAt: '04/01/2026', hasEdit: false },
    { refNo: 'OA20260401', name: 'Arjun Mehta', class: 'Class 1(A)', father: 'Sunil Mehta', dob: '04/10/2015', gender: 'Male', category: '', mobile: '9876100001', formStatus: 'Not Submitted', paymentStatus: 'Unpaid', enrolled: false, createdAt: '04/01/2026', hasEdit: true },
    { refNo: '251891', name: 'AVYAAN', class: 'Class 1(A)', father: 's.r', dob: '10/14/2020', gender: 'Male', category: '', mobile: '78646736787', formStatus: 'Not Submitted', paymentStatus: 'Unpaid', enrolled: true, createdAt: '02/02/2026', hasEdit: false },
    { refNo: '887111', name: 'Aman Joshi', class: 'Class 2(A)', father: 's.k', dob: '04/22/2023', gender: 'Male', category: '', mobile: '7y684868438', formStatus: 'Not Submitted', paymentStatus: 'Unpaid', enrolled: true, createdAt: '02/02/2026', hasEdit: false },
    { refNo: '810117', name: 'Nidhi Varma', class: 'Class 1(A)', father: 'Babu', dob: '09/02/2021', gender: 'Female', category: '', mobile: '76785683786', formStatus: 'Not Submitted', paymentStatus: 'Unpaid', enrolled: true, createdAt: '02/02/2026', hasEdit: false },
    { refNo: '810394', name: 'Olia Wood', class: 'Class 5(A)', father: 'SASAS', dob: '01/28/2020', gender: 'Male', category: '', mobile: '7890678678', formStatus: 'Submitted (01/16/2026)', paymentStatus: 'Paid', enrolled: false, createdAt: '01/16/2026', hasEdit: true },
    { refNo: '959004', name: 'Jain', class: 'Class 2(A)', father: 'DSD', dob: '01/06/2026', gender: 'Male', category: '', mobile: '', formStatus: 'Submitted (01/16/2026)', paymentStatus: 'Paid', enrolled: false, createdAt: '01/16/2026', hasEdit: true },
    { refNo: '464213', name: 'Matthew Bacon', class: 'Class 1(A)', father: 'Jason', dob: '12/31/2018', gender: 'Male', category: '', mobile: '08909789', formStatus: 'Not Submitted', paymentStatus: 'Unpaid', enrolled: true, createdAt: '01/02/2026', hasEdit: false },
    { refNo: '427557', name: 'David Clarkson', class: 'Class 2(A)', father: 'Albert', dob: '04/08/2017', gender: 'Male', category: 'General', mobile: '890890789', formStatus: 'Submitted (01/02/2026)', paymentStatus: 'Paid', enrolled: true, createdAt: '01/02/2026', hasEdit: false },
    { refNo: '213558', name: 'Vaibhav Rana', class: 'Class 3(A)', father: 'Arun rana', dob: '05/11/2009', gender: 'Male', category: '', mobile: '9807897764', formStatus: 'Not Submitted', paymentStatus: 'Unpaid', enrolled: true, createdAt: '12/01/2025', hasEdit: false },
    { refNo: '478699', name: 'James Bennett', class: 'Class 1(A)', father: 'David Wilson', dob: '05/05/2009', gender: 'Male', category: 'General', mobile: '8978786866', formStatus: 'Submitted (12/01/2025)', paymentStatus: 'Paid', enrolled: true, createdAt: '12/01/2025', hasEdit: false },
    { refNo: '546873', name: 'Prenelan Subrayen', class: 'Class 1(A)', father: 'David', dob: '08/12/2016', gender: 'Male', category: '', mobile: '9009000976', formStatus: 'Not Submitted', paymentStatus: 'Unpaid', enrolled: false, createdAt: '11/01/2025', hasEdit: true },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-lg">Student List</h3>
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
                  <th className="px-3 py-4">Reference No</th>
                  <th className="px-3 py-4">Student Name</th>
                  <th className="px-3 py-4">Class</th>
                  <th className="px-3 py-4">Father Name</th>
                  <th className="px-3 py-4">Date Of Birth</th>
                  <th className="px-3 py-4">Gender</th>
                  <th className="px-3 py-4">Category</th>
                  <th className="px-3 py-4">Student Mobile Number</th>
                  <th className="px-3 py-4">Form Status</th>
                  <th className="px-3 py-4">Payment Status</th>
                  <th className="px-3 py-4 text-center">Enrolled</th>
                  <th className="px-3 py-4">Created At</th>
                  <th className="px-3 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                    <td className="px-3 py-3 text-gray-600">{student.refNo}</td>
                    <td className="px-3 py-3 text-gray-800 break-words whitespace-normal w-32">{student.name}</td>
                    <td className="px-3 py-3 text-gray-600 break-words whitespace-normal w-24">{student.class}</td>
                    <td className="px-3 py-3 text-gray-600 break-words whitespace-normal w-24">{student.father}</td>
                    <td className="px-3 py-3 text-gray-600">{student.dob}</td>
                    <td className="px-3 py-3 text-gray-600">{student.gender}</td>
                    <td className="px-3 py-3 text-gray-600">{student.category}</td>
                    <td className="px-3 py-3 text-gray-600">{student.mobile}</td>
                    <td className="px-3 py-3">
                      {student.formStatus === 'Not Submitted' ? (
                         <span className="bg-[#f44336] text-white text-[10px] font-bold px-2 py-1 rounded">{student.formStatus}</span>
                      ) : (
                         <span className="bg-[#8bc34a] text-white text-[10px] font-bold px-2 py-1 rounded">{student.formStatus}</span>
                      )}
                    </td>
                    <td className="px-3 py-3">
                      {student.paymentStatus === 'Unpaid' ? (
                         <span className="bg-[#f44336] text-white text-[10px] font-bold px-2 py-1 rounded">{student.paymentStatus}</span>
                      ) : (
                         <span className="bg-[#8bc34a] text-white text-[10px] font-bold px-2 py-1 rounded">{student.paymentStatus}</span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {student.enrolled ? (
                         <Icons.Check className="w-4 h-4 text-gray-700 mx-auto stroke-[3]" />
                      ) : (
                         <Icons.Minus className="w-4 h-4 text-gray-700 mx-auto stroke-[3]" />
                      )}
                    </td>
                    <td className="px-3 py-3 text-gray-600">{student.createdAt}</td>
                    <td className="px-3 py-3 text-right align-top">
                       <div className="flex flex-col items-end gap-1">
                          <div className="flex gap-1 justify-end">
                            <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Print">
                               <Icons.Printer className="w-3 h-3" />
                            </button>
                            {student.hasEdit && (
                              <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Edit">
                                 <Icons.Edit2 className="w-3 h-3" />
                              </button>
                            )}
                            {!student.hasEdit && (
                              <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Delete">
                                 <Icons.X className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                          {student.hasEdit && (
                            <div className="flex justify-end">
                              <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Delete">
                                 <Icons.X className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 1 to 12 of 12 entries</span>
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

import React, { useState } from 'react';
import { Icons } from '../../components/Icons';
import { useTheme } from '../../context/ThemeContext';

export function StudentDetails() {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const { themeData } = useTheme();

  const students = [
    { admNo: '1800011', name: 'Edward Thomas', rollNo: '001', class: 'Class 1', section: 'A', father: 'Olivier Thomas', dob: '04/08/2020', gender: 'Male', category: 'OBC', mobile: '98262573272', address: '123 Main St, New York', admissionDate: '01/04/2024' },
    { admNo: '002', name: 'Sneha Patel', rollNo: '002', class: 'Class 1', section: 'A', father: 'Ramesh Patel', dob: '07/15/2016', gender: 'Female', category: 'General', mobile: '9876200001', address: '456 Oak St, Mumbai', admissionDate: '05/04/2024' },
    { admNo: '003', name: 'Hariom Yadav', rollNo: '003', class: 'Class 1', section: 'A', father: 'Rajesh Yadav', dob: '04/08/2020', gender: 'Male', category: 'OBC', mobile: '9123456789', address: '789 Pine St, Delhi', admissionDate: '10/04/2024' },
    { admNo: 'A003', name: 'Hariom Yadav', rollNo: '004', class: 'Class 1', section: 'A', father: 'Suresh Yadav', dob: '04/08/2020', gender: 'Male', category: 'OBC', mobile: '9988776655', address: '321 Maple St, Noida', admissionDate: '12/04/2024' },
    { admNo: 'A004', name: 'Nisha', rollNo: '005', class: 'Class 1', section: 'A', father: 'Kamal Kant', dob: '04/15/2026', gender: 'Female', category: 'General', mobile: '9876543210', address: '654 Elm St, Jaipur', admissionDate: '15/04/2024' },
    { admNo: 'A41003', name: 'niya', rollNo: '006', class: 'Class 1', section: 'A', father: 'Rohan Singh', dob: '04/22/2026', gender: 'Male', category: 'General', mobile: '9000011111', address: '987 Cedar St, Pune', admissionDate: '20/04/2024' },
  ];

  const studentFees = {
    total: 50000,
    paid: 35000,
    pending: 15000,
    installments: [
      { type: 'Tuition Fee', amount: 20000, paid: 20000, status: 'Paid', date: '05/04/2024' },
      { type: 'Admission Fee', amount: 10000, paid: 10000, status: 'Paid', date: '01/04/2024' },
      { type: 'Exam Fee', amount: 5000, paid: 5000, status: 'Paid', date: '10/10/2024' },
      { type: 'Transport Fee', amount: 15000, paid: 0, status: 'Unpaid', date: '-' },
    ]
  };

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setShowProfile(true);
  };

  if (showProfile && selectedStudent) {
    return (
      <div className="flex flex-col gap-6 animate-fadeIn">
        {/* Profile Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowProfile(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <Icons.ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full ${themeData.primary} flex items-center justify-center text-white font-bold text-lg`}>
                {selectedStudent.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{selectedStudent.name}</h2>
                <p className="text-xs text-gray-500">Admission No: <span className="font-semibold text-gray-700">{selectedStudent.admNo}</span></p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className={`${themeData.primary} text-white px-4 py-1.5 rounded text-xs font-semibold ${themeData.hover} transition shadow-sm flex items-center gap-2`}>
              <Icons.Edit2 className="w-3 h-3" /> Edit Profile
            </button>
            <button className="bg-white border border-gray-200 text-gray-600 px-4 py-1.5 rounded text-xs font-semibold hover:bg-gray-50 transition shadow-sm flex items-center gap-2">
              <Icons.Printer className="w-3 h-3" /> Print Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Personal Info */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-700">Personal Details</h3>
                <Icons.User className="w-4 h-4 text-gray-400" />
              </div>
              <div className="p-4 space-y-4">
                <InfoRow label="Father's Name" value={selectedStudent.father} />
                <InfoRow label="Date of Birth" value={selectedStudent.dob} />
                <InfoRow label="Gender" value={selectedStudent.gender} />
                <InfoRow label="Mobile" value={selectedStudent.mobile} icon={<Icons.Phone className="w-3 h-3" />} />
                <InfoRow label="Category" value={selectedStudent.category} />
                <InfoRow label="Admission Date" value={selectedStudent.admissionDate} />
                <InfoRow label="Address" value={selectedStudent.address} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-bold text-gray-700 mb-4">Academic Info</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Class</p>
                  <p className="text-sm font-bold text-gray-700">{selectedStudent.class}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Section</p>
                  <p className="text-sm font-bold text-gray-700">{selectedStudent.section}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Roll No</p>
                  <p className="text-sm font-bold text-gray-700">{selectedStudent.rollNo || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fees & Payments */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Fees Report Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-xs font-bold text-gray-400 uppercase">Total Fees</p>
                  <p className="text-2xl font-bold text-gray-800">₹{studentFees.total.toLocaleString()}</p>
                </div>
                <Icons.Wallet className="absolute -right-2 -bottom-2 w-16 h-16 text-gray-50" />
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 relative overflow-hidden border-b-4 border-green-500">
                <div className="relative z-10">
                  <p className="text-xs font-bold text-gray-400 uppercase">Paid Fees</p>
                  <p className="text-2xl font-bold text-green-600">₹{studentFees.paid.toLocaleString()}</p>
                </div>
                <Icons.Check className="absolute -right-2 -bottom-2 w-16 h-16 text-green-50" />
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 relative overflow-hidden border-b-4 border-red-500">
                <div className="relative z-10">
                  <p className="text-xs font-bold text-gray-400 uppercase">Pending Balance</p>
                  <p className="text-2xl font-bold text-red-600">₹{studentFees.pending.toLocaleString()}</p>
                </div>
                <Icons.IndianRupee className="absolute -right-2 -bottom-2 w-16 h-16 text-red-50" />
              </div>
            </div>

            {/* Fees Breakdown */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-700">Fees Payment History</h3>
                <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                  <Icons.BarChart className="w-3 h-3" />
                  {Math.round((studentFees.paid / studentFees.total) * 100)}% Collected
                </div>
              </div>
              <div className="p-0">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 font-bold uppercase text-[10px] tracking-wider border-b border-gray-100">
                      <th className="px-6 py-4">Fee Type</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Paid</th>
                      <th className="px-6 py-4">Balance</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {studentFees.installments.map((fee, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-semibold text-gray-700">{fee.type}</td>
                        <td className="px-6 py-4 text-gray-600">₹{fee.amount.toLocaleString()}</td>
                        <td className="px-6 py-4 text-green-600 font-medium">₹{fee.paid.toLocaleString()}</td>
                        <td className="px-6 py-4 text-red-600 font-medium">₹{(fee.amount - fee.paid).toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {fee.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400 text-xs">{fee.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 flex justify-between items-center">
                <p className="text-xs text-gray-500">Last updated: Today at 02:30 PM</p>
                <button className={`text-xs font-bold ${themeData.text} hover:underline`}>Download Detailed Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Search Criteria Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* Left search block */}
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Class <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600">
                <option>Class 1</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600">
                <option>A</option>
              </select>
            </div>
            <button className={`${themeData.primary} text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold ${themeData.hover} transition shadow-sm mb-[1px]`}>
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>

          {/* Right search block */}
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Search By Keyword</label>
              <input type="text" placeholder="Search By Student Name, Roll Number, Enroll Number, National Id, Local Id Etc." className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white placeholder:text-xs text-gray-600" />
            </div>
            <button className={`${themeData.primary} text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold ${themeData.hover} transition shadow-sm mb-[1px]`}>
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Tabs & Table Area */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white px-2">
          <button 
            onClick={() => setActiveTab('list')}
            className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'list' ? `${themeData.border} ${themeData.text}` : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <Icons.List className="w-4 h-4" /> List View
          </button>
          <button 
            onClick={() => setActiveTab('details')}
            className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'details' ? `${themeData.border} ${themeData.text}` : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <Icons.Grid className="w-4 h-4" /> Details View
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 'list' && (
            <>
              {/* Table Controls */}
              <div className="flex justify-between items-center mb-4">
                <div className="relative">
                  <input type="text" placeholder="Search" className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white w-48 text-gray-600" />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                   <div className="flex items-center gap-1">
                     <select className="border border-gray-300 rounded p-1 text-gray-600">
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
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                      <th className="px-4 py-3">Admission No</th>
                      <th className="px-4 py-3">Student Name</th>
                      <th className="px-4 py-3">Roll No.</th>
                      <th className="px-4 py-3">Class</th>
                      <th className="px-4 py-3">Father Name</th>
                      <th className="px-4 py-3">Date Of Birth</th>
                      <th className="px-4 py-3">Gender</th>
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Mobile Number</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white transition">
                        <td className="px-4 py-3 text-gray-600">{student.admNo}</td>
                        <td 
                          className="px-4 py-3 text-blue-600 font-semibold cursor-pointer hover:underline"
                          onClick={() => handleViewStudent(student)}
                        >
                          {student.name}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{student.rollNo}</td>
                        <td className="px-4 py-3 text-gray-600">{student.class}({student.section})</td>
                        <td className="px-4 py-3 text-gray-600">{student.father}</td>
                        <td className="px-4 py-3 text-gray-600">{student.dob}</td>
                        <td className="px-4 py-3 text-gray-600">{student.gender}</td>
                        <td className="px-4 py-3 text-gray-600">{student.category}</td>
                        <td className="px-4 py-3 text-gray-600">{student.mobile}</td>
                        <td className="px-4 py-3 text-right">
                           <div className="flex justify-end gap-1">
                              <button 
                                onClick={() => handleViewStudent(student)}
                                className={`${themeData.primary} p-1.5 rounded ${themeData.hover} text-white`} 
                                title="View Details"
                              >
                                 <Icons.List className="w-3.5 h-3.5" />
                              </button>
                              <button className={`${themeData.primary} p-1.5 rounded ${themeData.hover} text-white`} title="Edit">
                                 <Icons.Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button className={`${themeData.primary} p-1.5 rounded ${themeData.hover} text-white`} title="Fees">
                                 <Icons.IndianRupee className="w-3.5 h-3.5 stroke-[3]" />
                              </button>
                              <button className={`${themeData.primary} p-1.5 rounded ${themeData.hover} text-white`} title="Print">
                                 <Icons.Printer className="w-3.5 h-3.5" />
                              </button>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                <span>Showing 1 to {students.length} of {students.length} entries</span>
                <div className="flex gap-1">
                  <button className="px-2 py-1 border border-gray-200 rounded text-gray-400">&lt;</button>
                  <button className={`px-2 py-1 border ${themeData.border} ${themeData.text} font-bold rounded`}>1</button>
                  <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&gt;</button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'details' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
               {students.map((student, i) => (
                 <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer group" onClick={() => handleViewStudent(student)}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-full ${themeData.primary} flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition`}>
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{student.name}</h4>
                        <p className="text-xs text-gray-500">Admission No: {student.admNo}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs text-gray-600 border-t border-gray-50 pt-3">
                       <div className="flex justify-between"><span>Class:</span> <span className="font-bold text-gray-700">{student.class}({student.section})</span></div>
                       <div className="flex justify-between"><span>Roll No:</span> <span className="font-bold text-gray-700">{student.rollNo}</span></div>
                       <div className="flex justify-between"><span>Mobile:</span> <span className="font-bold text-gray-700">{student.mobile}</span></div>
                    </div>
                    <button className={`w-full mt-4 py-2 border ${themeData.border} ${themeData.text} rounded-lg text-xs font-bold ${themeData.hover} hover:text-white transition`}>
                      View Detailed Profile
                    </button>
                 </div>
               ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value, icon }) {
  return (
    <div className="flex justify-between items-start text-xs">
      <span className="text-gray-400 font-semibold uppercase text-[10px] tracking-wider">{label}</span>
      <span className="text-gray-700 font-bold text-right flex items-center gap-1">
        {icon}
        {value || 'N/A'}
      </span>
    </div>
  );
}

import React from 'react';
import { Icons } from '../../components/Icons';

export function StudentAdmission() {
  const feesDetailsList = [
    { name: 'Class 1 General', amount: '6,09,700.00' },
    { name: 'Class 1 Lump Sum', amount: '28,000.00' },
    { name: 'Class 1-I Installment', amount: '21,000.00' },
    { name: 'Class 2 General', amount: '4,58,500.00' },
    { name: 'Class 2 Lump Sum', amount: '24,500.00' },
    { name: 'Balance Master', amount: '0.00' },
    { name: 'Class 3 General', amount: '5,46,000.00' },
    { name: 'Class 4 General', amount: '6,18,800.00' },
    { name: 'Exam', amount: '17,500.00' },
    { name: 'Fees', amount: '0.00' },
    { name: 'Class 5 General', amount: '7,02,800.00' },
    { name: 'Edword Fees Group 2', amount: '35,000.00' },
    { name: 'RKS Fees Test One', amount: '42,000.00' },
  ];

  const discountDetailsList = [
    'RKS Discount 1 -rksdisc01',
    'Sibling Discount -sibling-disc',
    'Handicapped Discount -handicap-disc',
    'Class Topper Discount -cls-top-disc'
  ];

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-lg">Student Admission</h3>
          <button className="bg-[#5b6bc0] text-white flex items-center gap-2 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
            <Icons.Download className="w-4 h-4" /> Import Student
          </button>
        </div>

        {/* Section 1: Top Form */}
        <div className="p-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Admission No <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-blue-400 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Roll Number</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Class <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Section <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Last Name</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Gender <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Date Of Birth <span className="text-red-500">*</span></label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Religion</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Caste</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Admission Date</label>
              <input type="date" defaultValue="2026-04-28" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Student Photo (100px X 100px)</label>
              <div className="border border-gray-300 border-dashed rounded px-4 py-1.5 bg-gray-50 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition h-[34px]">
                <Icons.UploadCloud className="w-4 h-4 text-gray-800" />
                <span className="text-xs font-semibold text-gray-800">Drag and drop a file here or click</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Blood Group</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">House</label>
              <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Height</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Weight</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Measurement Date</label>
              <input type="date" defaultValue="2026-04-28" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
            </div>
            <div className="pb-2">
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1">
                 <span className="text-lg">+</span> Add Sibling
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Medical History</label>
            <textarea rows="2" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
          </div>
        </div>

        {/* Section 2: Transport Details */}
        <div className="bg-gray-100 px-4 py-2 border-t border-b border-gray-200">
          <h3 className="text-gray-600 font-semibold text-sm">Transport Details</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
             <label className="block text-xs font-semibold text-gray-700 mb-1">Route List</label>
             <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
             </select>
          </div>
          <div>
             <label className="block text-xs font-semibold text-gray-700 mb-1">Pickup Point</label>
             <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
             </select>
          </div>
          <div>
             <label className="block text-xs font-semibold text-gray-700 mb-1">Fees Month</label>
             <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select Month</option>
             </select>
          </div>
        </div>

        {/* Section 3: Hostel Details */}
        <div className="bg-gray-100 px-4 py-2 border-t border-b border-gray-200">
          <h3 className="text-gray-600 font-semibold text-sm">Hostel Details</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
             <label className="block text-xs font-semibold text-gray-700 mb-1">Hostel</label>
             <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
             </select>
          </div>
          <div>
             <label className="block text-xs font-semibold text-gray-700 mb-1">Room No.</label>
             <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Select</option>
             </select>
          </div>
        </div>

        {/* Section 4: Fees Details */}
        <div className="bg-gray-100 px-4 py-2 border-t border-b border-gray-200">
          <h3 className="text-gray-600 font-semibold text-sm">Fees Details</h3>
        </div>
        <div className="p-4 flex flex-col gap-1">
           {feesDetailsList.map((fee, idx) => (
             <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
               <div className="flex items-center gap-2">
                 <span className="text-gray-400 font-bold">+</span>
                 <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                 <span className="text-sm text-gray-600">{fee.name}</span>
               </div>
               <span className="text-sm font-semibold text-gray-700">{fee.amount}</span>
             </div>
           ))}
        </div>

        {/* Section 5: Fees Discount Details */}
        <div className="bg-gray-100 px-4 py-2 border-t border-b border-gray-200">
          <h3 className="text-gray-600 font-semibold text-sm">Fees Discount Details</h3>
        </div>
        <div className="p-4 flex flex-col gap-1">
           {discountDetailsList.map((disc, idx) => (
             <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
               <div className="flex items-center gap-2">
                 <span className="text-gray-400 font-bold">+</span>
                 <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                 <span className="text-sm text-gray-600">{disc}</span>
               </div>
             </div>
           ))}
        </div>

        {/* Section 6: Parent Guardian Detail */}
        <div className="bg-gray-100 px-4 py-2 border-t border-b border-gray-200">
          <h3 className="text-gray-600 font-semibold text-sm">Parent Guardian Detail</h3>
        </div>
        <div className="p-4 flex flex-col gap-4">
           {/* Father */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Father Name</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Father Phone</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Father Occupation</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Father Photo (100px X 100px)</label>
                <div className="border border-gray-300 border-dashed rounded px-4 py-1.5 bg-gray-50 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition h-[34px]">
                  <Icons.UploadCloud className="w-4 h-4 text-gray-800" />
                  <span className="text-xs font-semibold text-gray-800">Drag and drop a file here or click</span>
                </div>
              </div>
           </div>

           {/* Mother */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Mother Name</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Mother Phone</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Mother Occupation</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Mother Photo (100px X 100px)</label>
                <div className="border border-gray-300 border-dashed rounded px-4 py-1.5 bg-gray-50 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition h-[34px]">
                  <Icons.UploadCloud className="w-4 h-4 text-gray-800" />
                  <span className="text-xs font-semibold text-gray-800">Drag and drop a file here or click</span>
                </div>
              </div>
           </div>

           {/* If Guardian Is */}
           <div className="flex items-center gap-4 text-sm mt-2">
              <span className="font-semibold text-gray-700 text-xs">If Guardian Is <span className="text-red-500">*</span></span>
              <label className="flex items-center gap-1 cursor-pointer">
                 <input type="radio" name="guardian" className="text-blue-600" /> Father
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                 <input type="radio" name="guardian" className="text-blue-600" /> Mother
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                 <input type="radio" name="guardian" className="text-blue-600" /> Other
              </label>
           </div>

           {/* Guardian Details */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Relation</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Email</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Photo (100px X 100px)</label>
                <div className="border border-gray-300 border-dashed rounded px-4 py-1.5 bg-gray-50 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition h-[34px]">
                  <Icons.UploadCloud className="w-4 h-4 text-gray-800" />
                  <span className="text-xs font-semibold text-gray-800">Drag and drop a file here or click</span>
                </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Phone <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Occupation</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
              </div>
              <div className="lg:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Address</label>
                <textarea rows="1" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white"></textarea>
              </div>
           </div>
        </div>

        {/* Section 7: Add More Details */}
        <div className="bg-gray-100 px-4 py-3 border-t border-b border-gray-200 flex justify-between items-center cursor-pointer hover:bg-gray-200 transition">
          <h3 className="text-gray-600 font-semibold text-sm">Add More Details</h3>
          <span className="text-gray-500 font-bold">+</span>
        </div>

        {/* Footer actions */}
        <div className="p-4 flex justify-end">
          <button className="bg-[#5b6bc0] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

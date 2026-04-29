import React from 'react';
import { Icons } from '../../components/Icons';

export function StudentCategories() {
  const categories = [
    { name: 'General', id: '1' },
    { name: 'OBC', id: '2' },
    { name: 'Special', id: '3' },
    { name: 'Physically Challenged', id: '4' },
    { name: 'St', id: '5' },
    { name: 'Sc', id: '6' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto pb-10">
      
      {/* Left Column - Create Category Form */}
      <div className="lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Create Category</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Category <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-blue-400 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600 bg-white" />
            </div>
          </div>
          <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
            <button className="bg-[#5b6bc0] text-white px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Category List */}
      <div className="lg:w-2/3">
        <div className="bg-white border border-gray-200 rounded shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-gray-700 font-semibold text-lg">Category List</h3>
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
                    <th className="px-4 py-4">Category</th>
                    <th className="px-4 py-4 text-center">Category ID</th>
                    <th className="px-4 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 bg-white">
                      <td className="px-4 py-3 text-gray-600">{cat.name}</td>
                      <td className="px-4 py-3 text-gray-600 text-center">{cat.id}</td>
                      <td className="px-4 py-3 text-right">
                         <div className="flex gap-1 justify-end">
                           <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Edit">
                              <Icons.Edit2 className="w-3 h-3" />
                           </button>
                           <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Delete">
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
              <span>Showing 1 to 6 of 6 entries</span>
              <div className="flex gap-1">
                <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&lt;</button>
                <button className="px-2 py-1 border border-blue-200 bg-blue-50 text-blue-600 font-bold rounded">1</button>
                <button className="px-2 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">&gt;</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

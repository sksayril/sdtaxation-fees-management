import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

const Vehicles = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const vehicleList = [
    {
      id: 1,
      number: 'VH4584',
      model: 'Ford CAB',
      year: '2015',
      regNumber: 'FFG-76575676787',
      chasis: '523422',
      capacity: '50',
      driver: 'Jasper',
      licence: '258714545',
      contact: '8521479630'
    },
    {
      id: 2,
      number: 'VH5645',
      model: 'Volvo Bus',
      year: '2018',
      regNumber: 'BGBFDF787987956',
      chasis: '45433',
      capacity: '50',
      driver: 'Maximus',
      licence: '545645666776',
      contact: '885456456'
    },
    {
      id: 3,
      number: 'VH1001',
      model: 'Volvo Bus',
      year: '2017',
      regNumber: 'FVFF-08797865',
      chasis: '45453',
      capacity: '50',
      driver: 'Michel',
      licence: 'R534534',
      contact: '8667777869'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 font-serif">Vehicle List</h2>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded flex items-center gap-2 hover:bg-indigo-700 transition shadow-sm font-bold text-sm"
          >
            <Icons.Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        {/* Controls */}
        <div className="p-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative max-w-xs">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-3 pr-4 py-1.5 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none">
              <option>50</option>
              <option>100</option>
            </select>
            <div className="flex items-center gap-1 border-l pl-3 ml-1 border-gray-200">
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="Copy"><Icons.Copy className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="Excel"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="CSV"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="PDF"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="Print"><Icons.Printer className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition" title="Columns"><Icons.List className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 font-bold border-y border-gray-200">
              <tr>
                <th className="px-4 py-3 border-r border-gray-200">Vehicle Number <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Vehicle Model <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Year Made <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Registration Number <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Chasis Number <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200 text-center">Max Seating Capacity</th>
                <th className="px-4 py-3 border-r border-gray-200">Driver Name <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Driver Licence <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Driver Contact <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vehicleList.map((v) => (
                <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-700">{v.number}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600">{v.model}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600 text-center">{v.year}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600">{v.regNumber}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600">{v.chasis}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-center text-gray-600">{v.capacity}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600">{v.driver}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600">{v.licence}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600">{v.contact}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="View">
                        <Icons.List className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="Edit">
                        <Icons.Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="Delete">
                        <Icons.X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 flex justify-between items-center text-xs text-gray-500 border-t border-gray-200">
          <span>Showing 1 to 3 of 3 entries</span>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled><Icons.ChevronDown className="w-4 h-4 rotate-90" /></button>
            <button className="px-2 py-1 bg-indigo-50 text-indigo-700 font-bold rounded border border-indigo-200 shadow-sm">1</button>
            <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled><Icons.ChevronDown className="w-4 h-4 -rotate-90" /></button>
          </div>
        </div>
      </div>

      {/* Add Vehicle Modal (Image 2) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="bg-indigo-600 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Add Vehicle</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-white/80 hover:text-white transition"
              >
                <Icons.X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[80vh]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Vehicle Number <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Vehicle Model</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Year Made</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Registration Number</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Chasis Number</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Max Seating Capacity</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Driver Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Driver Licence</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Driver Contact</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition" />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Vehicle Photo</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                  <div className="flex items-center gap-2 text-gray-500 font-medium">
                    <Icons.UploadCloud className="w-5 h-5 text-gray-400" />
                    <span>Drag and drop a file here or click</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Note</label>
                <textarea rows="3" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none transition resize-none"></textarea>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 flex justify-end">
              <button 
                className="bg-indigo-600 text-white px-8 py-2 rounded font-bold hover:bg-indigo-700 transition shadow-lg"
                onClick={() => setShowAddModal(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicles;

import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

const PickupPoint = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const pickupPoints = [
    { id: 1, name: 'Brooklyn North', latitude: '23.21953720694318', longitude: '79.92068396109676' },
    { id: 2, name: 'Brooklyn South', latitude: '23.204781722973813', longitude: '79.89751486729702' },
    { id: 3, name: 'Brooklyn West', latitude: '23.19324172886614', longitude: '79.91536320113687' },
    { id: 4, name: 'Brooklyn East', latitude: '23.193952567195506', longitude: '79.9243812546212' },
    { id: 5, name: 'Brooklyn Central', latitude: '23.21230494959826', longitude: '79.92914139397962' },
    { id: 6, name: 'Manhattan', latitude: '23.2066336875236', longitude: '80.00451042401824' },
    { id: 7, name: 'Railway Station', latitude: '23.16662749489289', longitude: '79.95054096414184' },
    { id: 8, name: 'High Court', latitude: '23.168615566293845', longitude: '79.94726999887004' },
    { id: 9, name: 'civil Line', latitude: '23.166120045559563', longitude: '79.95531910260692' },
    { id: 10, name: 'Vijay Nagar', latitude: '23.190170327286868', longitude: '79.89643280559972' },
    { id: 11, name: 'Ranital Chowk', latitude: '23.170504563243085', longitude: '79.92385377983044' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 font-serif">Pickup Point List</h2>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded flex items-center gap-2 hover:bg-indigo-700 transition shadow-sm font-bold text-sm"
          >
            <Icons.Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        {/* Filters and Actions */}
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

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none">
                <option>50</option>
                <option>100</option>
                <option>All</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded" title="Copy"><Icons.Copy className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded" title="Excel"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded" title="CSV"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded" title="PDF"><Icons.FileText className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded" title="Print"><Icons.Printer className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50 text-gray-700 font-bold border-y border-gray-200">
              <tr>
                <th className="px-6 py-3 border-r border-gray-200">Name</th>
                <th className="px-6 py-3 border-r border-gray-200 text-center">Latitude <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-30" /></th>
                <th className="px-6 py-3 border-r border-gray-200 text-center">Longitude <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-30" /></th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pickupPoints.map((point) => (
                <tr key={point.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 border-r border-gray-100 font-medium text-gray-700">{point.name}</td>
                  <td className="px-6 py-3 border-r border-gray-100 text-center text-gray-600">{point.latitude}</td>
                  <td className="px-6 py-3 border-r border-gray-100 text-center text-gray-600">{point.longitude}</td>
                  <td className="px-6 py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="View Map">
                        <Icons.MapPin className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="Edit">
                        <Icons.Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm" title="Delete">
                        <Icons.X className="w-4 h-4" />
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
          <span>Showing 1 to 11 of 11 entries</span>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled><Icons.ChevronDown className="w-4 h-4 rotate-90" /></button>
            <button className="px-2 py-1 bg-indigo-50 text-indigo-700 font-bold rounded border border-indigo-200 shadow-sm">1</button>
            <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled><Icons.ChevronDown className="w-4 h-4 -rotate-90" /></button>
          </div>
        </div>
      </div>

      {/* Add Modal (Image 2) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-indigo-600 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Add</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-white/80 hover:text-white transition"
              >
                <Icons.X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Pickup Point <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                />
              </div>

              <div>
                <button className="text-indigo-600 font-medium hover:underline text-sm mb-4 inline-block">
                  Click here to get latitude and longitude
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Latitude <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Longitude <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 flex justify-end">
              <button 
                className="bg-indigo-600 text-white px-8 py-2 rounded font-bold hover:bg-indigo-700 transition shadow-lg active:scale-95"
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

export default PickupPoint;

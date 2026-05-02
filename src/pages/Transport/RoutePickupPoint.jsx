import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

const RoutePickupPoint = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dynamicRows, setDynamicRows] = useState([{ id: Date.now() }]);

  const routePickupPoints = [
    {
      id: 1,
      route: 'Brooklyn Central',
      points: [
        { name: '1 Brooklyn North', fees: '700.00', distance: '12.0', time: '7:00 AM' }
      ]
    },
    {
      id: 2,
      route: 'Brooklyn East',
      points: [
        { name: '1 Brooklyn North', fees: '600.00', distance: '12.0', time: '7:10 AM' },
        { name: '2 Brooklyn South', fees: '600.00', distance: '13.0', time: '7:20 AM' },
        { name: '3 Railway Station', fees: '500.00', distance: '10.0', time: '7:25 AM' },
        { name: '4 Ranital Chowk', fees: '700.00', distance: '14.0', time: '7:10 PM' },
        { name: '5 Manhattan', fees: '600.00', distance: '13.0', time: '7:25 AM' }
      ]
    },
    {
      id: 3,
      route: 'High Court',
      points: [
        { name: '1 High Court', fees: '700.00', distance: '14.0', time: '7:15 AM' }
      ]
    },
    {
      id: 4,
      route: 'Vijay Nagar',
      points: [
        { name: '1 Vijay Nagar', fees: '600.00', distance: '12.0', time: '7:15 AM' }
      ]
    }
  ];

  const addRow = () => setDynamicRows([...dynamicRows, { id: Date.now() }]);
  const removeRow = (id) => setDynamicRows(dynamicRows.filter(row => row.id !== id));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 font-serif">Route Pickup Point</h2>
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
                <th className="px-4 py-3 border-r border-gray-200">Route <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200">Pickup Point <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200 text-center">Monthly Fees ($) <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200 text-center">Distance (km) <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 border-r border-gray-200 text-center">Pickup Time <Icons.ChevronDown className="w-3 h-3 inline ml-1 opacity-20" /></th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {routePickupPoints.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors align-top">
                  <td className="px-4 py-3 border-r border-gray-100 font-medium text-gray-700">{item.route}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-600">
                    <div className="space-y-1">
                      {item.points.map((p, idx) => <div key={idx}>{p.name}</div>)}
                    </div>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100 text-center text-gray-600">
                    <div className="space-y-1">
                      {item.points.map((p, idx) => <div key={idx}>{p.fees}</div>)}
                    </div>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100 text-center text-gray-600">
                    <div className="space-y-1">
                      {item.points.map((p, idx) => <div key={idx}>{p.distance}</div>)}
                    </div>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100 text-center text-gray-600">
                    <div className="space-y-1">
                      {item.points.map((p, idx) => <div key={idx}>{p.time}</div>)}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm">
                        <Icons.List className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm">
                        <Icons.Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm">
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
          <span>Showing 1 to 4 of 4 entries</span>
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
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="bg-indigo-600 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Add</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-white/80 hover:text-white transition"
              >
                <Icons.X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Route List <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none appearance-none bg-white transition">
                    <option>Brooklyn Central</option>
                    <option>Brooklyn East</option>
                  </select>
                  <Icons.ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={addRow}
                  className="bg-indigo-500 text-white px-4 py-1.5 rounded-md text-sm font-bold hover:bg-indigo-600 transition shadow-sm flex items-center gap-2"
                >
                  <Icons.Plus className="w-4 h-4" />
                  Add More
                </button>
              </div>

              <div className="space-y-4">
                {dynamicRows.map((row, index) => (
                  <div key={row.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="md:col-span-1">
                      <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Pickup Point <span className="text-red-500">*</span></label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none bg-white text-sm">
                        <option>Select</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Distance</label>
                      <div className="relative flex items-center">
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm pr-10" />
                        <span className="absolute right-3 text-xs text-gray-400 font-bold uppercase">km</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Pickup Time <span className="text-red-500">*</span></label>
                      <div className="relative flex items-center">
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm pr-10" placeholder="00:00" />
                        <Icons.Calculator className="w-4 h-4 absolute right-3 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Monthly Fees ($) <span className="text-red-500">*</span></label>
                      <input type="text" defaultValue="0.00" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm text-right" />
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => removeRow(row.id)}
                        className="p-2 bg-indigo-500 text-white rounded hover:bg-red-500 transition shadow-sm group"
                      >
                        <Icons.X className="w-4 h-4 group-hover:scale-110" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 flex justify-end">
              <button 
                className="bg-indigo-600 text-white px-10 py-2.5 rounded font-bold hover:bg-indigo-700 transition shadow-lg active:scale-95"
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

export default RoutePickupPoint;

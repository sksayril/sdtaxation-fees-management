import React from 'react';
import { Icons } from '../../components/Icons';

export function FeesReminder() {
  const reminders = [
    { type: 'Before', days: 15, active: true },
    { type: 'Before', days: 5, active: true },
    { type: 'Before', days: 1, active: false },
    { type: 'After', days: 5, active: true },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Fees Reminder Configuration</h3>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                  <th className="px-4 py-3">Action Type</th>
                  <th className="px-4 py-3">Days</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {reminders.map((rem, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-4 text-blue-600 font-medium">{rem.type} Due Date</td>
                    <td className="px-4 py-4 text-gray-600">{rem.days} Days</td>
                    <td className="px-4 py-4 text-center">
                       {rem.active ? (
                         <span className="bg-[#8bc34a] text-white text-[10px] font-bold px-2 py-1 rounded">Active</span>
                       ) : (
                         <span className="bg-[#f44336] text-white text-[10px] font-bold px-2 py-1 rounded">Inactive</span>
                       )}
                    </td>
                    <td className="px-4 py-4 text-right">
                       <div className="flex justify-end">
                         <label className="relative inline-flex items-center cursor-pointer">
                           <input type="checkbox" className="sr-only peer" defaultChecked={rem.active} />
                           <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#5b6bc0]"></div>
                         </label>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
             <button className="bg-[#5b6bc0] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
               Save Configurations
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

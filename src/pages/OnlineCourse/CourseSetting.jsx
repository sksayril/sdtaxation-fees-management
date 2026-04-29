import React from 'react';

export function CourseSetting() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-lg">General Settings</h3>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 text-uppercase tracking-wider">Online Course Payment Gateway</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 bg-white">
                <option>Razorpay</option>
                <option>Stripe</option>
                <option>PayPal</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 text-uppercase tracking-wider">Enable Guest Login</label>
              <div className="flex items-center gap-4 mt-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5b6bc0]"></div>
                </label>
                <span className="text-sm text-gray-600 font-medium">Yes</span>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-100 flex justify-end">
             <button className="bg-[#5b6bc0] text-white px-8 py-2 rounded text-sm font-bold hover:bg-[#3f51b5] transition shadow-md">
               Save Settings
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

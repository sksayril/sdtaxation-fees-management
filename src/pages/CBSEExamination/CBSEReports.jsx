import React from 'react';
import { Icons } from '../../components/Icons';

export function CBSEReports() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded shadow-sm p-6">
          <h3 className="text-gray-700 font-bold text-lg mb-6 flex items-center gap-2">
            <Icons.BarChart className="w-5 h-5 text-blue-600" /> Exam Performance Summary
          </h3>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Custom SVG Pie Chart */}
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                {/* Passed - 75% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4caf50" strokeWidth="20" strokeDasharray="188.5 251.2" />
                {/* Failed - 15% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f44336" strokeWidth="20" strokeDasharray="37.7 251.2" strokeDashoffset="-188.5" />
                {/* Absent - 10% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ffeb3b" strokeWidth="20" strokeDasharray="25.1 251.2" strokeDashoffset="-226.2" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-gray-800 tracking-tighter">92%</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Passing</span>
              </div>
            </div>

            <div className="flex-1 space-y-4">
               <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#4caf50] shadow-[0_0_8px_rgba(76,175,80,0.5)]"></div>
                    <span className="text-sm font-semibold text-gray-600">Passed Students</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800 group-hover:scale-110 transition">450</span>
               </div>
               <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#f44336] shadow-[0_0_8px_rgba(244,67,54,0.5)]"></div>
                    <span className="text-sm font-semibold text-gray-600">Failed Students</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800 group-hover:scale-110 transition">45</span>
               </div>
               <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#ffeb3b] shadow-[0_0_8px_rgba(255,235,59,0.5)]"></div>
                    <span className="text-sm font-semibold text-gray-600">Absent Students</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800 group-hover:scale-110 transition">15</span>
               </div>
               <div className="pt-4 border-t border-gray-100 flex justify-between">
                  <span className="text-sm font-black text-gray-400 uppercase italic">Total Students</span>
                  <span className="text-sm font-black text-[#3b5998]">510</span>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-[#3b5998] rounded-xl shadow-xl p-6 text-white flex flex-col justify-between relative overflow-hidden">
           <Icons.Trophy className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 rotate-12" />
           <div>
             <h4 className="text-lg font-bold mb-1 opacity-90">Topper of the Batch</h4>
             <p className="text-xs opacity-70 mb-6">Current Exam Session 2025-26</p>
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                  <Icons.User className="w-8 h-8 text-white" />
                </div>
                <div>
                   <h3 className="text-xl font-black">Aarav Sharma</h3>
                   <p className="text-sm font-semibold opacity-80">98.4% Aggregate</p>
                </div>
             </div>
           </div>
           <button className="mt-8 bg-white text-[#3b5998] py-2 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition shadow-lg">View Full Leaderboard</button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm uppercase tracking-tighter">Detailed Analysis</h3>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded transition text-gray-400"><Icons.FileText className="w-4 h-4" /></button>
            <button className="p-1 hover:bg-gray-100 rounded transition text-gray-400"><Icons.Download className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Exam Statistics', 'Class Wise Report', 'Subject Wise Analysis', 'Topper Report'].map((report) => (
             <div key={report} className="border border-gray-100 rounded p-4 hover:border-blue-300 hover:bg-blue-50/30 transition cursor-pointer group">
               <div className="w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-blue-100 transition flex items-center justify-center mb-3">
                 <Icons.FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
               </div>
               <h4 className="text-sm font-bold text-gray-700 group-hover:text-blue-900 transition">{report}</h4>
               <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">Generate Now &rarr;</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

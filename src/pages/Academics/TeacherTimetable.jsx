import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

const TeacherTimetable = () => {
  const [selectedTeacher, setSelectedTeacher] = useState('Jason Sharlton (90006)');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const timetableData = {
    Monday: [
      { class: 'Class 1(A)', subject: 'Hindi (230)', time: '8:45 AM - 9:30 AM', room: '100' },
    ],
    Tuesday: [
      { class: 'Class 1(A)', subject: 'Hindi (230)', time: '08:35 AM - 09:05 AM', room: '12' },
    ],
    Wednesday: [
      { class: 'Class 2(A)', subject: 'English (210)', time: '8:30 AM - 09:00 AM', room: '100' },
      { class: 'Class 1(A)', subject: 'Hindi (230)', time: '08:35 AM - 09:05 AM', room: '12' },
    ],
    Thursday: [
      { class: 'Class 1(A)', subject: 'Hindi (230)', time: '08:35 AM - 09:05 AM', room: '12' },
    ],
    Friday: [
      { class: 'Class 1(A)', subject: 'Hindi (230)', time: '8:00 AM - 08:30 AM', room: '12' },
    ],
    Saturday: [],
    Sunday: [],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 font-serif">Teacher Time Table</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-end gap-4">
            <div className="w-full max-w-sm">
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Teachers <span className="text-red-500">*</span></label>
              <div className="relative">
                <select 
                  value={selectedTeacher}
                  onChange={(e) => setSelectedTeacher(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none appearance-none bg-white transition"
                >
                  <option>Jason Sharlton (90006)</option>
                  <option>Shivam Verma (9002)</option>
                </select>
                <Icons.ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-8 py-2 rounded font-bold hover:bg-indigo-700 transition shadow-lg active:scale-95">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative overflow-x-auto">
        <button className="absolute top-4 right-4 text-indigo-600 hover:bg-indigo-50 p-2 rounded transition border border-indigo-100">
          <Icons.Printer className="w-5 h-5" />
        </button>
        
        <div className="flex gap-4 min-w-[1200px]">
          {days.map(day => (
            <div key={day} className="flex-1 min-w-[160px]">
              <h3 className="font-bold text-gray-700 mb-4 pb-2 border-b-2 border-indigo-100">{day}</h3>
              <div className="space-y-3">
                {timetableData[day].length > 0 ? (
                  timetableData[day].map((item, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200 space-y-2 hover:shadow-md transition group">
                      <div className="flex items-start gap-2">
                        <Icons.Book className="w-3.5 h-3.5 text-green-600 mt-0.5" />
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-green-700 leading-tight">Class: {item.class}</span>
                          <span className="text-[11px] font-bold text-green-700 leading-tight">Subject: {item.subject}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icons.Calculator className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-[11px] text-gray-600">{item.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icons.Grid className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-[11px] text-gray-600">Room No.: {item.room}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-3 bg-red-50 rounded-lg border border-red-100 flex items-center justify-center gap-2">
                    <Icons.X className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-[11px] font-bold text-red-600">Not Scheduled</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherTimetable;

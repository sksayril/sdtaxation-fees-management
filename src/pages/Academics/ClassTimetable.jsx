import React, { useState } from 'react';
import { Icons } from '../../components/Icons';

const ClassTimetable = () => {
  const [view, setView] = useState('list'); // 'list' or 'add'
  const [selectedClass, setSelectedClass] = useState('Class 1');
  const [selectedSection, setSelectedSection] = useState('A');
  const [activeTab, setActiveTab] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const timetableData = {
    Monday: [
      { subject: 'English (210)', time: '8:00 AM - 08:45 AM', teacher: 'Shivam Verma (9002)', room: '100' },
      { subject: 'Hindi (230)', time: '8:45 AM - 9:30 AM', teacher: 'Jason Sharlton (90006)', room: '100' },
      { subject: 'Mathematics (110)', time: '9:30 AM - 10:15 AM', teacher: 'Nishant Khare (1002)', room: '100' },
      { subject: 'Science (111)', time: '10:15 AM - 11:00 AM', teacher: 'aman (654)', room: '100' },
    ],
    Tuesday: [
      { subject: 'English (210)', time: '8:00 AM - 08:30 AM', teacher: 'Shivam Verma (9002)', room: '12' },
      { subject: 'Hindi (230)', time: '08:35 AM - 09:05 AM', teacher: 'Jason Sharlton (90006)', room: '12' },
      { subject: 'Mathematics (110)', time: '09:10 AM - 09:40 AM', teacher: 'Nishant Khare (1002)', room: '12' },
      { subject: 'Science (111)', time: '09:45 AM - 10:15 AM', teacher: 'aman (654)', room: '12' },
    ],
    Wednesday: [
      { subject: 'English (210)', time: '8:00 AM - 08:30 AM', teacher: 'Shivam Verma (9002)', room: '12' },
      { subject: 'Hindi (230)', time: '08:35 AM - 09:05 AM', teacher: 'Jason Sharlton (90006)', room: '12' },
      { subject: 'Mathematics (110)', time: '09:10 AM - 09:40 AM', teacher: 'Nishant Khare (1002)', room: '12' },
      { subject: 'Science (111)', time: '09:45 AM - 10:15 AM', teacher: 'aman (654)', room: '12' },
    ],
    Thursday: [
      { subject: 'English (210)', time: '8:00 AM - 08:30 AM', teacher: 'Shivam Verma (9002)', room: '12' },
      { subject: 'Hindi (230)', time: '08:35 AM - 09:05 AM', teacher: 'Jason Sharlton (90006)', room: '12' },
      { subject: 'Mathematics (110)', time: '09:10 AM - 09:40 AM', teacher: 'Nishant Khare (1002)', room: '12' },
      { subject: 'Science (111)', time: '09:45 AM - 10:15 AM', teacher: 'aman (654)', room: '12' },
    ],
    Friday: [
      { subject: 'Hindi (230)', time: '8:00 AM - 08:30 AM', teacher: 'Jason Sharlton (90006)', room: '12' },
      { subject: 'Mathematics (110)', time: '08:35 AM - 09:05 AM', teacher: 'Nishant Khare (1002)', room: '12' },
      { subject: 'Science (111)', time: '09:10 AM - 09:40 AM', teacher: 'aman (654)', room: '12' },
      { subject: 'English (210)', time: '9:40 AM - 10:05 AM', teacher: 'Shivam Verma (9002)', room: '12' },
    ],
    Saturday: [
      { subject: 'Science (111)', time: '8:00 AM - 08:30 AM', teacher: 'Shivam Verma (9002)', room: '12' },
      { subject: 'English (210)', time: '08:35 AM - 09:05 AM', teacher: 'aman (654)', room: '12' },
    ],
    Sunday: [],
  };

  const renderListView = () => (
    <div className="space-y-6">
      {/* Select Criteria */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-700 font-serif">Select Criteria</h2>
          <button 
            onClick={() => setView('add')}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded flex items-center gap-2 font-bold text-sm hover:bg-indigo-700 transition"
          >
            <Icons.Plus className="w-4 h-4" />
            Add
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Class <span className="text-red-500">*</span></label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none bg-white transition">
                <option>Class 1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Section <span className="text-red-500">*</span></label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none bg-white transition">
                <option>A</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded font-bold hover:bg-indigo-700 transition shadow-lg">
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
                        <span className="text-[11px] font-bold text-green-700 leading-tight">Subject: {item.subject}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icons.Calculator className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-[11px] text-gray-600">{item.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icons.User className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-[11px] text-gray-600">{item.teacher}</span>
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

  const renderAddView = () => (
    <div className="space-y-6">
      {/* Criteria */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-700 font-serif">Select Criteria</h2>
          <button 
            onClick={() => setView('list')}
            className="text-gray-500 hover:text-gray-700 font-bold text-sm"
          >
            Back to List
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Class <span className="text-red-500">*</span></label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none bg-white">
                <option>Class 1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Section <span className="text-red-500">*</span></label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none bg-white">
                <option>A</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Subject Group <span className="text-red-500">*</span></label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none bg-white">
                <option>Class 1 subject</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded font-bold hover:bg-indigo-700 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Quick Params */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-sm font-bold text-gray-700 mb-4">Select parameter to generate time table quickly</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Period Start Time <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm" placeholder="00:00" />
              <Icons.Calculator className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Duration (minute) <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm" />
              <Icons.Shield className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Interval (minute) <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="text" defaultValue="0" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm" />
              <Icons.Shield className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Room No.</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 outline-none text-sm" />
          </div>
          <div>
            <button className="w-full bg-indigo-500 text-white py-2 rounded font-bold hover:bg-indigo-600 transition shadow-sm">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Editor Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Day Tabs */}
        <div className="flex border-b border-gray-100 overflow-x-auto">
          {days.map(day => (
            <button 
              key={day}
              onClick={() => setActiveTab(day)}
              className={`px-6 py-3 text-sm font-bold transition whitespace-nowrap ${activeTab === day ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/30' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="p-4">
          <div className="flex justify-end mb-4">
            <button className="bg-indigo-600 text-white px-4 py-1.5 rounded flex items-center gap-2 font-bold text-sm hover:bg-indigo-700 transition">
              <Icons.Plus className="w-4 h-4" />
              Add New
            </button>
          </div>

          <table className="w-full text-[13px] border-collapse">
            <thead className="bg-gray-50 text-gray-600 font-bold border-y border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Subject</th>
                <th className="px-4 py-3 text-left">Time From <span className="text-red-500">*</span></th>
                <th className="px-4 py-3 text-left">Time To <span className="text-red-500">*</span></th>
                <th className="px-4 py-3 text-left">Teacher</th>
                <th className="px-4 py-3 text-left">Room No.</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {['English (210)', 'Hindi (230)', 'Mathematics (110)', 'Science (111)'].map((subj, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-3">
                    <select className="w-full px-3 py-1.5 border border-gray-200 rounded focus:border-indigo-500 outline-none bg-white">
                      <option>{subj}</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="relative">
                      <input type="text" defaultValue="8:00 AM" className="w-full px-3 py-1.5 border border-gray-200 rounded focus:border-indigo-500 outline-none" />
                      <Icons.Calculator className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="relative">
                      <input type="text" defaultValue="08:45 AM" className="w-full px-3 py-1.5 border border-gray-200 rounded focus:border-indigo-500 outline-none" />
                      <Icons.Calculator className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <select className="w-full px-3 py-1.5 border border-gray-200 rounded focus:border-indigo-500 outline-none bg-white">
                      <option>Shivam Verma (9002)</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <input type="text" defaultValue="100" className="w-full px-3 py-1.5 border border-gray-200 rounded focus:border-indigo-500 outline-none" />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition shadow-sm">
                      <Icons.X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-6">
            <button className="bg-indigo-600 text-white px-8 py-2.5 rounded flex items-center gap-2 font-bold hover:bg-indigo-700 transition shadow-lg">
              <Icons.FileText className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {view === 'list' ? renderListView() : renderAddView()}
    </div>
  );
};

export default ClassTimetable;

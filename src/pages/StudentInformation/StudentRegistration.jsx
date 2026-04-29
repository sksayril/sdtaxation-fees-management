import React from 'react';
import { Icons } from '../../components/Icons';

export function StudentRegistration() {
  const [dob, setDob] = React.useState('');
  const [registrationDate, setRegistrationDate] = React.useState(new Date().toISOString().split('T')[0]);

  const getDayName = (dateString) => {
    if (!dateString) return '';
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', { weekday: 'long' });
  };
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-10">
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-lg">Student Registration</h3>
          <div className="flex gap-2">
            <button className="bg-white text-gray-700 border border-gray-300 flex items-center gap-2 px-4 py-1.5 rounded text-sm font-semibold hover:bg-gray-50 transition shadow-sm">
              <Icons.FileText className="w-4 h-4" /> Registration Form
            </button>
            <button className="bg-[#5b6bc0] text-white flex items-center gap-2 px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
              <Icons.UserPlus className="w-4 h-4" /> New Registration
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 flex flex-col gap-8">
          
          {/* Student Basic Information */}
          <section>
            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
              <Icons.User className="w-5 h-5 text-blue-500" />
              <h4 className="text-md font-bold text-gray-800">Student Basic Information</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">First Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter first name" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Last Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter last name" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Gender <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Date of Birth <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <input 
                    type="date" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  />
                  {dob && (
                    <span className="absolute right-10 top-2.5 text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded pointer-events-none">
                      {getDayName(dob)}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Mobile Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-400 text-sm">+91</span>
                  <input type="tel" placeholder="9876543210" className="w-full border border-gray-300 rounded-md pl-12 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="student@example.com" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
            </div>
          </section>

          {/* Parent/Guardian Information */}
          <section>
            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
              <Icons.Users className="w-5 h-5 text-blue-500" />
              <h4 className="text-md font-bold text-gray-800">Parent / Guardian Information</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Father's Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter father's name" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Mother's Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter mother's name" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Guardian's Mobile <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-400 text-sm">+91</span>
                  <input type="tel" placeholder="9876543210" className="w-full border border-gray-300 rounded-md pl-12 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Permanent Address <span className="text-red-500">*</span></label>
                <textarea rows="3" placeholder="Enter complete address" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
              </div>
            </div>
          </section>

          {/* Academic Interest */}
          <section>
            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
              <Icons.GraduationCap className="w-5 h-5 text-blue-500" />
              <h4 className="text-md font-bold text-gray-800">Academic Registration Details</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Desired Class <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                  <option value="">Select Class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Academic Session <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white">
                  <option value="2026-27">2026-2027</option>
                  <option value="2025-26">2025-2026</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Registration Date</label>
                <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">Registration Fee (₹)</label>
                <input type="number" placeholder="500" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
            <button className="px-6 py-2 rounded-md text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors">
              Reset Form
            </button>
            <button className="bg-blue-600 text-white px-8 py-2.5 rounded-md text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all transform active:scale-95">
              Submit Registration
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

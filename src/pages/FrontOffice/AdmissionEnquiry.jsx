import React, { useState } from 'react';
import { Icons } from '../../components/Icons';
import { useTheme } from '../../context/ThemeContext';

export function AdmissionEnquiry() {
  const [showForm, setShowForm] = useState(false);
  const { themeData } = useTheme();
  const [enquiries, setEnquiries] = useState([
    { name: 'Hariom', phone: '872376717887', source: 'Online Front Site', date: '04/23/2026', lastFollowUp: '', nextFollowUp: '04/29/2026', status: 'Active' },
    { name: 'anubhav', phone: '8766756566', source: 'Google Ads', date: '04/16/2026', lastFollowUp: '04/15/2026', nextFollowUp: '04/23/2026', status: 'Active' },
    { name: 'jaya', phone: '77625336632', source: 'Advertisement', date: '04/01/2026', lastFollowUp: '', nextFollowUp: '04/03/2026', status: 'Active' },
    { name: 'Suresh Yadav', phone: '5432109876', source: 'Social Media', date: '04/21/2026', lastFollowUp: '', nextFollowUp: '04/24/2026', status: 'Active' },
    { name: 'Rahul Sharma', phone: '9876543210', source: 'Advertisement', date: '04/03/2026', lastFollowUp: '', nextFollowUp: '04/06/2026', status: 'Active' },
    { name: 'Abhi', phone: '67574645675', source: 'Front Office', date: '03/20/2026', lastFollowUp: '03/02/2026', nextFollowUp: '03/06/2026', status: 'Active' },
    { name: 'Aarav', phone: '65543768989', source: 'Admission Campaign', date: '03/11/2026', lastFollowUp: '', nextFollowUp: '03/14/2026', status: 'Active' },
  ]);

  const [formData, setFormData] = useState({
    enquiryType: '',
    date: '2026-04-12',
    name: '',
    fatherName: '',
    enquiryClass: '',
    age: '',
    address: '',
    contactNo1: '',
    contactNo2: '',
    nextFollowUpDate: '',
    enquiryRemark: '',
    previousSchoolName: '',
    sourceOfInformation: '',
    checkForMessage: false,
    checkForMessageWhatsapp: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEnquiry = {
      name: formData.name,
      phone: formData.contactNo1,
      source: formData.sourceOfInformation || 'Direct',
      date: formData.date,
      lastFollowUp: '',
      nextFollowUp: formData.nextFollowUpDate,
      status: 'Active',
    };
    setEnquiries([newEnquiry, ...enquiries]);
    setShowForm(false);
    // Reset form
    setFormData({
      enquiryType: '',
      date: '2026-04-12',
      name: '',
      fatherName: '',
      enquiryClass: '',
      age: '',
      address: '',
      contactNo1: '',
      contactNo2: '',
      nextFollowUpDate: '',
      enquiryRemark: '',
      previousSchoolName: '',
      sourceOfInformation: '',
      checkForMessage: false,
      checkForMessageWhatsapp: false,
    });
  };

  if (showForm) {
    return (
      <div className="bg-[#f0f2f5] min-h-screen p-4">
        {/* Breadcrumb */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-gray-800">New Enquiry</h2>
            <span className="text-xs text-gray-500 mt-1">Control Panel</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white border-t-4 border-orange-400 rounded shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-white">
            <h3 className="text-gray-700 font-bold text-sm">Enquiry Form</h3>
            <button 
              onClick={() => setShowForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Row 1 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Enquiry Type<span className="text-red-500">*</span></label>
                <select 
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                  required
                >
                  <option value="">Select</option>
                  <option value="Admission">Admission</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Date<span className="text-red-500">*</span></label>
                <input 
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Name<span className="text-red-500">*</span></label>
                <input 
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Row 2 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Father's Name</label>
                <input 
                  type="text"
                  name="fatherName"
                  placeholder="Father's Name"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Enquiry Class<span className="text-red-500">*</span></label>
                <select 
                  name="enquiryClass"
                  value={formData.enquiryClass}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select Class</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Age</label>
                <input 
                  type="text"
                  name="age"
                  placeholder="Enter Age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Address<span className="text-red-500">*</span></label>
                <input 
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Contact No 1.<span className="text-red-500">*</span></label>
                <input 
                  type="text"
                  name="contactNo1"
                  placeholder="Contact No 1."
                  value={formData.contactNo1}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Contact No 2.</label>
                <input 
                  type="text"
                  name="contactNo2"
                  placeholder="Contact No 2."
                  value={formData.contactNo2}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 bg-[#e0ffff]"
                />
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Next Follow Up Date</label>
                <input 
                  type="date"
                  name="nextFollowUpDate"
                  value={formData.nextFollowUpDate}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Enquiry Remark1<span className="text-red-500">*</span></label>
                <input 
                  type="text"
                  name="enquiryRemark"
                  placeholder="Enquiry Remark1"
                  value={formData.enquiryRemark}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Previous School Name<span className="text-red-500">*</span></label>
                <input 
                  type="text"
                  name="previousSchoolName"
                  placeholder="Previous School Name"
                  value={formData.previousSchoolName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Row 5 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Source Of Information</label>
                <input 
                  type="text"
                  name="sourceOfInformation"
                  placeholder="Source Of Information"
                  value={formData.sourceOfInformation}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox"
                  name="checkForMessage"
                  checked={formData.checkForMessage}
                  onChange={handleInputChange}
                  id="chkMsg"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="chkMsg" className="text-xs font-bold text-gray-700">Check For Message</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox"
                  name="checkForMessageWhatsapp"
                  checked={formData.checkForMessageWhatsapp}
                  onChange={handleInputChange}
                  id="chkMsgWap"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="chkMsgWap" className="text-xs font-bold text-gray-700">Check For Message(Whatsapp)</label>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button 
                type="submit"
                className="bg-[#4a90a4] text-white px-8 py-2 rounded text-sm font-semibold hover:bg-[#3b7a8c] transition shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Select Criteria */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Class</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Source</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Enquiry From Date <span className="text-red-500">*</span></label>
            <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Enquiry To Date <span className="text-red-500">*</span></label>
            <input type="date" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white text-gray-600" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Status</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Active</option>
            </select>
          </div>
          <div className="md:col-span-5 flex justify-end mt-2">
            <button className={`${themeData.primary} text-white flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-semibold ${themeData.hover} transition shadow-sm`}>
              <Icons.Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Admission Enquiry Table Area */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-gray-700 font-semibold text-sm">Admission Enquiry List</h3>
          <button 
            onClick={() => setShowForm(true)}
            className={`${themeData.primary} text-white flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold ${themeData.hover} transition shadow-sm`}
          >
            <Icons.Plus className="w-3.5 h-3.5" /> Add
          </button>
        </div>
        
        <div className="p-4">
          {/* Table Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <input type="text" placeholder="Search..." className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white w-48" />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
               <div className="flex items-center gap-1">
                 <select className="border border-gray-300 rounded p-1">
                   <option>50</option>
                 </select>
                 <span className="text-xs">records</span>
               </div>
               {/* Export Icons (Mock) */}
               <div className="flex items-center gap-1 text-gray-400">
                  <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.FileText className="w-4 h-4" /></div>
                  <div className="p-1 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer"><Icons.BarChart className="w-4 h-4" /></div>
               </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Enquiry Date</th>
                  <th className="px-4 py-3">Last Follow Up Date</th>
                  <th className="px-4 py-3">Next Follow Up Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enq, i) => (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-gray-50 ${i % 2 !== 0 ? 'bg-[#f4ebeb]' : 'bg-white'}`}>
                    <td className="px-4 py-2.5 text-gray-800">{enq.name}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.phone}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.source}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.date}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.lastFollowUp}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.nextFollowUp}</td>
                    <td className="px-4 py-2.5 text-gray-600">{enq.status}</td>
                    <td className="px-4 py-2.5 text-right">
                       <div className="flex justify-end gap-1">
                          <button className={`${themeData.primary} p-1 rounded ${themeData.hover} text-white`} title="Call">
                             <Icons.Phone className="w-3 h-3" />
                          </button>
                          <button className={`${themeData.primary} p-1 rounded ${themeData.hover} text-white`} title="Edit">
                             <Icons.Edit2 className="w-3 h-3" />
                          </button>
                          <button className={`${themeData.primary} p-1 rounded ${themeData.hover} text-white`} title="Delete">
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
            <span>Showing 1 to {enquiries.length} of {enquiries.length} entries</span>
            <div className="flex gap-1">
              <button className="px-2 py-1 border border-gray-200 rounded text-gray-400">&lt;</button>
              <button className="px-2 py-1 border border-blue-200 bg-blue-50 text-blue-600 font-bold rounded">1</button>
              <button className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-50">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

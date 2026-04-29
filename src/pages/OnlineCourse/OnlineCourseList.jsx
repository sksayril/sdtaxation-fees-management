import React from 'react';
import { Icons } from '../../components/Icons';

export function OnlineCourseList() {
  const courses = [
    { title: 'Mathematics Advanced', class: 'Class 10', section: 'A', createdBy: 'Admin', price: '₹ 500.00', discount: '10%', free: false, published: true },
    { title: 'Physics Fundamentals', class: 'Class 12', section: 'B', createdBy: 'Staff', price: '₹ 0.00', discount: '0%', free: true, published: true },
    { title: 'Chemical Bonding', class: 'Class 11', section: 'A', createdBy: 'Admin', price: '₹ 1200.00', discount: '15%', free: false, published: false },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded shadow-sm">
        <h3 className="text-gray-700 font-semibold text-lg">Online Course List</h3>
        <button className="bg-[#5b6bc0] text-white flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
          <Icons.Plus className="w-4 h-4" /> Add Course
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-gray-700 font-semibold text-sm">Select Criteria</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Class</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Section</label>
            <select className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white">
              <option>Select</option>
              <option>A</option>
              <option>B</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Search By Keyword</label>
            <input type="text" placeholder="Search By Course Title" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 bg-white" />
          </div>
          <button className="bg-[#5b6bc0] text-white flex items-center justify-center gap-1.5 px-6 py-1.5 rounded text-sm font-semibold hover:bg-[#3f51b5] transition shadow-sm">
            <Icons.Search className="w-4 h-4" /> Search
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="p-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                <th className="px-4 py-3">Course Name</th>
                <th className="px-4 py-3">Class (Section)</th>
                <th className="px-4 py-3">Created By</th>
                <th className="px-4 py-3 text-right">Price</th>
                <th className="px-4 py-3 text-right">Discount</th>
                <th className="px-4 py-3 text-center">Free</th>
                <th className="px-4 py-3 text-center">Published</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-4 text-blue-600 font-medium">{course.title}</td>
                  <td className="px-4 py-4 text-gray-600">{course.class} ({course.section})</td>
                  <td className="px-4 py-4 text-gray-600">{course.createdBy}</td>
                  <td className="px-4 py-4 text-gray-800 font-bold text-right">{course.price}</td>
                  <td className="px-4 py-4 text-green-600 font-medium text-right">{course.discount}</td>
                  <td className="px-4 py-4 text-center">
                    {course.free ? (
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded">Yes</span>
                    ) : (
                      <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded">No</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {course.published ? (
                      <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">Published</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded">Draft</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex gap-1 justify-end">
                      <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Edit"><Icons.Edit2 className="w-3.5 h-3.5" /></button>
                      <button className="bg-[#5b6bc0] p-1.5 rounded hover:bg-[#3f51b5] text-white" title="Manage Lessons"><Icons.List className="w-3.5 h-3.5" /></button>
                      <button className="bg-[#f44336] p-1.5 rounded hover:bg-[#e53935] text-white" title="Delete"><Icons.X className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Icons } from './Icons';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('demo');
  const [password, setPassword] = useState('demo');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'demo' && password === 'demo') {
      onLogin();
    } else {
      alert("Invalid credentials. Please use demo/demo");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#e7ebf4] font-sans">
      {/* Top Header */}
      <div className="bg-black text-white text-[11px] sm:text-xs py-1.5 px-6 flex flex-col sm:flex-row justify-between items-center">
        <div>All-in - One Software : CRM, ERP, HR, PAYROLL</div>
        <div className="flex items-center gap-2">
          Technical Support : <span className="font-semibold">📞 9993556791</span>
        </div>
      </div>
      
      {/* Logo Header */}
      <div className="bg-[#f0eff5] px-6 lg:px-12 py-4 flex items-center shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#0f1b3d] border-2 border-yellow-500 flex flex-col items-center justify-center shadow-md">
             <span className="text-yellow-500 font-bold text-xl sm:text-2xl leading-none">S.D</span>
             <span className="text-yellow-500 text-[8px] sm:text-[10px] font-bold leading-none tracking-widest mt-0.5">GD</span>
          </div>
          <div>
            <h1 className="text-[#15235b] text-xl sm:text-2xl font-serif font-bold tracking-wide">S. D. TAXATION ASSOCIATE</h1>
            <p className="text-[#4b5563] text-xs sm:text-sm font-medium tracking-wide">Your Trusted Partner in Compliance & Growth</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 lg:p-6 lg:px-10 flex flex-col xl:flex-row gap-6">
        {/* Left Panel */}
        <div className="flex-1 bg-[#e7ebf4] flex flex-col">
          <div className="bg-[#1f6b8b] text-white px-4 py-2.5 flex justify-between items-center text-sm font-semibold rounded-t-lg">
            <span>What's New</span>
            <span className="cursor-pointer text-lg leading-none transform rotate-180">^</span>
          </div>
          
          <div className="p-3 sm:p-4 bg-white/50 border-x border-b border-gray-300 rounded-b-lg flex-grow">
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1a365d] text-white text-center py-2.5 text-sm sm:text-base font-semibold tracking-wide">
                COMPLETE BUSINESS MANAGEMENT SOFTWARE
              </div>
              <div className="p-3 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <Tile icon={Icons.Users} title="HR" desc="Manage Employees & Organization" color="text-blue-600" />
                <Tile icon={Icons.Wallet} title="PAYROLL" desc="Salary Processing, Payslips & Benefits" color="text-green-600" />
                <Tile icon={Icons.Badge} title="EPF" desc="Provident Fund Management" color="text-red-700" />
                <Tile icon={Icons.Shield} title="ESIC" desc="Employees' State Insurance" color="text-blue-500" />
                <Tile icon={Icons.Briefcase} title="PT" desc="Professional Tax Management" color="text-purple-600" />
                <Tile icon={Icons.FileText} title="TDS" desc="Tax Deducted at Source" color="text-orange-500" />
                <Tile icon={Icons.TrendingUp} title="GST" desc="GST Returns, Invoices & Compliance" color="text-green-500" />
                <Tile icon={Icons.Building} title="FEES MANAGEMENT" desc="School / Institution Fees Collection & Reports" color="text-teal-600" />
              </div>
              
              <div className="px-3 sm:px-5 pb-5 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                 <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg bg-gray-50/50 shadow-sm hover:shadow-md transition">
                    <Icons.Calculator className="w-10 h-10 text-blue-700" />
                    <div>
                      <div className="font-bold text-blue-900 text-sm">ACCOUNTING</div>
                      <div className="text-[11px] text-gray-500 leading-tight mt-0.5">Ledgers, Journal Entries, Reports & Financial Management</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg bg-gray-50/50 shadow-sm hover:shadow-md transition">
                    <Icons.BarChart className="w-10 h-10 text-purple-600" />
                    <div>
                      <div className="font-bold text-purple-900 text-sm">REPORTS</div>
                      <div className="text-[11px] text-gray-500 leading-tight mt-0.5">Analytics, MIS, & Statutory Reports</div>
                    </div>
                 </div>
              </div>
              
              <div className="bg-[#e4e7ee] text-center py-2.5 text-[11px] sm:text-xs font-bold text-gray-700 tracking-widest border-t border-gray-200">
                ONE PLATFORM • MULTIPLE SOLUTIONS • ENDLESS POSSIBILITIES
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full xl:w-[380px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col shrink-0">
          <div className="bg-[#1e3a8a] text-white text-center py-5 px-4">
            <h2 className="font-semibold text-lg tracking-wide">WELCOME BACK</h2>
            <p className="text-xs text-blue-200 mt-1">Sign in to Your Account</p>
          </div>
          
          <div className="p-6 flex-grow flex flex-col bg-[#f8f9fc]">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icons.CheckSquare className="w-4 h-4 text-gray-400" />
                 </div>
                 <input 
                  type="text" 
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Username / Email" 
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white shadow-sm" 
                 />
              </div>
              <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icons.Lock className="w-4 h-4 text-gray-400" />
                 </div>
                 <input 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password" 
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white shadow-sm" 
                 />
                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                    <Icons.Eye className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                 </div>
              </div>
              
              <div className="flex justify-between items-center text-xs mt-2">
                 <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700 font-medium group-hover:text-blue-600">Remember Me</span>
                 </label>
                 <a href="#" className="text-blue-600 hover:underline font-medium">Forgot Password?</a>
              </div>
              
              <button type="submit" className="w-full bg-[#1e3a8a] text-white py-2.5 rounded font-semibold text-sm hover:bg-[#15235b] transition shadow-md mt-2">
                LOGIN
              </button>
            </form>
            
            <div className="my-6 text-center text-xs font-bold text-gray-800 relative">
               <div className="absolute inset-0 flex items-center">
                 <div className="w-full border-t border-gray-300"></div>
               </div>
               <span className="bg-[#f8f9fc] px-3 relative z-10">OR <br className="sm:hidden" /> LOGIN AS</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
               <LoginRole icon={Icons.Crown} title="SUPER ADMIN" subtitle="Ce System Access" color="bg-[#8b5cf6]" onClick={handleLogin} />
               <LoginRole icon={Icons.UserCog} title="ADMIN" subtitle="System Administration" color="bg-[#60a5fa]" onClick={handleLogin} />
               <LoginRole icon={Icons.Users} title="HR" subtitle="Manage Employees" color="bg-[#0d9488]" onClick={handleLogin} />
               <LoginRole icon={Icons.User} title="EMPLOYEE" subtitle="View Payslip Records" color="bg-[#ffedd5]" textColor="text-[#ea580c]" onClick={handleLogin} />
               <LoginRole icon={Icons.FileText} title="ACCOUNTANT" subtitle="Account Management" color="bg-[#dcfce7]" textColor="text-[#166534]" onClick={handleLogin} />
               <LoginRole icon={Icons.MoreHorizontal} title="OTHER" subtitle="Limited Access" color="bg-[#e5e7eb]" textColor="text-[#374151]" onClick={handleLogin} />
            </div>
            
            <div className="mt-8 pt-4 text-center">
               <h3 className="text-xs font-bold text-gray-800 tracking-wide">S. D. TAXATION ASSOCIATE</h3>
               <p className="text-[10px] text-gray-500 mt-1">Complete Business Management Software</p>
               <div className="w-12 h-0.5 bg-gray-300 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-[#1e3a8a] text-white text-[10px] sm:text-xs py-2.5 px-4 text-center mt-auto shadow-inner">
         S.D. Taxation Associate | 9993556791 | Email - sdtaxation@gmail.com | All-in-One Software: CRM, ERP, HR, T, FI | Technical: 999356679 | Email - sdtaxation@gmail.com
      </div>
    </div>
  );
}

function Tile({icon: Icon, title, desc, color}) {
  return (
    <div className="border border-gray-100 bg-white rounded-lg p-3 sm:p-4 text-center flex flex-col items-center justify-start shadow-sm hover:shadow-md transition cursor-pointer group">
      <div className="h-14 flex items-center justify-center">
        <Icon className={`w-10 h-10 ${color} group-hover:scale-110 transition-transform duration-200`} />
      </div>
      <h3 className="font-bold text-[#1a365d] text-sm mt-1 mb-1">{title}</h3>
      <p className="text-[10px] sm:text-[11px] text-gray-500 leading-snug">{desc}</p>
    </div>
  );
}

function LoginRole({icon: Icon, title, subtitle, color, textColor = "text-white", onClick}) {
  return (
    <div onClick={onClick} className={`${color} ${textColor} rounded-md p-2 text-center flex flex-col items-center justify-center cursor-pointer hover:opacity-90 hover:shadow-sm transition h-full`}>
      <Icon className="w-5 h-5 mb-1.5" />
      <div className="text-[9px] font-bold leading-tight">{title}</div>
      <div className="text-[7px] leading-tight opacity-90 mt-1">{subtitle}</div>
    </div>
  );
}

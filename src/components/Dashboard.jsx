import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import * as FrontOfficePages from '../pages/FrontOffice/index';
import * as StudentInformationPages from '../pages/StudentInformation/index';
import * as FeesCollectionPages from '../pages/FeesCollection/index';
import * as OnlineCoursePages from '../pages/OnlineCourse/index';
import * as BehaviourRecordsPages from '../pages/BehaviourRecords/index';
import * as IncomePages from '../pages/Income/index';
import * as ExpensePages from '../pages/Expenses/index';
import * as AccountsPages from '../pages/Accounts/index';
import * as CBSEExaminationPages from '../pages/CBSEExamination/index';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard Overview');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash) {
        setActivePage(decodeURIComponent(hash));
      } else {
        setActivePage('Dashboard Overview');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: Icons.LayoutDashboard },
    {
      name: 'Front Office',
      icon: Icons.Building,
      subItems: [
        'Admission Enquiry',
        'Visitor Book',
        'Phone Call Log',
        'Postal Dispatch',
        'Postal Receive',
        'Complain',
        'Setup Front Office'
      ]
    },
    {
      name: 'Student Information',
      icon: Icons.Users,
      subItems: [
        'Student Registration',
        'Student Admission',
        'Student Details',
        'Online Admission',
        'Disabled Students',
        'Multi Class Student',
        'Bulk Delete',
        'Student Categories',
        'Student House',
        'Disable Reason'
      ]
    },
    {
      name: 'Fees Collection',
      icon: Icons.Wallet,
      subItems: [
        'Collect Fees',
        'Offline Bank Payments',
        'Search Fees Payment',
        'Search Due Fees',
        'Fees Master',
        'Quick Fees',
        'Fees Group',
        'Fees Type',
        'Fees Discount',
        'Fees Carry Forward',
        'Fees Reminder'
      ]
    },
    {
      name: 'Online Course',
      icon: Icons.FileText,
      subItems: [
        'Online Course',
        'Question Bank',
        'Offline Payment',
        'Course Category',
        'Certificate Template',
        'Online Course Report',
        'Setting'
      ]
    },
    {
      name: 'Behaviour Records',
      icon: Icons.BarChart,
      subItems: [
        'Assign Incident',
        'Incidents',
        'Reports',
        'Setting'
      ]
    },
    {
      name: 'Accounts',
      icon: Icons.Building,
      subItems: [
        'Add Income',
        'Add Expense',
        'Contra',
        'Journal Entry'
      ]
    },
    { name: 'QR Code Attendance', icon: Icons.CheckSquare, subItems: ['QR Attendance'] },
    {
      name: 'CBSE Examination',
      icon: Icons.FileText,
      subItems: [
        'Exam',
        'Exam Schedule',
        'Print Marksheet',
        'Template',
        'Assign Observation',
        'Admit Card',
        'Reports'
      ]
    },
    { name: 'Examinations', icon: Icons.FileText, subItems: ['Exam Group', 'Exam Result'] },
    { name: 'Attendance', icon: Icons.Calendar, subItems: ['Student Attendance'] },
    { name: 'Online Examinations', icon: Icons.FileText, subItems: ['Online Exam'] },
    { name: 'Academics', icon: Icons.Briefcase, subItems: ['Class Timetable'] },
    { name: 'Annual Calendar', icon: Icons.Calendar, subItems: ['Calendar'] },
    { name: 'Lesson Plan', icon: Icons.FileText, subItems: ['Manage Lesson Plan'] },
    { name: 'Human Resource', icon: Icons.Users, subItems: ['Staff Directory'] },
    { name: 'Communicate', icon: Icons.Shield, subItems: ['Notice Board'] },
    { name: 'Download Center', icon: Icons.Badge, subItems: ['Upload Content'] },
    { name: 'Homework', icon: Icons.FileText, subItems: ['Add Homework'] },
    { name: 'Library', icon: Icons.Briefcase, subItems: ['Book List'] },
    { name: 'Inventory', icon: Icons.LayoutDashboard, subItems: ['Issue Item'] },
    { name: 'Student CV', icon: Icons.FileText, subItems: ['Student Resume'] },
    { name: 'Transport', icon: Icons.Building, subItems: ['Routes'] },
    { name: 'Hostel', icon: Icons.Building, subItems: ['Hostel Rooms'] },
    { name: 'Certificate', icon: Icons.FileText, subItems: ['Student Certificate'] },
    { name: 'Front CMS', icon: Icons.Settings, subItems: ['Event', 'Gallery'] },
    { name: 'Alumni', icon: Icons.Users, subItems: ['Manage Alumni'] },
    { name: 'Reports', icon: Icons.BarChart, subItems: ['Student Report'] },
    { name: 'System Setting', icon: Icons.Settings, subItems: ['General Setting'] },
  ];

  const renderContent = () => {
    switch (activePage) {
      // Front Office
      case 'Admission Enquiry': return <FrontOfficePages.AdmissionEnquiry />;
      case 'Visitor Book': return <FrontOfficePages.VisitorBook />;
      case 'Phone Call Log': return <FrontOfficePages.PhoneCallLog />;
      case 'Postal Dispatch': return <FrontOfficePages.PostalDispatch />;
      case 'Postal Receive': return <FrontOfficePages.PostalReceive />;
      case 'Complain': return <FrontOfficePages.Complain />;
      case 'Setup Front Office': return <FrontOfficePages.SetupFrontOffice />;

      // Student Information
      case 'Student Registration': return <StudentInformationPages.StudentRegistration />;
      case 'Student Admission': return <StudentInformationPages.StudentAdmission />;
      case 'Student Details': return <StudentInformationPages.StudentDetails />;
      case 'Online Admission': return <StudentInformationPages.OnlineAdmission />;
      case 'Disabled Students': return <StudentInformationPages.DisabledStudents />;
      case 'Multi Class Student': return <StudentInformationPages.MultiClassStudent />;
      case 'Bulk Delete': return <StudentInformationPages.BulkDelete />;
      case 'Student Categories': return <StudentInformationPages.StudentCategories />;
      case 'Student House': return <StudentInformationPages.StudentHouse />;
      case 'Disable Reason': return <StudentInformationPages.DisableReason />;

      // Fees Collection
      case 'Collect Fees': return <FeesCollectionPages.CollectFees />;
      case 'Offline Bank Payments': return <FeesCollectionPages.OfflineBankPayments />;
      case 'Search Fees Payment': return <FeesCollectionPages.SearchFeesPayment />;
      case 'Search Due Fees': return <FeesCollectionPages.SearchDueFees />;
      case 'Fees Master': return <FeesCollectionPages.FeesMaster />;
      case 'Quick Fees': return <FeesCollectionPages.QuickFees />;
      case 'Fees Group': return <FeesCollectionPages.FeesGroup />;
      case 'Fees Type': return <FeesCollectionPages.FeesType />;
      case 'Fees Discount': return <FeesCollectionPages.FeesDiscount />;
      case 'Fees Carry Forward': return <FeesCollectionPages.FeesCarryForward />;
      case 'Fees Reminder': return <FeesCollectionPages.FeesReminder />;

      // Online Course
      case 'Online Course': return <OnlineCoursePages.OnlineCourseList />;
      case 'Question Bank': return <OnlineCoursePages.QuestionBank />;
      case 'Offline Payment': return <OnlineCoursePages.CourseOfflinePayment />;
      case 'Course Category': return <OnlineCoursePages.CourseCategory />;
      case 'Certificate Template': return <OnlineCoursePages.CertificateTemplate />;
      case 'Online Course Report': return <OnlineCoursePages.OnlineCourseReport />;
      case 'Setting': return <OnlineCoursePages.CourseSetting />;

      // Behaviour Records
      case 'Assign Incident': return <BehaviourRecordsPages.AssignIncident />;
      case 'Incidents': return <BehaviourRecordsPages.Incidents />;
      case 'Reports': return <BehaviourRecordsPages.BehaviourReports />;
      case 'Setting': return <BehaviourRecordsPages.BehaviourSetting />;

      // Income
      case 'Add Income': return <IncomePages.AddIncome />;
      case 'Search Income': return <IncomePages.SearchIncome />;
      case 'Income Head': return <IncomePages.IncomeHead />;

      // Expenses
      case 'Add Expense': return <ExpensePages.AddExpense />;
      case 'Search Expense': return <ExpensePages.SearchExpense />;
      case 'Expense Head': return <ExpensePages.ExpenseHead />;

      // Accounts (Contra & Journal Entry)
      case 'Contra': return <AccountsPages.Contra />;
      case 'Journal Entry': return <AccountsPages.JournalEntry />;

      // CBSE Examination
      case 'Exam': return <CBSEExaminationPages.CBSEExam />;
      case 'Exam Schedule': return <CBSEExaminationPages.CBSEExamSchedule />;
      case 'Print Marksheet': return <CBSEExaminationPages.CBSEPrintMarksheet />;
      case 'Template': return <CBSEExaminationPages.CBSETemplate />;
      case 'Assign Observation': return <CBSEExaminationPages.CBSEAssignObservation />;
      case 'Admit Card': return <CBSEExaminationPages.CBSEAdmitCard />;
      case 'Reports': return <CBSEExaminationPages.CBSEReports />;

      case 'Dashboard':

      case 'Dashboard Overview':
      default:
        return (
          <>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                <p className="text-gray-500 text-sm mt-1">Welcome back! Here's what's happening today.</p>
              </div>
              <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition">
                <Icons.RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <KpiCard title="Total Revenue" value="₹0" subtitle="No change from last period" icon={<span className="text-blue-500 text-xl font-bold">$</span>} trend="neutral" />
              <KpiCard title="Active Clients" value="1" subtitle="50.0% from last period" icon={<Icons.Users className="w-5 h-5 text-orange-500" />} trend="up" />
              <KpiCard title="Total Companies" value="2" subtitle="100% from last period" icon={<Icons.Building className="w-5 h-5 text-green-600" />} trend="up" />
              <KpiCard title="System Balance" value="₹0" subtitle="No change from last period" icon={<Icons.Wallet className="w-5 h-5 text-purple-500" />} trend="neutral" />
            </div>

            {/* Color Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <ColorCard title="Total Revenue" value="₹0" subtext="Active: ₹0" color="bg-[#4285f4]" icon={<span className="text-white text-2xl font-bold opacity-80">$</span>} />
              <ColorCard title="Total Balance" value="₹0" subtext="System Balance" color="bg-[#34a853]" icon={<Icons.Wallet className="w-8 h-8 text-white opacity-80" />} />
              <ColorCard title="Returns Filed" value="0" subtext="Total returns processed" color="bg-[#e67c30]" icon={<Icons.FileText className="w-8 h-8 text-white opacity-80" />} />
              <ColorCard title="Tax Saved" value="₹0" subtext="For all clients" color="bg-[#9c27b0]" icon={<Icons.Calculator className="w-8 h-8 text-white opacity-80" />} />
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-80">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">Revenue Trend</h3>
                <div className="flex-1 border-l border-b border-gray-200 relative">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[4, 3, 2, 1].map(n => (
                      <div key={n} className="w-full border-t border-gray-100 border-dashed relative">
                        <span className="absolute -left-4 -top-2.5 text-xs text-gray-400">{n}</span>
                      </div>
                    ))}
                    <div className="w-full relative">
                      <span className="absolute -left-4 -top-2.5 text-xs text-gray-400">0</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-4 text-xs text-gray-400">
                    <span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-80">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">Service Distribution</h3>
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="w-48 h-48 rounded-full" style={{ background: 'conic-gradient(#4285f4 0% 80%, #e67c30 80% 100%)' }}></div>
                  <div className="absolute top-1/4 left-1/4 text-blue-600 text-sm font-medium -translate-x-4 -translate-y-4">Unknown: 80%</div>
                  <div className="absolute bottom-1/4 right-1/4 text-orange-600 text-sm font-medium translate-x-8 translate-y-4">free: 20%</div>
                </div>
                <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4285f4]"></div>
                    Unknown
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e67c30]"></div>
                    free
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#f3f4f6] font-sans">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#3b5998] transition-all duration-300 flex flex-col shrink-0 overflow-y-auto`}>
        <div className="p-4 flex items-center justify-between sticky top-0 bg-[#3b5998] z-10">
          {sidebarOpen && <div className="font-bold text-lg text-white truncate pr-2">S.D.Taxation Associate</div>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-white/10 rounded text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
          </button>
        </div>

        {sidebarOpen && <div className="px-4 py-3 text-[10px] font-bold text-blue-200 tracking-wider">MAIN MENU</div>}

        <nav className="flex-1 px-2 py-2 space-y-0.5">
          {menuItems.map((item, idx) => (
            <SidebarItem key={idx} item={item} sidebarOpen={sidebarOpen} activePage={activePage} setActivePage={setActivePage} />
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6 shrink-0 shadow-sm">
          <h1 className="text-xl font-bold text-gray-800">{activePage === 'Dashboard Overview' ? 'Dashboard' : activePage}</h1>

          <div className="flex items-center gap-6">
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <Icons.Calendar className="w-4 h-4" />
              <span>28/Apr/26</span>
            </div>
            <div className="flex items-center text-sm text-gray-700 gap-2 cursor-pointer hover:text-gray-900">
              <Icons.User className="w-4 h-4" />
              <span className="font-medium">S. D. Taxation</span>
              <Icons.ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6 bg-[#f8fafc]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ item, sidebarOpen, activePage, setActivePage, isNested = false }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = item.icon;

  const checkActive = (i) => {
    if (typeof i === 'string') return i === activePage;
    if (i.name === activePage) return true;
    if (i.subItems) {
      return i.subItems.some(sub => checkActive(sub));
    }
    return false;
  };

  const isActive = checkActive(item);

  return (
    <div>
      <a
        href={item.subItems ? "#" : `#/${encodeURIComponent(item.name)}`}
        onClick={(e) => {
          if (item.subItems) {
            e.preventDefault();
            setExpanded(!expanded);
          }
        }}
        className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors font-semibold ${isActive
          ? isNested ? 'text-white' : 'bg-white text-[#3b5998]'
          : 'text-white hover:bg-white/10'
          } ${isNested ? 'py-1.5' : ''}`}
        title={!sidebarOpen ? item.name : undefined}
      >
        <div className="flex items-center">
          {Icon && <Icon className={`w-5 h-5 flex-shrink-0 stroke-[2.5] ${isActive && !isNested ? 'text-[#3b5998]' : 'text-white'}`} />}
          {sidebarOpen && (
            <span className={`${isNested ? 'text-[13px]' : 'ml-3 text-[14px]'} truncate ${isActive && isNested ? 'font-bold' : ''}`}>
              {item.name}
            </span>
          )}
        </div>
        {sidebarOpen && item.subItems && (
          <Icons.ChevronRight className={`w-4 h-4 transition-transform stroke-[3] ${isActive && !isNested ? 'text-[#3b5998]' : 'text-white'} ${expanded ? 'rotate-90' : ''}`} />
        )}
      </a>
      {sidebarOpen && expanded && item.subItems && (
        <div className={`${isNested ? 'pl-4' : 'pl-11'} pr-3 py-1 space-y-1`}>
          {item.subItems.map((sub, idx) => (
            typeof sub === 'string' ? (
              <a
                key={idx}
                href={`#/${encodeURIComponent(sub)}`}
                className={`block text-[13px] py-1.5 transition-colors ${activePage === sub ? 'text-white font-bold' : 'text-blue-100 hover:text-white'}`}
              >
                {sub}
              </a>
            ) : (
              <SidebarItem
                key={idx}
                item={sub}
                sidebarOpen={sidebarOpen}
                activePage={activePage}
                setActivePage={setActivePage}
                isNested={true}
              />
            )
          ))}
        </div>
      )}
    </div>
  );
}

function KpiCard({ title, value, subtitle, icon, trend }) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="bg-gray-50 w-8 h-8 rounded-full flex items-center justify-center text-blue-600">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-2">{value}</div>
      <div className={`text-xs flex items-center gap-1 ${trend === 'up' ? 'text-green-500' : 'text-gray-400'}`}>
        {trend === 'up' && <Icons.TrendingUp className="w-3 h-3" />}
        {trend === 'neutral' && <span>—</span>}
        {subtitle}
      </div>
    </div>
  );
}

function ColorCard({ title, value, subtext, color, icon }) {
  return (
    <div className={`${color} text-white rounded-lg p-5 shadow-sm relative overflow-hidden`}>
      <div className="relative z-10">
        <h3 className="text-sm font-medium opacity-90 mb-1">{title}</h3>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-xs opacity-80">{subtext}</div>
      </div>
      <div className="absolute right-4 bottom-4 z-0">
        {icon}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Stack,
  Collapse,
  InputBase,
} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import UnfoldLessRoundedIcon from '@mui/icons-material/UnfoldLessRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import useInView from '../hooks/useInView';

// 4-square grid icon matching the user's screenshot
function ModulesGridIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1D4D87"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

// Crossed wrench / tool icon matching BUILD YOUR OWN pill badge
function BuildYourOwnIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1D4D87"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

// Individual scroll-reveal component that flies in elements progressively as the user scrolls
function RevealOnScroll({
  children,
  delay = 0,
  variant = 'pop-up',
  sx = {},
  className = '',
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
  ...props
}) {
  const [ref, inView] = useInView({ threshold, rootMargin, once: true });
  return (
    <Box
      ref={ref}
      className={`reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
      sx={{
        transitionDelay: delay ? `${delay}s` : undefined,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

// Full School Management System Module Map with 17 Core Modules and detailed Sub-modules
const allModulesData = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    category: 'core',
    description: 'Executive overview command center with real-time KPI tracking, analytics, and health indicators.',
    icon: <BarChartRoundedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Executive Overview',
        items: [
          'Main Executive Overview',
          'School-wide Real-Time Operational Health',
          'Daily Attendance & Fee Collection Summary',
          'Critical Action Items & Urgent Alerts'
        ]
      },
      {
        title: 'Analytics & KPIs',
        items: [
          'Total Enrolment & Retention Metrics',
          'Revenue Collection vs Term Targets',
          'Staff & Student Attendance Rates',
          'Academic Grade Distribution Trends'
        ]
      }
    ]
  },
  {
    id: 'applications-admissions',
    title: 'Applications & Admissions',
    category: 'core',
    description: 'Prospect pipeline, applicant tracking, teacher & staff intake, and online admission fee collection.',
    icon: <PersonAddOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Student Admissions',
        items: [
          'Enquiry Management & Lead Pipeline',
          'Prospect Tracking & Follow-up Scheduling',
          'Application Drafts & Incomplete Submissions',
          'Full Digital Student Admission Form'
        ]
      },
      {
        title: 'Staff Applications',
        items: [
          'Teacher Applications & Resume Portal',
          'General & Administrative Staff Applications',
          'Interview Scheduling & Review Status'
        ]
      },
      {
        title: 'Admission Payments',
        items: [
          'Application Form Purchase Fees',
          'Admission Commitment Deposits',
          'Automated Receipting & Ledger Linking'
        ]
      }
    ]
  },
  {
    id: 'students',
    title: 'Students',
    category: 'core',
    description: 'Student directory, course registration, medical profiles, authorized pickups, and promotions.',
    icon: <GroupsOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Directory & Profiles',
        items: [
          'Comprehensive Student Directory & Dossiers',
          'Parent & Guardian Relationship Linking',
          'Emergency Contacts & Residential Data',
          'Official Document & Certificate Repository'
        ]
      },
      {
        title: 'Course Registration',
        items: [
          'Term Course Enrolment & Subject Selection',
          'Core vs Elective Subject Management',
          'Class Roster & Group Assignments'
        ]
      },
      {
        title: 'Care & Welfare',
        items: [
          'Medical Records, Allergies & Blood Groups',
          'Pickup / Drop-off Log with Authorized Collectors'
        ]
      },
      {
        title: 'Academic Progression',
        items: [
          'Annual Class Promotions & Batch Upgrades',
          'Graduation Management & Alumni Handover',
          'Certification Progress & Completion Tracking'
        ]
      }
    ]
  },
  {
    id: 'hr-staff',
    title: 'HR & Staff Management',
    category: 'core',
    description: 'Staff directory, automated payroll calculations, teacher leaderboards, workforce tasks, and leave.',
    icon: <SupervisorAccountOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Staff Directory / Profiles',
        items: [
          'Employee Profiles, Contracts & Qualifications',
          'Role & Department Assignment',
          'Document Uploads & National ID Records'
        ]
      },
      {
        title: 'Payroll Engine',
        items: [
          'Allowances, Deductions & Bonus Schemes',
          'Statutory Taxes & Pension Calculations',
          'Staff Loans, Repayment Schedules & Overtime',
          '1-Click Monthly Salary Generation & Payslips'
        ]
      },
      {
        title: 'Performance & Reviews',
        items: [
          'Teacher Leaderboard & Recognition',
          'Performance Appraisals & Goal Tracking',
          'HOD Evaluations & Feedback Logs'
        ]
      },
      {
        title: 'Workforce Management',
        items: [
          'Staff Task Manager & Delegation',
          'Internal Tickets & Administrative Requests',
          'Leave Management, Balances & Approvals'
        ]
      },
      {
        title: 'Communications',
        items: [
          'Staff Announcements & Bulletins',
          'Internal Teacher Resource Library'
        ]
      }
    ]
  },
  {
    id: 'academic-management',
    title: 'Academic Management',
    category: 'academics',
    description: 'Class hierarchy, subject configurations, timetable allocations, academic calendar, and student attendance.',
    icon: <MenuBookRoundedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Class Setup & Levels',
        items: [
          'Grade Levels, Streams & Classroom Setup',
          'Class Capacity & Room Number Allocations',
          'Homeroom Class Teacher Assignment'
        ]
      },
      {
        title: 'Subjects & Groups',
        items: [
          'Taught Subjects & Subject Groups',
          'Teacher & Class Group Assignments',
          'Departmental Subject Curriculums'
        ]
      },
      {
        title: 'Calendar & Configurations',
        items: [
          'Academic Year & Term Configuration',
          'School Holiday Calendars & Event Timelines',
          'Educational Systems & Regional Integrations'
        ]
      },
      {
        title: 'Attendance Management',
        items: [
          'Daily Student Attendance Roll-Call',
          'Subject-by-Subject Period Attendance',
          'Absenteeism Tracking & Automated Parent SMS'
        ]
      }
    ]
  },
  {
    id: 'learning-curriculum',
    title: 'Learning & Curriculum',
    category: 'academics',
    description: 'Digital lesson planning, curriculum tracking, e-learning portal, online quizzes, and extracurriculars.',
    icon: <MenuBookRoundedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Lesson Manager',
        items: [
          'Lesson Planning & Schemes of Work',
          'Curriculum Coverage & Pacing Tracking',
          'HOD Lesson Note Review & Digital Approvals'
        ]
      },
      {
        title: 'E-Learning & LMS',
        items: [
          'Digital Learning Center & Study Modules',
          'Online Exams, Practice Quizzes & Timed Tests',
          'Homework Submission & File Sharing'
        ]
      },
      {
        title: 'Extracurricular Activities',
        items: [
          'Clubs, Societies & Sports Teams Manager',
          'Activity Rosters & Participation Tracking'
        ]
      }
    ]
  },
  {
    id: 'grading-examinations',
    title: 'Grading & Examinations',
    category: 'academics',
    description: 'Continuous assessment, examination schedules, automated scorebooks, grading systems, and remarks.',
    icon: <FactCheckOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Subject Assessment',
        items: [
          'Continuous Assessment (CA) & Class Tests',
          'Student Performance Tracking by Subject',
          'Assessment Types Configuration & Weighting'
        ]
      },
      {
        title: 'Exams Manager',
        items: [
          'Exam Timetable Schedules & Hall Invigilation',
          'Online Exams Engine & Automated Marking',
          'Reassessment & Supplementary Exam Handling',
          'Exam Moderation & Audit Logs'
        ]
      },
      {
        title: 'Scorebook & Remarks',
        items: [
          'Digital Scorebook & Terminal Marks Entry',
          'Grading Scales & GPA Computation Rules',
          'Teacher & Principal Comments Manager'
        ]
      }
    ]
  },
  {
    id: 'billing-finance',
    title: 'Billing & Finance',
    category: 'operations',
    description: 'Universal POS, tuition fee structures, scholarships, expense auditing, and inventory tracking.',
    icon: <CreditCardOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Optional',
    submodules: [
      {
        title: 'Universal Payment & POS',
        items: [
          'Unified Point of Sale for School Bursary',
          'Mobile Money, Bank Transfer & Card Payments',
          'Student Wallets & Overpayments Balance'
        ]
      },
      {
        title: 'Billing & Fee Structures',
        items: [
          'Class/Program Specific Fee Structures',
          'Automated Bill Invoicing & Term Statements',
          'Discount Manager & Scholarship Allocations'
        ]
      },
      {
        title: 'Expenses & Transactions',
        items: [
          'School Expenses Tracking & Voucher Approvals',
          'Transactions & Auditing: Bill Items & Credit Notes',
          'Chart of Accounts & General Ledger Bookkeeping'
        ]
      },
      {
        title: 'Inventory Management',
        items: [
          'Suppliers, Categories & Stock Control',
          'Stock Transfers & Departmental Requisitions',
          'Purchase Orders & Goods Receipt Notes'
        ]
      },
      {
        title: 'Financial Communications',
        items: [
          'Automated Fee Notifications & Due Dates',
          'Payment Alerts & SMS Overdue Reminders',
          'Email Statement Manager'
        ]
      }
    ]
  },
  {
    id: 'reports',
    title: 'Reports & Analytics',
    category: 'core',
    description: 'Terminal report cards, transcripts, attendance patterns, and financial audit reports.',
    icon: <BarChartRoundedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Academic Reports',
        items: [
          'Terminal & Annual Grade Report Cards',
          'Cumulative Student Transcripts & Broad-sheets',
          'Student Performance & Class Ranking Reports'
        ]
      },
      {
        title: 'Administrative Reports',
        items: [
          'Student & Staff Attendance Reports',
          'Course Registration & Headcount Statistics',
          'Demographic & Class Distribution Reports'
        ]
      },
      {
        title: 'Financial Reports',
        items: [
          'Fee Collection Summaries & Real-time Ledger',
          'Outstanding Balance & Defaulters Reports',
          'Income vs Expenditure Financial Summaries'
        ]
      }
    ]
  },
  {
    id: 'transport',
    title: 'Transport (Logistics)',
    category: 'operations',
    description: 'Fleet management, bus route planning, live student bus roll-call, and vehicle maintenance.',
    icon: <DirectionsBusOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Add-on',
    submodules: [
      {
        title: 'Fleet & Drivers',
        items: [
          'Transport Dashboard & Vehicle Telematics',
          'Vehicles (Fleet Management) & Driver Profiles',
          'Scheduled Maintenance, Inspections & Repair Logs'
        ]
      },
      {
        title: 'Routes & Operations',
        items: [
          'Routes, Zones & Pickup/Drop-off Stop Setup',
          'Student Route & Seat Assignments',
          'Daily Bus Boarding Attendance Roll-Call'
        ]
      }
    ]
  },
  {
    id: 'accommodation',
    title: 'Accommodation (Hostels)',
    category: 'operations',
    description: 'Hostel and block administration, room/bed assignments, maintenance requests, and boarding fees.',
    icon: <HomeOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Add-on',
    submodules: [
      {
        title: 'Hostels & Rooms',
        items: [
          'Accommodation Dashboard & Capacity Overview',
          'Hostel Buildings, Blocks & Rooms Setup',
          'Hostel Fee Configuration by Category'
        ]
      },
      {
        title: 'Allocations & Maintenance',
        items: [
          'Student Room & Bed Reservations',
          'Hostel Check-in & Check-out Logging',
          'Room Maintenance & Repair Work Orders'
        ]
      }
    ]
  },
  {
    id: 'library',
    title: 'Library',
    category: 'operations',
    description: 'Cataloguing books and digital media, shelf organization, circulation desk, and overdue fines.',
    icon: <BookmarkBorderRoundedIcon sx={{ fontSize: 20 }} />,
    status: 'Add-on',
    submodules: [
      {
        title: 'Catalog & Indexing',
        items: [
          'Library Dashboard & Circulation Metrics',
          'Catalog: Books, Categories, Classes & Media Types',
          'Bulk Book & ISBN Import Tools'
        ]
      },
      {
        title: 'Shelving & Stock',
        items: [
          'Shelves, Aisles & Blocks Organization',
          'Physical Copy Barcoding & Inventory Audit'
        ]
      },
      {
        title: 'Patrons & Operations',
        items: [
          'Patrons (Students, Teachers & Staff Borrowers)',
          'Authors & Publishers Directory',
          'Fast Borrow & Return Circulation Desk',
          'Overdue Reminders & Fines Management'
        ]
      }
    ]
  },
  {
    id: 'system-settings',
    title: 'System Settings & Security',
    category: 'core',
    description: 'Granular permissions, multi-branch configuration, system audit telemetry, and archive retention.',
    icon: <SettingsOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Access Control & Roles',
        items: [
          'Granular Role Management & Permissions',
          'User Management & Authentication Policies',
          'Session Control & Security Safeguards'
        ]
      },
      {
        title: 'School Configuration',
        items: [
          'School Info, Crest & Digital Letterhead',
          'Branch & Multi-Campus Management',
          'Default Term Settings & Regional Localization'
        ]
      },
      {
        title: 'System Logs & Gateway',
        items: [
          'SMS Gateway Dashboard & Usage Balance',
          'Email Delivery & Error Dispatch Logs',
          'System Activity & Security Audit Logs'
        ]
      },
      {
        title: 'Utilities & Archives',
        items: [
          'Digital Notice Board Announcements',
          'Records & Archives (Document Retention)',
          'Temporary Classes & Data Staging',
          'Alumni Database & Historical Graduate Directory'
        ]
      }
    ]
  },
  {
    id: 'communications',
    title: 'Communication & Messaging',
    category: 'core',
    description: 'Centralized school communications, bulk SMS broadcasts, email announcements, and real-time messaging.',
    icon: <ChatBubbleOutlineRoundedIcon sx={{ fontSize: 20 }} />,
    status: 'Included',
    submodules: [
      {
        title: 'Broadcasts & SMS Gateway',
        items: [
          'Bulk SMS Broadcasts to Parents & Staff',
          'SMS Delivery Status & Gateway Credit Balance',
          'Automated Event & Attendance SMS Alerts',
          'Custom SMS Sender ID Configuration'
        ]
      },
      {
        title: 'Announcements & Circulars',
        items: [
          'School-wide Email Announcements',
          'Digital Noticeboard Circulars & Bulletins',
          'Departmental & Class Group Announcements',
          'Emergency Alert Broadcasts'
        ]
      },
      {
        title: 'Internal Messaging',
        items: [
          'Direct Teacher-to-Parent Messaging',
          'Staff Internal Chat & Collaborative Threads',
          'Centralized Notification Center',
          'Message Read Receipts & Delivery Tracking'
        ]
      }
    ]
  },
  {
    id: 'student-portal',
    title: 'Student Portal (/student/*)',
    category: 'portals',
    description: 'Personalized learner space for enrolled courses, homework submissions, online exams, report cards, and timetables.',
    icon: <AccountBalanceOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Optional',
    submodules: [
      {
        title: 'Academics & Study',
        items: [
          'Student Dashboard with Upcoming Tasks & Notices',
          'Courses & Assignments with File Submissions',
          'Daily Attendance & Timetable Class Schedule'
        ]
      },
      {
        title: 'Assessments & Results',
        items: [
          'My Exams & E-Learning (Learning Center, Online Exams)',
          'My Performance, Grades, & Official Certificates',
          'Past Term Report Cards Download'
        ]
      },
      {
        title: 'Resources & School Life',
        items: [
          'Lecture Notes, Subject Documents & Study Resources',
          'School Events, Deadlines & Instant Notifications'
        ]
      }
    ]
  },
  {
    id: 'teacher-portal',
    title: 'Teacher Portal (/teacher/*)',
    category: 'portals',
    description: 'Teacher command hub for homeroom classes, lesson notes, digital scorebooks, exam grading, and parent messaging.',
    icon: <CoPresentOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Optional',
    submodules: [
      {
        title: 'Classroom Instruction',
        items: [
          'Teacher Dashboard with Daily Teaching Schedule',
          'My Classes (Homeroom) & Teaching Subjects',
          'Lesson Manager & Lesson Note Submission'
        ]
      },
      {
        title: 'Grading & Exams',
        items: [
          'Digital Scorebook & Continuous Assessment Marksheet',
          'Exams Manager & Comments Manager for Terminal Reports',
          'E-Learning & Online Exam Creation'
        ]
      },
      {
        title: 'Student Care & Outreach',
        items: [
          'My Students & Performance Analytics',
          'Extracurricular Activities & Club Supervision',
          'Message Center & Parent/Student Notifications',
          'Teacher Expenses, Personal Schedule, & Resources'
        ]
      }
    ]
  },
  {
    id: 'parent-portal',
    title: 'Parent Portal (/parent/*)',
    category: 'portals',
    description: 'Guardian window to monitor child academic performance, pay school fees online, view attendance, and contact teachers.',
    icon: <SupervisorAccountOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Optional',
    submodules: [
      {
        title: 'Ward Progress',
        items: [
          'Parent Dashboard for All Enrolled Wards',
          'Student Info & Real-time Academic Progress',
          'Terminal Report Cards Download & Teacher Remarks'
        ]
      },
      {
        title: 'Bills & Payments',
        items: [
          'Bills & Payments (Tuition, Meals, Transport & Services)',
          'Instant Mobile Money & Card Payment Gateway',
          'Official Payment Receipts & Statement Downloads'
        ]
      },
      {
        title: 'Safety & Direct Comms',
        items: [
          'Pickup & Drop-off Log with Verified Collector Badges',
          'Child Medical Records & Health Alerts',
          'School Events Calendar & Direct Teacher Inbox'
        ]
      }
    ]
  },
  {
    id: 'staff-portal',
    title: 'Staff Portal (/staff/*)',
    category: 'portals',
    description: 'Employee hub for clocking attendance, submitting leave, tracking assigned tasks, viewing payslips, and support tickets.',
    icon: <GroupsOutlinedIcon sx={{ fontSize: 20 }} />,
    status: 'Optional',
    submodules: [
      {
        title: 'HR Self-Service',
        items: [
          'Staff Dashboard & Personal Employment Dossier',
          'Daily Attendance Clock-in & Clock-out Log',
          'Leave Applications, Balances & Status'
        ]
      },
      {
        title: 'Workforce & Tasks',
        items: [
          'My Assigned Tasks & Project Performance',
          'Internal Helpdesk Tickets & Maintenance Requests',
          'Staff Resource Library & School Policy Manuals'
        ]
      },
      {
        title: 'Payroll & Privileges',
        items: [
          'Payroll History & Confidential Payslip Downloads',
          'Role-specific Access to HR or Finance Modules based on permissions'
        ]
      }
    ]
  }
];

// Full list of capability cards matching the complete system
const capabilityList = [
  { title: 'Dashboard', status: 'Included' },
  { title: 'Applications & Admissions', status: 'Included' },
  { title: 'Student Management', status: 'Included' },
  { title: 'HR & Staff Management', status: 'Included' },
  { title: 'Academic Management', status: 'Included' },
  { title: 'Learning & Curriculum', status: 'Included' },
  { title: 'Grading & Examinations', status: 'Included' },
  { title: 'Reports & Analytics', status: 'Included' },
  { title: 'System Settings & Security', status: 'Included' },
  { title: 'Communication & Messaging', status: 'Included' },
  { title: 'Teacher Portal', status: 'Optional' },
  { title: 'Staff Portal', status: 'Optional' },
  { title: 'Parent Portal', status: 'Optional' },
  { title: 'Student Portal', status: 'Optional' },
  { title: 'Billing & Finance', status: 'Optional' },
  { title: 'Transport (Logistics)', status: 'Add-on' },
  { title: 'Accommodation (Hostels)', status: 'Add-on' },
  { title: 'Library', status: 'Add-on' },
];

const moduleHashMap = {
  '#modules-administration': 'system-settings',
  '#modules-system-settings': 'system-settings',
  '#modules-student-management': 'students',
  '#modules-students': 'students',
  '#modules-academic-management': 'academic-management',
  '#modules-teacher-portal': 'teacher-portal',
  '#modules-staff-portal': 'staff-portal',
  '#modules-parent-portal': 'parent-portal',
  '#modules-student-portal': 'student-portal',
  '#modules-communication': 'communications',
  '#modules-communications': 'communications',
};

export default function Modules() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, once: true });
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle hash navigation and deep scrolling
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      const targetId = moduleHashMap[hash];

      if (targetId) {
        setSearchQuery('');
        setActiveCategory('all');
        setExpandedCardId(targetId);

        setTimeout(() => {
          const el = document.getElementById(`module-${targetId}`);
          if (el) {
            const yOffset = -90;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 150);
      } else if (hash === '#modules' || hash === '') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleCard = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const categories = [
    { id: 'all', label: 'All Modules', count: allModulesData.length },
    { id: 'core', label: 'Core Admin', count: allModulesData.filter((m) => m.category === 'core').length },
    { id: 'academics', label: 'Academics & Learning', count: allModulesData.filter((m) => m.category === 'academics').length },
    { id: 'portals', label: 'Role Portals', count: allModulesData.filter((m) => m.category === 'portals').length },
    { id: 'operations', label: 'Operations & Logistics', count: allModulesData.filter((m) => m.category === 'operations').length },
  ];

  const filteredModules = useMemo(() => {
    return allModulesData.filter((mod) => {
      const matchesCategory =
        activeCategory === 'all' || mod.category === activeCategory;
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchesTitle = mod.title.toLowerCase().includes(q);
      const matchesDesc = mod.description.toLowerCase().includes(q);
      const matchesSub = mod.submodules.some(
        (sub) =>
          sub.title.toLowerCase().includes(q) ||
          sub.items.some((item) => item.toLowerCase().includes(q))
      );
      return matchesTitle || matchesDesc || matchesSub;
    });
  }, [searchQuery, activeCategory]);

  const renderStatusBadge = (status) => {
    let bg = '#DAEDFF';
    let color = '#1D4D87';
    if (status === 'Optional') {
      bg = '#F5ECE3';
      color = '#785336';
    } else if (status === 'Add-on') {
      bg = '#FEF3C7';
      color = '#92400E';
    }

    return (
      <Box
        sx={{
          backgroundColor: bg,
          color: color,
          fontSize: '12px',
          fontWeight: 600,
          px: '13px',
          py: '3.5px',
          borderRadius: '9999px',
          display: 'inline-flex',
          alignItems: 'center',
          lineHeight: '16px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {status}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FDFBF9',
        color: '#191309',
        fontFamily: "'Inter', sans-serif",
        overflowX: 'hidden',
      }}
    >
      <NavigationBar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* SECTION 1: HERO HEADER */}
        <Box
          ref={heroRef}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            pt: { xs: 15, sm: 17, md: 19 },
            pb: { xs: 4, md: 5 },
            px: 2,
            textAlign: 'center',
            backgroundColor: '#fbfcfd',
            backgroundImage: `
              radial-gradient(circle at 12% 16%, rgba(191, 219, 254, 0.42) 0%, rgba(219, 234, 254, 0.18) 35%, transparent 60%),
              radial-gradient(circle at 88% 12%, rgba(254, 240, 138, 0.48) 0%, rgba(254, 243, 199, 0.22) 32%, transparent 58%),
              radial-gradient(circle at 50% 30%, rgba(243, 244, 246, 0.5) 0%, transparent 70%)
            `,
          }}
        >
          {/* Background Architectural Grid Lines Pattern */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 0,
              backgroundImage: `
                linear-gradient(to right, rgba(15, 23, 42, 0.052) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(15, 23, 42, 0.052) 1px, transparent 1px)
              `,
              backgroundSize: '56px 56px',
              backgroundPosition: 'center top',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.15) 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.15) 92%, transparent 100%)',
            }}
          />

          <Container
            maxWidth="md"
            className={`reveal-init ${heroInView ? 'is-visible' : ''}`}
            sx={{ position: 'relative', zIndex: 1 }}
          >
            {/* Pill Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                backgroundColor: '#DAEDFF',
                color: '#1D4D87',
                px: '14px',
                py: '4.5px',
                borderRadius: '9999px',
                mb: 2.8,
              }}
            >
              <ModulesGridIcon />
              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1,
                }}
              >
                MODULES & PRICING
              </Typography>
            </Box>

            {/* Headline */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '32px', sm: '44px', md: '52px' },
                lineHeight: 1.15,
                letterSpacing: '-1.1px',
                color: '#0B0702',
                mb: 2.2,
              }}
            >
              Everything your school needs.
            </Typography>

            {/* Subtitle with natural wrapping matching mockup */}
            <Typography
              sx={{
                fontSize: { xs: '15px', sm: '16.5px' },
                lineHeight: '26px',
                color: '#5B5449',
                maxWidth: '610px',
                mx: 'auto',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              A modular platform — start with the essentials and expand as your school grows. Click any module card to explore its detailed sub-modules.
            </Typography>
          </Container>
        </Box>

        {/* SECTION 2: MODULE CARDS GRID WITH INTERACTIVE COLLAPSIBLE CARDS */}
        <Box
          sx={{
            pt: { xs: 3, md: 4 },
            pb: { xs: 9, md: 12 },
            backgroundColor: '#FDFBF9',
            borderTop: 'none',
            borderBottom: 'none',
          }}
        >
          <Container maxWidth={false} sx={{ maxWidth: '1216px !important', mx: 'auto', px: { xs: 2.5, sm: 3 } }}>
            {/* Filter & Search Toolbar */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'stretch', md: 'center' },
                justifyContent: 'space-between',
                gap: 2,
                mb: 4,
              }}
            >
              {/* Left: Category Filter Pills */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  overflowX: 'auto',
                  pb: { xs: 1, md: 0 },
                  '::-webkit-scrollbar': { display: 'none' },
                }}
              >
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <Box
                      key={cat.id}
                      component="button"
                      onClick={() => setActiveCategory(cat.id)}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        px: '14px',
                        py: '7px',
                        borderRadius: '9999px',
                        border: isActive ? '1.5px solid #1D4D87' : '1px solid #E5E0D8',
                        backgroundColor: isActive ? '#1D4D87' : '#FFFFFF',
                        color: isActive ? '#FFFFFF' : '#4B5563',
                        fontSize: '13px',
                        fontWeight: isActive ? 600 : 500,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': {
                          borderColor: '#1D4D87',
                          backgroundColor: isActive ? '#1D4D87' : '#F8FAFC',
                        },
                      }}
                    >
                      <span>{cat.label}</span>
                      <Box
                        component="span"
                        sx={{
                          fontSize: '11px',
                          fontWeight: 650,
                          px: '6px',
                          py: '1.5px',
                          borderRadius: '9999px',
                          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.22)' : '#F3F4F6',
                          color: isActive ? '#FFFFFF' : '#6B7280',
                        }}
                      >
                        {cat.count}
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              {/* Right: Search Box + Expand/Collapse All Button */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  flexShrink: 0,
                  width: { xs: '100%', md: 'auto' },
                  flexWrap: { xs: 'wrap', sm: 'nowrap' },
                }}
              >
                {/* Search Input */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E0D8',
                    borderRadius: '10px',
                    px: 1.5,
                    py: 0.6,
                    width: { xs: '100%', sm: '260px' },
                    transition: 'all 0.2s ease',
                    '&:focus-within': {
                      borderColor: '#1D4D87',
                      boxShadow: '0 0 0 2px rgba(29, 77, 135, 0.1)',
                    },
                  }}
                >
                  <SearchRoundedIcon sx={{ fontSize: 18, color: '#9CA3AF', mr: 1 }} />
                  <InputBase
                    placeholder="Search sub-modules..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                      fontSize: '13px',
                      fontFamily: "'Inter', sans-serif",
                      width: '100%',
                    }}
                  />
                  {searchQuery && (
                    <CloseRoundedIcon
                      sx={{ fontSize: 16, color: '#9CA3AF', cursor: 'pointer', '&:hover': { color: '#111827' } }}
                      onClick={() => setSearchQuery('')}
                    />
                  )}
                </Box>

                {/* Collapse Open Card Button (shown when any card is open) */}
                {expandedCardId && (
                  <Button
                    variant="outlined"
                    onClick={() => setExpandedCardId(null)}
                    startIcon={<UnfoldLessRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      textTransform: 'none',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      color: '#1D4D87',
                      borderColor: '#CBD5E1',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '9px',
                      px: 1.8,
                      py: 0.8,
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        borderColor: '#1D4D87',
                        backgroundColor: '#F0F7FF',
                      },
                    }}
                  >
                    Collapse Open Card
                  </Button>
                )}
              </Box>
            </Box>

            {/* Empty Search State */}
            {filteredModules.length === 0 && (
              <Box
                sx={{
                  textAlign: 'center',
                  py: 8,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px dashed #CBD5E1',
                }}
              >
                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#191309', mb: 1 }}>
                  No modules matching "{searchQuery}"
                </Typography>
                <Typography sx={{ fontSize: '14px', color: '#6B7280', mb: 2 }}>
                  Try searching for keywords like payroll, admissions, attendance, exams, library, or bus.
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  sx={{ textTransform: 'none', borderRadius: '8px' }}
                >
                  Clear search filters
                </Button>
              </Box>
            )}

            {/* Grid of Collapsible Cards */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)',
                },
                gap: '20px',
                alignItems: 'start',
              }}
            >
              {filteredModules.map((mod, idx) => {
                const isExpanded = expandedCardId === mod.id;
                const totalSubFeatures = mod.submodules.reduce((acc, g) => acc + g.items.length, 0);

                return (
                  <RevealOnScroll
                    key={mod.id}
                    delay={(idx % 3) * 0.06}
                    threshold={0.06}
                    rootMargin="0px 0px -30px 0px"
                  >
                    <Card
                      id={`module-${mod.id}`}
                      elevation={0}
                      sx={{
                        backgroundColor: '#FFFFFF',
                        border: isExpanded ? '1.5px solid #2863AB' : '1px solid #EFEBE4',
                        borderRadius: '14px',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                        boxShadow: isExpanded
                          ? '0 12px 30px rgba(40, 99, 171, 0.1)'
                          : '0 2px 8px rgba(0, 0, 0, 0.02)',
                        overflow: 'hidden',
                        '&:hover': {
                          borderColor: '#2863AB',
                          boxShadow: '0 10px 24px rgba(40, 99, 171, 0.08)',
                          transform: isExpanded ? 'none' : 'translateY(-3px)',
                          '& .module-icon-box': {
                            backgroundColor: '#1E56A0',
                            color: '#FFFFFF',
                          },
                        },
                      }}
                    >
                      {/* Card Header & Summary (Clickable to toggle) */}
                      <Box
                        onClick={() => toggleCard(mod.id)}
                        sx={{
                          p: { xs: '22px 20px', sm: '24px 22px' },
                          cursor: 'pointer',
                          userSelect: 'none',
                        }}
                      >
                        {/* Top Row: Icon + Status badge + Sub-modules badge */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                          <Box
                            className="module-icon-box"
                            sx={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '9px',
                              backgroundColor: isExpanded ? '#1E56A0' : '#DAEDFF',
                              color: isExpanded ? '#FFFFFF' : '#2863AB',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                          >
                            {mod.icon}
                          </Box>

                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box
                              sx={{
                                fontSize: '11px',
                                fontWeight: 600,
                                color: '#6B7280',
                                backgroundColor: '#F3F4F6',
                                px: '9px',
                                py: '3px',
                                borderRadius: '9999px',
                                fontFamily: "'Inter', sans-serif",
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {mod.submodules.length} {mod.submodules.length === 1 ? 'group' : 'groups'}
                            </Box>
                            {renderStatusBadge(mod.status)}
                          </Box>
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "'Sora', sans-serif",
                            fontWeight: 700,
                            fontSize: '16.5px',
                            lineHeight: '22px',
                            letterSpacing: '-0.2px',
                            color: '#191309',
                            mb: 0.8,
                          }}
                        >
                          {mod.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '13.5px',
                            lineHeight: '20px',
                            color: '#6B7280',
                            mb: 2,
                            minHeight: '40px',
                          }}
                        >
                          {mod.description}
                        </Typography>

                        {/* Bottom Toggle Bar with interactive button */}
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            pt: 1.6,
                            borderTop: '1px solid #F1ECE4',
                            color: isExpanded ? '#1D4D87' : '#2863AB',
                            fontSize: '13px',
                            fontWeight: 650,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <span>{isExpanded ? 'Hide sub-modules' : 'Explore sub-modules'}</span>
                            <Typography component="span" sx={{ fontSize: '11.5px', color: '#6B7280', fontWeight: 500 }}>
                              ({totalSubFeatures} features)
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 26,
                              height: 26,
                              borderRadius: '50%',
                              backgroundColor: isExpanded ? '#DAEDFF' : '#F4EFEA',
                              color: '#1D4D87',
                              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease',
                            }}
                          >
                            <ExpandMoreRoundedIcon sx={{ fontSize: 18 }} />
                          </Box>
                        </Box>
                      </Box>

                      {/* Collapsible Content Area */}
                      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                        <Box
                          sx={{
                            px: { xs: '20px', sm: '22px' },
                            pb: { xs: '22px', sm: '24px' },
                            pt: 0,
                            backgroundColor: '#FAFCFE',
                            borderTop: '1px solid #E3ECF6',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '11px',
                              fontWeight: 700,
                              letterSpacing: '0.07em',
                              textTransform: 'uppercase',
                              color: '#1D4D87',
                              mb: 1.8,
                              pt: 2.2,
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            Included Sub-Modules & Capabilities
                          </Typography>

                          <Stack spacing={1.6}>
                            {mod.submodules.map((group, gIdx) => (
                              <Box
                                key={gIdx}
                                sx={{
                                  backgroundColor: '#FFFFFF',
                                  border: '1px solid #E8EEF5',
                                  borderRadius: '10px',
                                  p: '14px 16px',
                                  boxShadow: '0 2px 6px rgba(40, 99, 171, 0.03)',
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.2 }}>
                                  <Typography
                                    sx={{
                                      fontFamily: "'Sora', sans-serif",
                                      fontWeight: 650,
                                      fontSize: '13.5px',
                                      color: '#0F172A',
                                    }}
                                  >
                                    {group.title}
                                  </Typography>
                                  <Box
                                    sx={{
                                      fontSize: '10.5px',
                                      fontWeight: 600,
                                      color: '#1D4D87',
                                      backgroundColor: '#EBF4FF',
                                      px: '8px',
                                      py: '2px',
                                      borderRadius: '9999px',
                                      fontFamily: "'Inter', sans-serif",
                                    }}
                                  >
                                    {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
                                  </Box>
                                </Box>

                                <Stack spacing={0.85}>
                                  {group.items.map((item, iIdx) => (
                                    <Box
                                      key={iIdx}
                                      sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 1.2,
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: 5,
                                          height: 5,
                                          borderRadius: '50%',
                                          backgroundColor: '#2863AB',
                                          mt: '7px',
                                          flexShrink: 0,
                                        }}
                                      />
                                      <Typography
                                        sx={{
                                          fontFamily: "'Inter', sans-serif",
                                          fontSize: '12.5px',
                                          lineHeight: '18px',
                                          color: '#475569',
                                          fontWeight: 450,
                                        }}
                                      >
                                        {item}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Stack>
                              </Box>
                            ))}
                          </Stack>

                          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Button
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCard(mod.id);
                              }}
                              sx={{
                                textTransform: 'none',
                                fontSize: '12px',
                                color: '#1D4D87',
                                fontWeight: 600,
                                p: 0,
                                minWidth: 0,
                                fontFamily: "'Inter', sans-serif",
                                '&:hover': {
                                  backgroundColor: 'transparent',
                                  textDecoration: 'underline',
                                },
                              }}
                            >
                              Collapse details ▲
                            </Button>
                          </Box>
                        </Box>
                      </Collapse>
                    </Card>
                  </RevealOnScroll>
                );
              })}
            </Box>
          </Container>
        </Box>

        {/* SECTION 3: PRICING TIERS */}
        <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#FFFFFF' }}>
          <Container maxWidth="lg">
            <RevealOnScroll variant="init" sx={{ textAlign: 'center', mb: 6 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  backgroundColor: '#DAEDFF',
                  color: '#1D4D87',
                  px: '14px',
                  py: '4px',
                  borderRadius: '9999px',
                  mb: 2,
                }}
              >
                <LocalOfferRoundedIcon sx={{ fontSize: 14 }} />
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Pricing
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '28px', sm: '36px' },
                  lineHeight: '40px',
                  letterSpacing: '-0.72px',
                  color: '#0B0702',
                  mb: 1.5,
                }}
              >
                Flexible plans for every school.
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#5B5449',
                }}
              >
                Transparent tiers designed to scale with your school. Reach out for a tailored quote.
              </Typography>
            </RevealOnScroll>

            {/* Pricing Cards Grid (Exact 2-Card side-by-side layout) */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: '24px',
                maxWidth: '780px',
                mx: 'auto',
                alignItems: 'stretch',
                pt: 2,
              }}
            >
              {/* Left Card: Standard Tier (Most Popular) */}
              <RevealOnScroll delay={0} sx={{ height: '100%' }}>
                <Card
                  elevation={0}
                  sx={{
                    position: 'relative',
                    overflow: 'visible !important',
                    p: { xs: '32px 24px', sm: '36px 30px' },
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #2863AB',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(40, 99, 171, 0.06)',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 28px rgba(40, 99, 171, 0.12)',
                    },
                  }}
                >
                  {/* Floating "Most popular" Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#1E56A0',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 600,
                      px: '14px',
                      py: '3.5px',
                      borderRadius: '9999px',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.01em',
                      zIndex: 2,
                      fontFamily: "'Inter', sans-serif",
                      boxShadow: '0 2px 6px rgba(30, 86, 160, 0.25)',
                    }}
                  >
                    Most popular
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: '19px',
                      lineHeight: '26px',
                      color: '#111827',
                      mb: 0.8,
                    }}
                  >
                    Standard
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: '13.5px',
                      lineHeight: '20px',
                      color: '#6B7280',
                      minHeight: '40px',
                      mb: 2.5,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Best suited for schools running core academic, admin, billing & communication operations.
                  </Typography>

                  {/* Price in Ghana Cedis */}
                  <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: '34px', sm: '38px' },
                        lineHeight: '42px',
                        color: '#0B0702',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      GH₵ 35.00
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                      / student / term
                    </Typography>
                  </Box>

                  {/* Price Subtext */}
                  <Typography
                    sx={{
                      fontSize: '12px',
                      color: '#1E56A0',
                      fontWeight: 600,
                      mb: 2.5,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Entry / First term rate: GH₵ 17 / student · 1st Month Free
                  </Typography>

                  {/* Feature List */}
                  <Stack spacing={1.4} sx={{ mb: 4, flexGrow: 1 }}>
                    {[
                      'Student Admissions & Bulk Enrolment',
                      'Subject Assessment & Comments Manager',
                      'Automated Report Cards & Publishing',
                      'Universal Fee Billing & Instant MoMo Receipts',
                      'Student, Teacher & Parent Portals (Core)',
                      'HR: Staff Directory & Task Assignment',
                      'Academic Attendance & Class Scheduling',
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
                        <Box
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            backgroundColor: '#DAEDFF',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.5 4L3.75 6.25L8.5 1.5"
                              stroke="#1D4D87"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                        <Typography sx={{ fontSize: '13.2px', color: '#4B5563', fontWeight: 450, fontFamily: "'Inter', sans-serif" }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {/* CTA Button: Solid Blue */}
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                      window.location.hash = '#book-demo';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '16px !important' }} />}
                    sx={{
                      height: '44px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '14px',
                      textTransform: 'none',
                      backgroundColor: '#1E56A0',
                      color: '#FFFFFF',
                      boxShadow: 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#16437E',
                        boxShadow: '0 4px 12px rgba(30, 86, 160, 0.25)',
                      },
                    }}
                  >
                    Book a Demo
                  </Button>
                </Card>
              </RevealOnScroll>

              {/* Right Card: Premium Tier */}
              <RevealOnScroll delay={0.12} sx={{ height: '100%' }}>
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: '32px 24px', sm: '36px 30px' },
                    backgroundColor: '#FAF8F5',
                    border: '1px solid #EFEBE4',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.04)',
                      borderColor: '#CBD5E1',
                    },
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: '19px',
                      lineHeight: '26px',
                      color: '#111827',
                      mb: 0.8,
                    }}
                  >
                    Premium
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: '13.5px',
                      lineHeight: '20px',
                      color: '#6B7280',
                      minHeight: '40px',
                      mb: 2.5,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Full platform — all 20 modules & 4 portals completely unlocked for schools running full operations.
                  </Typography>

                  {/* Price in Ghana Cedis */}
                  <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: '34px', sm: '38px' },
                        lineHeight: '42px',
                        color: '#1E56A0',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      GH₵ 45.00
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                      / student / term
                    </Typography>
                  </Box>

                  {/* Price Subtext */}
                  <Typography
                    sx={{
                      fontSize: '12px',
                      color: '#1E56A0',
                      fontWeight: 600,
                      mb: 2.5,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Entry / First term rate: GH₵ 35 / student · 1st Month Free
                  </Typography>

                  {/* Feature List */}
                  <Stack spacing={1.4} sx={{ mb: 4, flexGrow: 1 }}>
                    {[
                      'Everything in Standard, plus:',
                      'Full Exam Manager & Scorebook Analytics',
                      'Full Payroll (PAYE & SSNIT Tax Reporting)',
                      'Transport Module with GPS & Boarding Confirmation',
                      'Accommodation & Boarding Hostel Management',
                      'Complete Digital Library Management System',
                      'E-Learning & Virtual Classrooms Module',
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
                        <Box
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            backgroundColor: '#DAEDFF',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.5 4L3.75 6.25L8.5 1.5"
                              stroke="#1D4D87"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: '13.2px',
                            color: idx === 0 ? '#1E56A0' : '#4B5563',
                            fontWeight: idx === 0 ? 700 : 450,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {/* CTA Button: Neutral Outlined */}
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                      window.location.hash = '#contact';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '16px !important' }} />}
                    sx={{
                      height: '44px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '14px',
                      textTransform: 'none',
                      backgroundColor: '#FFFFFF',
                      borderColor: '#EFEBE4',
                      color: '#111827',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#F8FAFC',
                        borderColor: '#CBD5E1',
                      },
                    }}
                  >
                    Talk to Us
                  </Button>
                </Card>
              </RevealOnScroll>
            </Box>
          </Container>
        </Box>

        {/* SECTION 4: CAPABILITIES / BUILD YOUR OWN (PIXEL PERFECT MATCH TO MOCKUP) */}
        <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#FDFBF9' }}>
          <Container maxWidth="lg">
            {/* Header: Badge + Heading + Subtitle + Legend */}
            <RevealOnScroll variant="init" sx={{ textAlign: 'center', mb: 5 }}>
              {/* BUILD YOUR OWN Pill Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  backgroundColor: '#DAEDFF',
                  color: '#1D4D87',
                  px: '14px',
                  py: '4.5px',
                  borderRadius: '9999px',
                  mb: 2.2,
                }}
              >
                <BuildYourOwnIcon />
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  BUILD YOUR OWN
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '30px', sm: '38px', md: '44px' },
                  lineHeight: { xs: '38px', sm: '46px', md: '52px' },
                  letterSpacing: '-0.02em',
                  color: '#0B0702',
                  mb: 2,
                  maxWidth: '720px',
                  mx: 'auto',
                }}
              >
                Choose the capabilities your school needs.
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: '#5B5449',
                  maxWidth: '620px',
                  mx: 'auto',
                  mb: 4.5,
                }}
              >
                Mix and match modules to create a setup that fits your requirements and budget.
              </Typography>

              {/* Legend matching screenshot */}
              <Stack direction="row" spacing={3.5} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#2863AB' }} />
                  <Typography sx={{ fontSize: '13.5px', color: '#5B5449', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                    Included
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#8B6F52' }} />
                  <Typography sx={{ fontSize: '13.5px', color: '#5B5449', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                    Optional
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#DE9D16' }} />
                  <Typography sx={{ fontSize: '13.5px', color: '#5B5449', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                    Add-on
                  </Typography>
                </Box>
              </Stack>
            </RevealOnScroll>

            {/* Matrix Grid (Exact 3 Columns via CSS Grid to prevent squishing) */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: '16px',
                mb: 5,
              }}
            >
              {capabilityList.map((item, index) => {
                const colIndex = index % 3;
                return (
                  <RevealOnScroll
                    key={index}
                    delay={colIndex * 0.08}
                    threshold={0.08}
                    rootMargin="0px 0px -30px 0px"
                  >
                    <Box
                      sx={{
                        px: '24px',
                        py: '18px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #EFEBE4',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        minHeight: '66px',
                        boxSizing: 'border-box',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        '&:hover': {
                          borderColor: '#CBD5E1',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 18px rgba(0,0,0,0.04)',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: '15px',
                          color: '#191309',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.title}
                      </Typography>
                      {renderStatusBadge(item.status)}
                    </Box>
                  </RevealOnScroll>
                );
              })}
            </Box>

            {/* Centered CTA Button matching screenshot */}
            <RevealOnScroll variant="pop-up" sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                onClick={() => {
                  window.location.hash = '#contact';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '15px !important' }} />}
                sx={{
                  py: 1.25,
                  px: 3.8,
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textTransform: 'none',
                  backgroundColor: '#2863AB',
                  color: '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(40, 99, 171, 0.2)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#1E56A0',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(40, 99, 171, 0.3)',
                  },
                }}
              >
                Get a tailored quote
              </Button>
            </RevealOnScroll>
          </Container>
        </Box>

        {/* SECTION 5: CTA BANNER */}
        <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 10 } }}>
          <RevealOnScroll variant="pop-up">
            <Box
              sx={{
                p: { xs: 4, md: 7 },
                background: 'linear-gradient(102.61deg, #2863AB 0%, #3A7BCB 60%, #DE9D16 100%)',
                borderRadius: '12px',
                textAlign: 'center',
                color: '#FDFBF9',
                boxShadow: '0 12px 30px rgba(40, 99, 171, 0.18)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '24px', md: '30px' },
                  lineHeight: '36px',
                  letterSpacing: '-0.6px',
                  mb: 1.5,
                }}
              >
                Not sure which modules you need?
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgba(247, 245, 241, 0.9)',
                  mb: 3.5,
                  maxWidth: 540,
                  mx: 'auto',
                }}
              >
                Book a demo and we’ll help you design the right setup for your school.
              </Typography>

              <Button
                variant="contained"
                onClick={() => { window.location.hash = '#book-demo'; }}
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '16px !important' }} />}
                sx={{
                  py: 1.3,
                  px: 3.5,
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textTransform: 'none',
                  backgroundColor: '#FDFBF9',
                  color: '#1D4D87',
                  '&:hover': { backgroundColor: '#ffffff' },
                }}
              >
                Book a Demo
              </Button>
            </Box>
          </RevealOnScroll>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

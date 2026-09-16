import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Stack,
  Slider,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// Pricing tag icon matching system styling
function PricingTagIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1D4D87"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1.5" fill="#1D4D87" />
    </svg>
  );
}

// Light blue circular disc with blue checkmark
function PricingCheckIcon() {
  return (
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
  );
}

const standardInclusions = [
  'Student admissions, records & bulk enrolment',
  'Course registration — single student & bulk upload',
  'Subject assessment, grade entry & comments manager',
  'Automated report card generation & publishing',
  'Universal fee billing, payments & receipt generation',
  'Student penalties, discount manager & scholarships',
  'General payments & income tracking',
  'Universal Mobile Money payments (MTN MoMo, Telecel Cash, AT Money)',
  'Student, teacher & parent portals (core access)',
  'Academic calendar, student & teacher groups',
  'School settings — class levels, subjects, grading scales',
  'HR: staff management & task assignment',
  'Academic management — full class attendance',
  'Grade reports & analytics dashboard',
  'Notice board & school communications',
  'SMS & push notifications',
  'Branch management & educational systems setup',
];

const premiumInclusions = [
  'Everything in Standard, plus:',
  'Full Exam Manager — creation, scheduling & grading',
  'Scorebook — all academic records & score analytics',
  'Lesson Manager — lesson plans, drafts & analytics',
  'Temporary Classes Module (extra & holiday classes)',
  'Full Payroll — salary setup, loans, bonuses, payslips & GRA tax (PAYE/SSNIT)',
  'Transport module — routes, vehicles, drivers, schedules & GPS tracking',
  'Accommodation / Hostel management',
  'Complete Digital Library — books, patrons, fines, imports & reports',
  'E-Learning module — online courses & virtual classrooms',
  'Full Parent Portal: bills, pickup/dropoff & medical records',
  'Advanced billing: fee notifications & email manager',
  'Complete analytics dashboard & financial reporting suite',
  'HR: Performance Manager, announcements & resource library',
  'HR: Tickets & bug report management',
  'Alumni & extracurricular modules',
];

const comparisonFeatures = [
  { feature: 'Core Academics & Student Registry', standard: true, premium: true },
  { feature: 'Universal Fee Billing & Instant MoMo Receipts', standard: true, premium: true },
  { feature: 'Student, Teacher & Parent Portals (Core Access)', standard: true, premium: true },
  { feature: 'Automated Report Cards & Grade Publishing', standard: true, premium: true },
  { feature: 'HR (Core) — Staff Directory & Task Assignment', standard: true, premium: true },
  { feature: 'Exams, Scorebook & Lesson Manager', standard: false, premium: true },
  { feature: 'Full Digital Library Management System', standard: false, premium: true },
  { feature: 'Full Payroll with SSNIT & GRA PAYE Tax Setup', standard: false, premium: true },
  { feature: 'Transport Fleet & Student Safety Boarding Tracking', standard: false, premium: true },
  { feature: 'Accommodation & Boarding Hostel Management', standard: false, premium: true },
  { feature: 'E-Learning Module & Virtual Classrooms', standard: false, premium: true },
  { feature: 'Full Analytics Dashboard & Institutional Reporting', standard: false, premium: true },
  { feature: 'First Month Free Trial & Data Migration Included', standard: true, premium: true },
];

const onboardingSteps = [
  {
    step: '1',
    title: 'Kick-Off Call',
    timing: 'Week 1',
    description: 'We confirm your student count, chosen plan, and any school-specific configuration needs — then agree a go-live timeline.',
  },
  {
    step: '2',
    title: 'Data Migration',
    timing: 'Weeks 1–2',
    description: 'Our team imports your existing student records, staff details, class structures, and billing history. You start with your school already in the system, not a blank screen.',
  },
  {
    step: '3',
    title: 'System Configuration',
    timing: 'Week 2',
    description: 'We set up your academic year, class levels, subjects, grading scales, fee structures, and receipt templates — tailored to how your school operates.',
  },
  {
    step: '4',
    title: 'Staff Training',
    timing: 'Weeks 2–3',
    description: 'Guided training for administrators, teachers, and front-desk staff, tailored to each role. In-app tutorials and a help centre remain available afterwards.',
  },
  {
    step: '5',
    title: 'Go-Live & Parent Rollout',
    timing: 'Week 3',
    description: 'Parent and student portals are activated. We support your team through the first live week, answering questions in real time as staff and parents start using the system.',
  },
  {
    step: '6',
    title: 'Ongoing Support',
    timing: 'Continuous',
    description: 'A dedicated support channel stays open for questions and feature requests. We are a long-term partner, not a vendor you hear from once at the point of sale.',
  },
];

export default function Pricing() {
  const [studentCount, setStudentCount] = useState(350);
  const [isFirstTermView, setIsFirstTermView] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const standardRate = isFirstTermView ? 17 : 35;
  const premiumRate = isFirstTermView ? 35 : 45;

  const standardTermTotal = studentCount * standardRate;
  const premiumTermTotal = studentCount * premiumRate;
  const standardAnnualTotal = studentCount * 35 * 3;
  const premiumAnnualTotal = studentCount * 45 * 3;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FDFBF9',
        color: '#191309',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <NavigationBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 15, sm: 17, md: 20 },
          pb: { xs: 10, md: 15 },
          backgroundColor: '#fbfcfd',
          backgroundImage: `
            radial-gradient(circle at 12% 16%, rgba(191, 219, 254, 0.42) 0%, rgba(219, 234, 254, 0.18) 35%, transparent 60%),
            radial-gradient(circle at 88% 12%, rgba(254, 240, 138, 0.48) 0%, rgba(254, 243, 199, 0.22) 32%, transparent 58%),
            radial-gradient(circle at 50% 30%, rgba(243, 244, 246, 0.5) 0%, transparent 70%)
          `,
        }}
      >
        {/* Background Architectural Grid Pattern Overlay */}
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

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header Section */}
          <RevealOnScroll
            variant="init"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              mb: { xs: 5, md: 7 },
            }}
          >
            {/* Pill Tag */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                px: '14px',
                py: '4px',
                borderRadius: '9999px',
                backgroundColor: '#DAEDFF',
                mb: 2.5,
              }}
            >
              <PricingTagIcon />
              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#1D4D87',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                RESEARCH-BACKED PRICING · GHANA
              </Typography>
            </Box>

            {/* Headline */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '30px', sm: '38px', md: '44px' },
                lineHeight: 1.15,
                letterSpacing: '-0.9px',
                color: '#0B0702',
                mb: 2,
              }}
            >
              Simple, transparent pricing built around your school term.
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: '15px', sm: '16.5px' },
                lineHeight: '26px',
                color: '#5B5449',
                maxWidth: '680px',
                mb: 3,
              }}
            >
              No awkward monthly subscriptions that clash with your school fee calendar. We operate on a simple
              per-student model, billed per academic term (3 terms per year).
            </Typography>

            {/* Free Trial Banner */}
            <Card
              sx={{
                maxWidth: '780px',
                width: '100%',
                p: { xs: 2, sm: 2.5 },
                borderRadius: '12px',
                border: '1.5px solid #FDE68A',
                backgroundColor: '#FFFBEB',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                textAlign: 'left',
                boxShadow: '0 2px 10px rgba(245, 158, 11, 0.08)',
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '10px',
                  backgroundColor: '#F59E0B',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <AutoAwesomeRoundedIcon sx={{ fontSize: 24 }} />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: '0.96rem', color: '#92400E', fontFamily: "'Sora', sans-serif" }}>
                  YOUR FIRST MONTH IS COMPLETELY FREE
                </Typography>
                <Typography sx={{ fontSize: '0.84rem', color: '#78350F', lineHeight: 1.45, mt: 0.3 }}>
                  Full platform access, full support, data migration included, and no card required. Train your staff and go live at your own pace with zero obligation.
                </Typography>
              </Box>
            </Card>

            {/* Term Rate Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 4, p: 0.5, bgcolor: '#F1F5F9', borderRadius: '10px' }}>
              <Button
                onClick={() => setIsFirstTermView(false)}
                sx={{
                  px: 2.5,
                  py: 0.8,
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  backgroundColor: !isFirstTermView ? '#FFFFFF' : 'transparent',
                  color: !isFirstTermView ? '#0B0702' : '#64748B',
                  boxShadow: !isFirstTermView ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  '&:hover': { backgroundColor: !isFirstTermView ? '#FFFFFF' : 'rgba(0,0,0,0.04)' },
                }}
              >
                Standard Term Rate
              </Button>
              <Button
                onClick={() => setIsFirstTermView(true)}
                sx={{
                  px: 2.5,
                  py: 0.8,
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  backgroundColor: isFirstTermView ? '#FFFFFF' : 'transparent',
                  color: isFirstTermView ? '#1E56A0' : '#64748B',
                  boxShadow: isFirstTermView ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  '&:hover': { backgroundColor: isFirstTermView ? '#FFFFFF' : 'rgba(0,0,0,0.04)' },
                }}
              >
                🎁 Entry Rate (First Term Promo)
              </Button>
            </Box>
          </RevealOnScroll>

          {/* Pricing Cards Grid (Exact 2-Card layout matching Proposal Section 4.0) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: '24px',
              maxWidth: '860px',
              mx: 'auto',
              alignItems: 'stretch',
              pt: 2,
            }}
          >
            {/* Left Card: Standard Tier */}
            <RevealOnScroll delay={0} sx={{ height: '100%' }}>
              <Card
                elevation={0}
                sx={{
                  position: 'relative',
                  overflow: 'visible !important',
                  p: { xs: '32px 24px', sm: '36px 30px' },
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #CBD5E1',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.08)',
                    borderColor: '#94A3B8',
                  },
                }}
              >
                {/* Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#475569',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    px: '14px',
                    py: '3.5px',
                    borderRadius: '9999px',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em',
                    zIndex: 2,
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: '0 2px 6px rgba(71, 85, 105, 0.25)',
                  }}
                >
                  Get Organised
                </Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: '22px',
                    lineHeight: '28px',
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
                    color: '#64748B',
                    minHeight: '40px',
                    mb: 2.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Best suited for schools running core academic, admin, billing & communication operations.
                </Typography>

                {/* Price */}
                <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '36px', sm: '42px' },
                      lineHeight: '46px',
                      color: '#0B0702',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    GH₵ {isFirstTermView ? '17.00' : '35.00'}
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                    / student / term
                  </Typography>
                </Box>

                {/* Price Subtext */}
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: isFirstTermView ? '#1E56A0' : '#94A3B8',
                    fontWeight: isFirstTermView ? 700 : 500,
                    mb: 3,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {isFirstTermView
                    ? '★ Discounted entry rate for your first term (Regular: GH₵35)'
                    : 'Entry / first term promo: GH₵ 17 / student · Billed termly'}
                </Typography>

                {/* Inclusions summary */}
                <Box sx={{ p: 1.5, mb: 3, borderRadius: '8px', bgcolor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Modules Included:
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: '#64748B', mt: 0.4 }}>
                    All core modules — academics, settings, HR (core), billing & communications, 4 core portals.
                  </Typography>
                </Box>

                {/* Feature List */}
                <Stack spacing={1.5} sx={{ mb: 4, flexGrow: 1 }}>
                  {standardInclusions.map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.4 }}>
                      <PricingCheckIcon />
                      <Typography sx={{ fontSize: '13.2px', color: '#334155', fontWeight: 450, lineHeight: 1.45 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* CTA Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => {
                    window.location.hash = '#book-demo';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '16px !important' }} />}
                  sx={{
                    height: '46px',
                    borderRadius: '9px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textTransform: 'none',
                    borderColor: '#CBD5E1',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#F8FAFC',
                      borderColor: '#1E56A0',
                      color: '#1E56A0',
                    },
                  }}
                >
                  Start Free 1st Month (Standard)
                </Button>
              </Card>
            </RevealOnScroll>

            {/* Right Card: Premium Tier (Most Popular / Full Suite) */}
            <RevealOnScroll delay={0.12} sx={{ height: '100%' }}>
              <Card
                elevation={0}
                sx={{
                  position: 'relative',
                  overflow: 'visible !important',
                  p: { xs: '32px 24px', sm: '36px 30px' },
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #1E56A0',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: '0 8px 30px rgba(30, 86, 160, 0.12)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 14px 36px rgba(30, 86, 160, 0.18)',
                  },
                }}
              >
                {/* Floating "Most popular" Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -13,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1E56A0',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    px: '16px',
                    py: '4px',
                    borderRadius: '9999px',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.03em',
                    zIndex: 2,
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: '0 2px 8px rgba(30, 86, 160, 0.3)',
                  }}
                >
                  ★ Run Efficiently · Full Platform
                </Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: '22px',
                    lineHeight: '28px',
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
                    color: '#64748B',
                    minHeight: '40px',
                    mb: 2.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Complete platform access for schools needing full payroll, library, transport, e-learning & advanced portals.
                </Typography>

                {/* Price */}
                <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '36px', sm: '42px' },
                      lineHeight: '46px',
                      color: '#1E56A0',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    GH₵ {isFirstTermView ? '35.00' : '45.00'}
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                    / student / term
                  </Typography>
                </Box>

                {/* Price Subtext */}
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: isFirstTermView ? '#1E56A0' : '#94A3B8',
                    fontWeight: isFirstTermView ? 700 : 500,
                    mb: 3,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {isFirstTermView
                    ? '★ Discounted entry rate for your first term (Regular: GH₵45)'
                    : 'Entry / first term promo: GH₵ 35 / student · Billed termly'}
                </Typography>

                {/* Inclusions summary */}
                <Box sx={{ p: 1.5, mb: 3, borderRadius: '8px', bgcolor: '#F0F6FF', border: '1px solid #DBEAFE' }}>
                  <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E40AF', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Modules Included:
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: '#1E56A0', mt: 0.4, fontWeight: 500 }}>
                    Full platform — all 20 modules, all 4 portals completely unlocked with no restrictions.
                  </Typography>
                </Box>

                {/* Feature List */}
                <Stack spacing={1.5} sx={{ mb: 4, flexGrow: 1 }}>
                  {premiumInclusions.map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.4 }}>
                      <PricingCheckIcon />
                      <Typography
                        sx={{
                          fontSize: '13.2px',
                          color: idx === 0 ? '#1E56A0' : '#334155',
                          fontWeight: idx === 0 ? 700 : 450,
                          lineHeight: 1.45,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* CTA Button */}
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    window.location.hash = '#book-demo';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '16px !important' }} />}
                  sx={{
                    height: '46px',
                    borderRadius: '9px',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'none',
                    backgroundColor: '#1E56A0',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 14px rgba(30, 86, 160, 0.3)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#16437E',
                      boxShadow: '0 6px 18px rgba(30, 86, 160, 0.4)',
                    },
                  }}
                >
                  Start Free 1st Month (Premium)
                </Button>
              </Card>
            </RevealOnScroll>
          </Box>

          {/* Custom Plan Callout */}
          <Box
            sx={{
              maxWidth: '860px',
              mx: 'auto',
              mt: 4,
              p: 3,
              borderRadius: '12px',
              backgroundColor: '#FFFFFF',
              border: '1px dashed #CBD5E1',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', color: '#0B0702', fontFamily: "'Sora', sans-serif" }}>
                Need a Custom Configuration?
              </Typography>
              <Typography sx={{ fontSize: '0.86rem', color: '#64748B', mt: 0.3 }}>
                Mix and match modules from either plan at structured pricing tailored to your institution's specific setup.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              onClick={() => {
                window.location.hash = '#contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                whiteSpace: 'nowrap',
                fontWeight: 600,
                fontSize: '0.86rem',
                textTransform: 'none',
                borderColor: '#1E56A0',
                color: '#1E56A0',
                px: 2.5,
              }}
            >
              Contact Us for Custom Plan
            </Button>
          </Box>

          {/* SECTION 2: Interactive Termly Investment Calculator (from Proposal 4.1 & 7.0) */}
          <RevealOnScroll delay={0.08}>
            <Box
              sx={{
                maxWidth: '860px',
                mx: 'auto',
                mt: { xs: 8, md: 11 },
                p: { xs: 3, sm: 4.5 },
                borderRadius: '18px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
                <Box sx={{ color: '#1E56A0', display: 'flex' }}>
                  <CalculateRoundedIcon sx={{ fontSize: 26 }} />
                </Box>
                <Typography variant="h2" sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: { xs: '1.25rem', sm: '1.45rem' }, color: '#0B0702' }}>
                  Termly Investment Calculator
                </Typography>
              </Stack>
              <Typography sx={{ color: '#64748B', fontSize: '0.9rem', mb: 3 }}>
                Adjust student enrolment to calculate your school's exact investment per term and annually.
              </Typography>

              {/* Quick Select Buttons */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', mb: 1.2 }}>
                  Quick select enrolment:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {[150, 200, 350, 500, 750, 1000].map((count) => (
                    <Chip
                      key={count}
                      label={`${count} Students`}
                      clickable
                      color={studentCount === count ? 'primary' : 'default'}
                      variant={studentCount === count ? 'filled' : 'outlined'}
                      onClick={() => setStudentCount(count)}
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.82rem',
                        bgcolor: studentCount === count ? '#1E56A0' : '#F8FAFC',
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Slider */}
              <Box sx={{ px: 1, mb: 4 }}>
                <Slider
                  value={studentCount}
                  min={50}
                  max={1500}
                  step={25}
                  onChange={(_, val) => setStudentCount(val)}
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#1E56A0',
                    height: 8,
                    '& .MuiSlider-thumb': {
                      width: 22,
                      height: 22,
                      backgroundColor: '#FFFFFF',
                      border: '3px solid #1E56A0',
                    },
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '0.75rem' }}>
                  <span>50 students</span>
                  <span style={{ fontWeight: 700, color: '#0B0702' }}>Selected: {studentCount} students</span>
                  <span>1,500+ students</span>
                </Box>
              </Box>

              {/* Result Grid */}
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      bgcolor: '#F8FAFC',
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, color: '#475569', fontSize: '0.85rem' }}>
                      STANDARD PLAN
                    </Typography>
                    <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '1.65rem', color: '#0B0702', mt: 0.5 }}>
                      GH₵ {standardTermTotal.toLocaleString()}
                      <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#64748B' }}> / term</span>
                    </Typography>
                    <Typography sx={{ fontSize: '0.78rem', color: '#16A34A', fontWeight: 600, mt: 0.5 }}>
                      First Term Promo: GH₵ {(studentCount * 17).toLocaleString()}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: '#64748B', mt: 1 }}>
                      Annual (3 terms): GH₵ {standardAnnualTotal.toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: '12px',
                      border: '1.5px solid #BFDBFE',
                      bgcolor: '#EFF6FF',
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, color: '#1E40AF', fontSize: '0.85rem' }}>
                      PREMIUM PLAN (FULL SUITE)
                    </Typography>
                    <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '1.65rem', color: '#1E56A0', mt: 0.5 }}>
                      GH₵ {premiumTermTotal.toLocaleString()}
                      <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#64748B' }}> / term</span>
                    </Typography>
                    <Typography sx={{ fontSize: '0.78rem', color: '#1E56A0', fontWeight: 600, mt: 0.5 }}>
                      First Term Promo: GH₵ {(studentCount * 35).toLocaleString()}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: '#64748B', mt: 1 }}>
                      Annual (3 terms): GH₵ {premiumAnnualTotal.toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* Context Worked Example Note from Proposal */}
              <Box sx={{ mt: 3, p: 2, borderRadius: '10px', bgcolor: '#F1F5F9' }}>
                <Typography sx={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5 }}>
                  💡 <strong>Worked Example from Proposal:</strong> A school with 350 enrolled students choosing Standard invests GH₵12,250 per term (GH₵36,750 annually) — covering attendance, gradebook, billing, and full communications. This is less than the annual salary of one administrative hire, and eliminates 3 to 5 separate software subscriptions.
                </Typography>
              </Box>
            </Box>
          </RevealOnScroll>

          {/* SECTION 3: At a Glance — Plan Comparison Matrix (from Proposal Page 9) */}
          <RevealOnScroll delay={0.1}>
            <Box sx={{ maxWidth: '860px', mx: 'auto', mt: { xs: 8, md: 11 } }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h2" sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: { xs: '1.4rem', sm: '1.75rem' }, color: '#0B0702', mb: 1 }}>
                  At a Glance — Plan Comparison
                </Typography>
                <Typography sx={{ color: '#64748B', fontSize: '0.92rem' }}>
                  Review capability availability across Standard and Premium plans.
                </Typography>
              </Box>

              <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: '14px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <Table sx={{ minWidth: { xs: 480, sm: 'auto' } }}>
                  <TableHead sx={{ backgroundColor: '#F8FAFC' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700, fontSize: '0.88rem', color: '#0F172A', py: 2 }}>Capability</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700, fontSize: '0.88rem', color: '#0F172A', width: '160px' }}>STANDARD</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700, fontSize: '0.88rem', color: '#1E56A0', width: '160px', bgcolor: '#EFF6FF' }}>PREMIUM</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparisonFeatures.map((row, idx) => (
                      <TableRow key={idx} sx={{ '&:nth-of-type(even)': { backgroundColor: '#FBFDFF' } }}>
                        <TableCell sx={{ fontSize: '0.86rem', color: '#334155', fontWeight: 500, py: 1.8 }}>
                          {row.feature}
                        </TableCell>
                        <TableCell align="center">
                          {row.standard ? (
                            <CheckRoundedIcon sx={{ color: '#16A34A', fontSize: 20 }} />
                          ) : (
                            <CloseRoundedIcon sx={{ color: '#CBD5E1', fontSize: 18 }} />
                          )}
                        </TableCell>
                        <TableCell align="center" sx={{ bgcolor: idx % 2 === 0 ? '#F6F9FE' : '#EFF6FF' }}>
                          <CheckRoundedIcon sx={{ color: '#1E56A0', fontSize: 22 }} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </RevealOnScroll>

          {/* SECTION 4: 6-Step Onboarding & Next Steps (from Proposal Section 6.0) */}
          <RevealOnScroll delay={0.12}>
            <Box sx={{ maxWidth: '860px', mx: 'auto', mt: { xs: 8, md: 12 } }}>
              <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1 }}>
                  <RocketLaunchRoundedIcon sx={{ color: '#1E56A0' }} />
                  <Typography variant="h2" sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: { xs: '1.4rem', sm: '1.75rem' }, color: '#0B0702' }}>
                    Onboarding & Next Steps
                  </Typography>
                </Stack>
                <Typography sx={{ color: '#64748B', fontSize: '0.92rem', maxWidth: '640px', mx: 'auto' }}>
                  Most schools complete full onboarding — data migrated, staff trained, and portals live — within 2 to 3 weeks of kick-off, comfortably inside your free trial month.
                </Typography>
              </Box>

              <Grid container spacing={2.5}>
                {onboardingSteps.map((item) => (
                  <Grid item xs={12} sm={6} key={item.step}>
                    <Card
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: '14px',
                        border: '1px solid #E2E8F0',
                        backgroundColor: '#FFFFFF',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: '#1E56A0',
                          boxShadow: '0 6px 18px rgba(30, 86, 160, 0.08)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            backgroundColor: '#1E56A0',
                            color: '#FFFFFF',
                            fontWeight: 800,
                            fontSize: '0.88rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {item.step}
                        </Box>
                        <Chip
                          label={item.timing}
                          size="small"
                          sx={{
                            fontWeight: 700,
                            fontSize: '0.74rem',
                            backgroundColor: '#F1F5F9',
                            color: '#475569',
                          }}
                        />
                      </Box>
                      <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#0F172A', mb: 0.8 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5 }}>
                        {item.description}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Bottom Assistance & WhatsApp Card */}
              <Box
                sx={{
                  mt: 5,
                  p: 3.5,
                  borderRadius: '16px',
                  backgroundColor: '#F0FDF4',
                  border: '1.5px solid #BBF7D0',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { md: 'center' },
                  justifyContent: 'space-between',
                  gap: 3,
                }}
              >
                <Box>
                  <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '1.05rem', color: '#166534' }}>
                    Ready to schedule your kick-off call?
                  </Typography>
                  <Typography sx={{ fontSize: '0.86rem', color: '#15803D', mt: 0.4 }}>
                    There is no paperwork to sign before your trial begins — we start with the system, and formalise the agreement once you are ready.
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: '#166534', mt: 1, fontWeight: 600 }}>
                    Direct / WhatsApp: +233 599 844 836 · Landline: +233 (0) 30 290 8800 · Email: admin@urionsystems.com
                  </Typography>
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      window.location.hash = '#book-demo';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    sx={{
                      backgroundColor: '#15803D',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textTransform: 'none',
                      px: 3,
                      py: 1.2,
                      borderRadius: '8px',
                      whiteSpace: 'nowrap',
                      '&:hover': { backgroundColor: '#166534' },
                    }}
                  >
                    Book a Free Demo
                  </Button>
                  <Button
                    variant="outlined"
                    component="a"
                    href="https://wa.me/233599844836"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: '#16A34A',
                      color: '#15803D',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textTransform: 'none',
                      px: 2.5,
                      py: 1.2,
                      borderRadius: '8px',
                      whiteSpace: 'nowrap',
                      '&:hover': { backgroundColor: 'rgba(22, 163, 74, 0.08)', borderColor: '#15803D' },
                    }}
                  >
                    WhatsApp Support
                  </Button>
                </Stack>
              </Box>
            </Box>
          </RevealOnScroll>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

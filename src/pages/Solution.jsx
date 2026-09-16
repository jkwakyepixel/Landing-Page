import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
} from '@mui/material';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// Icons
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import FamilyRestroomRoundedIcon from '@mui/icons-material/FamilyRestroomRounded';

// Images
import dashboardMockup from '../assets/dashboard desktop mock ups.png';
import teacherMockup from '../assets/teachers tablet mock up.png';
import studentMockup from '../assets/sruent mock up.png';
import parentMockup from '../assets/parent mobile mock up.png';
import staffMockup from '../assets/staff mockup.png';
import academicsMockup from '../assets/academic management.png';
import financeMockup from '../assets/admin billing laptop mmockup.png';
import commsMockup from '../assets/communication.png';
import transportMockup from '../assets/trasportation.png';

// Role data definitions matching Figma specs
const roles = [
  {
    id: 'admin',
    label: 'Admin',
    icon: AdminPanelSettingsRoundedIcon,
    heading: 'One view of the whole school.',
    subheading:
      'Administrators get a real-time command centre for enrolment, staffing, finance and compliance.',
    features: [
      'Full-school analytics',
      'Enrolment & records',
      'Finance overview',
      'Staff management',
    ],
    image: dashboardMockup,
    alt: 'Admin command center dashboard view',
  },
  {
    id: 'teacher',
    label: 'Teacher',
    icon: SchoolRoundedIcon,
    heading: 'Your classroom at your fingertips.',
    subheading:
      'A focused workspace for lesson notes, attendance, assessments and everyday teaching tools.',
    features: [
      'Lesson planning',
      'Attendance & grading',
      'Assessment tools',
      'Parent updates',
    ],
    image: teacherMockup,
    alt: 'Teacher classroom management dashboard',
  },
  {
    id: 'staff',
    label: 'Staff',
    icon: SupportAgentRoundedIcon,
    heading: 'Streamlined daily operations.',
    subheading:
      'Manage daily responsibilities, leave, transport and school services through a focused workspace.',
    features: [
      'Task management',
      'Leave requests',
      'Service tracking',
      'Internal messages',
    ],
    image: staffMockup,
    alt: 'Staff operations and leave management workspace',
  },
  {
    id: 'student',
    label: 'Student',
    icon: FaceRoundedIcon,
    heading: 'Your learning, organized.',
    subheading:
      'Give students access to learning, assessments, resources and school information anywhere.',
    features: [
      'Class schedule',
      'Assignments & results',
      'Learning resources',
      'Announcements',
    ],
    image: studentMockup,
    alt: 'Student learning portal and results view',
  },
  {
    id: 'parent',
    label: 'Parent',
    icon: FamilyRestroomRoundedIcon,
    heading: 'Stay connected to their progress.',
    subheading:
      'Keep parents connected to their child’s education with progress, updates and secure payments.',
    features: [
      'Progress tracking',
      'School announcements',
      'Fee payments',
      'Direct messaging',
    ],
    image: parentMockup,
    alt: 'Parent portal with child progress and pickup QR code',
  },
];

// 9 Modules definitions matching Figma specs with exact alternation pattern
const moduleSnapshots = [
  {
    id: 'admin-module',
    category: 'Administration',
    title: 'Administration',
    description:
      'Configure your school, manage roles and control the entire platform from one central place.',
    features: [
      'School configuration',
      'Role & permission control',
      'Academic calendar',
      'System-wide settings',
    ],
    image: dashboardMockup,
    alt: 'Administration module interface',
    imageOnLeft: true, // Mockup left, text right
  },
  {
    id: 'academics-module',
    category: 'Academics',
    title: 'Academic Management',
    description:
      'Manage classes, subjects, grading, examinations and academic calendars in one workflow.',
    features: [
      'Classes & subjects',
      'Grading & results',
      'Examination setup',
      'Academic calendars',
    ],
    image: academicsMockup,
    alt: 'Academic management module interface',
    imageOnLeft: false, // Text left, mockup right
  },
  {
    id: 'teachers-module',
    category: 'Teachers',
    title: 'Teacher Portal',
    description:
      'A focused workspace for lesson notes, attendance, assessments and everyday teaching tools.',
    features: [
      'Lesson planning',
      'Attendance & grading',
      'Assessment tools',
      'Parent updates',
    ],
    image: teacherMockup,
    alt: 'Teacher portal module interface',
    imageOnLeft: true,
  },
  {
    id: 'students-module',
    category: 'Students',
    title: 'Student Portal',
    description:
      'Give students access to learning, assessments, resources and school information anywhere.',
    features: [
      'Class schedule',
      'Assignments & results',
      'Learning resources',
      'Announcements',
    ],
    image: studentMockup,
    alt: 'Student portal module interface',
    imageOnLeft: false,
  },
  {
    id: 'parents-module',
    category: 'Parents',
    title: 'Parent Portal',
    description:
      'Keep parents connected to their child’s education with progress, updates and secure payments.',
    features: [
      'Progress tracking',
      'School announcements',
      'Fee payments',
      'Direct messaging',
    ],
    image: parentMockup,
    alt: 'Parent portal module interface',
    imageOnLeft: true,
  },
  {
    id: 'staff-module',
    category: 'Staff',
    title: 'Staff Portal',
    description:
      'Manage daily responsibilities, leave, transport and school services through a focused workspace.',
    features: [
      'Task management',
      'Leave requests',
      'Service tracking',
      'Internal messages',
    ],
    image: staffMockup,
    alt: 'Staff portal module interface',
    imageOnLeft: false,
  },
  {
    id: 'finance-module',
    category: 'Finance',
    title: 'Finance & Billing',
    description:
      'Handle billing, payments, receipts and financial management with clear, traceable records.',
    features: [
      'Billing & invoicing',
      'Payment collection',
      'Receipts & records',
      'Financial reports',
    ],
    image: financeMockup,
    alt: 'Finance and billing module interface',
    imageOnLeft: true,
  },
  {
    id: 'comms-module',
    category: 'Communication',
    title: 'Communication',
    description:
      'Reach every member of the community with SMS, notifications, announcements and messaging.',
    features: [
      'SMS & notifications',
      'Announcements',
      'Group messaging',
      'Broadcast tools',
    ],
    image: commsMockup,
    alt: 'Communication module interface',
    imageOnLeft: false,
  },
  {
    id: 'transport-module',
    category: 'Transport',
    title: 'Transport',
    description:
      'Plan routes and manage pickup and drop-off so students travel safely and on time.',
    features: [
      'Route planning',
      'Pickup & drop-off',
      'Fleet tracking',
      'Parent alerts',
    ],
    image: transportMockup,
    alt: 'Transport module interface',
    imageOnLeft: true,
  },
];

const roleHashIndexMap = {
  '#solution-admin': 0,
  '#solution-administrators': 0,
  '#solution-administrator': 0,
  '#solution-teacher': 1,
  '#solution-teachers': 1,
  '#solution-staff': 2,
  '#solution-student': 3,
  '#solution-students': 3,
  '#solution-parent': 4,
  '#solution-parents': 4,
};

export default function Solution() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const activeRole = roles[activeRoleIndex];

  // Hash change and initial route listener
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (roleHashIndexMap[hash] !== undefined) {
        const idx = roleHashIndexMap[hash];
        setActiveRoleIndex(idx);
        setTimeout(() => {
          const target = document.getElementById('role-experiences');
          if (target) {
            const yOffset = -90;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Reusable function to render text column for module snapshots
  const renderModuleText = (item) => (
    <Box sx={{ px: { xs: 1, md: 2 }, mt: { xs: 0, md: '4px' } }}>
      {/* Category Label */}
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.6px',
          textTransform: 'uppercase',
          color: '#2863AB',
          mb: 1.2,
        }}
      >
        {item.category}
      </Typography>

      {/* Module Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: { xs: '24px', sm: '28px', md: '30px' },
          lineHeight: { xs: '30px', sm: '34px', md: '36px' },
          letterSpacing: '-0.6px',
          color: '#0B0702',
          mb: 2,
        }}
      >
        {item.title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '26px',
          color: '#5B5449',
          mb: 3.5,
        }}
      >
        {item.description}
      </Typography>

      {/* Feature Checkmarks List */}
      <Stack spacing={1.6} sx={{ mb: 4 }}>
        {item.features.map((feature, fIdx) => (
          <Box
            key={fIdx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '9999px',
                backgroundColor: '#DAEDFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <CheckRoundedIcon sx={{ fontSize: 13, color: '#1D4D87' }} />
            </Box>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#41392E',
              }}
            >
              {feature}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Explore Module Button */}
      <Button
        variant="outlined"
        endIcon={<NorthEastRoundedIcon sx={{ fontSize: '15px !important' }} />}
        onClick={() => {
          window.location.hash = '#modules';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        sx={{
          height: '42px',
          px: '20px',
          backgroundColor: '#FDFBF9',
          border: '1px solid #E0DAD0',
          borderRadius: '6px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#2A2318',
          textTransform: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: '#F7F5F1',
            borderColor: '#C5BDB0',
            transform: 'translateY(-1px)',
          },
        }}
      >
        Explore Module
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#FDFBF9',
        color: '#0B0702',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <NavigationBar />

      {/* COMBINED HERO & ROLE-BASED EXPERIENCES SECTION */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 16, sm: 18, md: 20 },
          pb: { xs: 8, md: 12 },
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

        {/* Section 1 Content: Hero Header */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            mb: { xs: 8, sm: 10, md: 12 },
          }}
        >
          <RevealOnScroll variant="init">
            {/* Pill Chip: PRODUCT SHOWCASE */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                px: '14px',
                py: '4px',
                borderRadius: '9999px',
                backgroundColor: '#DAEDFF',
                mb: 2.8,
              }}
            >
              <VisibilityRoundedIcon sx={{ fontSize: 13, color: '#1D4D87' }} />
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.6px',
                  color: '#1D4D87',
                  textTransform: 'uppercase',
                  lineHeight: '16px',
                }}
              >
                PRODUCT SHOWCASE
              </Typography>
            </Box>

            {/* Heading 1: See the platform. */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '34px', sm: '42px', md: '48px' },
                lineHeight: { xs: '40px', sm: '48px', md: '52px' },
                letterSpacing: '-0.96px',
                color: '#0B0702',
                mb: 2.5,
              }}
            >
              See the platform.
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '16px', sm: '18px' },
                lineHeight: '28px',
                color: '#5B5449',
                maxWidth: '680px',
                mx: 'auto',
              }}
            >
              Switch between roles to see how the experience changes, then explore
              the interfaces behind each module.
            </Typography>
          </RevealOnScroll>
        </Container>

        {/* Section 2 Content: Role-based experiences */}
        <Container
          id="role-experiences"
          maxWidth={false}
          sx={{ maxWidth: '1240px !important', mx: 'auto', px: { xs: 2.5, sm: 3 }, position: 'relative', zIndex: 1 }}
        >
          {/* Section 2 Header */}
          <RevealOnScroll variant="init">
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: { xs: 5, md: 7 },
              }}
            >
              {/* Pill: ROLE-BASED EXPERIENCES */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  px: '14px',
                  py: '4px',
                  borderRadius: '9999px',
                  backgroundColor: '#DAEDFF',
                  mb: 2.2,
                }}
              >
                <DashboardRoundedIcon sx={{ fontSize: 13, color: '#1D4D87' }} />
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.6px',
                    color: '#1D4D87',
                    textTransform: 'uppercase',
                    lineHeight: '16px',
                  }}
                >
                  ROLE-BASED EXPERIENCES
                </Typography>
              </Box>

              {/* Heading 2 */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '26px', sm: '32px', md: '36px' },
                  lineHeight: { xs: '34px', sm: '38px', md: '42px' },
                  letterSpacing: '-0.72px',
                  color: '#0B0702',
                  maxWidth: '650px',
                  mb: 4,
                }}
              >
                One platform. Different experiences for every role.
              </Typography>

              {/* Interactive Role Switcher Tabs */}
              <Box
                sx={{
                  backgroundColor: '#F7F5F1',
                  borderRadius: '9999px',
                  p: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: { xs: '3px', sm: '6px' },
                  maxWidth: '100%',
                  overflowX: 'auto',
                }}
              >
                {roles.map((role, idx) => {
                  const isActive = activeRoleIndex === idx;
                  const RoleIcon = role.icon;
                  return (
                    <Button
                      key={role.id}
                      onClick={() => setActiveRoleIndex(idx)}
                      disableRipple
                      startIcon={
                        <RoleIcon
                          sx={{
                            fontSize: '16px !important',
                            color: isActive ? '#FDFBF9' : '#5B5449',
                          }}
                        />
                      }
                      sx={{
                        borderRadius: '9999px',
                        px: { xs: '14px', sm: '20px' },
                        py: '7px',
                        height: '36px',
                        backgroundColor: isActive ? '#2863AB' : 'transparent',
                        color: isActive ? '#FDFBF9' : '#5B5449',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '20px',
                        textTransform: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                        boxShadow: isActive
                          ? '0px 2px 6px rgba(40, 99, 171, 0.25)'
                          : 'none',
                        '&:hover': {
                          backgroundColor: isActive
                            ? '#225391'
                            : 'rgba(0, 0, 0, 0.04)',
                          color: isActive ? '#FFFFFF' : '#2A2318',
                        },
                      }}
                    >
                      {role.label}
                    </Button>
                  );
                })}
              </Box>
            </Box>
          </RevealOnScroll>

          {/* Role Dynamic Content */}
          <RevealOnScroll variant="pop-up">
            <Box sx={{ width: '100%', mt: { xs: 2, md: 3 } }}>
              <Grid
                container
                spacing={{ xs: 4, md: 6 }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
                key={activeRole.id}
              >
                {/* Left Column: Role Details & Checklist */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: '26px', sm: '30px', md: '32px' },
                        lineHeight: { xs: '32px', sm: '36px', md: '38px' },
                        letterSpacing: '-0.6px',
                        color: '#0B0702',
                        mb: 2,
                        mt: { xs: 0, md: '2px' },
                      }}
                    >
                      {activeRole.heading}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '26px',
                        color: '#5B5449',
                        mb: 3.5,
                        maxWidth: '460px',
                      }}
                    >
                      {activeRole.subheading}
                    </Typography>

                    {/* Checklist */}
                    <Stack spacing={1.8}>
                      {activeRole.features.map((feature, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                          }}
                        >
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: '9999px',
                              backgroundColor: '#DAEDFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <CheckRoundedIcon
                              sx={{ fontSize: 14, color: '#1D4D87' }}
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 400,
                              fontSize: '14px',
                              lineHeight: '20px',
                              color: '#41392E',
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Grid>

                {/* Right Column: Interactive Mockup Preview */}
                <Grid size={{ xs: 12, md: 7 }}>
                  <Box
                    sx={{
                      width: '100%',
                      minHeight: { xs: '260px', sm: '360px', md: '440px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={activeRole.image}
                      alt={activeRole.alt}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: { xs: '340px', sm: '430px', md: '480px' },
                        width: 'auto',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 16px 32px rgba(15, 23, 42, 0.12)) drop-shadow(0 4px 10px rgba(15, 23, 42, 0.06))',
                        imageRendering: '-webkit-optimize-contrast',
                        transition: 'transform 0.3s ease, filter 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          filter: 'drop-shadow(0 22px 40px rgba(15, 23, 42, 0.16)) drop-shadow(0 6px 14px rgba(15, 23, 42, 0.08))',
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </RevealOnScroll>
        </Container>
      </Box>

      {/* SECTION 3: EXPLORE THE MODULES (MODULE SNAPSHOTS) */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 15 },
          backgroundColor: '#FFFFFF',
          position: 'relative',
          borderTop: '1px solid #EFEBE4',
        }}
      >
        <Container
          maxWidth={false}
          sx={{ maxWidth: '1240px !important', mx: 'auto', px: { xs: 2.5, sm: 3 } }}
        >
          {/* Header */}
          <RevealOnScroll variant="init">
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: { xs: 8, md: 12 },
              }}
            >
              {/* Pill: MODULE SNAPSHOTS */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  px: '14px',
                  py: '4px',
                  borderRadius: '9999px',
                  backgroundColor: '#DAEDFF',
                  mb: 2.2,
                }}
              >
                <LayersRoundedIcon sx={{ fontSize: 13, color: '#1D4D87' }} />
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.6px',
                    color: '#1D4D87',
                    textTransform: 'uppercase',
                    lineHeight: '16px',
                  }}
                >
                  MODULE SNAPSHOTS
                </Typography>
              </Box>

              {/* Heading 2 */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '28px', sm: '34px', md: '36px' },
                  lineHeight: { xs: '34px', sm: '38px', md: '40px' },
                  letterSpacing: '-0.72px',
                  color: '#0B0702',
                  mb: 2,
                }}
              >
                Explore the modules.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: '15px', sm: '16px' },
                  lineHeight: '24px',
                  color: '#5B5449',
                  maxWidth: '560px',
                }}
              >
                A closer look at the interfaces that power each part of the
                platform.
              </Typography>
            </Box>
          </RevealOnScroll>

          {/* 9 Alternating Module Rows */}
          <Stack spacing={{ xs: 10, md: 14 }}>
            {moduleSnapshots.map((item) => (
              <RevealOnScroll
                key={item.id}
                variant="pop-up"
                threshold={0.08}
                rootMargin="0px 0px -40px 0px"
              >
                <Grid
                  container
                  spacing={{ xs: 5, md: 7 }}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  {item.imageOnLeft ? (
                    <>
                      <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
                        <Box
                          sx={{
                            width: '100%',
                            minHeight: { xs: '260px', sm: '320px', md: '380px' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.alt}
                            sx={{
                              maxWidth: '100%',
                              maxHeight: { xs: '320px', sm: '400px', md: '440px' },
                              width: 'auto',
                              height: 'auto',
                              display: 'block',
                              objectFit: 'contain',
                              filter: 'drop-shadow(0 14px 28px rgba(15, 23, 42, 0.10)) drop-shadow(0 4px 8px rgba(15, 23, 42, 0.05))',
                              imageRendering: '-webkit-optimize-contrast',
                              transition: 'transform 0.3s ease, filter 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-3px)',
                                filter: 'drop-shadow(0 20px 36px rgba(15, 23, 42, 0.14)) drop-shadow(0 6px 12px rgba(15, 23, 42, 0.07))',
                              },
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
                        {renderModuleText(item)}
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 1 }}>
                        {renderModuleText(item)}
                      </Grid>
                      <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 2 }}>
                        <Box
                          sx={{
                            width: '100%',
                            minHeight: { xs: '260px', sm: '320px', md: '380px' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.alt}
                            sx={{
                              maxWidth: '100%',
                              maxHeight: { xs: '320px', sm: '400px', md: '440px' },
                              width: 'auto',
                              height: 'auto',
                              display: 'block',
                              objectFit: 'contain',
                              filter: 'drop-shadow(0 14px 28px rgba(15, 23, 42, 0.10)) drop-shadow(0 4px 8px rgba(15, 23, 42, 0.05))',
                              imageRendering: '-webkit-optimize-contrast',
                              transition: 'transform 0.3s ease, filter 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-3px)',
                                filter: 'drop-shadow(0 20px 36px rgba(15, 23, 42, 0.14)) drop-shadow(0 6px 12px rgba(15, 23, 42, 0.07))',
                              },
                            }}
                          />
                        </Box>
                      </Grid>
                    </>
                  )}
                </Grid>
              </RevealOnScroll>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* SECTION 4: FOOTER */}
      <Footer />
    </Box>
  );
}

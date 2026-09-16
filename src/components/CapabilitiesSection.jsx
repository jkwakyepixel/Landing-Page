import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import RevealOnScroll from './RevealOnScroll';

// Pill tag icon (4-square grid matching mockup)
function CapabilitiesPillIcon(props) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

// 1. Administration (Exact 8-toothed gear cog matching Figma mockup)
function AdministrationIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

// 2. Student Management (User with plus on top right)
function StudentManagementIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="17" y1="11" x2="23" y2="11" />
    </svg>
  );
}

// 3. Academic Management (Floppy disk / gradebook icon matching Figma)
function AcademicManagementIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

// 4. Teacher Portal (Teacher presentation easel / chalkboard)
function TeacherPortalIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="11" rx="2" />
      <path d="M8 14v4l4-2 4 2v-4" />
      <line x1="7" y1="7" x2="11" y2="7" />
      <line x1="7" y1="10" x2="15" y2="10" />
    </svg>
  );
}

// 5. Staff Portal (Pillared institution building matching Figma)
function StaffPortalIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M12 3l9 7H3l9-7z" />
      <path d="M6 10v11" />
      <path d="M10 10v11" />
      <path d="M14 10v11" />
      <path d="M18 10v11" />
    </svg>
  );
}

// 6. Parent Portal (Two figures / family matching Figma)
function ParentPortalIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10.5" cy="7" r="3.5" />
      <path d="M21 21v-1.5a3.5 3.5 0 0 0-3-3.4" />
      <path d="M16 4.13a3.5 3.5 0 0 1 0 6.74" />
    </svg>
  );
}

// 7. Student Portal (Schoolhouse / building with door matching Figma)
function StudentPortalIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

// 8. Communication (Chat speech bubble matching Figma)
function CommunicationIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

// 8 Modules matching Figma mockup pixel-for-pixel
const capabilities = [
  {
    id: 'administration',
    title: 'Administration',
    description: 'School management and configuration.',
    icon: AdministrationIcon,
  },
  {
    id: 'student-management',
    title: 'Student Management',
    description: 'Admissions, profiles, promotion and records.',
    icon: StudentManagementIcon,
  },
  {
    id: 'academic-management',
    title: 'Academic Management',
    description: 'Classes, subjects, grading, examinations and calendars.',
    icon: AcademicManagementIcon,
  },
  {
    id: 'teacher-portal',
    title: 'Teacher Portal',
    description: 'Lesson notes, attendance, assessments and teaching tools.',
    icon: TeacherPortalIcon,
  },
  {
    id: 'staff-portal',
    title: 'Staff Portal',
    description: 'Tasks, attendance, leave, communication and staff services.',
    icon: StaffPortalIcon,
  },
  {
    id: 'parent-portal',
    title: 'Parent Portal',
    description: 'Student progress, communication, payments and information.',
    icon: ParentPortalIcon,
  },
  {
    id: 'student-portal',
    title: 'Student Portal',
    description: 'Learning, assessments, resources and school information.',
    icon: StudentPortalIcon,
  },
  {
    id: 'communication',
    title: 'Communication',
    description: 'SMS, notifications, announcements and messaging.',
    icon: CommunicationIcon,
  },
];

export default function CapabilitiesSection() {
  return (
    <Box
      component="section"
      id="modules"
      sx={{
        width: '100%',
        py: { xs: 8, sm: 9.5, md: 11 },
        backgroundColor: '#ffffff',
        position: 'relative',
        scrollMarginTop: '80px',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1060px',
          mx: 'auto',
          px: { xs: 2.5, sm: 3 },
        }}
      >
        <Box>
          {/* Header Layout (Responsive Stack: column on mobile, row on desktop) */}
          <RevealOnScroll variant="init">
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'flex-end' }}
              spacing={{ xs: 2.5, md: 2 }}
              sx={{ mb: { xs: 4, sm: 5, md: 5.5 } }}
            >
            {/* Left Side Header Text */}
            <Stack spacing={0.6} sx={{ maxWidth: 640 }}>
              {/* Overline Tag Pill */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#eaf2ff',
                  border: '1px solid #d4e4fc',
                  borderRadius: '9999px',
                  px: '12px',
                  py: '4px',
                  color: '#1d63d2',
                  userSelect: 'none',
                  width: 'fit-content',
                  mb: 1.5,
                }}
              >
                <CapabilitiesPillIcon style={{ color: '#1d63d2', flexShrink: 0 }} />
                <Typography
                  component="span"
                  sx={{
                    fontSize: '0.69rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    lineHeight: 1,
                    color: '#1d63d2',
                    whiteSpace: 'nowrap',
                  }}
                >
                  CAPABILITIES
                </Typography>
              </Box>

              {/* Bold Dark Heading - No space before period */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2.15rem', md: '2.35rem' },
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: '#0b0702',
                }}
              >
                Everything your school needs.
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  color: '#888279',
                  fontSize: { xs: '0.90rem', sm: '0.96rem' },
                  lineHeight: 1.55,
                  fontWeight: 450,
                  pt: 0.3,
                }}
              >
                A modular platform — start with the essentials and expand as your school grows.
              </Typography>
            </Stack>

            {/* Right Side Button */}
            <Box
              component="button"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                border: '1px solid #e3ded6',
                borderRadius: '8px',
                px: '18px',
                py: '9px',
                color: '#1b150b',
                fontSize: '0.84rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.2s ease',
                flexShrink: 0,
                alignSelf: { xs: 'stretch', sm: 'flex-start', md: 'flex-end' },
                mt: { xs: 1, md: 0 },
                '&:hover': {
                  borderColor: '#c8c2b7',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              View All Modules
              <ArrowForwardRoundedIcon sx={{ fontSize: 15, color: '#1b150b' }} />
            </Box>
          </Stack>
        </RevealOnScroll>

        {/* Responsive 4x2 Grid Layout (xs=12, sm=6, md=3) */}
        <Box
          sx={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            alignItems: 'stretch',
          }}
        >
          {capabilities.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <RevealOnScroll
                key={cap.id}
                variant="pop-up"
                delay={(idx % 4) * 0.08}
                threshold={0.06}
                sx={{ height: '100%' }}
              >
                <Box
                  onClick={() => {
                    window.location.hash = `#modules-${cap.id}`;
                  }}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: '#fdfbf9', // Exact sampled warm off-white
                    border: '1px solid #efece7', // Exact sampled warm border
                    borderRadius: '13px',
                    p: '20px 18px 22px 18px',
                    height: '100%',
                    minHeight: '168px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    transition:
                      'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#ded8cf',
                      boxShadow: '0 8px 18px -4px rgba(27, 21, 11, 0.06)',
                    },
                  }}
                >
                  {/* Icon Box in Top-Left (Exact: #DAEDFF, 36px x 36px) */}
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '8px',
                      backgroundColor: '#daedff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1a6adb',
                      mb: '14px',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent />
                  </Box>

                  {/* Module Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.96rem',
                      letterSpacing: '-0.02em',
                      color: '#1b150b',
                      mb: '6px',
                      lineHeight: 1.25,
                    }}
                  >
                    {cap.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    component="p"
                    sx={{
                      color: '#888279',
                      fontSize: '0.80rem',
                      lineHeight: 1.45,
                      fontWeight: 450,
                    }}
                  >
                    {cap.description}
                  </Typography>
                </Box>
              </RevealOnScroll>
            );
          })}
        </Box>
        </Box>
      </Container>
    </Box>
  );
}

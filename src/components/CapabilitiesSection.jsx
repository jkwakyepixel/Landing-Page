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
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: '#f7f6f2',
        position: 'relative',
        scrollMarginTop: '80px',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1240px',
          mx: 'auto',
          px: { xs: 2.5, sm: 3.5, md: 5 },
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
              sx={{ mb: { xs: 5, sm: 6, md: 6.5 } }}
            >
            {/* Left Side Header Text */}
            <Stack spacing={0.6} sx={{ maxWidth: 660 }}>
              {/* Overline Tag Pill */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(20, 20, 22, 0.12)',
                  borderRadius: '9999px',
                  px: '14px',
                  py: '5px',
                  color: '#141416',
                  userSelect: 'none',
                  width: 'fit-content',
                  mb: 1.5,
                }}
              >
                <CapabilitiesPillIcon style={{ color: '#0071e3', flexShrink: 0 }} />
                <Typography
                  component="span"
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    lineHeight: 1,
                    color: '#141416',
                    whiteSpace: 'nowrap',
                  }}
                >
                  CAPABILITIES
                </Typography>
              </Box>

              {/* Bold Editorial Heading */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.45rem', md: '2.9rem' },
                  lineHeight: 1.08,
                  letterSpacing: '-0.036em',
                  color: '#141416',
                }}
              >
                Everything your school{' '}
                <Box component="span" className="edukra-highlight">
                  needs.
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  color: '#52525b',
                  fontSize: { xs: '0.96rem', sm: '1.05rem' },
                  lineHeight: 1.58,
                  fontWeight: 450,
                  pt: 0.4,
                }}
              >
                A modular platform — start with the essentials and expand as your school grows.
              </Typography>
            </Stack>

            {/* Right Side Button */}
            <Box
              component="a"
              href="#modules"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#modules';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#141416',
                border: '1px solid #141416',
                borderRadius: '9999px',
                px: '22px',
                py: '11px',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 650,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(20, 20, 22, 0.14)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                flexShrink: 0,
                alignSelf: { xs: 'stretch', sm: 'flex-start', md: 'flex-end' },
                mt: { xs: 1, md: 0 },
                '&:hover': {
                  backgroundColor: '#0071e3',
                  borderColor: '#0071e3',
                  transform: 'translateY(-2px)',
                },
                '&:active': {
                  transform: 'scale(0.976)',
                },
              }}
            >
              View All Modules
              <ArrowForwardRoundedIcon sx={{ fontSize: 16, color: '#ffffff' }} />
            </Box>
          </Stack>
        </RevealOnScroll>

        {/* Responsive 4x2 Bento Grid Layout */}
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
                delay={(idx % 4) * 0.05}
                threshold={0.06}
                sx={{ height: '100%' }}
              >
                <Box
                  component="button"
                  type="button"
                  onClick={() => {
                    window.location.hash = `#modules-${cap.id}`;
                  }}
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(20, 20, 22, 0.09)',
                    borderRadius: '22px',
                    p: '22px 20px 22px 20px',
                    height: '100%',
                    minHeight: '190px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    boxShadow: '0 2px 10px -2px rgba(20, 20, 22, 0.03)',
                    transition:
                      'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#0071e3',
                      boxShadow: '0 14px 30px -8px rgba(0, 113, 227, 0.14)',
                      '& .cap-arrow': {
                        opacity: 1,
                        transform: 'translateX(2px)',
                      },
                    },
                    '&:active': {
                      transform: 'scale(0.98)',
                    },
                  }}
                >
                  {/* Top Row: Icon Box + Index */}
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: '16px',
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '12px',
                        backgroundColor: 'rgba(0, 113, 227, 0.09)',
                        border: '1px solid rgba(0, 113, 227, 0.14)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0071e3',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent />
                    </Box>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.70rem',
                        fontWeight: 600,
                        color: '#71717a',
                      }}
                    >
                      0{idx + 1}
                    </Typography>
                  </Box>

                  {/* Module Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.06rem',
                      letterSpacing: '-0.02em',
                      color: '#141416',
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
                      color: '#52525b',
                      fontSize: '0.84rem',
                      lineHeight: 1.52,
                      fontWeight: 450,
                      mb: 1.5,
                      flex: 1,
                    }}
                  >
                    {cap.description}
                  </Typography>

                  <Box
                    className="cap-arrow"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: '0.75rem',
                      fontWeight: 650,
                      color: '#0071e3',
                      opacity: 0.72,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Explore module
                    <ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />
                  </Box>
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

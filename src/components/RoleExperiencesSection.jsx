import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import RevealOnScroll from './RevealOnScroll';

// Portal mockup assets
import adminMockup from '../assets/admin billing laptop mmockup.png';
import teacherMockup from '../assets/teachers tablet mock up.png';
import staffMockup from '../assets/staff mockup.png';
import studentMockup from '../assets/sruent mock up.png';
import parentMockup from '../assets/parent mobile mock up.png';

// Exact magic wand with sparks icon matching Figma pill tag
function WandIcon(props) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 9.5l-9 9a2.121 2.121 0 0 1-3-3l9-9" />
      <path d="M18 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
      <path d="M20 15l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5.5-1z" />
    </svg>
  );
}

// Exact role SVG icons matching mockup
function ShieldIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
      <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function CapIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19.5 13.572L12 21l-7.5-7.428A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.572" />
    </svg>
  );
}

// Dynamic content mapping for all 5 roles
const roleExperiences = {
  Admin: {
    label: 'Admin',
    icon: ShieldIcon,
    title: 'One view of the whole school.',
    subtitle:
      'Administrators get a real-time command centre for enrolment, staffing, finance and compliance.',
    bullets: [
      'Full-school analytics',
      'Enrolment & records',
      'Finance overview',
      'Staff management',
    ],
    ctaText: 'Explore Admin Experience',
    image: adminMockup,
  },
  Teacher: {
    label: 'Teacher',
    icon: BookIcon,
    title: 'Less paperwork. More time teaching.',
    subtitle:
      'Teachers get intuitive tools for daily attendance, lesson planning, grading and parent communication.',
    bullets: [
      'Fast attendance taking',
      'Continuous assessment & grading',
      'Lesson notes & curriculum tracking',
      'Direct messaging with parents',
    ],
    ctaText: 'Explore Teacher Experience',
    image: teacherMockup,
  },
  Staff: {
    label: 'Staff',
    icon: BriefcaseIcon,
    title: 'Streamlined operations for every department.',
    subtitle:
      'Support and administrative staff manage daily tasks, inventory, facilities and records with ease.',
    bullets: [
      'Automated task management',
      'Leave & attendance tracking',
      'Facility & asset requests',
      'Coordinated inter-department workflows',
    ],
    ctaText: 'Explore Staff Experience',
    image: staffMockup,
  },
  Student: {
    label: 'Student',
    icon: CapIcon,
    title: 'Everything students need to thrive.',
    subtitle:
      'Students access timetables, assignments, grades and learning resources through a personalized student portal.',
    bullets: [
      'Class schedule & timetable',
      'Assignment submissions & feedback',
      'Exam results & performance tracking',
      'Digital library & learning materials',
    ],
    ctaText: 'Explore Student Experience',
    image: studentMockup,
  },
  Parent: {
    label: 'Parent',
    icon: HeartIcon,
    title: 'Stay connected to your child’s journey.',
    subtitle:
      'Parents stay informed with real-time updates on attendance, academic progress, fee billing and school notices.',
    bullets: [
      'Real-time attendance alerts',
      'Instant grade & report card access',
      'Mobile fee payments & receipts',
      'Direct messaging with teachers',
    ],
    ctaText: 'Explore Parent Experience',
    image: parentMockup,
  },
};

const rolesList = ['Admin', 'Teacher', 'Staff', 'Student', 'Parent'];

export default function RoleExperiencesSection() {
  const [activeRole, setActiveRole] = useState('Admin');

  const currentRole = roleExperiences[activeRole];

  return (
    <Box
      component="section"
      id="experiences"
      sx={{
        width: '100%',
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: '#164d87', // Exact sampled rich royal blue from Figma mockup
        position: 'relative',
        scrollMarginTop: '80px',
        color: '#ffffff',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1120px',
          mx: 'auto',
          px: { xs: 2.5, sm: 3, md: 4 },
        }}
      >
        {/* Header & Role Switcher */}
        <RevealOnScroll variant="init">
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              mb: { xs: 5, sm: 6, md: 6 },
            }}
          >
            {/* Pill Tag ("ROLE-BASED EXPERIENCES") - Perfectly Centered */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 1.8 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '9999px',
                  px: '13px',
                  py: '4.5px',
                  color: '#ffffff',
                  userSelect: 'none',
                }}
              >
                <WandIcon style={{ color: '#ffffff', flexShrink: 0 }} />
                <Typography
                  component="span"
                  sx={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    lineHeight: 1,
                    color: '#ffffff',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ROLE-BASED EXPERIENCES
                </Typography>
              </Box>
            </Box>

            {/* Bold Headline - Exact 2 lines matching Figma */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.55rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                textAlign: 'center',
                maxWidth: 820,
                mx: 'auto',
                mb: 2.2,
              }}
            >
              One platform. Different experiences
              <Box component="span" sx={{ display: { sm: 'block' } }}>
                for every role.
              </Box>
            </Typography>

            {/* Interactive Role Switcher Toggle Pill - Horizontally scrollable on mobile, Centered on desktop */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: { xs: 'flex-start', sm: 'center' },
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                py: 0.5,
                px: { xs: 0.5, sm: 0 },
                mt: 0.5,
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  p: '4px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(10, 28, 62, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  flexShrink: 0,
                  mx: { xs: 'auto', sm: 0 },
                }}
              >
                {rolesList.map((roleKey) => {
                  const roleData = roleExperiences[roleKey];
                  const IconComponent = roleData.icon;
                  const isActive = activeRole === roleKey;

                  return (
                    <Box
                      key={roleKey}
                      component="button"
                      onClick={() => setActiveRole(roleKey)}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        px: { xs: '12px', sm: '16px' },
                        py: '6.5px',
                        borderRadius: '9999px',
                        border: 'none',
                        backgroundColor: isActive ? '#ffffff' : 'transparent',
                        color: isActive ? '#0b0f19' : 'rgba(255, 255, 255, 0.72)',
                        fontWeight: isActive ? 700 : 550,
                        fontSize: '0.82rem',
                        letterSpacing: '-0.01em',
                        cursor: 'pointer',
                        boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.16)' : 'none',
                        transform: isActive ? 'scale(1.02)' : 'scale(1)',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        outline: 'none',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          color: isActive ? '#0b0f19' : '#ffffff',
                          backgroundColor: isActive
                            ? '#ffffff'
                            : 'rgba(255, 255, 255, 0.08)',
                        },
                      }}
                    >
                      <IconComponent style={{ color: 'inherit' }} />
                      <Typography component="span" sx={{ fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}>
                        {roleData.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </RevealOnScroll>

        {/* Dynamic Content Layout (Top aligned, 4.8fr : 7.2fr) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '4.8fr 7.2fr' },
            gap: { xs: 4, md: '36px' },
            alignItems: 'flex-start',
            mt: { xs: 3, md: 4.5 },
          }}
        >
          {/* Left Column (Text & Features) with Toggle Animation */}
          <RevealOnScroll variant="slide-left" delay={0.1}>
            <Box
              key={activeRole}
              className="toggle-content-anim"
              sx={{ pt: { xs: 0, md: '6px' } }}
            >
              {/* Active Role Title - Single line matching Figma */}
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.65rem', sm: '1.75rem', md: '1.82rem' },
                  lineHeight: 1.2,
                  letterSpacing: '-0.025em',
                  color: '#ffffff',
                  mb: '12px',
                  whiteSpace: { md: 'nowrap' },
                }}
              >
                {currentRole.title}
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.78)',
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  maxWidth: 420,
                  mb: '22px',
                  fontWeight: 450,
                }}
              >
                {currentRole.subtitle}
              </Typography>

              {/* Bullet Points List */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  mb: '28px',
                }}
              >
                {currentRole.bullets.map((bullet, index) => (
                  <Box
                    key={bullet}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '11px',
                      animation: `toggleFadeSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s both`,
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#164d87',
                        flexShrink: 0,
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                    <Typography
                      component="span"
                      sx={{
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        fontWeight: 550,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {bullet}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Black CTA Button */}
              <Box
                component="button"
                onClick={() => { window.location.hash = '#book-demo'; }}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: { xs: '100%', sm: 'auto' },
                  backgroundColor: '#05070c', // Solid black/dark navy
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '7px',
                  px: '18px',
                  py: '10px',
                  color: '#ffffff',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#131926',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                {currentRole.ctaText}
                <ArrowForwardRoundedIcon sx={{ fontSize: 14, color: '#ffffff' }} />
              </Box>
            </Box>
          </RevealOnScroll>

          {/* Right Column (Dashboard Image Preview) */}
          <RevealOnScroll variant="mockup-pop" delay={0.2} sx={{ width: '100%' }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: '280px', sm: '380px', md: '450px' },
              }}
            >
              <Box
                component="img"
                key={activeRole}
                className="mockup-swap-anim"
                src={currentRole.image}
                alt={`${currentRole.label} Dashboard Experience`}
                sx={{
                  maxWidth: '100%',
                  maxHeight: { xs: '340px', sm: '430px', md: '500px' },
                  width: 'auto',
                  height: 'auto',
                  display: 'block',
                  mx: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.35)) drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2))',
                  imageRendering: '-webkit-optimize-contrast',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    filter: 'drop-shadow(0 26px 45px rgba(0, 0, 0, 0.45)) drop-shadow(0 10px 18px rgba(0, 0, 0, 0.25))',
                  },
                }}
              />
            </Box>
          </RevealOnScroll>
        </Box>
      </Container>
    </Box>
  );
}

import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import RevealOnScroll from './RevealOnScroll';

// Pixel-perfect SVG icons matching the high-fidelity mockup
function CommunityIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <circle cx="12" cy="15" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
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
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <rect x="10" y="10.5" width="4" height="3" rx="0.5" strokeWidth="1.6" />
    </svg>
  );
}

function CapIcon(props) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
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
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19.5 13.572L12 21l-7.5-7.428A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.572" />
    </svg>
  );
}

// 5 Role definitions matched pixel-for-pixel to mockup
const roleItems = [
  {
    id: 'administrators',
    title: 'Administrators',
    description: 'Manage the entire school from one place.',
    icon: ShieldIcon,
  },
  {
    id: 'teachers',
    title: 'Teachers',
    description: 'Teach, plan, assess and communicate more efficiently.',
    icon: BookIcon,
  },
  {
    id: 'staff',
    title: 'Staff',
    description: 'Manage daily responsibilities and school services.',
    icon: BriefcaseIcon,
  },
  {
    id: 'students',
    title: 'Students',
    description: 'Access learning, assessments and school information.',
    icon: CapIcon,
  },
  {
    id: 'parents',
    title: 'Parents',
    description: "Stay connected to their child's education.",
    icon: HeartIcon,
  },
];

export default function RolesSection() {
  return (
    <Box
      component="section"
      id="roles"
      sx={{
        width: '100%',
        pt: { xs: 7, sm: 9, md: 11 },
        pb: { xs: 8, sm: 10, md: 12 },
        backgroundColor: '#f7f6f2',
        position: 'relative',
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
        {/* Section Header Container with Scroll Entrance */}
        <RevealOnScroll variant="init">
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto',
              mb: { xs: 5, sm: 6, md: 7 },
            }}
          >
            {/* Editorial Pill Tag */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(20, 20, 22, 0.12)',
                borderRadius: '9999px',
                px: '14px',
                py: '5px',
                color: '#141416',
                userSelect: 'none',
                width: 'fit-content',
                mx: 'auto',
                mb: 2,
              }}
            >
              <CommunityIcon sx={{ color: '#0071e3', flexShrink: 0 }} />
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
                FOR THE WHOLE COMMUNITY
              </Typography>
            </Box>

            {/* Heading */}
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
                mb: 2,
              }}
            >
              Built for everyone who makes a{' '}
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'block' } }}>
                school{' '}
                <Box component="span" className="edukra-highlight">
                  work.
                </Box>
              </Box>
            </Typography>

            {/* Subheading */}
            <Typography
              variant="body1"
              sx={{
                color: '#52525b',
                fontSize: { xs: '0.96rem', sm: '1.05rem' },
                lineHeight: 1.58,
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 450,
              }}
            >
              Five connected experiences, one shared source of truth — tailored to
              every role in your school community.
            </Typography>
          </Box>
        </RevealOnScroll>

        {/* Responsive 5-Column Bento Grid Layout with Staggered Entrance */}
        <Box
          sx={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            alignItems: 'stretch',
          }}
        >
          {roleItems.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <RevealOnScroll
                key={role.id}
                delay={index * 0.05}
                threshold={0.08}
                rootMargin="0px 0px -30px 0px"
              >
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(20, 20, 22, 0.09)',
                    borderRadius: '22px',
                    p: '22px 20px 24px 20px',
                    height: '100%',
                    minHeight: '196px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    boxShadow: '0 2px 10px -2px rgba(20, 20, 22, 0.03)',
                    transition:
                      'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#141416',
                      boxShadow: '0 14px 30px -8px rgba(20, 20, 22, 0.1)',
                    },
                  }}
                >
                  {/* Top Row: Icon Box & Step Index */}
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: '18px',
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
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#71717a',
                      }}
                    >
                      0{index + 1}
                    </Typography>
                  </Box>

                  {/* Role Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.08rem',
                      letterSpacing: '-0.02em',
                      color: '#141416',
                      mb: '6px',
                      lineHeight: 1.25,
                    }}
                  >
                    {role.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    component="p"
                    sx={{
                      color: '#52525b',
                      fontSize: '0.85rem',
                      lineHeight: 1.52,
                      fontWeight: 450,
                    }}
                  >
                    {role.description}
                  </Typography>
                </Box>
              </RevealOnScroll>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

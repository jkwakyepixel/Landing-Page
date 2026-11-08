import React from 'react';
import {
  Box,
  Container,
  Stack,
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
        pt: { xs: 8, sm: 10, md: 12 },
        pb: { xs: 10, sm: 12, md: 15 },
        backgroundColor: '#ffffff',
        position: 'relative',
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
        {/* Section Header Container with Scroll Entrance */}
        <RevealOnScroll variant="init">
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 680,
              mx: 'auto',
              mb: { xs: 5, sm: 6, md: 7 },
            }}
          >
            {/* Apple Pill Tag */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                backgroundColor: 'rgba(0, 113, 227, 0.08)',
                border: '1px solid rgba(0, 113, 227, 0.18)',
                borderRadius: '9999px',
                px: '14px',
                py: '5px',
                color: '#0071e3',
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
                  fontSize: '0.70rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  lineHeight: 1,
                  color: '#0071e3',
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
                fontWeight: 750,
                fontSize: { xs: '1.9rem', sm: '2.35rem', md: '2.75rem' },
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: '#1d1d1f',
                mb: 2,
              }}
            >
              Built for everyone who makes a{' '}
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'block' } }}>
                school work.
              </Box>
            </Typography>

            {/* Subheading */}
            <Typography
              variant="body1"
              sx={{
                color: '#6e6e73',
                fontSize: { xs: '0.96rem', sm: '1.04rem' },
                lineHeight: 1.55,
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
                delay={index * 0.06}
                threshold={0.08}
                rootMargin="0px 0px -30px 0px"
              >
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    borderRadius: '20px',
                    p: '22px 18px 24px 18px',
                    height: '100%',
                    minHeight: '185px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02), 0 8px 20px -4px rgba(0, 0, 0, 0.03)',
                    transition:
                      'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'rgba(0, 113, 227, 0.25)',
                      boxShadow: '0 12px 28px -6px rgba(0, 113, 227, 0.12)',
                    },
                    '&:active': {
                      transform: 'scale(0.98)',
                    },
                  }}
                >
                {/* Icon Box */}
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 113, 227, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0071e3',
                    mb: '16px',
                    flexShrink: 0,
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                  }}
                >
                  <IconComponent />
                </Box>

                {/* Role Title */}
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 650,
                    fontSize: '1.02rem',
                    letterSpacing: '-0.02em',
                    color: '#1d1d1f',
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
                    color: '#6e6e73',
                    fontSize: '0.84rem',
                    lineHeight: 1.5,
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

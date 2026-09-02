import React from 'react';
import {
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';

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
        pt: { xs: 6, sm: 8, md: 9 },
        pb: { xs: 10, sm: 12, md: 15 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '980px',
          mx: 'auto',
          px: { xs: 2.5, sm: 3 },
        }}
      >
        {/* Section Header Container */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 620,
            mx: 'auto',
            mb: { xs: 4.5, sm: 5.5, md: 6.5 },
          }}
        >
          {/* Pill Tag (Exact sampled dimensions: ~188px x 22px, compact & centered) */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              backgroundColor: '#eaf2ff',
              border: '1px solid #d4e4fc',
              borderRadius: '9999px',
              px: '12px',
              py: '4px',
              color: '#1d63d2',
              userSelect: 'none',
              width: 'fit-content',
              mx: 'auto',
              mb: 2,
            }}
          >
            <CommunityIcon sx={{ color: '#1d63d2', flexShrink: 0 }} />
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
              FOR THE WHOLE COMMUNITY
            </Typography>
          </Box>

          {/* Heading (Exact sampled typography: #0B0702, tight line height) */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.85rem', sm: '2.15rem', md: '2.4rem' },
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#0b0702',
              mb: 1.8,
            }}
          >
            Built for everyone who makes a
            <Box component="span" sx={{ display: 'block' }}>
              school work.
            </Box>
          </Typography>

          {/* Subheading (Exact sampled typography: #888279) */}
          <Typography
            variant="body1"
            sx={{
              color: '#888279',
              fontSize: { xs: '0.92rem', sm: '0.98rem' },
              lineHeight: 1.55,
              maxWidth: 560,
              mx: 'auto',
              fontWeight: 450,
            }}
          >
            Five connected experiences, one shared source of truth — tailored to
            every role in your school community.
          </Typography>
        </Box>

        {/* Responsive 5-Column Grid Layout */}
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
          {roleItems.map((role) => {
            const IconComponent = role.icon;
            return (
              <Box
                key={role.id}
                sx={{
                  backgroundColor: '#fdfbf9', // Exact sampled off-white
                  border: '1px solid #efece7', // Exact sampled warm border
                  borderRadius: '13px',
                  p: '18px 16px 20px 16px',
                  height: '100%',
                  minHeight: '175px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  transition:
                    'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    borderColor: '#ded8cf',
                    boxShadow: '0 8px 18px -4px rgba(27, 21, 11, 0.06)',
                  },
                }}
              >
                {/* Icon Box in Top-Left (Exact sampled: #DAEDFF, 38px x 38px) */}
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    backgroundColor: '#daedff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1a6adb',
                    mb: '16px',
                    flexShrink: 0,
                  }}
                >
                  <IconComponent />
                </Box>

                {/* Role Title (Exact sampled: #1B150B) */}
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    letterSpacing: '-0.02em',
                    color: '#1b150b',
                    mb: '6px',
                    lineHeight: 1.25,
                  }}
                >
                  {role.title}
                </Typography>

                {/* Description (Exact sampled: #888279) */}
                <Typography
                  component="p"
                  sx={{
                    color: '#888279',
                    fontSize: '0.80rem',
                    lineHeight: 1.45,
                    fontWeight: 450,
                  }}
                >
                  {role.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

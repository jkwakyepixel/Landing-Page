import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import RevealOnScroll from './RevealOnScroll';

// Custom SVG Gradient definition matching app brand blue palette
function GradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient id="appBrandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d68d8" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Envelope icon with brand blue gradient
function EnvelopeBrandIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#appBrandGradient)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M22 6l-10 7L2 6" />
      <line x1="7" y1="12" x2="12" y2="12" />
    </svg>
  );
}

// Speech bubbles with question mark icon with brand blue gradient
function HelpCentreBrandIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#appBrandGradient)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.5-2.3 2-2.3 2" />
      <line x1="12" y1="15" x2="12.01" y2="15" />
    </svg>
  );
}

export default function SupportSection() {

  return (
    <Box
      component="section"
      id="support"
      sx={{
        width: '100%',
        backgroundColor: '#faf9f7', // Exact off-white background matching the rest of the application
        py: { xs: 8, sm: 10, md: 11 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GradientDefs />

      {/* Subtle background glow */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(29, 104, 216, 0.05) 0%, transparent 70%)',
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1120px',
          mx: 'auto',
          px: { xs: 2.5, sm: 3, md: 4 },
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Guarantees mathematical horizontal centering
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Header Block — Mathematically Centered */}
          <RevealOnScroll variant="init">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                maxWidth: 780,
                mx: 'auto',
                mb: { xs: 5, sm: 6, md: 6.5 },
              }}
            >
              {/* Overline Badge Pill — Compact & Centered */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#e8f2ff',
                  color: '#1d68d8',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  borderRadius: '9999px',
                  px: '14px',
                  py: '4px',
                  mb: '14px',
                  border: '1px solid rgba(29, 104, 216, 0.15)',
                  width: 'fit-content',
                  textTransform: 'uppercase',
                }}
              >
                OUR SUPPORT
              </Box>

              {/* Main Headline — Centered */}
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{
                  fontWeight: 800,
                  color: '#0f172a', // Deep slate navy matching app headings
                  fontSize: { xs: '1.7rem', sm: '2.25rem', md: '2.65rem' },
                  lineHeight: 1.15,
                  letterSpacing: '-0.035em',
                  width: '100%',
                  textAlign: 'center',
                  mb: '12px',
                }}
              >
                Unrivalled Support. We’ve Got You Covered.
              </Typography>

              {/* Subtitle — Centered */}
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: '#64748b',
                  fontSize: { xs: '0.92rem', sm: '0.98rem' },
                  fontWeight: 450,
                  letterSpacing: '-0.01em',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                We're at your side, 24 hours a day, 7 days a week.
              </Typography>
            </Box>
          </RevealOnScroll>

          {/* 2 Support Cards Row — Mathematically Centered */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 3, sm: 3.5, md: 4 },
              width: '100%',
              mx: 'auto',
            }}
          >
            {/* Card 1: Email Support */}
            <RevealOnScroll variant="pop-up" delay={0.06} sx={{ width: '100%', maxWidth: 340 }}>
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  px: { xs: 3.5, sm: 4.5 },
                  py: { xs: 4, sm: 4.5 },
                  textAlign: 'center',
                  boxShadow:
                    '0 12px 32px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                  boxShadow:
                    '0 18px 45px rgba(29, 104, 216, 0.1), 0 0 0 1px rgba(29, 104, 216, 0.08)',
                },
              }}
            >
              {/* Brand Blue Gradient Icon */}
              <Box sx={{ mb: 2 }}>
                <EnvelopeBrandIcon />
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                component="h3"
                align="center"
                sx={{
                  fontWeight: 750,
                  fontSize: '1.08rem',
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  mb: '6px',
                  textAlign: 'center',
                }}
              >
                Email Support
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body2"
                align="center"
                sx={{
                  color: '#64748b',
                  fontSize: '0.86rem',
                  fontWeight: 450,
                  mb: '24px',
                  textAlign: 'center',
                }}
              >
                Fast, reliable answers
              </Typography>

              {/* Button */}
              <Box
                component="a"
                href="#contact"
                sx={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#0c0a07',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  letterSpacing: '-0.01em',
                  px: '26px',
                  py: '10.5px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: 220,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    backgroundColor: '#1b1814',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.38)',
                  },
                }}
              >
                Submit Request
                <ArrowForwardRoundedIcon sx={{ fontSize: 15, color: '#ffffff' }} />
              </Box>
            </Box>
          </RevealOnScroll>

          {/* Card 2: Help Centre */}
          <RevealOnScroll variant="pop-up" delay={0.16} sx={{ width: '100%', maxWidth: 340 }}>
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                px: { xs: 3.5, sm: 4.5 },
                py: { xs: 4, sm: 4.5 },
                textAlign: 'center',
                boxShadow:
                  '0 12px 32px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow:
                    '0 18px 45px rgba(29, 104, 216, 0.1), 0 0 0 1px rgba(29, 104, 216, 0.08)',
                },
              }}
            >
              {/* Brand Blue Gradient Icon */}
              <Box sx={{ mb: 2 }}>
                <HelpCentreBrandIcon />
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                component="h3"
                align="center"
                sx={{
                  fontWeight: 750,
                  fontSize: '1.08rem',
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  mb: '6px',
                  textAlign: 'center',
                }}
              >
                Help Centre
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body2"
                align="center"
                sx={{
                  color: '#64748b',
                  fontSize: '0.86rem',
                  fontWeight: 450,
                  mb: '24px',
                  textAlign: 'center',
                }}
              >
                Searchable resources, anytime
              </Typography>

              {/* Button */}
              <Box
                component="a"
                href="#help-centre"
                sx={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#0c0a07',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  letterSpacing: '-0.01em',
                  px: '26px',
                  py: '10.5px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: 220,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    backgroundColor: '#1b1814',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.38)',
                  },
                }}
              >
                Dive In
                <ArrowForwardRoundedIcon sx={{ fontSize: 15, color: '#ffffff' }} />
              </Box>
            </Box>
          </RevealOnScroll>
        </Box>
        </Box>
      </Container>
    </Box>
  );
}

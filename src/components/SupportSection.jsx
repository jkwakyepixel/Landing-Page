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

// Live demonstration / calendar icon with brand blue gradient
function DemoBrandIcon() {
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
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M10 14l4 2-4 2v-4z" />
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
        backgroundColor: '#f5f5f7', // Apple neutral light canvas
        py: { xs: 8, sm: 10, md: 12 },
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
          opacity: 0.35,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0, 113, 227, 0.06) 0%, transparent 70%)',
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
          alignItems: 'center',
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
          {/* Header Block */}
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
              {/* Overline Badge Pill */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 113, 227, 0.08)',
                  color: '#0071e3',
                  fontWeight: 700,
                  fontSize: '0.70rem',
                  letterSpacing: '0.06em',
                  borderRadius: '9999px',
                  px: '14px',
                  py: '5px',
                  mb: '14px',
                  border: '1px solid rgba(0, 113, 227, 0.18)',
                  width: 'fit-content',
                  textTransform: 'uppercase',
                }}
              >
                OUR SUPPORT
              </Box>

              {/* Main Headline */}
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{
                  fontWeight: 750,
                  color: '#1d1d1f',
                  fontSize: { xs: '1.9rem', sm: '2.35rem', md: '2.75rem' },
                  lineHeight: 1.12,
                  letterSpacing: '-0.035em',
                  width: '100%',
                  textAlign: 'center',
                  mb: '14px',
                }}
              >
                Unrivalled Support. We’ve Got You Covered.
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: '#6e6e73',
                  fontSize: { xs: '0.96rem', sm: '1.04rem' },
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

          {/* 2 Support Cards Row */}
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
            <RevealOnScroll variant="pop-up" delay={0.06} sx={{ width: '100%', maxWidth: 360 }}>
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  px: { xs: 3.5, sm: 4.5 },
                  py: { xs: 4, sm: 4.5 },
                  textAlign: 'center',
                  boxShadow:
                    '0 4px 20px -2px rgba(0, 0, 0, 0.02), 0 12px 32px -4px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(0, 113, 227, 0.25)',
                    boxShadow: '0 16px 36px -6px rgba(0, 113, 227, 0.12)',
                  },
                }}
              >
              {/* Brand Icon */}
              <Box sx={{ mb: 2 }}>
                <EnvelopeBrandIcon />
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                component="h3"
                align="center"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: '#1d1d1f',
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
                  color: '#6e6e73',
                  fontSize: '0.88rem',
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
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  color: '#1d1d1f',
                  fontWeight: 650,
                  fontSize: '0.86rem',
                  letterSpacing: '-0.01em',
                  px: '26px',
                  py: '11px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: 220,
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    borderColor: 'rgba(0, 0, 0, 0.12)',
                    transform: 'translateY(-1px)',
                  },
                  '&:active': {
                    transform: 'scale(0.976)',
                  },
                }}
              >
                Submit Request
                <ArrowForwardRoundedIcon sx={{ fontSize: 15, color: '#1d1d1f' }} />
              </Box>
            </Box>
          </RevealOnScroll>

          {/* Card 2: Book a Demo */}
          <RevealOnScroll variant="pop-up" delay={0.16} sx={{ width: '100%', maxWidth: 360 }}>
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                px: { xs: 3.5, sm: 4.5 },
                py: { xs: 4, sm: 4.5 },
                textAlign: 'center',
                boxShadow:
                  '0 4px 20px -2px rgba(0, 0, 0, 0.02), 0 12px 32px -4px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'rgba(0, 113, 227, 0.25)',
                  boxShadow: '0 16px 36px -6px rgba(0, 113, 227, 0.12)',
                },
              }}
            >
              {/* Brand Icon */}
              <Box sx={{ mb: 2 }}>
                <DemoBrandIcon />
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                component="h3"
                align="center"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  mb: '6px',
                  textAlign: 'center',
                }}
              >
                Book a Demo
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body2"
                align="center"
                sx={{
                  color: '#6e6e73',
                  fontSize: '0.88rem',
                  fontWeight: 450,
                  mb: '24px',
                  textAlign: 'center',
                }}
              >
                Guided 1-on-1 walkthrough
              </Typography>

              {/* Button */}
              <Box
                component="a"
                href="#book-demo"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#book-demo';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  fontWeight: 650,
                  fontSize: '0.86rem',
                  letterSpacing: '-0.01em',
                  px: '26px',
                  py: '11px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  width: '100%',
                  maxWidth: 220,
                  boxShadow: '0 2px 10px rgba(0, 113, 227, 0.28)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    backgroundColor: '#0077ed',
                    boxShadow: '0 4px 14px rgba(0, 113, 227, 0.38)',
                    transform: 'translateY(-1px)',
                  },
                  '&:active': {
                    transform: 'scale(0.976)',
                  },
                }}
              >
                Schedule Demo
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

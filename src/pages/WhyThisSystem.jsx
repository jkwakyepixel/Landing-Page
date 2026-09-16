import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Stack,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// The exact 3-tier database / data silo icon from the user's mockup
function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D63D2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

// Circular 'X' cross icon in amber for Problem cards
function AmberCrossIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#CB972E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

// Diamond icon for section pill badges (matching the mockup)
function BadgeDiamondIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polygon points="12 2 22 12 12 22 2 12" />
    </svg>
  );
}
const BadgeTargetIcon = BadgeDiamondIcon;

// Feather / Pen nib icon for "FROM THE MANUSCRIPT" pill tag
function PenNibIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

// Result icons
function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2863AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2863AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function OrganisationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2863AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function DecisionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2863AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2863AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export default function WhyThisSystem() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FDFBF9',
        color: '#191309',
        fontFamily: "'Inter', sans-serif",
        overflowX: 'hidden',
      }}
    >
      <NavigationBar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* ========================================================= */}
        {/* SECTION 1: HERO HEADER */}
        {/* ========================================================= */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            pt: { xs: 15, sm: 17, md: 20 },
            pb: { xs: 8, md: 12 },
            px: 2,
            textAlign: 'center',
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

          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <RevealOnScroll variant="init">
              {/* Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  backgroundColor: '#DAEDFF',
                  color: '#1D4D87',
                  px: '14px',
                  py: '4px',
                  borderRadius: '9999px',
                  mb: 2.5,
                }}
              >
                <BadgeTargetIcon />
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  WHY THIS SYSTEM
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '34px', sm: '46px', md: '52px' },
                  lineHeight: 1.15,
                  letterSpacing: '-1px',
                  color: '#0B0702',
                  mb: 2.5,
                }}
              >
                The logic behind the platform.
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: { xs: '15px', sm: '17px' },
                  lineHeight: '26px',
                  color: '#5B5449',
                  maxWidth: '620px',
                  mx: 'auto',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Why we built it, the problem it solves, and what a connected platform makes possible for schools.
              </Typography>
            </RevealOnScroll>
          </Container>
        </Box>

        {/* ========================================================= */}
        {/* SECTION 2: THE CHALLENGE */}
        {/* ========================================================= */}
        <Box sx={{ pt: { xs: 7, md: 10 }, pb: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}>
          <Container maxWidth={false} sx={{ maxWidth: '1140px !important', mx: 'auto', px: { xs: 2.5, sm: 4, md: 4 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1.25fr' },
                gap: { xs: 5, md: 7 },
                alignItems: 'center',
              }}
            >
              {/* Left Column: Text */}
              <Box>
                <RevealOnScroll variant="slide-left">
                  {/* Badge */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      backgroundColor: '#EAF2FF',
                      color: '#1D63D2',
                      px: '13px',
                      py: '4px',
                      borderRadius: '9999px',
                      mb: 2.2,
                    }}
                  >
                    <BadgeDiamondIcon />
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.9px',
                        textTransform: 'uppercase',
                        fontFamily: "'Inter', sans-serif",
                        color: '#1D63D2',
                        lineHeight: 1,
                      }}
                    >
                      THE CHALLENGE
                    </Typography>
                  </Box>

                  {/* Heading */}
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '28px', sm: '36px', md: '42px' },
                      lineHeight: { xs: 1.22, md: 1.16 },
                      letterSpacing: '-0.8px',
                      color: '#0B0702',
                      mb: 2.2,
                    }}
                  >
                    Schools manage a lot of{' '}
                    <Box component="span" sx={{ display: { xs: 'inline', md: 'block' } }}>
                      information every day.
                    </Box>
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: { xs: '14.5px', sm: '15.5px' },
                      lineHeight: 1.65,
                      color: '#5B5449',
                      fontFamily: "'Inter', sans-serif",
                      maxWidth: '470px',
                    }}
                  >
                    Enrolment records, attendance, grades, finances, transport and communication all flow through a school daily — each one generating data that needs to be captured, organized and acted on.
                  </Typography>
                </RevealOnScroll>
              </Box>

              {/* Right Column: 2x3 Grid of 6 Cards with Database Icons */}
              <Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: { xs: 1.5, sm: 2 },
                  }}
                >
                  {[
                    'Enrolment',
                    'Attendance',
                    'Grades',
                    'Finance',
                    'Transport',
                    'Communication',
                  ].map((label, idx) => (
                    <RevealOnScroll
                      key={idx}
                      delay={(idx % 2) * 0.12 + Math.floor(idx / 2) * 0.08}
                      threshold={0.08}
                      rootMargin="0px 0px -30px 0px"
                    >
                      <Card
                        elevation={0}
                        sx={{
                          py: { xs: 2.8, sm: 3.2 },
                          px: 2,
                          backgroundColor: '#FDFBF9',
                          border: '1px solid #EFECE6',
                          borderRadius: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          minHeight: { xs: '84px', sm: '92px' },
                          transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                          '&:hover': {
                            backgroundColor: '#FFFFFF',
                            borderColor: '#CBD5E1',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
                          },
                        }}
                      >
                        <Box sx={{ mb: 1.2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <DatabaseIcon />
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: '13.5px',
                            color: '#0B0702',
                            letterSpacing: '-0.1px',
                          }}
                        >
                          {label}
                        </Typography>
                      </Card>
                    </RevealOnScroll>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ========================================================= */}
        {/* SECTION 3: THE PROBLEM (8 PILL CARDS WITH AMBER CROSS) */}
        {/* ========================================================= */}
        <Box sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
          <Container maxWidth={false} sx={{ maxWidth: '1140px !important', mx: 'auto', px: { xs: 2.5, sm: 4, md: 4 } }}>
            <RevealOnScroll variant="init">
              <Box sx={{ mb: { xs: 3.5, md: 4.5 } }}>
                {/* Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    backgroundColor: '#EAF2FF',
                    color: '#1D63D2',
                    px: '13px',
                    py: '4px',
                    borderRadius: '9999px',
                    mb: 2,
                  }}
                >
                  <BadgeDiamondIcon />
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.9px',
                      textTransform: 'uppercase',
                      fontFamily: "'Inter', sans-serif",
                      color: '#1D63D2',
                      lineHeight: 1,
                    }}
                  >
                    THE PROBLEM
                  </Typography>
                </Box>

                {/* Heading */}
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '28px', sm: '36px', md: '42px' },
                    lineHeight: { xs: 1.22, md: 1.16 },
                    letterSpacing: '-0.8px',
                    color: '#0B0702',
                    mb: 2,
                  }}
                >
                  When information is scattered,{' '}
                  <Box component="span" sx={{ display: { xs: 'inline', md: 'block' } }}>
                    consistency breaks down.
                  </Box>
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '14.5px', sm: '15.5px' },
                    lineHeight: 1.65,
                    color: '#5B5449',
                    maxWidth: '720px',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Spread across paper, spreadsheets, messaging apps and disconnected software, it becomes hard to keep everything consistent and visible.
                </Typography>
              </Box>
            </RevealOnScroll>

            {/* 8 Problem Pills (4 columns x 2 rows) */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: { xs: 1.5, sm: 2 },
              }}
            >
              {[
                'Paper records',
                'Spreadsheets',
                'Manual attendance',
                'Disconnected communication',
                'Separate payment records',
                'Difficult reporting',
                'Multiple systems',
                'Repetitive admin work',
              ].map((text, idx) => (
                <RevealOnScroll
                  key={idx}
                  delay={(idx % 4) * 0.08 + Math.floor(idx / 4) * 0.1}
                  threshold={0.08}
                  rootMargin="0px 0px -30px 0px"
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.4,
                      p: '15px 18px',
                      backgroundColor: '#FDFBF9',
                      border: '1px solid #EFECE6',
                      borderRadius: '12px',
                      minHeight: '52px',
                      transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                      '&:hover': {
                        backgroundColor: '#FFFFFF',
                        borderColor: '#CBD5E1',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.03)',
                      },
                    }}
                  >
                    <AmberCrossIcon />
                    <Typography
                      sx={{
                        fontSize: '13.5px',
                        fontWeight: 500,
                        color: '#334155',
                        fontFamily: "'Inter', sans-serif",
                        whiteSpace: { lg: 'nowrap', xs: 'normal' },
                        letterSpacing: '-0.1px',
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </RevealOnScroll>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ========================================================= */}
        {/* SECTION 4: THE OPPORTUNITY (DARK OBSIDIAN BANNER) */}
        {/* ========================================================= */}
        <Box
          sx={{
            py: { xs: 8, md: 11 },
            backgroundColor: '#0C0A07',
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <RevealOnScroll variant="pop-up">
              {/* Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  px: '14px',
                  py: '4px',
                  borderRadius: '9999px',
                  mb: 2.5,
                }}
              >
                <BadgeTargetIcon />
                <Typography sx={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                  THE OPPORTUNITY
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '28px', sm: '36px', md: '42px' },
                  lineHeight: 1.2,
                  letterSpacing: '-0.8px',
                  color: '#FFFFFF',
                  mb: 2,
                }}
              >
                Bring your core operations together.
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: { xs: '14.5px', sm: '16px' },
                  lineHeight: '26px',
                  color: 'rgba(255, 255, 255, 0.68)',
                  maxWidth: '580px',
                  mx: 'auto',
                  mb: 5,
                }}
              >
                A connected platform lets a school unify its records, communication and reporting into one system that everyone shares.
              </Typography>

              {/* Connected Diagram Box */}
              <Box
                sx={{
                  maxWidth: '680px',
                  mx: 'auto',
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                {/* Pills row */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  {['Records', 'Attendance', 'Finance', 'Reports', 'Communication', 'Transport'].map((pill, i) => (
                    <Box
                      key={i}
                      sx={{
                        backgroundColor: '#FFFFFF',
                        color: '#0C0A07',
                        fontSize: '12px',
                        fontWeight: 600,
                        px: 2,
                        py: 0.8,
                        borderRadius: '9999px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      {pill}
                    </Box>
                  ))}
                </Box>

                {/* Sub-label */}
                <Typography
                  sx={{
                    fontSize: '11.5px',
                    color: 'rgba(255, 255, 255, 0.42)',
                    letterSpacing: '0.2px',
                  }}
                >
                  connected through one platform
                </Typography>
              </Box>
            </RevealOnScroll>
          </Container>
        </Box>

        {/* ========================================================= */}
        {/* SECTION 5: THE RESULT (5 CARDS) */}
        {/* ========================================================= */}
        <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#F7F5F1', borderTop: '1px solid #EFEBE4', borderBottom: '1px solid #EFEBE4' }}>
          <Container maxWidth={false} sx={{ maxWidth: '1240px !important', mx: 'auto', px: { xs: 2.5, sm: 3, md: 4 } }}>
            <RevealOnScroll variant="init">
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.8,
                    backgroundColor: '#DAEDFF',
                    color: '#1D4D87',
                    px: '12px',
                    py: '3.5px',
                    borderRadius: '9999px',
                    mb: 2,
                  }}
                >
                  <BadgeTargetIcon />
                  <Typography sx={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                    THE RESULT
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '28px', sm: '36px', md: '40px' },
                    lineHeight: 1.2,
                    letterSpacing: '-0.8px',
                    color: '#0B0702',
                  }}
                >
                  A better experience for the whole school.
                </Typography>
              </Box>
            </RevealOnScroll>

            {/* 5 Result Cards */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(5, 1fr)',
                },
                gap: { xs: 2.5, md: 2 },
              }}
            >
              {[
                {
                  title: 'Better visibility',
                  description: "One source of truth for what's happening across the whole school.",
                  icon: <EyeIcon />,
                },
                {
                  title: 'Better communication',
                  description: 'Clear, consistent messages between staff, students and parents.',
                  icon: <ChatIcon />,
                },
                {
                  title: 'Better organisation',
                  description: 'Records and processes that are structured, searchable and reliable.',
                  icon: <OrganisationIcon />,
                },
                {
                  title: 'Better decision-making',
                  description: 'Accurate data that helps leaders act with confidence.',
                  icon: <DecisionIcon />,
                },
                {
                  title: 'Better experience',
                  description: 'A smoother day-to-day for everyone in the school community.',
                  icon: <ExperienceIcon />,
                },
              ].map((res, i) => (
                <RevealOnScroll
                  key={i}
                  delay={i * 0.08}
                  threshold={0.08}
                  rootMargin="0px 0px -30px 0px"
                >
                  <Card
                    elevation={0}
                    sx={{
                      p: '28px 20px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #EFEBE4',
                      borderRadius: '10px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      height: '100%',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: '#CBD5E1',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '8px',
                        backgroundColor: '#DAEDFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.2,
                      }}
                    >
                      {res.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: '15px',
                        color: '#191309',
                        mb: 1.2,
                        minHeight: { md: '40px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {res.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '13px',
                        lineHeight: '20px',
                        color: '#64748B',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {res.description}
                    </Typography>
                  </Card>
                </RevealOnScroll>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ========================================================= */}
        {/* SECTION 6: FROM THE MANUSCRIPT (3 QUOTE CARDS) */}
        {/* ========================================================= */}
        <Box sx={{ pt: { xs: 8, md: 11 }, pb: { xs: 5, md: 7 }, backgroundColor: '#FFFFFF' }}>
          <Container maxWidth={false} sx={{ maxWidth: '1140px !important', mx: 'auto', px: { xs: 2.5, sm: 3, md: 4 } }}>
            <RevealOnScroll variant="init">
              <Box sx={{ mb: { xs: 3.5, md: 4.5 } }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    backgroundColor: '#EAF2FF',
                    color: '#1D63D2',
                    px: '13px',
                    py: '4px',
                    borderRadius: '9999px',
                    mb: 2,
                  }}
                >
                  <PenNibIcon />
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.9px',
                      textTransform: 'uppercase',
                      fontFamily: "'Inter', sans-serif",
                      color: '#1D63D2',
                      lineHeight: 1,
                    }}
                  >
                    FROM THE MANUSCRIPT
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '28px', sm: '36px', md: '40px' },
                    lineHeight: { xs: 1.22, md: 1.16 },
                    letterSpacing: '-0.8px',
                    color: '#0B0702',
                  }}
                >
                  The ideas behind the platform.
                </Typography>
              </Box>
            </RevealOnScroll>

            {/* 3 Manuscript Cards */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: { xs: 2.5, md: 3 },
                alignItems: 'stretch',
              }}
            >
              {[
                {
                  quote:
                    'We surveyed 127 Ghanaian institutions and uncovered a striking reality: 81% of schools were open to switching their software. Existing systems were either exorbitant foreign imports that ignored local payment systems or fragmented tools that broke under pressure. We built Urion SMS to deliver an intuitive, affordable platform made specifically for our schools.',
                  chapter: 'CHAPTER 01 · THE FOUNDING IDEA',
                  desc: 'Why the platform was created, in the words of its founders.',
                },
                {
                  quote:
                    'Schools were forced to juggle paper ledgers, disparate spreadsheets, and disconnected messaging channels. Fee reconciliation took weeks, parent updates were delayed, and 37% of schools feared losing their historical records to fragile systems. Educational leaders deserved better than administrative chaos.',
                  chapter: 'CHAPTER 02 · THE PROBLEM WE SAW',
                  desc: 'The challenge that inspired a connected approach.',
                },
                {
                  quote:
                    'Our vision is to make world-class school management accessible to every institution in Ghana. By pairing Ghana-first integrations like Mobile Money and WhatsApp with white-glove data migration and real-time academic dashboards, we empower educators to focus on what matters most: student success.',
                  chapter: 'CHAPTER 03 · THE VISION',
                  desc: 'The direction that still guides every module we build.',
                },
              ].map((card, i) => (
                <RevealOnScroll
                  key={i}
                  delay={i * 0.12}
                  threshold={0.08}
                  rootMargin="0px 0px -30px 0px"
                  sx={{ height: '100%', display: 'flex' }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      p: { xs: 3, sm: '32px 26px' },
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #EFECE6',
                      borderRadius: '12px',
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                      '&:hover': {
                        borderColor: '#CBD5E1',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 3.5, flexGrow: 1 }}>
                      {/* Soft pastel baby blue quotation mark */}
                      <Typography
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 700,
                          fontSize: '20px',
                          lineHeight: 1,
                          color: '#93C5FD',
                          mb: 2,
                          userSelect: 'none',
                        }}
                      >
                        “
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: { xs: '13.5px', sm: '14.5px' },
                          lineHeight: '23px',
                          color: '#1E293B',
                          fontWeight: 400,
                        }}
                      >
                        {card.quote}
                      </Typography>
                    </Box>

                    {/* Bottom Chapter Meta */}
                    <Box sx={{ pt: 2.2, borderTop: '1px solid #EFECE6' }}>
                      <Typography
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.8px',
                          color: '#1D63D2',
                          textTransform: 'uppercase',
                          mb: 0.6,
                          lineHeight: 1.2,
                        }}
                      >
                        {card.chapter}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '12.5px',
                          color: '#5B5449',
                          lineHeight: 1.45,
                        }}
                      >
                        {card.desc}
                      </Typography>
                    </Box>
                  </Card>
                </RevealOnScroll>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ========================================================= */}
        {/* SECTION 7: CTA BANNER (BLUE TO AMBER GRADIENT) */}
        {/* ========================================================= */}
        <Box sx={{ pb: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
          <Container maxWidth={false} sx={{ maxWidth: '1140px !important', mx: 'auto', px: { xs: 2.5, sm: 3, md: 4 } }}>
            <RevealOnScroll variant="pop-up">
            <Box
              sx={{
                p: { xs: 4, sm: 6, md: 7 },
                background: 'linear-gradient(102.61deg, #2863AB 0%, #3A7BCB 60%, #DE9D16 100%)',
                borderRadius: '16px',
                textAlign: 'center',
                color: '#FFFFFF',
                boxShadow: '0 12px 32px rgba(40, 99, 171, 0.18)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '26px', sm: '34px', md: '38px' },
                  lineHeight: 1.2,
                  letterSpacing: '-0.8px',
                  mb: 3.5,
                }}
              >
                See it for your school.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                  width: '100%',
                  mx: 'auto',
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    window.location.hash = '#book-demo';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '15px !important' }} />}
                  sx={{
                    py: 1.3,
                    px: 3.5,
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textTransform: 'none',
                    backgroundColor: '#FFFFFF',
                    color: '#1D4D87',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '&:hover': {
                      backgroundColor: '#F8FAFC',
                    },
                  }}
                >
                  Book a Demo
                </Button>

                <Button
                  variant="text"
                  onClick={() => {
                    window.location.hash = '#history';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  sx={{
                    py: 1.3,
                    px: 2.5,
                    fontWeight: 600,
                    fontSize: '14px',
                    textTransform: 'none',
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    },
                  }}
                >
                  Our mission & vision
                </Button>
              </Box>
            </Box>
          </RevealOnScroll>
        </Container>
      </Box>
    </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}

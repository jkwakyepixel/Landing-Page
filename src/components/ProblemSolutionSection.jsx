import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import RevealOnScroll from './RevealOnScroll';

// Custom pixel-perfect lightbulb icon for the header tag
function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

// Custom amber warning circle icon matching Figma mockup exactly
function WarningCircleIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c97a24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2.5" />
    </svg>
  );
}

// 8 Pain Points for "Today's reality" matching high-fidelity mockup
const painPoints = [
  'Paper records',
  'Spreadsheets',
  'Manual attendance',
  'Disconnected communication',
  'Separate payment records',
  'Difficult reporting',
  'Multiple systems',
  'Repetitive admin work',
];

// 5 Core unified modules for "One connected platform"
const connectedModules = [
  'Records',
  'Attendance',
  'Finance',
  'Reports',
  'Communication',
];

// 4-step workflow milestones inspired by editorial lifecycle timelines
const workflowTimeline = [
  {
    step: '01',
    stage: 'Enrolled',
    time: 'DAY 1 · 08:15',
    detail: 'Student profile created once; guardian linked automatically.',
    highlight: false,
  },
  {
    step: '02',
    stage: 'Attended',
    time: 'DAILY · 08:30',
    detail: 'Teacher marks class roll in seconds; instant parent push.',
    highlight: false,
  },
  {
    step: '03',
    stage: 'Settled',
    time: 'FEE PAY · LIVE',
    detail: 'MoMo & bank fee receipts match directly to student ledger.',
    highlight: false,
  },
  {
    step: '04',
    stage: 'Reported',
    time: 'TERM END · 1-CLICK',
    detail: 'Continuous assessment and final report cards published.',
    highlight: true,
  },
];

export default function ProblemSolutionSection() {
  return (
    <Box
      component="section"
      id="problem"
      sx={{
        width: '100%',
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: '#f2f0ea',
        borderTop: '1px solid rgba(20, 20, 22, 0.07)',
        borderBottom: '1px solid rgba(20, 20, 22, 0.07)',
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
        {/* Section Header */}
        <RevealOnScroll variant="init">
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 720,
              mx: 'auto',
              mb: { xs: 5, sm: 6, md: 7 },
            }}
          >
            {/* "THE PROBLEM" Overline Pill Tag */}
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
              <LightbulbIcon style={{ color: '#0071e3', flexShrink: 0 }} />
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
                THE PROBLEM
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                fontSize: { xs: '2rem', sm: '2.45rem', md: '2.9rem' },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.036em',
                color: '#141416',
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Schools shouldn't have to run on{' '}
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'block' } }}>
                <Box component="span" className="edukra-highlight">
                  disconnected
                </Box>{' '}
                systems.
              </Box>
            </Typography>
          </Box>
        </RevealOnScroll>

        {/* Comparison Cards Grid (50 / 50 split) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Card: "Today's reality" */}
          <RevealOnScroll variant="slide-left" delay={0.05} sx={{ height: '100%' }}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '24px',
                p: { xs: '24px 20px', sm: '28px 24px', md: '32px 28px' },
                boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.02), 0 12px 32px -4px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                transition: 'box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  boxShadow: '0 12px 36px -4px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              <Box>
                {/* Header with 'X' indicator */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '22px' }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 59, 48, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ff3b30',
                      flexShrink: 0,
                    }}
                  >
                    <CloseRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      letterSpacing: '-0.025em',
                      color: '#1d1d1f',
                    }}
                  >
                    Today's reality
                  </Typography>
                </Box>

                {/* 2-Column Data Grid with responsive columns */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                    gap: '10px',
                  }}
                >
                  {painPoints.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        px: '12px',
                        py: '10px',
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 0, 0, 0.04)',
                        backgroundColor: '#f5f5f7',
                        minWidth: 0,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                          backgroundColor: '#ffffff',
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      <WarningCircleIcon />
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          color: '#424245',
                          lineHeight: 1.3,
                          letterSpacing: '-0.01em',
                          whiteSpace: { xs: 'normal', sm: 'nowrap' },
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </RevealOnScroll>

          {/* Right Card: "One connected platform" */}
          <RevealOnScroll variant="slide-right" delay={0.15} sx={{ height: '100%' }}>
            <Box
              sx={{
                background: 'linear-gradient(145deg, #0071e3 0%, #005bb5 100%)',
                borderRadius: '24px',
                p: { xs: '24px 20px', sm: '28px 24px', md: '32px 28px' },
                boxShadow: '0 16px 40px -8px rgba(0, 113, 227, 0.38)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                transition: 'box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  boxShadow: '0 24px 48px -8px rgba(0, 113, 227, 0.48)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              <Box>
                {/* Header with Checkmark indicator */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '18px' }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0,
                    }}
                  >
                    <CheckRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      letterSpacing: '-0.025em',
                      color: '#ffffff',
                    }}
                  >
                    One connected platform
                  </Typography>
                </Box>

                {/* Value Description Paragraph */}
                <Typography
                  component="p"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    letterSpacing: '-0.01em',
                    mb: '24px',
                    fontWeight: 450,
                  }}
                >
                  Everything your school runs on — records, communication, attendance, finance and reporting — unified in a single system that everyone shares.
                </Typography>
              </Box>

              {/* Right Unified Visual (Nested Translucent Container) */}
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  pt: '18px',
                  pb: '16px',
                  px: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                {/* Horizontally centered, solid white chips fitting neatly */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: { xs: '8px', sm: '8px' },
                    width: '100%',
                  }}
                >
                  {connectedModules.map((module) => (
                    <Box
                      key={module}
                      sx={{
                        backgroundColor: '#ffffff',
                        color: '#0071e3',
                        fontWeight: 650,
                        fontSize: '0.78rem',
                        letterSpacing: '-0.01em',
                        px: '14px',
                        py: '6px',
                        borderRadius: '9999px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                        lineHeight: 1.2,
                        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        '&:hover': {
                          transform: 'scale(1.04)',
                        },
                        '&:active': {
                          transform: 'scale(0.97)',
                        },
                      }}
                    >
                      {module}
                    </Box>
                  ))}
                </Box>

                {/* Subtitle Caption */}
                <Typography
                  component="span"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.72)',
                    fontSize: '0.74rem',
                    fontWeight: 500,
                    mt: '14px',
                    letterSpacing: '-0.01em',
                    textAlign: 'center',
                  }}
                >
                  connected through one platform
                </Typography>
              </Box>
            </Box>
          </RevealOnScroll>
        </Box>

        {/* Editorial 4-Step Connected Lifecycle Card (Inspired by Verso Timeline Card) */}
        <RevealOnScroll variant="pop-up" delay={0.08}>
          <Box
            sx={{
              mt: '24px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(20, 20, 22, 0.09)',
              borderRadius: '24px',
              p: { xs: '24px 20px', sm: '30px 28px', md: '34px 36px' },
              boxShadow: '0 4px 20px -4px rgba(20, 20, 22, 0.04)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: { xs: 'flex-start', sm: 'center' },
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1.5,
                mb: { xs: 3, md: 3.5 },
              }}
            >
              <Box
                component="span"
                sx={{
                  px: 1.3,
                  py: 0.45,
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 113, 227, 0.1)',
                  color: '#0071e3',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                }}
              >
                #TERM-SYNC
              </Box>
              <Typography
                component="h3"
                sx={{
                  fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.12rem', md: '1.25rem' },
                  letterSpacing: '-0.02em',
                  color: '#141416',
                }}
              >
                From admission to closing day, without duplicate spreadsheets
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: { xs: 3, md: 2.5 },
              }}
            >
              {workflowTimeline.map((item, idx) => (
                <Box key={item.step} sx={{ position: 'relative' }}>
                  {/* Top Step Circle + Connector Line */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: '50%',
                        backgroundColor: item.highlight ? '#0071e3' : '#ffffff',
                        border: item.highlight ? '1.5px solid #0071e3' : '1.5px solid #141416',
                        color: item.highlight ? '#ffffff' : '#141416',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {item.highlight ? <CheckRoundedIcon sx={{ fontSize: 17 }} /> : item.step}
                    </Box>
                    {idx < workflowTimeline.length - 1 && (
                      <Box
                        aria-hidden="true"
                        sx={{
                          display: { xs: 'none', md: 'block' },
                          flex: 1,
                          height: '1.5px',
                          backgroundColor: '#0071e3',
                          opacity: 0.45,
                        }}
                      />
                    )}
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.02rem',
                      color: '#141416',
                      letterSpacing: '-0.015em',
                      mb: 0.3,
                    }}
                  >
                    {item.stage}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: '#71717a',
                      mb: 0.8,
                    }}
                  >
                    {item.time}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.83rem',
                      color: '#52525b',
                      lineHeight: 1.5,
                      fontWeight: 450,
                    }}
                  >
                    {item.detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </RevealOnScroll>

        {/* Bottom Action CTA Button */}
        <RevealOnScroll variant="pop-up" delay={0.1}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: '40px',
            }}
          >
            <Box
              component="a"
              href="#why-this-system"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#why-this-system';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#141416',
                border: '1px solid #141416',
                borderRadius: '9999px',
                px: '24px',
                py: '11px',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 650,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(20, 20, 22, 0.16)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  backgroundColor: '#0071e3',
                  borderColor: '#0071e3',
                  transform: 'translateY(-1px)',
                },
                '&:active': {
                  transform: 'scale(0.976)',
                },
              }}
            >
              Why We Built This
              <ArrowForwardRoundedIcon sx={{ fontSize: 16, color: '#ffffff' }} />
            </Box>
          </Box>
        </RevealOnScroll>
      </Container>
    </Box>
  );
}

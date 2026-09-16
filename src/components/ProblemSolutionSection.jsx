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

export default function ProblemSolutionSection() {
  return (
    <Box
      component="section"
      id="problem"
      sx={{
        width: '100%',
        py: { xs: 7, sm: 8.5, md: 10 },
        backgroundColor: '#f8f6f2', // Exact sampled warm cream tone matching Figma mockup
        position: 'relative',
        scrollMarginTop: '80px',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1060px',
          mx: 'auto',
          px: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        {/* Section Header */}
        <RevealOnScroll variant="init">
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto',
              mb: { xs: 4, sm: 5, md: 5.5 },
            }}
          >
            {/* "THE PROBLEM" Overline Pill Tag - Compact & centered */}
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
                mb: 1.8,
              }}
            >
              <LightbulbIcon style={{ color: '#1d63d2', flexShrink: 0 }} />
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
                THE PROBLEM
              </Typography>
            </Box>

            {/* Main Headline with exact 2-line break */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.05rem', md: '2.25rem' },
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                color: '#0b0702',
                textAlign: 'center',
                maxWidth: 640,
                mx: 'auto',
              }}
            >
              Schools shouldn't have to run on
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'block' }, ml: { xs: 0.5, sm: 0 } }}>
                disconnected systems.
              </Box>
            </Typography>
          </Box>
        </RevealOnScroll>

        {/* Comparison Cards Grid (50 / 50 split) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: '20px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Card: "Today's reality" */}
          <RevealOnScroll variant="slide-left" delay={0.05} sx={{ height: '100%' }}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                border: '1px solid #ebe6df',
                borderRadius: '16px',
                p: { xs: '20px', sm: '24px 20px', md: '26px 22px' },
                boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                '&:hover': {
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.06)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box>
                {/* Header with 'X' indicator */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '18px' }}>
                  <Box
                    sx={{
                      width: 26,
                      height: 26,
                      borderRadius: '6px',
                      backgroundColor: '#f1ede7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6e675f',
                      flexShrink: 0,
                    }}
                  >
                    <CloseRoundedIcon sx={{ fontSize: 15 }} />
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      fontSize: '1.08rem',
                      letterSpacing: '-0.02em',
                      color: '#1b150b',
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
                    gap: '8px',
                  }}
                >
                  {painPoints.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                        px: '9px',
                        py: '8.5px',
                        borderRadius: '8px',
                        border: '1px solid #efeae2',
                        backgroundColor: '#fdfbf9',
                        minWidth: 0,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: '#ded7cb',
                          backgroundColor: '#ffffff',
                        },
                      }}
                    >
                      <WarningCircleIcon />
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '0.77rem',
                          fontWeight: 500,
                          color: '#554f46',
                          lineHeight: 1.25,
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
                backgroundColor: '#1a559e', // Exact sampled rich royal blue
                borderRadius: '16px',
                p: { xs: '20px', sm: '24px 20px', md: '26px 22px' },
                boxShadow: '0 16px 36px -8px rgba(26, 85, 158, 0.35)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                '&:hover': {
                  boxShadow: '0 20px 44px -8px rgba(26, 85, 158, 0.45)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box>
                {/* Header with Checkmark indicator */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '16px' }}>
                  <Box
                    sx={{
                      width: 26,
                      height: 26,
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0,
                    }}
                  >
                    <CheckRoundedIcon sx={{ fontSize: 16 }} />
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      fontSize: '1.08rem',
                      letterSpacing: '-0.02em',
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
                    color: 'rgba(255, 255, 255, 0.82)',
                    fontSize: '0.86rem',
                    lineHeight: 1.55,
                    letterSpacing: '-0.01em',
                    mb: '22px',
                  }}
                >
                  Everything your school runs on — records, communication, attendance, finance and reporting — unified in a single system that everyone shares.
                </Typography>
              </Box>

              {/* Right Unified Visual (Nested Translucent Container) */}
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '11px',
                  pt: '16px',
                  pb: '14px',
                  px: '10px',
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
                    gap: { xs: '6px', sm: '6px' },
                    width: '100%',
                  }}
                >
                  {connectedModules.map((module) => (
                    <Box
                      key={module}
                      sx={{
                        backgroundColor: '#ffffff',
                        color: '#1a559e',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        letterSpacing: '-0.01em',
                        px: '10px',
                        py: '4.5px',
                        borderRadius: '9999px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                        lineHeight: 1.2,
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-1px)',
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
                    color: 'rgba(255, 255, 255, 0.62)',
                    fontSize: '0.70rem',
                    fontWeight: 500,
                    mt: '12px',
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

        {/* Bottom Action CTA Button */}
        <RevealOnScroll variant="pop-up" delay={0.1}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: '36px',
            }}
          >
            <Box
              component="button"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#ffffff',
                border: '1px solid #e3ded6',
                borderRadius: '8px',
                px: '18px',
                py: '8px',
                color: '#1b150b',
                fontSize: '0.84rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#c8c2b7',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Why We Built This
              <ArrowForwardRoundedIcon sx={{ fontSize: 15, color: '#1b150b' }} />
            </Box>
          </Box>
        </RevealOnScroll>
      </Container>
    </Box>
  );
}

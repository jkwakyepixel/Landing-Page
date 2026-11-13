import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import RevealOnScroll from './RevealOnScroll';

function LayersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#141416" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#141416" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#141416" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#141416" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const proofMetrics = [
  {
    icon: LayersIcon,
    highlightPrefix: '5',
    highlightAccent: 'in 1',
    title: 'connected portals',
    description: 'Admin, Teacher, Staff, Student and Parent portals synchronized on one database.',
  },
  {
    icon: ShieldCheckIcon,
    highlightPrefix: '',
    highlightAccent: 'Zero',
    title: 'manual chasing',
    description: 'Admissions, fee balances and report cards update automatically with zero duplicate entry.',
  },
  {
    icon: ClockIcon,
    highlightPrefix: '24',
    highlightAccent: '/7',
    title: 'parent visibility',
    description: 'Guardians check attendance alerts, academic progress and fee receipts on Android anytime.',
  },
  {
    icon: BoltIcon,
    highlightPrefix: '1',
    highlightAccent: '-click',
    title: 'term reporting',
    description: 'Publish clean class averages, transcripts and bursar statements right at closing.',
  },
];

export default function ImpactProofBand() {
  return (
    <Box
      component="section"
      aria-label="Platform Essentials"
      sx={{
        width: '100%',
        backgroundColor: '#f7f6f2',
        pt: { xs: 5, sm: 6, md: 7 },
        pb: { xs: 2, sm: 3, md: 4 },
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
        <RevealOnScroll variant="pop-up">
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: { xs: '24px', md: '32px' },
              background: 'linear-gradient(135deg, #1d4ed8 0%, #005bb5 55%, #0e3a9e 100%)',
              color: '#ffffff',
              p: { xs: 3.5, sm: 5, md: 6.5 },
              boxShadow: '0 24px 56px -16px rgba(14, 58, 158, 0.36)',
            }}
          >
            {/* Subtle Architectural Arc Line SVG */}
            <Box
              component="svg"
              aria-hidden="true"
              viewBox="0 0 360 360"
              sx={{
                position: 'absolute',
                top: -120,
                right: -90,
                width: { xs: 220, md: 360 },
                height: { xs: 220, md: 360 },
                pointerEvents: 'none',
                opacity: 0.55,
              }}
            >
              <circle
                cx="180"
                cy="180"
                r="175"
                fill="none"
                stroke="#bae6fd"
                strokeWidth="1.25"
              />
            </Box>

            {/* Editorial Headline */}
            <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 640, mb: { xs: 4, md: 5.5 } }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '1.95rem', sm: '2.55rem', md: '3rem' },
                  lineHeight: 1.06,
                  letterSpacing: '-0.038em',
                  color: '#ffffff',
                  mb: 1.2,
                }}
              >
                The school essentials,{' '}
                <Box component="span" sx={{ color: '#bae6fd' }}>
                  made effortless.
                </Box>
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.86)',
                  fontSize: { xs: '0.94rem', sm: '1.02rem' },
                  fontWeight: 450,
                  lineHeight: 1.5,
                }}
              >
                Four operational guarantees built into every Edukra campus deployment.
              </Typography>
            </Box>

            {/* 4 Hairline-Separated Metric Columns */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                pt: { xs: 3, md: 4 },
                borderTop: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: { xs: 3.5, md: 0 },
              }}
            >
              {proofMetrics.map((metric, idx) => {
                const IconComp = metric.icon;
                return (
                  <Box
                    key={metric.title}
                    sx={{
                      pr: { md: idx < 3 ? 3 : 0 },
                      pl: { md: idx > 0 ? 3 : 0 },
                      borderLeft: { md: idx > 0 ? '1px solid rgba(255, 255, 255, 0.16)' : 'none' },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: '#e0f2fe',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.2,
                      }}
                    >
                      <IconComp />
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                        fontWeight: 800,
                        fontSize: { xs: '2.2rem', md: '2.65rem' },
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        fontVariantNumeric: 'tabular-nums',
                        color: '#ffffff',
                        mb: 1,
                      }}
                    >
                      {metric.highlightPrefix}
                      {metric.highlightPrefix && metric.highlightAccent ? ' ' : ''}
                      <Box component="span" sx={{ color: '#bae6fd' }}>
                        {metric.highlightAccent}
                      </Box>
                    </Typography>

                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.02rem',
                        color: '#ffffff',
                        letterSpacing: '-0.015em',
                        mb: 0.8,
                      }}
                    >
                      {metric.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.82)',
                        fontSize: '0.84rem',
                        lineHeight: 1.5,
                        fontWeight: 450,
                      }}
                    >
                      {metric.description}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </RevealOnScroll>
      </Container>
    </Box>
  );
}

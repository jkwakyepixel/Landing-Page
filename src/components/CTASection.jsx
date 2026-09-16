import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import RevealOnScroll from './RevealOnScroll';
import dashboardMockup from '../assets/dashboard desktop mock ups.png';

export default function CTASection() {
  return (
    <Box
      component="section"
      id="cta"
      sx={{
        width: '100%',
        position: 'relative',
        // Split background: top 65% is page off-white (#faf9f7), bottom 35% is dark footer (#0c0a07)
        background:
          'linear-gradient(to bottom, #faf9f7 0%, #faf9f7 65%, #0c0a07 65%, #0c0a07 100%)',
        pt: { xs: 6, sm: 8, md: 9 },
        pb: { xs: 1, sm: 1.5, md: 2 },
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
        <RevealOnScroll variant="pop-up">
          {/* 
            MAIN CTA BANNER CARD
            overflow: hidden + borderRadius = THE CLIPPING MASK!
            Fixed height on desktop ensures the absolutely positioned mockup 
            overflows and gets clipped by the card's rounded bottom-right corner.
          */}
          <Box
            sx={{
              borderRadius: { xs: '20px', sm: '26px', md: '28px' },
              overflow: 'hidden', // THE CLIPPING MASK
              position: 'relative',
              height: { xs: 'auto', md: '360px' }, // Fixed height for exact clipping match
              display: 'flex',
              alignItems: 'center',
              // Luxurious vibrant blue gradient with radial swoosh light rays matching site theme
              background:
                'radial-gradient(circle at 45% 65%, rgba(255, 255, 255, 0.22) 0%, transparent 60%), linear-gradient(115deg, #0d3294 0%, #154bc4 30%, #1c6ad8 58%, #288de9 82%, #3dc1f7 100%)',
              boxShadow: '0 25px 60px -10px rgba(21, 75, 196, 0.35)',
            }}
          >
            {/* Left Content Column */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                width: { xs: '100%', md: '46%' },
                pl: { xs: 3.5, sm: 5, md: 6.5 },
                pr: { xs: 3.5, sm: 4, md: 2 },
                py: { xs: 5, sm: 6, md: 0 },
              }}
            >
              {/* Bold White Heading */}
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  color: '#ffffff',
                  fontSize: { xs: '1.65rem', sm: '2.15rem', md: '2.5rem' },
                  lineHeight: 1.14,
                  letterSpacing: '-0.035em',
                  mb: '14px',
                }}
              >
                Ready to See Urion SMS
                <br />
                in Action?
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.88)',
                  fontSize: { xs: '0.92rem', sm: '0.98rem' },
                  lineHeight: 1.55,
                  maxWidth: 420,
                  mb: { xs: '26px', sm: '30px' },
                  fontWeight: 450,
                  letterSpacing: '-0.01em',
                }}
              >
                Empower your school to unify curriculum, teaching, and reporting.
              </Typography>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                alignItems={{ xs: 'stretch', sm: 'center' }}
                sx={{ width: '100%', gap: 1.5 }}
              >
                {/* Outlined White Pill ("Contact Sales") */}
                <Box
                  component="button"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', sm: 'auto' },
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    color: '#ffffff',
                    fontWeight: 650,
                    fontSize: '0.88rem',
                    letterSpacing: '-0.01em',
                    px: '26px',
                    py: '11px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderColor: '#ffffff',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  Contact Sales
                </Box>

                {/* Solid Dark Pill ("Get a Demo →") */}
                <Box
                  component="button"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', sm: 'auto' },
                    gap: '8px',
                    backgroundColor: '#0c0a07',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    letterSpacing: '-0.01em',
                    px: '26px',
                    py: '11px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      backgroundColor: '#1b1814',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 22px rgba(0, 0, 0, 0.5)',
                    },
                  }}
                  onClick={() => {
                    window.location.hash = '#book-demo';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Get a Demo
                  <ArrowForwardRoundedIcon sx={{ fontSize: 16, color: '#ffffff' }} />
                </Box>
              </Stack>
            </Box>

            {/* 
              RIGHT MOCKUP CONTAINER (ABSOLUTELY POSITIONED WITH POPUP OBSERVER)
            */}
            <RevealOnScroll
              variant="mockup-pop"
              delay={0.15}
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                top: '34px',
                left: '46%',
                width: '640px',
                height: '500px',
                zIndex: 1,
              }}
            >
              {/* Tilted UI Window Frame */}
              <Box
                sx={{
                  width: '100%',
                  transform:
                    'perspective(1400px) rotateY(-9deg) rotateX(6deg) rotate(-3deg)',
                  transformOrigin: 'top left',
                  transition: 'transform 0.4s ease',
                  '&:hover': {
                    transform:
                      'perspective(1400px) rotateY(-6deg) rotateX(4deg) rotate(-2deg)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={dashboardMockup}
                  alt="Platform Dashboard Preview"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(-15px 15px 35px rgba(0, 0, 0, 0.35)) drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2))',
                    imageRendering: '-webkit-optimize-contrast',
                  }}
                />
              </Box>
            </RevealOnScroll>
          </Box>
        </RevealOnScroll>
      </Container>
    </Box>
  );
}

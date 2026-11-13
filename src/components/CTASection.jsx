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
        // Split background: top 65% warm alabaster canvas (#f7f6f2), bottom 35% dark footer (#121214)
        background:
          'linear-gradient(to bottom, #f7f6f2 0%, #f7f6f2 65%, #121214 65%, #121214 100%)',
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 1, sm: 1.5, md: 2 },
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
          {/* 
            MAIN CTA BANNER CARD
            overflow: hidden + borderRadius = THE CLIPPING MASK!
          */}
          <Box
            sx={{
              borderRadius: { xs: '24px', sm: '28px', md: '32px' },
              overflow: 'hidden', // THE CLIPPING MASK
              position: 'relative',
              height: { xs: 'auto', md: '360px' },
              display: 'flex',
              alignItems: 'center',
              background:
                'radial-gradient(circle at 45% 65%, rgba(255, 255, 255, 0.2) 0%, transparent 65%), linear-gradient(135deg, #004fb0 0%, #0071e3 50%, #2997ff 100%)',
              boxShadow: '0 24px 60px -12px rgba(0, 113, 227, 0.4)',
            }}
          >
            {/* Left Content Column */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                width: { xs: '100%', md: '48%' },
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
                  fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.75rem' },
                  lineHeight: 1.08,
                  letterSpacing: '-0.036em',
                  mb: '14px',
                }}
              >
                Ready to See Edukra
                <br />
                <Box component="span" sx={{ color: '#bae6fd' }}>
                  in Action?
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.92)',
                  fontSize: { xs: '0.94rem', sm: '1rem' },
                  lineHeight: 1.55,
                  maxWidth: 420,
                  mb: { xs: '28px', sm: '32px' },
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
                {/* Frosted Glass Pill ("Contact Sales") */}
                <Box
                  component="a"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', sm: 'auto' },
                    backgroundColor: 'rgba(255, 255, 255, 0.16)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    color: '#ffffff',
                    fontWeight: 650,
                    fontSize: '0.88rem',
                    letterSpacing: '-0.01em',
                    px: '26px',
                    py: '11px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.26)',
                      borderColor: '#ffffff',
                      transform: 'translateY(-1px)',
                    },
                    '&:active': {
                      transform: 'scale(0.976)',
                    },
                  }}
                >
                  Contact Sales
                </Box>

                {/* Apple Dark Obsidian Pill ("Get a Demo →") */}
                <Box
                  component="button"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', sm: 'auto' },
                    gap: '8px',
                    backgroundColor: '#121214',
                    color: '#ffffff',
                    fontWeight: 650,
                    fontSize: '0.88rem',
                    letterSpacing: '-0.01em',
                    px: '26px',
                    py: '11px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      backgroundColor: '#1d1d1f',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.45)',
                    },
                    '&:active': {
                      transform: 'scale(0.976)',
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

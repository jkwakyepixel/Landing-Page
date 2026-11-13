import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RevealOnScroll from './RevealOnScroll';
import allDevicesMockup from '../assets/all-devices-white.webp';

// Official Google Play Store Icon
function GooglePlayIcon(props) {
  return (
    <svg width="17" height="19" viewBox="0 0 512 512" fill="none" aria-hidden="true" {...props}>
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#ea4335" />
      <path d="M47 36.7v438.5L265.8 256 47 36.7z" fill="#4285f4" />
      <path d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" fill="#34a853" />
      <path d="M449.8 238.1l-64.4-37-60.1 60.1 60.1 60.1 64.4-37c15.2-8.7 24.2-24.6 24.2-43.1s-9-34.4-24.2-43.1z" fill="#fbbc04" />
    </svg>
  );
}

// Rotating geometric circular badge inspired by modern fintech editorial seals
function CampusSealBadge() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        top: { md: '-22px', lg: '-26px' },
        right: { md: '-14px', lg: '-24px' },
        width: 86,
        height: 86,
        borderRadius: '50%',
        backgroundColor: '#0071e3',
        border: '1.5px solid #141416',
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 24px -6px rgba(20, 20, 22, 0.16)',
        zIndex: 5,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width="78"
        height="78"
        className="edukra-seal-spin"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <path
            id="edukraSealPath"
            d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
          />
        </defs>
        <text
          fill="#ffffff"
          fontSize="9.2"
          fontWeight="700"
          fontFamily='"JetBrains Mono", monospace'
          letterSpacing="2.1px"
        >
          <textPath href="#edukraSealPath" startOffset="0%">
            5 PORTALS • ONE PLATFORM •
          </textPath>
        </text>
      </svg>
      <Box
        sx={{
          position: 'absolute',
          width: 11,
          height: 11,
          borderRadius: '50%',
          backgroundColor: '#bae6fd',
        }}
      />
    </Box>
  );
}

const marqueeRoles = [
  'Proprietors',
  'Headmasters',
  'Administrators',
  'Bursars',
  'Teachers',
  'Registrars',
  'Students',
  'Parents',
];

const avatarBadges = [
  { label: 'AD', bg: '#141416', color: '#ffffff' },
  { label: 'TC', bg: '#bae6fd', color: '#0c4a6e' },
  { label: 'PA', bg: '#0071e3', color: '#ffffff' },
  { label: 'ST', bg: '#e2e8f0', color: '#141416' },
];

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2.6;
    const rotateY = ((x - centerX) / centerX) * 2.6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          radial-gradient(ellipse 75% 55% at 80% 25%, rgba(0, 113, 227, 0.09) 0%, transparent 65%),
          radial-gradient(ellipse 55% 45% at 15% 15%, rgba(56, 189, 248, 0.12) 0%, transparent 60%)
        `,
        pt: { xs: 12.5, sm: 14, md: 15.5 },
      }}
    >
      {/* Subtle architectural paper grid */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(20, 20, 22, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20, 20, 22, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1240px',
          mx: 'auto',
          px: { xs: 2.5, sm: 3.5, md: 5 },
          pb: { xs: 7, sm: 9, md: 10 },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.02fr 0.98fr' },
            gap: { xs: 5.5, sm: 6, lg: 6 },
            alignItems: 'center',
          }}
        >
          {/* LEFT EDITORIAL COLUMN */}
          <RevealOnScroll variant="init" immediate>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-start', sm: 'center', lg: 'flex-start' },
                textAlign: { xs: 'left', sm: 'center', lg: 'left' },
              }}
            >
              {/* Crisp Announcement Pill */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.1,
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(20, 20, 22, 0.1)',
                  borderRadius: '9999px',
                  pl: '5px',
                  pr: '14px',
                  py: '4px',
                  mb: { xs: 2.5, md: 3 },
                  boxShadow: '0 2px 8px rgba(20, 20, 22, 0.04)',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    backgroundColor: '#0071e3',
                    color: '#ffffff',
                    borderRadius: '9999px',
                    px: 1.1,
                    py: 0.25,
                    fontSize: '0.68rem',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    lineHeight: 1.3,
                  }}
                >
                  NEW
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: '0.76rem', sm: '0.82rem' },
                    fontWeight: 600,
                    color: '#141416',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Live MoMo fee sync &amp; Parent App
                </Typography>
              </Box>

              {/* Sculptural Display Headline */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                  fontSize: { xs: '2.55rem', sm: '3.6rem', md: '4.15rem', lg: '4.45rem' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.04, md: 1.01 },
                  letterSpacing: '-0.042em',
                  color: '#141416',
                  mb: { xs: 2.2, md: 2.6 },
                  maxWidth: { xs: '100%', lg: 580 },
                }}
              >
                One platform.
                <Box component="span" sx={{ display: 'block' }}>
                  Every school{' '}
                  <Box component="span" className="edukra-highlight">
                    simple.
                  </Box>
                </Box>
              </Typography>

              {/* Crisp Narrative Subheadline */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.14rem' },
                  lineHeight: 1.62,
                  color: '#52525b',
                  maxWidth: 530,
                  mb: { xs: 3, md: 3.6 },
                  fontWeight: 450,
                  letterSpacing: '-0.01em',
                }}
              >
                Edukra is the school operating system built to unify everyday campus life.
                Attendance that notifies parents automatically, fees reconciled in seconds,
                and grades ready before closing day.
              </Typography>

              {/* Primary CTA Row */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  alignItems: { xs: 'stretch', sm: 'center' },
                  mb: 1.8,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    window.location.hash = '#book-demo';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    py: 1.45,
                    px: 3.4,
                    fontSize: '0.96rem',
                    fontWeight: 650,
                    borderRadius: '9999px',
                    backgroundColor: '#141416',
                    color: '#ffffff',
                    boxShadow: '0 8px 22px -4px rgba(20, 20, 22, 0.25)',
                    '&:hover': {
                      backgroundColor: '#0071e3',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 28px -4px rgba(0, 113, 227, 0.36)',
                    },
                  }}
                >
                  Book a Demo
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="#solution"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#solution';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  endIcon={<NorthEastRoundedIcon sx={{ fontSize: '17px !important' }} />}
                  sx={{
                    py: 1.45,
                    px: 3,
                    fontSize: '0.96rem',
                    fontWeight: 600,
                    borderRadius: '9999px',
                    borderColor: 'rgba(20, 20, 22, 0.16)',
                    color: '#141416',
                    backgroundColor: '#ffffff',
                    textDecoration: 'none',
                    '&:hover': {
                      borderColor: '#141416',
                      backgroundColor: '#ffffff',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px -6px rgba(20, 20, 22, 0.12)',
                    },
                  }}
                >
                  Explore Platform
                </Button>
              </Stack>

              {/* Micro Feature Assurances + Google Play Link */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.25, sm: 2 }}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                sx={{ mb: { xs: 3.5, md: 4.5 } }}
              >
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    color: '#52525b',
                    fontWeight: 500,
                    letterSpacing: '-0.005em',
                  }}
                >
                  Fast onboarding · Role-based access · Cloud backups
                </Typography>

                <Box
                  component="a"
                  href="https://play.google.com/store/apps/details?id=com.urionsystems.edukraparent"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.6,
                    py: 0.65,
                    borderRadius: '9999px',
                    backgroundColor: '#141416',
                    color: '#ffffff',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      backgroundColor: '#27272a',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  <GooglePlayIcon style={{ width: 15, height: 17 }} />
                  <Typography
                    component="span"
                    sx={{ fontSize: '0.76rem', fontWeight: 650, color: '#ffffff' }}
                  >
                    Edukra Parents on Google Play
                  </Typography>
                </Box>
              </Stack>

              {/* Editorial Social/Credibility Strip matching Verso Hero bottom-left */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 3 }}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                sx={{
                  pt: 2.8,
                  borderTop: '1px solid rgba(20, 20, 22, 0.08)',
                  width: '100%',
                  maxWidth: 560,
                  justifyContent: { xs: 'flex-start', sm: 'center', lg: 'flex-start' },
                }}
              >
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Stack direction="row" sx={{ '& > * + *': { ml: '-9px' } }}>
                    {avatarBadges.map((b) => (
                      <Box
                        key={b.label}
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: '50%',
                          backgroundColor: b.bg,
                          color: b.color,
                          border: '2px solid #f7f6f2',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          fontFamily: '"JetBrains Mono", monospace',
                        }}
                      >
                        {b.label}
                      </Box>
                    ))}
                  </Stack>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#141416', lineHeight: 1.2 }}>
                      5 Connected Portals
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: '#52525b', lineHeight: 1.25 }}>
                      Built for every campus role
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.1} alignItems="center">
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 113, 227, 0.1)',
                      color: '#0071e3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <VerifiedUserOutlinedIcon sx={{ fontSize: 16 }} />
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#141416', lineHeight: 1.2 }}>
                      Encrypted school records
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: '#52525b', lineHeight: 1.25 }}>
                      Role permissions &amp; audit logs
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </RevealOnScroll>

          {/* RIGHT HARDWARE SHOWCASE COLUMN WITH GEOMETRIC HALO & FLOATING PILLS */}
          <RevealOnScroll variant="mockup-pop" delay={0.1}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: { xs: 540, lg: 600 },
                mx: 'auto',
                py: { xs: 2, md: 3 },
              }}
            >
              {/* Outer concentric architectural ring */}
              <Box
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: { xs: '88%', sm: '84%' },
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  border: '1px solid rgba(20, 20, 22, 0.10)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Inner Electric Royal Blue backdrop disc */}
              <Box
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: { xs: '68%', sm: '64%' },
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 30%, #2563eb 0%, #005bb5 100%)',
                  boxShadow: '0 28px 60px -16px rgba(0, 113, 227, 0.38)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Top-Right Rotating Circular Stamp */}
              <CampusSealBadge />

              {/* Top-Left Floating Fee Notification Pill */}
              <Box
                className="float-badge-1"
                sx={{
                  position: 'absolute',
                  top: { md: '6%', lg: '8%' },
                  left: { md: '-16px', lg: '-28px' },
                  zIndex: 4,
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 1.2,
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(20, 20, 22, 0.1)',
                  borderRadius: '9999px',
                  px: 1.8,
                  py: 1,
                  boxShadow: '0 14px 30px -8px rgba(20, 20, 22, 0.14)',
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: '#e0f2fe',
                    border: '1px solid #0071e3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0071e3',
                  }}
                >
                  <CheckCircleRoundedIcon sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#0071e3',
                      lineHeight: 1.2,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    +GH₵ 42,500 settled
                  </Typography>
                  <Typography sx={{ fontSize: '0.68rem', color: '#52525b', lineHeight: 1.2 }}>
                    MoMo receipts matched live
                  </Typography>
                </Box>
              </Box>

              {/* Central Interactive Device Frame */}
              <Box
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  borderRadius: { xs: '22px', md: '28px' },
                  padding: { xs: '10px', sm: '14px' },
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(20, 20, 22, 0.1)',
                  boxShadow:
                    '0 32px 72px -18px rgba(20, 20, 22, 0.22), 0 8px 24px -6px rgba(20, 20, 22, 0.08)',
                  transition: 'transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                <Box
                  component="img"
                  src={allDevicesMockup}
                  alt="Edukra Unified Platform Experience across Desktop, Tablet and Phone"
                  fetchPriority="high"
                  decoding="async"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: { xs: '14px', md: '20px' },
                  }}
                />
              </Box>

              {/* Bottom-Right Electric Blue Floating Pill */}
              <Box
                className="float-badge-2"
                sx={{
                  position: 'absolute',
                  bottom: { md: '-4px', lg: '2%' },
                  right: { md: '-14px', lg: '-20px' },
                  zIndex: 4,
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 1.2,
                  backgroundColor: '#141416',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '18px',
                  px: 2,
                  py: 1.15,
                  boxShadow: '0 18px 34px -8px rgba(20, 20, 22, 0.3)',
                }}
              >
                <Box
                  sx={{
                    px: 1,
                    py: 0.35,
                    borderRadius: '8px',
                    backgroundColor: '#0071e3',
                    color: '#ffffff',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  98.4%
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                    Attendance Synced
                  </Typography>
                  <Typography sx={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.2 }}>
                    Parents notified automatically
                  </Typography>
                </Box>
              </Box>
            </Box>
          </RevealOnScroll>
        </Box>
      </Container>

      {/* Editorial Audience Ticker Band (Inspired by Verso's Marquee Strip) */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#f2f0ea',
          borderTop: '1px solid rgba(20, 20, 22, 0.08)',
          borderBottom: '1px solid rgba(20, 20, 22, 0.08)',
          py: { xs: 2, md: 2.3 },
          overflow: 'hidden',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1240px',
            mx: 'auto',
            px: { xs: 2.5, sm: 3.5, md: 5 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 1.5, md: 4 },
          }}
        >
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: '#52525b',
              fontWeight: 600,
              flexShrink: 0,
              maxWidth: { md: 205 },
              lineHeight: 1.35,
            }}
          >
            Designed for everyone running modern schools
          </Typography>

          <Box
            className="edukra-marquee-wrap"
            sx={{
              flex: 1,
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              maskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
            }}
          >
            <Box className="edukra-marquee-track" aria-label="Supported school community roles">
              {[...marqueeRoles, ...marqueeRoles].map((roleName, idx) => (
                <Box
                  key={`${roleName}-${idx}`}
                  aria-hidden={idx >= marqueeRoles.length}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: { xs: 2, md: 2.6 },
                    pr: { xs: 2, md: 2.6 },
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: '0.96rem', md: '1.1rem' },
                      letterSpacing: '-0.02em',
                      color: '#141416',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {roleName}
                  </Typography>
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#0071e3',
                      border: '1.5px solid #dbeafe',
                      flexShrink: 0,
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

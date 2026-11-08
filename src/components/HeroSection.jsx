import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Chip,
  Paper,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import RevealOnScroll from './RevealOnScroll';
import allDevicesMockup from '../assets/all-devices-white.png';

// Official Google Play Store Icon
function GooglePlayIcon(props) {
  return (
    <svg width="20" height="22" viewBox="0 0 512 512" fill="none" {...props}>
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#ea4335" />
      <path d="M47 36.7v438.5L265.8 256 47 36.7z" fill="#4285f4" />
      <path d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" fill="#34a853" />
      <path d="M449.8 238.1l-64.4-37-60.1 60.1 60.1 60.1 64.4-37c15.2-8.7 24.2-24.6 24.2-43.1s-9-34.4-24.2-43.1z" fill="#fbbc04" />
    </svg>
  );
}

// Apple-Grade Floating Metric Badge with Frosted Depth
function FloatingBadge({
  icon: IconComponent,
  value,
  label,
  className,
  sx,
}) {
  return (
    <Paper
      elevation={0}
      className={`apple-metric-badge ${className || ''}`}
      sx={{
        position: 'absolute',
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2.2,
        py: 1.5,
        borderRadius: '18px',
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.95)',
        boxShadow:
          '0 20px 40px -10px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03), inset 0 1px 0 rgba(255, 255, 255, 1)',
        cursor: 'default',
        userSelect: 'none',
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: '12px',
          backgroundColor: '#f5f5f7',
          color: '#0071e3',
          border: '1px solid rgba(0, 0, 0, 0.04)',
        }}
      >
        <IconComponent sx={{ fontSize: 22 }} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            fontSize: '1.18rem',
            fontWeight: 750,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#1d1d1f',
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.74rem',
            color: '#86868b',
            fontWeight: 500,
            letterSpacing: '-0.005em',
          }}
        >
          {label}
        </Typography>
      </Box>
    </Paper>
  );
}

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation is 3 degrees for gentle Apple-like subtle perspective
    const rotateX = ((y - centerY) / centerY) * -3; 
    const rotateY = ((x - centerX) / centerX) * 3; 
    
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
        minHeight: { xs: 'auto', md: '100vh' },
        pt: { xs: 14, sm: 17, md: 21 },
        pb: { xs: 9, sm: 12, md: 16 },
        overflow: 'hidden',
        // Apple signature clean canvas with luminous diffuse ambient radial glow
        backgroundColor: '#fafafc',
        backgroundImage: `
          radial-gradient(ellipse 90% 55% at 50% -15%, rgba(0, 113, 227, 0.12) 0%, transparent 65%),
          radial-gradient(ellipse 70% 40% at 85% 15%, rgba(254, 240, 138, 0.22) 0%, transparent 55%),
          radial-gradient(ellipse 60% 45% at 15% 25%, rgba(191, 219, 254, 0.28) 0%, transparent 60%)
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
            linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, transparent 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2.5, sm: 3, md: 4 } }}>
        {/* Hero Header & Typography */}
        <RevealOnScroll variant="init">
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 860,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Overline Tag Pill */}
            <Chip
              icon={<AutoAwesomeRoundedIcon sx={{ fontSize: '14px !important', color: '#0071e3' }} />}
              label="INTELLIGENT SCHOOL MANAGEMENT"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.82)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                color: '#0071e3',
                border: '1px solid rgba(0, 113, 227, 0.18)',
                fontWeight: 650,
                fontSize: { xs: '0.72rem', sm: '0.76rem' },
                letterSpacing: '0.07em',
                py: 2.1,
                px: 1.8,
                borderRadius: '9999px',
                mb: { xs: 2.5, md: 3 },
                boxShadow: '0 2px 10px rgba(0, 113, 227, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)',
                '& .MuiChip-label': {
                  px: 1,
                },
              }}
            />

            {/* Massive Display Headline */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.15rem', sm: '3.4rem', md: '4.6rem', lg: '5.2rem' },
                fontWeight: 800,
                lineHeight: { xs: 1.14, sm: 1.08, md: 1.04 },
                letterSpacing: { xs: '-0.028em', sm: '-0.038em' },
                color: '#1d1d1f',
                mb: { xs: 2.2, md: 3 },
                px: { xs: 0.5, sm: 0 },
                wordBreak: 'break-word',
              }}
            >
              One platform for your{' '}
              <Box
                component="span"
                sx={{
                  display: 'inline',
                  background: 'linear-gradient(135deg, #0071e3 0%, #2997ff 45%, #1e56a0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                entire school
              </Box>
              <Box component="span" sx={{ color: '#0071e3' }}>
                .
              </Box>
            </Typography>

            {/* Subheadline with Apple Leading */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.02rem', sm: '1.16rem', md: '1.24rem' },
                lineHeight: 1.62,
                color: '#6e6e73',
                maxWidth: 720,
                mx: 'auto',
                mb: { xs: 3.5, md: 4.8 },
                fontWeight: 450,
                letterSpacing: '-0.012em',
                px: { xs: 0.5, sm: 0 },
              }}
            >
              Bring administrators, teachers, staff, students and parents together with one
              seamlessly connected operating system built to simplify everyday institutional life.
            </Typography>

            {/* Action CTA Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.8}
              justifyContent="center"
              alignItems="center"
              sx={{ width: { xs: '100%', sm: 'auto' }, mb: { xs: 2.5, sm: 3 } }}
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
                  py: { xs: 1.5, sm: 1.6 },
                  px: { xs: 4, sm: 4.5 },
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  width: { xs: '100%', sm: 'auto' },
                  backgroundColor: '#0071e3',
                  boxShadow: '0 4px 18px 0 rgba(0, 113, 227, 0.35)',
                  '&:hover': {
                    backgroundColor: '#0077ed',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px 0 rgba(0, 113, 227, 0.45)',
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
                endIcon={<NorthEastRoundedIcon sx={{ fontSize: '18px !important' }} />}
                sx={{
                  py: { xs: 1.5, sm: 1.6 },
                  px: { xs: 3.6, sm: 4 },
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  width: { xs: '100%', sm: 'auto' },
                  borderColor: 'rgba(0, 0, 0, 0.12)',
                  color: '#1d1d1f',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                  textDecoration: 'none',
                  '&:hover': {
                    borderColor: 'rgba(0, 0, 0, 0.22)',
                    backgroundColor: '#ffffff',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.06)',
                  },
                }}
              >
                Explore the Platform
              </Button>
            </Stack>

            {/* Google Play Store Badge for Edukra Parents */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 4, sm: 6, md: 8 },
              }}
            >
              <Box
                component="a"
                href="https://play.google.com/store/apps/details?id=com.urionsystems.edukraparent"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.25,
                  bgcolor: '#121214',
                  color: '#ffffff',
                  px: { xs: 2.2, sm: 2.6 },
                  py: { xs: 0.85, sm: 0.95 },
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.20)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    bgcolor: '#1d1d20',
                    borderColor: 'rgba(255, 255, 255, 0.26)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
                  },
                }}
              >
                <GooglePlayIcon />
                <Box sx={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <Typography sx={{ fontSize: '0.60rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 650 }}>
                    Get Edukra Parents on
                  </Typography>
                  <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                    Google Play
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </RevealOnScroll>

        {/* Dashboard Mockup Graphic Container & Floating Badges */}
        <RevealOnScroll variant="mockup-pop">
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: '100%', lg: '1120px' },
              mx: 'auto',
              mt: { xs: 2, md: 3 },
            }}
          >
            {/* 1. Top-Left Badge: 98% Attendance */}
            <FloatingBadge
              icon={DonutLargeRoundedIcon}
              value="98%"
              label="Campus Attendance"
              className="float-badge-1"
              sx={{
                top: '12%',
                left: { md: -45, lg: -55 },
                display: { xs: 'none', md: 'flex' },
              }}
            />

            {/* 2. Bottom-Left Badge: 541 Students */}
            <FloatingBadge
              icon={PersonOutlineRoundedIcon}
              value="541"
              label="Active Students"
              className="float-badge-2"
              sx={{
                bottom: '18%',
                left: { md: -45, lg: -60 },
                display: { xs: 'none', md: 'flex' },
              }}
            />

            {/* 3. Top-Right Badge: New Notice */}
            <FloatingBadge
              icon={NotificationsNoneRoundedIcon}
              value="Term 1"
              label="Reports Ready"
              className="float-badge-3"
              sx={{
                top: '10%',
                right: { md: -45, lg: -55 },
                display: { xs: 'none', md: 'flex' },
              }}
            />

            {/* 4. Bottom-Right Badge: Fee Settlement */}
            <FloatingBadge
              icon={PaymentsOutlinedIcon}
              value="GH₵ 42.5k"
              label="MoMo Reconciled"
              className="float-badge-4"
              sx={{
                bottom: '20%',
                right: { md: -45, lg: -60 },
                display: { xs: 'none', md: 'flex' },
              }}
            />

            {/* Central Hardware Mockup Frame */}
            <Box
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              sx={{
                position: 'relative',
                zIndex: 2,
                borderRadius: { xs: '20px', sm: '28px', md: '34px' },
                padding: { xs: '8px', sm: '14px', md: '18px' },
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow:
                  '0 30px 80px -15px rgba(15, 23, 42, 0.12), 0 12px 30px -8px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 1)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                '&:hover': {
                  boxShadow:
                    '0 40px 100px -20px rgba(0, 113, 227, 0.16), 0 18px 40px -10px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)',
                },
              }}
            >
              <Box
                component="img"
                src={allDevicesMockup}
                alt="Edukra Unified Platform Experience across Mac, Tablet and Phone"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: { xs: '14px', sm: '20px', md: '26px' },
                  filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.06))',
                }}
              />
            </Box>
          </Box>
        </RevealOnScroll>
      </Container>
    </Box>
  );
}

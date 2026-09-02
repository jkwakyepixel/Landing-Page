import React from 'react';
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

// Reusable Floating Metric Badge Component
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
      className={className}
      sx={{
        position: 'absolute',
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2.2,
        py: 1.6,
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        boxShadow:
          '0 20px 35px -8px rgba(15, 23, 42, 0.12), 0 8px 16px -6px rgba(15, 23, 42, 0.06)',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.02)',
          boxShadow:
            '0 25px 45px -8px rgba(30, 86, 160, 0.18), 0 10px 20px -6px rgba(15, 23, 42, 0.08)',
        },
        ...sx,
      }}
    >
      {/* Icon Capsule */}
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: '12px',
          backgroundColor: '#eff6ff',
          border: '1px solid #dbeafe',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2563eb',
          flexShrink: 0,
        }}
      >
        <IconComponent sx={{ fontSize: 22 }} />
      </Box>

      {/* Texts */}
      <Box>
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontWeight: 800,
            fontSize: '1.05rem',
            lineHeight: 1.2,
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="caption"
          component="div"
          sx={{
            fontWeight: 500,
            fontSize: '0.78rem',
            color: '#64748b',
            lineHeight: 1.2,
            mt: 0.2,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Paper>
  );
}

export default function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        pt: { xs: 15, sm: 17, md: 20 },
        pb: { xs: 10, sm: 12, md: 16 },
        overflow: 'hidden',
        // Ambient background with warm yellow and light blue radial glows
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Header & Typography */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 820,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Overline Tag Pill */}
          <Chip
            icon={<AutoAwesomeRoundedIcon sx={{ fontSize: '15px !important', color: '#2563eb' }} />}
            label="SCHOOL MANAGEMENT PLATFORM"
            sx={{
              backgroundColor: '#eef4ff',
              color: '#1d4ed8',
              border: '1px solid #bfdbfe',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.06em',
              py: 2.2,
              px: 1.5,
              borderRadius: '9999px',
              mb: { xs: 2.5, md: 3 },
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
              '& .MuiChip-label': {
                px: 1,
              },
            }}
          />

          {/* Massive Headline */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.6rem', md: '4.4rem', lg: '4.85rem' },
              fontWeight: 800,
              lineHeight: { xs: 1.15, md: 1.1 },
              letterSpacing: { xs: '-0.03em', md: '-0.04em' },
              color: '#0f172a',
              mb: { xs: 2.5, md: 3 },
            }}
          >
            One platform for your{' '}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                background:
                  'linear-gradient(90deg, #2d65aa 0%, #436ea2 12%, #55759b 22%, #6b7d90 34%, #7d8386 45%, #89877f 52%, #998c74 61%, #a79069 70%, #b6945b 79%, #c89846 89%, #da9c24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              entire school
            </Box>
            <Box component="span" sx={{ color: '#0f172a' }}>
              .
            </Box>
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.05rem', sm: '1.18rem', md: '1.25rem' },
              lineHeight: 1.65,
              color: '#475569',
              maxWidth: 710,
              mx: 'auto',
              mb: { xs: 4, md: 5 },
              fontWeight: 450,
            }}
          >
            Bring administrators, teachers, staff, students and parents together with one
            connected school management platform built to simplify everyday school operations.
          </Typography>

          {/* Action CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: { xs: '100%', sm: 'auto' }, mb: { xs: 6, sm: 8, md: 10 } }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                py: { xs: 1.5, sm: 1.6 },
                px: { xs: 4, sm: 4.2 },
                fontSize: '1.02rem',
                fontWeight: 600,
                borderRadius: '10px',
                width: { xs: '100%', sm: 'auto' },
                boxShadow: '0 8px 20px -3px rgba(30, 86, 160, 0.4)',
                backgroundColor: '#1e56a0',
                '&:hover': {
                  backgroundColor: '#16427d',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 26px -3px rgba(30, 86, 160, 0.5)',
                },
              }}
            >
              Book a Demo
            </Button>

            <Button
              variant="outlined"
              size="large"
              endIcon={<NorthEastRoundedIcon sx={{ fontSize: '19px !important' }} />}
              sx={{
                py: { xs: 1.5, sm: 1.6 },
                px: { xs: 3.5, sm: 3.8 },
                fontSize: '1.02rem',
                fontWeight: 600,
                borderRadius: '10px',
                width: { xs: '100%', sm: 'auto' },
                borderColor: '#e2e8f0',
                color: '#1e293b',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                '&:hover': {
                  borderColor: '#cbd5e1',
                  backgroundColor: '#f8fafc',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Explore the Platform
            </Button>
          </Stack>
        </Box>

        {/* Dashboard Mockup Graphic Container & Floating Badges */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: { xs: '100%', lg: '1040px' },
            mx: 'auto',
            mt: { xs: 2, md: 3 },
          }}
        >
          {/* Floating Metric Badges (Positions matching high-fidelity mockup) */}
          
          {/* 1. Top-Left Badge: 98% Attendance */}
          <FloatingBadge
            icon={DonutLargeRoundedIcon}
            value="98%"
            label="Attendance"
            className="float-badge-1"
            sx={{
              top: { xs: -25, md: '12%' },
              left: { xs: 12, md: -45, lg: -55 },
              display: { xs: 'none', sm: 'flex' },
            }}
          />

          {/* 2. Bottom-Left Badge: 541 Students */}
          <FloatingBadge
            icon={PersonOutlineRoundedIcon}
            value="541"
            label="Students"
            className="float-badge-2"
            sx={{
              bottom: { xs: -20, md: '18%' },
              left: { xs: 12, md: -45, lg: -60 },
              display: { xs: 'none', sm: 'flex' },
            }}
          />

          {/* 3. Top-Right Badge: 24 New Notifications */}
          <FloatingBadge
            icon={NotificationsNoneRoundedIcon}
            value="24"
            label="New Notifications"
            className="float-badge-3"
            sx={{
              top: { xs: -25, md: '8%' },
              right: { xs: 12, md: -45, lg: -55 },
              display: { xs: 'none', sm: 'flex' },
            }}
          />

          {/* 4. Bottom-Right Badge: GH₵633,617 Bills collected */}
          <FloatingBadge
            icon={PaymentsOutlinedIcon}
            value="GH₵633,617"
            label="Bills collected"
            className="float-badge-4"
            sx={{
              bottom: { xs: -20, md: '22%' },
              right: { xs: 12, md: -50, lg: -75 },
              display: { xs: 'none', sm: 'flex' },
            }}
          />

          {/* Main Dashboard Placeholder Container */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: { xs: '14px', sm: '18px', md: '22px' },
              p: { xs: 1, sm: 1.5, md: 1.8 },
              border: '1px solid rgba(226, 232, 240, 0.85)',
              boxShadow: `
                0 30px 60px -12px rgba(50, 50, 93, 0.12),
                0 18px 36px -18px rgba(0, 0, 0, 0.16),
                0 0 0 1px rgba(0, 0, 0, 0.03)
              `,
              overflow: 'hidden',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              '&:hover': {
                boxShadow: `
                  0 40px 80px -15px rgba(50, 50, 93, 0.18),
                  0 24px 48px -18px rgba(0, 0, 0, 0.2),
                  0 0 0 1px rgba(30, 86, 160, 0.08)
                `,
              },
            }}
          >
            {/* Inner frame containing the dashboard mockup graphic */}
            <Box
              sx={{
                width: '100%',
                borderRadius: { xs: '10px', sm: '14px', md: '16px' },
                overflow: 'hidden',
                backgroundColor: '#f8fafc',
                display: 'block',
              }}
            >
              <Box
                component="img"
                src="/dashboard-mockup.png"
                alt="School Management Dashboard Preview"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: { xs: '10px', sm: '14px', md: '16px' },
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </Box>
          </Box>

          {/* Mobile badges row (visible only on xs mobile screens) */}
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{
              display: { xs: 'flex', sm: 'none' },
              mt: 3,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 1,
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff',
              }}
            >
              <DonutLargeRoundedIcon sx={{ fontSize: 18, color: '#2563eb' }} />
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                98% Attendance
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 1,
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff',
              }}
            >
              <PersonOutlineRoundedIcon sx={{ fontSize: 18, color: '#2563eb' }} />
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                541 Students
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 1,
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff',
              }}
            >
              <NotificationsNoneRoundedIcon sx={{ fontSize: 18, color: '#2563eb' }} />
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                24 Notifications
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 1,
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff',
              }}
            >
              <PaymentsOutlinedIcon sx={{ fontSize: 18, color: '#2563eb' }} />
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                GH₵633,617 Collected
              </Typography>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

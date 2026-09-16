import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// Exact SVG Icons matching the Figma/Readdy design

// Compass / Target icon for the PURPOSE pill badge
function PurposeBadgeIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        fill="currentColor"
        fillOpacity="0.25"
      />
    </svg>
  );
}

// Circular Compass/Target icon for OUR MISSION
function MissionIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        fill="currentColor"
        fillOpacity="0.25"
      />
    </svg>
  );
}

// Vision / Eye icon for OUR VISION
function VisionIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// Target icon for OUR GOALS pill badge
function GoalsBadgeIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

// 6 Goal definitions matching the design mockup pixel-for-pixel
const goals = [
  {
    id: 'school-admin',
    title: 'Improve school administration',
    description:
      'Centralize student records, admissions, timetable scheduling, and staff records into a single intuitive dashboard—replacing fragmented paperwork and eliminating repetitive manual entries.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2863AB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
      </svg>
    ),
  },
  {
    id: 'communication',
    title: 'Improve communication',
    description:
      'Bridge the gap between school and home through native WhatsApp alerts, SMS broadcasts, and parent portals for instantaneous report cards, fee receipts, and school updates.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2863AB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 'accessibility',
    title: 'Improve accessibility',
    description:
      'Ensure seamless 24/7 access on mobile, tablet, and desktop with low-bandwidth optimization and offline resilience, meeting school communities right where they are.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2863AB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: 'learning-experiences',
    title: 'Improve learning experiences',
    description:
      'Equip educators with streamlined gradebooks, continuous assessment tools, and LMS integrations (Google Classroom, Zoom, and E-library) so they spend less time on paperwork and more time teaching.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2863AB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: 'operational-efficiency',
    title: 'Improve operational efficiency',
    description:
      'Automate tuition fee tracking, Mobile Money and card reconciliation, and attendance logging—cutting administrative overhead by over 70% and removing financial leakages.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2863AB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 15" />
      </svg>
    ),
  },
  {
    id: 'data-driven-decisions',
    title: 'Support data-driven decisions',
    description:
      'Deliver real-time analytics (rated critical by 4.19/5 of schools) and executive dashboards, giving headteachers, directors, and proprietors instant visibility into academic progress and institutional health.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2863AB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
];

export default function MissionVision() {
  // Scroll to top on mount
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
        color: '#0B0702',
        fontFamily: "'Inter', sans-serif",
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <NavigationBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 15, sm: 17, md: 20 },
          pb: { xs: 8, md: 12 },
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
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.15) 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.15) 92%, transparent 100%)',
          }}
        />

        {/* SECTION 1: HERO HEADER */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <RevealOnScroll
            variant="init"
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: { xs: 6, md: 8 },
            }}
          >
            {/* Pill Badge: PURPOSE */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                px: '14px',
                py: '4.5px',
                borderRadius: '9999px',
                backgroundColor: '#DAEDFF',
                color: '#1D4D87',
                mb: 2.5,
              }}
            >
              <PurposeBadgeIcon />
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  lineHeight: '16px',
                }}
              >
                PURPOSE
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '32px', sm: '42px', md: '48px', lg: '52px' },
                lineHeight: { xs: '38px', sm: '48px', md: '56px', lg: '60px' },
                letterSpacing: '-1.1px',
                color: '#0B0702',
                mb: 2,
                textAlign: 'center',
              }}
            >
              Built with a bigger purpose.
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '15px', sm: '16.5px', md: '17px' },
                lineHeight: '26px',
                color: '#5B5449',
                textAlign: 'center',
                maxWidth: '640px',
                mx: 'auto',
              }}
            >
              The mission, vision and goals that guide every decision we make for the
              platform and the schools we serve.
            </Typography>
          </RevealOnScroll>
        </Container>

        {/* SECTION 2: OUR MISSION & OUR VISION CARDS */}
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1140px !important',
            mx: 'auto',
            px: { xs: 2.5, sm: 3, md: 4 },
            mb: { xs: 10, md: 15 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <RevealOnScroll variant="pop-up">
            <Grid container spacing={{ xs: 3, md: 3.5 }}>
              {/* Card 1: OUR MISSION */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EFECE6',
                    borderRadius: '16px',
                    p: { xs: 3, sm: 3.5, md: 4 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                    '&:hover': {
                      borderColor: '#CBD5E1',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    },
                  }}
                >
                  {/* Header Row: Square Rounded Icon + Text Stack */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8, mb: 2.8 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '10px',
                        backgroundColor: '#DAEDFF',
                        color: '#1D4D87',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <MissionIcon />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#1D4D87',
                          lineHeight: 1.2,
                        }}
                      >
                        OUR MISSION
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 800,
                          fontSize: { xs: '19px', sm: '22px' },
                          lineHeight: 1.25,
                          color: '#0B0702',
                          mt: 0.3,
                        }}
                      >
                        What we do every day
                      </Typography>
                    </Box>
                  </Box>

                  {/* Body with vertical left accent bar */}
                  <Box
                    sx={{
                      borderLeft: '3px solid #93C5FD',
                      pl: 2,
                      py: 0.5,
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 450,
                        fontSize: '14.5px',
                        lineHeight: '23px',
                        color: '#334155',
                      }}
                    >
                      To empower educational institutions across Ghana and Africa with an intuitive, reliable, and accessible school management platform—unifying administration, academics, Mobile Money fee collections, and parent engagement to eliminate administrative friction and elevate educational outcomes.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Card 2: OUR VISION */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EFECE6',
                    borderRadius: '16px',
                    p: { xs: 3, sm: 3.5, md: 4 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                    '&:hover': {
                      borderColor: '#CBD5E1',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    },
                  }}
                >
                  {/* Header Row: Square Rounded Icon + Text Stack */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8, mb: 2.8 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '10px',
                        backgroundColor: '#DAEDFF',
                        color: '#1D4D87',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <VisionIcon />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#1D4D87',
                          lineHeight: 1.2,
                        }}
                      >
                        OUR VISION
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 800,
                          fontSize: { xs: '19px', sm: '22px' },
                          lineHeight: 1.25,
                          color: '#0B0702',
                          mt: 0.3,
                        }}
                      >
                        Where we're headed
                      </Typography>
                    </Box>
                  </Box>

                  {/* Body with vertical left accent bar */}
                  <Box
                    sx={{
                      borderLeft: '3px solid #93C5FD',
                      pl: 2,
                      py: 0.5,
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 450,
                        fontSize: '14.5px',
                        lineHeight: '23px',
                        color: '#334155',
                      }}
                    >
                      To become Africa’s most trusted educational operating system—fostering thriving learning communities where every school leader, teacher, parent, and student is seamlessly connected through locally relevant technology.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </RevealOnScroll>
        </Container>

        {/* SECTION 3: OUR GOALS */}
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1140px !important',
            mx: 'auto',
            px: { xs: 2.5, sm: 3, md: 4 },
            mb: { xs: 10, md: 15 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Section Header */}
          <RevealOnScroll
            variant="init"
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: { xs: 5, md: 7 },
            }}
          >
            {/* Pill Badge: OUR GOALS */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                px: '14px',
                py: '4px',
                borderRadius: '9999px',
                backgroundColor: '#DAEDFF',
                color: '#1D4D87',
                mb: 2,
              }}
            >
              <GoalsBadgeIcon />
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  lineHeight: '16px',
                }}
              >
                OUR GOALS
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '26px', sm: '32px', md: '36px' },
                lineHeight: { xs: '32px', sm: '38px', md: '42px' },
                letterSpacing: '-0.7px',
                color: '#0B0702',
                mb: 1.5,
                textAlign: 'center',
              }}
            >
              What we're working toward.
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '15px', sm: '16px' },
                lineHeight: '24px',
                color: '#5B5449',
                textAlign: 'center',
                maxWidth: '560px',
                mx: 'auto',
              }}
            >
              Clear goals that shape how the platform evolves and how we measure
              progress.
            </Typography>
          </RevealOnScroll>

          {/* 6 Goal Cards Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: '20px', md: '24px' },
            }}
          >
            {goals.map((goal, idx) => (
              <RevealOnScroll
                key={goal.id}
                variant="pop-up"
                delay={idx * 0.06}
                sx={{ height: '100%' }}
              >
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EDE8E1',
                    borderRadius: '12px',
                    p: { xs: '24px 20px', md: '28px 24px' },
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#CBD5E1',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  {/* Icon Box */}
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '10px',
                      backgroundColor: '#EBF4FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.2,
                    }}
                  >
                    {goal.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: '16.5px',
                      lineHeight: '22px',
                      color: '#0B0702',
                      mb: 1.2,
                    }}
                  >
                    {goal.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '13.5px',
                      lineHeight: '21px',
                      color: '#5B5449',
                    }}
                  >
                    {goal.description}
                  </Typography>
                </Box>
              </RevealOnScroll>
            ))}
          </Box>
        </Container>

        {/* SECTION 4: CALL TO ACTION BANNER */}
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1140px !important',
            mx: 'auto',
            px: { xs: 2.5, sm: 3, md: 4 },
            mb: { xs: 8, md: 12 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <RevealOnScroll variant="pop-up">
            <Box
              sx={{
                borderRadius: { xs: '18px', md: '22px' },
                p: { xs: '44px 24px', sm: '54px 36px', md: '64px 48px' },
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background:
                  'linear-gradient(108deg, #1A4E8C 0%, #2563EB 38%, #3A83CE 62%, #D97706 100%)',
                boxShadow: '0 20px 48px -10px rgba(30, 86, 160, 0.28)',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '24px', sm: '30px', md: '34px' },
                  lineHeight: 1.25,
                  color: '#FFFFFF',
                  mb: 3.5,
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                See how we bring this purpose to life.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: { xs: 2, sm: 3 },
                  width: '100%',
                  mx: 'auto',
                }}
              >
                <Button
                  variant="contained"
                  endIcon={
                    <ArrowForwardRoundedIcon sx={{ fontSize: '16px !important' }} />
                  }
                  onClick={() => {
                    window.location.hash = '#book-demo';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#1E293B',
                    height: '44px',
                    px: 3,
                    borderRadius: '9999px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px',
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#F8FAFC',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.16)',
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
                    color: '#FFFFFF',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '14.5px',
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  Read our story
                </Button>
              </Box>
            </Box>
          </RevealOnScroll>
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}

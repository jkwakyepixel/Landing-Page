import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// Small custom check icon matching the design system
function BlueCheckIcon() {
  return (
    <Box
      sx={{
        width: 18,
        height: 18,
        borderRadius: '50%',
        backgroundColor: '#DAEDFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#2863AB',
      }}
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 4.2L3.6 6.8L9 1.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}

// Clock/History icon for the ABOUT badge
function AboutBadgeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const chapters = [
  {
    step: '01',
    tag: '2024',
    chapter: 'Chapter 01',
    title: 'The Groundwork & Research',
    description:
      'In late 2024, Urion Systems commissioned a landmark market study across 127 educational institutions in Accra, Tema, and Takoradi. We discovered that while 69.3% of schools had adopted digital software, 81% were open to switching due to exorbitant costs and foreign tools that failed to support local workflows.',
    items: ['127 Ghanaian institutions surveyed', '81% switching openness uncovered'],
  },
  {
    step: '02',
    tag: '2024',
    chapter: 'Chapter 02',
    title: 'The Frustrations We Uncovered',
    description:
      'Existing systems imposed steep subscription pricing (32% of all complaints), disconnected records, and weak local training. IT staff reported the lowest satisfaction (3.71/5), while 37% of schools felt held hostage by the fear of losing historical academic and financial records during migration.',
    items: ['High costs & functional silos', 'Data migration fears & training gaps'],
  },
  {
    step: '03',
    tag: '2025',
    chapter: 'Chapter 03',
    title: 'The Ghana-First Architecture',
    description:
      'We set out to engineer a school management system built from first principles for Ghana: native Mobile Money payment reconciliation (demanded by 60% of schools), automated WhatsApp communication for parents (35%), real-time dashboards, and a guaranteed zero-risk data migration protocol.',
    items: ['Native Mobile Money & WhatsApp', 'Guaranteed risk-free data migration'],
  },
  {
    step: '04',
    tag: '2025',
    chapter: 'Chapter 04',
    title: 'The Complete Unified Platform',
    description:
      'Urion SMS evolved into an all-in-one ecosystem unifying student records, fee collection, gradebooks, attendance, staff portals, and LMS integrations into a single intuitive interface—backed by contextual in-app tutorials for admins, teachers, and finance teams.',
    items: ['All-in-one unified school modules', 'Role-tailored in-app training tracks'],
  },
  {
    step: '05',
    tag: 'TODAY',
    chapter: 'Chapter 05',
    title: "Leading the Future of EdTech",
    description:
      'Today, Urion SMS serves as the digital backbone for forward-thinking schools across Ghana. We are actively deploying predictive AI analytics for student performance and dropout risk prevention, establishing the gold standard for educational technology across West Africa.',
    items: ['Predictive AI performance analytics', 'Nationwide & West African expansion'],
  },
];

export default function History() {
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
          pb: { xs: 10, md: 15 },
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

        {/* HERO / HEADER SECTION */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <RevealOnScroll variant="init" sx={{ textAlign: 'center', mb: { xs: 7, md: 9 } }}>
            {/* Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.8,
                backgroundColor: '#DAEDFF',
                color: '#1D4D87',
                px: '13px',
                py: '4px',
                borderRadius: '9999px',
                mb: 2.5,
              }}
            >
              <AboutBadgeIcon />
              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                ABOUT
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '36px', sm: '46px', md: '52px' },
                lineHeight: 1.15,
                letterSpacing: '-1px',
                color: '#0B0702',
                mb: 2,
              }}
            >
              Our story.
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
              The journey behind the platform — where it started, the problem we set out to
              solve, and where we're headed.
            </Typography>
          </RevealOnScroll>
        </Container>

        {/* TIMELINE SECTION (5 HORIZONTAL NODES & CARDS) */}
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1240px !important',
            mx: 'auto',
            px: { xs: 2.5, sm: 3, md: 4 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* 5 COLUMN CONTAINER WITH TOP CONNECTING LINE */}
          <Box
            sx={{
              position: 'relative',
            }}
          >
            {/* Desktop Connecting Line behind nodes */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                top: '20px', // Exactly through the vertical center of the 40px circle
                left: '20px',
                right: '20px',
                height: '2px',
                backgroundColor: '#E2E8F0',
                zIndex: 0,
              }}
            />

            {/* 5 Columns Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(5, 1fr)',
                },
                gap: { xs: '32px', md: '16px', lg: '20px' },
                alignItems: 'stretch',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {chapters.map((chap, idx) => (
                <RevealOnScroll
                  key={idx}
                  delay={idx * 0.09}
                  threshold={0.08}
                  rootMargin="0px 0px -30px 0px"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Numbered Circular Badge */}
                  <Box sx={{ mb: 2.5, display: 'flex' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#1E56A0',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '14px',
                        fontFamily: "'Inter', sans-serif",
                        boxShadow: '0 0 0 6px #FDFBF9', // Masks connecting line cleanly behind circle
                      }}
                    >
                      {chap.step}
                    </Box>
                  </Box>

                  {/* Card */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #EFEBE4',
                      borderRadius: '10px',
                      p: { xs: 2.5, md: '22px 18px', lg: '24px 20px' },
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        borderColor: '#CBD5E1',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
                      },
                    }}
                  >
                    {/* Top Row: Year Tag & Chapter label */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#2863AB',
                          fontWeight: 700,
                          fontSize: '12px',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {chap.tag}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#94A3B8',
                          fontSize: '11px',
                          fontWeight: 500,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {chap.chapter}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: '17px',
                        lineHeight: 1.3,
                        color: '#191309',
                        mb: 1.5,
                        minHeight: { md: '44px' }, // Harmonizes height across cards
                      }}
                    >
                      {chap.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '13px',
                        lineHeight: 1.55,
                        color: '#64748B',
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {chap.description}
                    </Typography>

                    {/* Checkpoints list */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                      {chap.items.map((item, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.2,
                          }}
                        >
                          <BlueCheckIcon />
                          <Typography
                            sx={{
                              fontSize: '12.5px',
                              fontWeight: 500,
                              color: '#475569',
                              fontFamily: "'Inter', sans-serif",
                              lineHeight: 1.3,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </RevealOnScroll>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}

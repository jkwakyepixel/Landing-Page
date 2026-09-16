import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  alpha,
} from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

import dashboardMockup from '../assets/dashboard desktop mock ups.png';
import teacherMockup from '../assets/teachers tablet mock up.png';
import parentMockup from '../assets/parent mobile mock up.png';
import adminLaptopMockup from '../assets/admin billing laptop mmockup.png';

// Categories matching the user's mockup
const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'product', label: 'Product' },
  { id: 'schools', label: 'Schools' },
  { id: 'events', label: 'Events' },
  { id: 'training', label: 'Training' },
  { id: 'community', label: 'Community' },
  { id: 'team', label: 'Team' },
];

// Curated high-resolution photo gallery for presentations, workshops, onboarding & community
const galleryPhotos = [
  {
    id: 1,
    category: 'product',
    tag: 'PRODUCT',
    title: 'Executive School Command Center',
    subtitle: 'Comprehensive real-time analytics, student enrollment, and finance on desktop.',
    image: dashboardMockup,
    aspectRatio: '16/11',
  },
  {
    id: 2,
    category: 'schools',
    tag: 'SCHOOLS',
    title: 'Classroom Engagement',
    subtitle: 'Students actively participating during an interactive digital classroom session.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: '3/4',
  },
  {
    id: 3,
    category: 'training',
    tag: 'TRAINING',
    title: 'Staff workshop',
    subtitle: 'Hands-on training and system onboarding with school faculty & administration.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: '16/11',
  },
  {
    id: 4,
    category: 'product',
    tag: 'PRODUCT',
    title: 'Parent Mobile App Experience',
    subtitle: 'Instant grades, fee receipts, and school notifications on smartphone.',
    image: parentMockup,
    aspectRatio: '1/1',
  },
  {
    id: 13,
    category: 'product',
    tag: 'PRODUCT',
    title: 'Teacher Scorebook & Attendance',
    subtitle: 'Intuitive touch-ready tablet interface for daily attendance and continuous grading.',
    image: teacherMockup,
    aspectRatio: '4/3',
  },
  {
    id: 14,
    category: 'product',
    tag: 'PRODUCT',
    title: 'School Billing & Invoicing Suite',
    subtitle: 'Traceable fee collection, billing summaries, and audit records on laptop.',
    image: adminLaptopMockup,
    aspectRatio: '16/11',
  },
  {
    id: 5,
    category: 'training',
    tag: 'TRAINING',
    title: 'Teacher Onboarding Session',
    subtitle: 'Guided walkthrough of the gradebook, scorebook, and attendance modules.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: '4/3',
  },
  {
    id: 6,
    category: 'team',
    tag: 'TEAM',
    title: 'Team Collaboration & Review',
    subtitle: 'Urion Systems engineering & deployment specialists planning school rollouts.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: '16/11',
  },
  {
    id: 7,
    category: 'events',
    tag: 'EVENTS',
    title: 'School Presentation to Proprietors',
    subtitle: 'Demonstrating fee collection and Mobile Money integration to school owners.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: '16/10',
  },
  {
    id: 8,
    category: 'community',
    tag: 'COMMUNITY',
    title: 'Learning Communities',
    subtitle: 'Empowering teachers, parents, and students across Ghana through accessible edtech.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: '3/4',
  },
  {
    id: 9,
    category: 'schools',
    tag: 'SCHOOLS',
    title: 'Modern Campus Deployment',
    subtitle: 'Institutions running end-to-end administration on Urion SMS.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: '16/11',
  },
];

const showcaseFeatures = [
  {
    title: 'Intuitive Dashboard',
    description:
      "Get a bird's-eye view of your entire school's daily operations, attendance metrics, and critical alerts the moment you log in.",
    icon: <DashboardRoundedIcon fontSize="large" />,
    color: '#3b82f6',
    alignment: 'left',
    image: dashboardMockup,
    alt: 'School administrator dashboard overview',
  },
  {
    title: 'Seamless Grading & Assessment',
    description:
      'Teachers can quickly input grades, attach feedback, and automatically generate comprehensive report cards with just a few clicks.',
    icon: <SchoolRoundedIcon fontSize="large" />,
    color: '#8b5cf6',
    alignment: 'right',
    image: teacherMockup,
    alt: 'Teacher grading and student scorebook view',
  },
  {
    title: 'Mobile-Ready Parent Portal',
    description:
      "Keep parents engaged with a responsive mobile experience, allowing them to track their child's progress, view timetables, and pay fees anywhere.",
    icon: <DevicesRoundedIcon fontSize="large" />,
    color: '#10b981',
    alignment: 'left',
    image: parentMockup,
    alt: 'Parent portal showing student updates and pickup QR code',
  },
];

function ShowcaseItem({ feature }) {
  const isReverse = feature.alignment === 'right';

  return (
    <Grid
      container
      spacing={{ xs: 4, md: 8 }}
      alignItems="center"
      direction={isReverse ? 'row-reverse' : 'row'}
    >
      {/* Text Content */}
      <Grid item xs={12} md={5}>
        <RevealOnScroll variant={isReverse ? 'slide-right' : 'slide-left'} delay={0.05}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: '16px',
              backgroundColor: alpha(feature.color, 0.1),
              color: feature.color,
              mb: 3,
              boxShadow: `0 4px 14px ${alpha(feature.color, 0.2)}`,
              transition: 'transform 0.25s ease',
              '&:hover': { transform: 'scale(1.08) rotate(3deg)' },
            }}
          >
            {feature.icon}
          </Box>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 850,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              color: '#0f172a',
              mb: 2,
              letterSpacing: '-0.02em',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {feature.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              mb: 4,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {feature.description}
          </Typography>
        </RevealOnScroll>
      </Grid>

      {/* Real UI Mockup Card */}
      <Grid item xs={12} md={7}>
        <RevealOnScroll variant="pop-up" delay={0.15}>
          <Box
            sx={{
              width: '100%',
              minHeight: { xs: '260px', sm: '360px', md: '420px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={feature.image}
              alt={feature.alt}
              sx={{
                maxWidth: '100%',
                maxHeight: { xs: '320px', sm: '420px', md: '460px' },
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 16px 32px rgba(15, 23, 42, 0.12)) drop-shadow(0 4px 10px rgba(15, 23, 42, 0.06))',
                imageRendering: '-webkit-optimize-contrast',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.01)',
                  filter: 'drop-shadow(0 24px 44px rgba(15, 23, 42, 0.18)) drop-shadow(0 8px 16px rgba(15, 23, 42, 0.08))',
                },
              }}
            />
          </Box>
        </RevealOnScroll>
      </Grid>
    </Grid>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleNextPhoto = () => {
    if (!selectedImage) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedImage) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[prevIndex]);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#faf9f8',
        position: 'relative',
      }}
    >
      <NavigationBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 15, sm: 17, md: 19 },
          pb: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
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

        <Container
          maxWidth={false}
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1240px !important',
            mx: 'auto',
            px: { xs: 2.5, sm: 3 },
          }}
        >
          {/* Header */}
          <RevealOnScroll variant="init">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                mb: { xs: 6, md: 8 },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1e56a0',
                  mb: 1.8,
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                FIELD WORKSHOPS & ONBOARDING
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 850,
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: '#080604',
                  maxWidth: 820,
                  mb: 2,
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                In the field with Ghanaian schools.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748b',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  lineHeight: 1.6,
                  maxWidth: 680,
                  fontWeight: 450,
                  mb: 3,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                See our team in action conducting live presentations, teacher workshops, administrator onboarding, and classroom rollouts across Ghana.
              </Typography>
            </Box>
          </RevealOnScroll>

          {/* SECTION 1: FILTER TABS (Matching User's Uploaded Mockup) */}
          <RevealOnScroll variant="init">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1.2,
                mb: { xs: 5, md: 7 },
              }}
            >
              {filterCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <Button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    sx={{
                      borderRadius: '9999px',
                      px: { xs: 2.2, sm: 2.8 },
                      py: 0.8,
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 500,
                      textTransform: 'none',
                      backgroundColor: isActive ? '#1E56A0' : '#F1F5F9',
                      color: isActive ? '#FFFFFF' : '#475569',
                      boxShadow: isActive ? '0 4px 12px rgba(30, 86, 160, 0.28)' : 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: isActive ? '#16437E' : '#E2E8F0',
                        color: isActive ? '#FFFFFF' : '#1E293B',
                      },
                    }}
                  >
                    {cat.label}
                  </Button>
                );
              })}
            </Box>
          </RevealOnScroll>

          {/* SECTION 2: PHOTO MASONRY / MOSAIC GRID (Matching Mockup) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: '20px',
              mb: { xs: 12, md: 16 },
              alignItems: 'start',
            }}
          >
            {filteredPhotos.map((photo, idx) => (
              <RevealOnScroll key={photo.id} delay={(idx % 3) * 0.1}>
                <Card
                  elevation={0}
                  onClick={() => handleOpenLightbox(photo)}
                  sx={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 14px 30px rgba(0, 0, 0, 0.12)',
                      '& .photo-zoom-btn': {
                        opacity: 1,
                        transform: 'scale(1)',
                      },
                      '& .photo-img': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  {/* Photo Container */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: photo.aspectRatio || '16/11',
                      overflow: 'hidden',
                      bgcolor: '#0F172A',
                    }}
                  >
                    <Box
                      component="img"
                      className="photo-img"
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: photo.category === 'product' ? 'contain' : 'cover',
                        p: photo.category === 'product' ? { xs: 2, sm: 3 } : 0,
                        display: 'block',
                        filter: photo.category === 'product' ? 'drop-shadow(0 10px 24px rgba(0, 0, 0, 0.4))' : 'none',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />

                    {/* Top-Right Floating Zoom Icon (Matching Mockup) */}
                    <Box
                      className="photo-zoom-btn"
                      sx={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        width: 34,
                        height: 34,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(6px)',
                        color: '#0F172A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        opacity: 0.85,
                        transform: 'scale(0.95)',
                        transition: 'all 0.2s ease',
                        zIndex: 2,
                      }}
                    >
                      <ZoomInRoundedIcon sx={{ fontSize: 19 }} />
                    </Box>

                    {/* Bottom Gradient Scrim Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 45%, rgba(0, 0, 0, 0.05) 75%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 2.4,
                        zIndex: 1,
                      }}
                    >
                      {/* Tag Pill (Matching Mockup 'TRAINING' in blue) */}
                      <Box sx={{ mb: 0.8 }}>
                        <Chip
                          label={photo.tag}
                          size="small"
                          sx={{
                            height: '22px',
                            backgroundColor: '#2563EB',
                            color: '#FFFFFF',
                            fontWeight: 800,
                            fontSize: '0.68rem',
                            letterSpacing: '0.04em',
                            borderRadius: '5px',
                          }}
                        />
                      </Box>

                      {/* Photo Title (Bold White Text) */}
                      <Typography
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 750,
                          fontSize: '1.02rem',
                          color: '#FFFFFF',
                          lineHeight: 1.25,
                          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                        }}
                      >
                        {photo.title}
                      </Typography>

                      {/* Subtitle */}
                      {photo.subtitle && (
                        <Typography
                          sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.78rem',
                            color: 'rgba(255, 255, 255, 0.82)',
                            lineHeight: 1.35,
                            mt: 0.4,
                          }}
                        >
                          {photo.subtitle}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Card>
              </RevealOnScroll>
            ))}
          </Box>

          {/* SECTION 3: SYSTEM UI DEEP-DIVE (Existing Mockup Tours) */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="span"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1e56a0',
                mb: 1.5,
                display: 'block',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              PLATFORM INTERFACE SHOWCASE
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 850,
                fontSize: { xs: '1.8rem', sm: '2.4rem' },
                color: '#080604',
                fontFamily: "'Sora', sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Designed for educators. Built for performance.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 8, md: 14 },
            }}
          >
            {showcaseFeatures.map((feature, index) => (
              <ShowcaseItem key={index} feature={feature} index={index} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* LIGHTBOX MODAL DIALOG */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={handleCloseLightbox}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            position: 'relative',
          },
        }}
      >
        {selectedImage && (
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            {/* Close Button */}
            <IconButton
              onClick={handleCloseLightbox}
              sx={{
                position: 'absolute',
                top: 14,
                right: 14,
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                color: '#FFFFFF',
                zIndex: 3,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
              }}
            >
              <CloseRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>

            {/* Navigation Arrows */}
            {filteredPhotos.length > 1 && (
              <>
                <IconButton
                  onClick={handlePrevPhoto}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 12,
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#FFFFFF',
                    zIndex: 3,
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
                  }}
                >
                  <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  onClick={handleNextPhoto}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 12,
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#FFFFFF',
                    zIndex: 3,
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
                  }}
                >
                  <ArrowForwardIosRoundedIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </>
            )}

            {/* Large Image */}
            <Box
              component="img"
              src={selectedImage.image}
              alt={selectedImage.title}
              sx={{
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                backgroundColor: selectedImage.category === 'product' ? '#0b1120' : '#000000',
                p: selectedImage.category === 'product' ? { xs: 2, sm: 4 } : 0,
                filter: selectedImage.category === 'product' ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' : 'none',
                display: 'block',
              }}
            />

            {/* Caption Area */}
            <Box sx={{ p: 3, backgroundColor: '#0B0F19' }}>
              <Box sx={{ mb: 1 }}>
                <Chip
                  label={selectedImage.tag}
                  size="small"
                  sx={{
                    height: '22px',
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.7rem',
                    borderRadius: '5px',
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                }}
              >
                {selectedImage.title}
              </Typography>
              <Typography sx={{ color: '#94A3B8', fontSize: '0.88rem', mt: 0.5 }}>
                {selectedImage.subtitle}
              </Typography>
            </Box>
          </DialogContent>
        )}
      </Dialog>

      <Footer />
    </Box>
  );
}

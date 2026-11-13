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

import dashboardMockup from '../assets/dashboard desktop mock ups.webp';
import teacherMockup from '../assets/teachers tablet mock up.webp';
import parentMockup from '../assets/parent mobile mock up.webp';
import adminLaptopMockup from '../assets/admin billing laptop mmockup.webp';
import presentationSchoolDemo1 from '../assets/presentation-school-demo-1.webp';
import presentationSchoolDemo2 from '../assets/presentation-school-demo-2.webp';
import presentationSchoolDemo3 from '../assets/presentation-school-demo-3.webp';

// Categories matching the user's mockup
const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'product', label: 'Product' },
  { id: 'schools', label: 'Schools' },
];

// Curated high-resolution photo gallery for presentations, workshops, onboarding & community
const galleryPhotos = [
  {
    id: 101,
    category: 'presentations',
    categories: ['presentations', 'schools'],
    tag: 'PRESENTATION',
    title: 'Live System Demo — Transport Module',
    subtitle: 'Demonstrating Edukra real-time transport attendance and route tracking live on projection to school leadership.',
    image: presentationSchoolDemo1,
    aspectRatio: '16/9',
  },
  {
    id: 102,
    category: 'presentations',
    categories: ['presentations', 'schools'],
    tag: 'PRESENTATION',
    title: 'Interactive Feature Walkthrough',
    subtitle: 'Walking school management through automated student records, attendance registers, and administrator controls.',
    image: presentationSchoolDemo2,
    aspectRatio: '16/9',
  },
  {
    id: 103,
    category: 'presentations',
    categories: ['presentations', 'schools'],
    tag: 'CAMPUS VISIT',
    title: 'Morten Early Childhood Centre',
    subtitle: 'Urion Systems deployment and presentation team on campus following an executive system walkthrough.',
    image: presentationSchoolDemo3,
    aspectRatio: '3/4',
  },
  {
    id: 1,
    category: 'product',
    categories: ['product'],
    tag: 'PRODUCT',
    title: 'Executive School Command Center',
    subtitle: 'Comprehensive real-time analytics, student enrollment, and finance on desktop.',
    image: dashboardMockup,
    aspectRatio: '16/10',
  },
  {
    id: 14,
    category: 'product',
    categories: ['product'],
    tag: 'PRODUCT',
    title: 'School Billing & Invoicing Suite',
    subtitle: 'Traceable fee collection, billing summaries, and audit records on laptop.',
    image: adminLaptopMockup,
    aspectRatio: '16/10',
  },
  {
    id: 13,
    category: 'product',
    categories: ['product'],
    tag: 'PRODUCT',
    title: 'Teacher Scorebook & Attendance',
    subtitle: 'Intuitive touch-ready tablet interface for daily attendance and continuous grading.',
    image: teacherMockup,
    aspectRatio: '16/10',
  },
  {
    id: 4,
    category: 'product',
    categories: ['product'],
    tag: 'PRODUCT',
    title: 'Parent Mobile App Experience',
    subtitle: 'Instant grades, fee receipts, and school notifications on smartphone.',
    image: parentMockup,
    aspectRatio: '16/10',
  },
];

function getBentoGridPlacement(photo) {
  if (photo.id === 101) {
    return {
      gridColumn: { xs: 'auto', sm: 'auto', md: '1 / 8' },
      gridRow: { md: '1 / 2' },
    };
  }
  if (photo.id === 102) {
    return {
      gridColumn: { xs: 'auto', sm: 'auto', md: '1 / 8' },
      gridRow: { md: '2 / 3' },
    };
  }
  if (photo.id === 103) {
    return {
      gridColumn: { xs: 'auto', sm: 'span 2', md: '8 / 13' },
      gridRow: { md: '1 / 3' },
    };
  }
  return {
    gridColumn: { xs: 'auto', sm: 'auto', md: 'span 6' },
  };
}

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
    color: '#0284c7',
    alignment: 'right',
    image: teacherMockup,
    alt: 'Teacher grading and student scorebook view',
  },
  {
    title: 'Mobile-Ready Parent Portal',
    description:
      "Keep parents engaged with a responsive mobile experience, allowing them to track their child's progress, view timetables, and pay fees anywhere.",
    icon: <DevicesRoundedIcon fontSize="large" />,
    color: '#0071e3',
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
              fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
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
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
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
              loading="lazy"
              decoding="async"
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
    : galleryPhotos.filter(
        (item) =>
          item.category === activeCategory ||
          (Array.isArray(item.categories) && item.categories.includes(activeCategory))
      );

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
        backgroundColor: '#f7f6f2',
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
          backgroundColor: '#f7f6f2',
          backgroundImage: `
            radial-gradient(circle at 12% 16%, rgba(0, 113, 227, 0.08) 0%, rgba(219, 234, 254, 0.22) 35%, transparent 60%),
            radial-gradient(circle at 88% 12%, rgba(56, 189, 248, 0.14) 0%, rgba(219, 234, 254, 0.24) 34%, transparent 58%),
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
          <RevealOnScroll variant="init" immediate>
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
                  color: '#0071e3',
                  mb: 1.8,
                  display: 'block',
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
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
                  fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
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
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                }}
              >
                See our team in action conducting live presentations, teacher workshops, administrator onboarding, and classroom rollouts across Ghana.
              </Typography>
            </Box>
          </RevealOnScroll>

          {/* SECTION 1: FILTER TABS */}
          <RevealOnScroll variant="init" immediate>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1.2,
                mb: { xs: 4.5, md: 6 },
              }}
            >
              {filterCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? galleryPhotos.length
                    : galleryPhotos.filter(
                        (p) => p.category === cat.id || (p.categories && p.categories.includes(cat.id))
                      ).length;
                return (
                  <Button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    sx={{
                      borderRadius: '9999px',
                      px: { xs: 2.2, sm: 2.6 },
                      py: 0.85,
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 600,
                      textTransform: 'none',
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      backgroundColor: isActive ? '#0071e3' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#475569',
                      border: isActive ? '1px solid #0071e3' : '1px solid #e4e2dc',
                      boxShadow: isActive ? '0 6px 16px rgba(0, 113, 227, 0.24)' : '0 2px 6px rgba(15, 23, 42, 0.03)',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      '&:hover': {
                        backgroundColor: isActive ? '#005bb5' : '#f8fafc',
                        color: isActive ? '#FFFFFF' : '#141416',
                        borderColor: isActive ? '#005bb5' : '#cbd5e1',
                      },
                    }}
                  >
                    <span>{cat.label}</span>
                    <Box
                      component="span"
                      sx={{
                        px: 0.9,
                        py: 0.15,
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.22)' : '#f1f5f9',
                        color: isActive ? '#FFFFFF' : '#64748b',
                      }}
                    >
                      {count}
                    </Box>
                  </Button>
                );
              })}
            </Box>
          </RevealOnScroll>

          {/* SECTION 2: BALANCED EDITORIAL BENTO GALLERY */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(12, 1fr)' },
              gap: { xs: 2.5, md: 3 },
              mb: { xs: 12, md: 16 },
              alignItems: 'stretch',
            }}
          >
            {filteredPhotos.map((photo, idx) => {
              const isPortrait = photo.id === 103;
              const isProduct = photo.category === 'product';
              const placement = getBentoGridPlacement(photo);

              return (
                <RevealOnScroll
                  key={photo.id}
                  delay={(idx % 3) * 0.06}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    ...placement,
                  }}
                >
                  <Card
                    elevation={0}
                    onClick={() => handleOpenLightbox(photo)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #e4e2dc',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(20, 20, 22, 0.04)',
                      transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: '#cbd5e1',
                        boxShadow: '0 18px 38px rgba(15, 23, 42, 0.1)',
                        '& .photo-zoom-btn': {
                          opacity: 1,
                          transform: 'scale(1)',
                          backgroundColor: '#0071e3',
                          color: '#FFFFFF',
                        },
                        '& .photo-img': {
                          transform: isProduct ? 'scale(1.03)' : 'scale(1.04)',
                        },
                      },
                    }}
                  >
                    {/* Top Clean Media Viewport */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: isPortrait
                          ? { xs: '4/5', sm: '16/10', md: 'auto' }
                          : (photo.aspectRatio || '16/10'),
                        flex: isPortrait ? { md: '1 1 auto' } : '0 0 auto',
                        minHeight: isPortrait ? { md: 0 } : undefined,
                        overflow: 'hidden',
                        background: isProduct
                          ? 'linear-gradient(145deg, #f8fafc 0%, #eff6ff 100%)'
                          : '#0f172a',
                        borderBottom: '1px solid #f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: isProduct ? { xs: 2.5, sm: 3 } : 0,
                      }}
                    >
                      <Box
                        component="img"
                        className="photo-img"
                        src={photo.image}
                        alt={photo.title}
                        loading="lazy"
                        decoding="async"
                        sx={{
                          position: isPortrait ? { md: 'absolute' } : 'relative',
                          inset: isPortrait ? { md: 0 } : undefined,
                          width: isProduct ? 'auto' : '100%',
                          height: isProduct ? 'auto' : '100%',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: isProduct ? 'contain' : 'cover',
                          objectPosition: isPortrait ? 'center 22%' : 'center center',
                          display: 'block',
                          filter: isProduct
                            ? 'drop-shadow(0 12px 26px rgba(15, 23, 42, 0.14))'
                            : 'none',
                          transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      />

                      {/* Top-Left Category Pill */}
                      <Chip
                        label={photo.tag}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 14,
                          left: 14,
                          height: '24px',
                          backgroundColor: isProduct
                            ? 'rgba(219, 234, 254, 0.95)'
                            : 'rgba(15, 23, 42, 0.72)',
                          backdropFilter: 'blur(8px)',
                          color: isProduct ? '#1d4ed8' : '#FFFFFF',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 700,
                          fontSize: '0.68rem',
                          letterSpacing: '0.06em',
                          borderRadius: '8px',
                          border: isProduct
                            ? '1px solid rgba(59, 130, 246, 0.25)'
                            : '1px solid rgba(255, 255, 255, 0.18)',
                          zIndex: 2,
                        }}
                      />

                      {/* Top-Right Frosted Zoom Button */}
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
                          backdropFilter: 'blur(8px)',
                          color: '#0F172A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 10px rgba(15, 23, 42, 0.12)',
                          opacity: 0.9,
                          transform: 'scale(0.95)',
                          transition: 'all 0.22s ease',
                          zIndex: 2,
                        }}
                      >
                        <ZoomInRoundedIcon sx={{ fontSize: 18 }} />
                      </Box>
                    </Box>

                    {/* Clean Unobstructed Editorial Caption Footer */}
                    <Box
                      sx={{
                        p: { xs: 2.2, md: 2.6 },
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
                          fontWeight: 800,
                          fontSize: '1.08rem',
                          color: '#141416',
                          lineHeight: 1.25,
                          letterSpacing: '-0.015em',
                        }}
                      >
                        {photo.title}
                      </Typography>
                      {photo.subtitle && (
                        <Typography
                          sx={{
                            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                            fontSize: '0.86rem',
                            color: '#52525b',
                            lineHeight: 1.5,
                            mt: 0.6,
                          }}
                        >
                          {photo.subtitle}
                        </Typography>
                      )}
                    </Box>
                  </Card>
                </RevealOnScroll>
              );
            })}
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
                color: '#0071e3',
                mb: 1.5,
                display: 'block',
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
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
                fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
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
                  fontFamily: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
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

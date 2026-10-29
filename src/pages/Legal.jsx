import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Paper,
  Chip,
  Divider,
} from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ChildCareRoundedIcon from '@mui/icons-material/ChildCareRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import edukraIcon from '../assets/edukra-icon.png';

export default function Legal() {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    return hash.includes('terms') ? 'terms' : 'privacy';
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      const path = (window.location.pathname || '').toLowerCase();
      const isDeleteUrl = hash.includes('delete') || hash.includes('account-deletion') || path.includes('delete-account');

      if (hash.includes('terms') && !isDeleteUrl) {
        setActiveTab('terms');
      } else {
        setActiveTab('privacy');
      }

      // Smooth scroll to Edukra mobile privacy or delete account anchor if requested
      if (isDeleteUrl) {
        const scrollToEl = () => {
          const el = document.getElementById('delete-account');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        setTimeout(scrollToEl, 50);
        setTimeout(scrollToEl, 250);
      } else if (hash.includes('edukra') || hash.includes('mobile')) {
        const scrollToEl = () => {
          const el = document.getElementById('edukra-privacy');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        setTimeout(scrollToEl, 50);
        setTimeout(scrollToEl, 250);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const scrollToMobilePrivacy = () => {
    setActiveTab('privacy');
    window.location.hash = '#edukra-privacy';
    const scrollToEl = () => {
      const el = document.getElementById('edukra-privacy');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    setTimeout(scrollToEl, 50);
    setTimeout(scrollToEl, 200);
  };

  const scrollToDeleteAccount = () => {
    setActiveTab('privacy');
    window.location.hash = '#delete-account';
    const scrollToEl = () => {
      const el = document.getElementById('delete-account');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    setTimeout(scrollToEl, 50);
    setTimeout(scrollToEl, 200);
  };

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
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <NavigationBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 11, sm: 14, md: 18 },
          pb: { xs: 7, sm: 10, md: 14 },
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

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, px: { xs: 1.5, sm: 3, md: 4 } }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 3.5, sm: 5 } }}>
            {/* Brand Logo Icon */}
            <Box
              component="img"
              src={edukraIcon}
              alt="Edukra Brand Mark"
              sx={{
                width: { xs: 44, sm: 58 },
                height: { xs: 44, sm: 58 },
                objectFit: 'contain',
                mx: 'auto',
                mb: 1.8,
                filter: 'drop-shadow(0 4px 14px rgba(30, 86, 160, 0.22))',
              }}
            />

            {/* Badge Pill */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.8,
                px: { xs: 1.4, sm: 2 },
                py: 0.5,
                borderRadius: '9999px',
                bgcolor: 'rgba(30, 86, 160, 0.08)',
                border: '1px solid rgba(30, 86, 160, 0.16)',
                color: '#1E56A0',
                mb: 2,
                maxWidth: '100%',
              }}
            >
              <ShieldOutlinedIcon sx={{ fontSize: { xs: 15, sm: 16 }, flexShrink: 0 }} />
              <Typography sx={{ fontSize: { xs: '0.70rem', sm: '0.80rem' }, fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase', lineHeight: 1.3 }}>
                Institutional Trust &amp; Mobile App Compliance
              </Typography>
            </Box>

            {/* Co-Branding Badges (Edukra Web + Edukra Parents iOS & Android) */}
            <Stack
              direction="row"
              spacing={{ xs: 0.8, sm: 1.2 }}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 2.5 }}
            >
              <Chip
                icon={<AppleIcon sx={{ '&&': { color: '#0f172a', fontSize: { xs: 16, sm: 18 } } }} />}
                label="Apple App Store Compliant"
                size="small"
                sx={{
                  bgcolor: 'rgba(15, 23, 42, 0.05)',
                  fontWeight: 650,
                  fontSize: { xs: '0.72rem', sm: '0.78rem' },
                  color: '#0f172a',
                  border: '1px solid rgba(15, 23, 42, 0.12)',
                  py: { xs: 0.5, sm: 0.8 },
                  height: 'auto',
                  maxWidth: '100%',
                  '& .MuiChip-label': {
                    px: { xs: 1, sm: 1.5 },
                    py: { xs: 0.4, sm: 0.6 },
                    whiteSpace: 'normal',
                  },
                }}
              />
              <Chip
                icon={<AndroidIcon sx={{ '&&': { color: '#059669', fontSize: { xs: 16, sm: 18 } } }} />}
                label="Google Play Families Approved"
                size="small"
                sx={{
                  bgcolor: 'rgba(16, 185, 129, 0.08)',
                  fontWeight: 650,
                  fontSize: { xs: '0.72rem', sm: '0.78rem' },
                  color: '#065f46',
                  border: '1px solid rgba(16, 185, 129, 0.22)',
                  py: { xs: 0.5, sm: 0.8 },
                  height: 'auto',
                  maxWidth: '100%',
                  '& .MuiChip-label': {
                    px: { xs: 1, sm: 1.5 },
                    py: { xs: 0.4, sm: 0.6 },
                    whiteSpace: 'normal',
                  },
                }}
              />
              <Chip
                icon={<PhoneIphoneRoundedIcon sx={{ '&&': { color: '#1e56a0', fontSize: { xs: 15, sm: 17 } } }} />}
                label="Edukra Parents App (iOS & Android)"
                size="small"
                sx={{
                  bgcolor: 'rgba(30, 86, 160, 0.08)',
                  fontWeight: 700,
                  fontSize: { xs: '0.72rem', sm: '0.78rem' },
                  color: '#1e56a0',
                  border: '1px solid rgba(30, 86, 160, 0.22)',
                  py: { xs: 0.5, sm: 0.8 },
                  height: 'auto',
                  maxWidth: '100%',
                  '& .MuiChip-label': {
                    px: { xs: 1, sm: 1.5 },
                    py: { xs: 0.4, sm: 0.6 },
                    whiteSpace: 'normal',
                  },
                }}
              />
            </Stack>

            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 850,
                fontSize: { xs: '1.65rem', sm: '2.4rem', md: '3.2rem' },
                lineHeight: { xs: 1.2, sm: 1.15 },
                letterSpacing: '-0.025em',
                color: '#080604',
                maxWidth: 820,
                mx: 'auto',
                mb: 2,
                wordBreak: 'break-word',
              }}
            >
              Edukra Legal, Privacy &amp; Compliance.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                fontSize: { xs: '0.88rem', sm: '1.02rem' },
                lineHeight: { xs: 1.6, sm: 1.65 },
                maxWidth: 720,
                mx: 'auto',
                fontWeight: 450,
                mb: { xs: 2.5, sm: 3 },
                fontFamily: "'Inter', sans-serif",
                px: { xs: 0.5, sm: 0 },
              }}
            >
              Official legal agreements, privacy policies, and store disclosures governing the{' '}
              <strong style={{ color: '#0f172a' }}>Edukra</strong> platform and{' '}
              <strong style={{ color: '#1e56a0' }}>Edukra Parents</strong> mobile applications (iOS &amp; Android),
              maintained by Urion Systems Ltd in strict accordance with the Data Protection Act of Ghana (Act 843),
              Apple App Store Guidelines, and Google Play Policy.
            </Typography>

            {/* Direct Jumps to Mobile App Disclosures & Account Deletion */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.2}
              justifyContent="center"
              alignItems="stretch"
              sx={{ mb: { xs: 3, sm: 4 }, width: { xs: '100%', sm: 'auto' }, maxWidth: 540, mx: 'auto' }}
            >
              <Button
                fullWidth
                onClick={scrollToMobilePrivacy}
                endIcon={<ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />}
                sx={{
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { xs: '0.82rem', sm: '0.84rem' },
                  color: '#1e56a0',
                  bgcolor: 'rgba(30, 86, 160, 0.06)',
                  border: '1px solid rgba(30, 86, 160, 0.2)',
                  borderRadius: '9999px',
                  px: { xs: 1.5, sm: 2.2 },
                  py: { xs: 1, sm: 0.8 },
                  lineHeight: 1.3,
                  textAlign: 'center',
                  '&:hover': {
                    bgcolor: 'rgba(30, 86, 160, 0.12)',
                  },
                }}
              >
                Mobile Privacy &amp; Permissions ↓
              </Button>
              <Button
                fullWidth
                onClick={scrollToDeleteAccount}
                endIcon={<ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />}
                sx={{
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { xs: '0.82rem', sm: '0.84rem' },
                  color: '#b91c1c',
                  bgcolor: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '9999px',
                  px: { xs: 1.5, sm: 2.2 },
                  py: { xs: 1, sm: 0.8 },
                  lineHeight: 1.3,
                  textAlign: 'center',
                  '&:hover': {
                    bgcolor: 'rgba(239, 68, 68, 0.12)',
                  },
                }}
              >
                Delete Account Steps &amp; Retention ↓
              </Button>
            </Stack>

            {/* Tabs Switcher */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 0.6, sm: 1.2 },
                bgcolor: '#f1f5f9',
                p: 0.6,
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
                width: { xs: '100%', sm: 'fit-content' },
                maxWidth: 520,
                mx: 'auto',
                mt: 1,
                mb: 1,
              }}
            >
              <Button
                variant={activeTab === 'privacy' ? 'contained' : 'text'}
                onClick={() => {
                  setActiveTab('privacy');
                  window.location.hash = '#privacy';
                }}
                startIcon={<ShieldOutlinedIcon sx={{ fontSize: { xs: 17, sm: 19 } }} />}
                sx={{
                  flex: { xs: 1, sm: 'initial' },
                  minWidth: 0,
                  px: { xs: 1.2, sm: 3 },
                  py: { xs: 0.9, sm: 1.1 },
                  borderRadius: '9999px',
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: { xs: '0.82rem', sm: '0.92rem' },
                  whiteSpace: 'nowrap',
                  backgroundColor: activeTab === 'privacy' ? '#1e56a0' : 'transparent',
                  color: activeTab === 'privacy' ? '#ffffff' : '#475569',
                  boxShadow: activeTab === 'privacy' ? '0 4px 14px rgba(30, 86, 160, 0.22)' : 'none',
                  '&:hover': {
                    backgroundColor: activeTab === 'privacy' ? '#16427d' : 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>Privacy Policy</Box>
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Privacy Policy (Web &amp; Mobile)</Box>
              </Button>
              <Button
                variant={activeTab === 'terms' ? 'contained' : 'text'}
                onClick={() => {
                  setActiveTab('terms');
                  window.location.hash = '#terms';
                }}
                startIcon={<GavelRoundedIcon sx={{ fontSize: { xs: 17, sm: 19 } }} />}
                sx={{
                  flex: { xs: 1, sm: 'initial' },
                  minWidth: 0,
                  px: { xs: 1.2, sm: 3 },
                  py: { xs: 0.9, sm: 1.1 },
                  borderRadius: '9999px',
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: { xs: '0.82rem', sm: '0.92rem' },
                  whiteSpace: 'nowrap',
                  backgroundColor: activeTab === 'terms' ? '#1e56a0' : 'transparent',
                  color: activeTab === 'terms' ? '#ffffff' : '#475569',
                  boxShadow: activeTab === 'terms' ? '0 4px 14px rgba(30, 86, 160, 0.22)' : 'none',
                  '&:hover': {
                    backgroundColor: activeTab === 'terms' ? '#16427d' : 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              >
                Terms of Service
              </Button>
            </Box>
          </Box>

          {/* Content Card */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.25, sm: 4, md: 6 },
              borderRadius: { xs: '18px', sm: '24px' },
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              boxShadow: { xs: '0 4px 18px rgba(0, 0, 0, 0.04)', sm: '0 8px 30px rgba(0, 0, 0, 0.05)' },
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              '& a': {
                wordBreak: 'break-word',
                overflowWrap: 'anywhere',
              },
              '& code': {
                wordBreak: 'break-all',
                overflowWrap: 'anywhere',
                fontSize: '0.85em',
                backgroundColor: '#f1f5f9',
                padding: '2px 6px',
                borderRadius: '4px',
                fontFamily: 'monospace',
              },
              '& ul, & ol': {
                pl: { xs: 2.2, sm: 3 },
                pr: { xs: 0.5, sm: 0 },
                lineHeight: { xs: 1.65, sm: 1.75 },
                fontSize: { xs: '0.88rem', sm: '0.95rem' },
              },
              '& li': {
                mb: 1,
              },
            }}
          >
            {activeTab === 'privacy' ? (
              <Box sx={{ color: '#334155', lineHeight: { xs: 1.65, sm: 1.8 }, fontSize: { xs: '0.90rem', sm: '0.96rem' } }}>
                {/* Title & Meta Info */}
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.25rem', sm: '1.45rem', md: '1.6rem' }, lineHeight: 1.3 }}>
                  Edukra &amp; Edukra Parents Privacy Policy
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 3, fontSize: { xs: '0.75rem', sm: '0.82rem' }, lineHeight: 1.5 }}>
                  App Identifier: <strong>Edukra Parents (iOS &amp; Android)</strong> · Platform: <strong>Edukra Web</strong> · Publisher: <strong>Urion Systems Ltd</strong> · Last Updated: October 2026 · Effective Date: Immediate
                </Typography>

                {/* App Reviewer Callout Notice */}
                <Box
                  sx={{
                    p: { xs: 1.8, sm: 2.5 },
                    mb: 4,
                    borderRadius: { xs: '14px', sm: '16px' },
                    backgroundColor: 'rgba(30, 86, 160, 0.04)',
                    border: '1px solid rgba(30, 86, 160, 0.15)',
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <ShieldOutlinedIcon sx={{ color: '#1e56a0', mt: 0.3, fontSize: { xs: 20, sm: 22 }, flexShrink: 0 }} />
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.88rem', sm: '0.94rem' }, mb: 0.5, lineHeight: 1.35 }}>
                        Notice for Apple App Store &amp; Google Play App Review Teams
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '0.82rem', sm: '0.88rem' }, color: '#475569', lineHeight: 1.6 }}>
                        This document serves as the official, publicly accessible Privacy Policy and Account Deletion resource for both the <strong>Edukra</strong> web portal and the <strong>&quot;Edukra Parents&quot;</strong> native mobile applications on iOS and Android. Mobile device permissions, real-time location disclosures for pickup, camera access for student QR dismissal, and child privacy protections are detailed in{' '}
                        <a href="#edukra-privacy" onClick={(e) => { e.preventDefault(); scrollToMobilePrivacy(); }} style={{ color: '#1e56a0', fontWeight: 700, textDecoration: 'underline' }}>
                          Section 4: Edukra Parents Mobile App Disclosures
                        </a>, and the exact in-app account deletion procedure, 14-day cancellation window, and data retention disclosures are detailed in{' '}
                        <a href="#delete-account" onClick={(e) => { e.preventDefault(); scrollToDeleteAccount(); }} style={{ color: '#b91c1c', fontWeight: 700, textDecoration: 'underline' }}>
                          Section 6: Account Deletion &amp; Data Retention
                        </a>.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                {/* Section 1 */}
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  1. Identity, Scope &amp; Applicability
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  This Privacy Policy is issued by <strong>Urion Systems Ltd</strong> (&quot;Urion&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company duly incorporated under the laws of the Republic of Ghana. It governs the collection, processing, and protection of information across:
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 2 }}>
                  <li>The <strong>Edukra</strong> cloud-based School Management System (accessible via web browsers and institutional subdomains).</li>
                  <li>The <strong>&quot;Edukra Parents&quot;</strong> mobile applications distributed through the Apple App Store for iOS and Google Play Store for Android.</li>
                  <li>Integrated communication interfaces including automated SMS dispatches, Mobile Money payment callbacks, and WhatsApp parent notification relays.</li>
                </Box>
                <Typography sx={{ mb: 3 }}>
                  By accessing Edukra or downloading and signing into the Edukra Parents mobile app, you acknowledge the terms of this Privacy Policy and agree to our processing of your personal information as set forth herein.
                </Typography>

                {/* Section 2 */}
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  2. Institutional Data Ownership &amp; Role Definition
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Under the <strong>Data Protection Act of Ghana, 2012 (Act 843)</strong>:
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 2 }}>
                  <li><strong>The School is the Data Controller:</strong> The subscriber educational institution retains 100% legal ownership of all pupil records, academic marks, attendance registers, parent contacts, teacher files, and institutional accounting data.</li>
                  <li><strong>Urion Systems Ltd is the Data Processor:</strong> We host, compute, and transmit institutional data solely on behalf of, and in accordance with the documented instructions of, the subscriber school. We do not sell, rent, monetize, or repurpose school records for commercial gain or advertising.</li>
                </Box>

                {/* Section 3 */}
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  3. General Information We Collect &amp; Purpose of Processing
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  We collect only the minimum data necessary to provide reliable school management and communication services:
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 3 }}>
                  <li><strong>Parent &amp; Guardian Information:</strong> Full name, telephone number (for SMS alerts and MoMo billing), email address, relationship to student, and secure authentication credentials.</li>
                  <li><strong>Student Academic &amp; Administrative Records:</strong> Full name, student identification number, class grade, enrollment year, academic term assessment scores, attendance logs, and school fee invoices (provisioned and authorized by the institution).</li>
                  <li><strong>Financial &amp; Fee Payment Information:</strong> Digital invoice numbers, payment status, and telecom transaction reference IDs (MTN MoMo, Telecel Cash, AT Money). Note: Urion never stores sensitive debit card CVVs or bank PINs; all payments are processed through Bank of Ghana-licensed fintech gateways.</li>
                  <li><strong>Technical Diagnostics:</strong> IP addresses, device operating system version, browser user agent, and crash logs used strictly to diagnose technical faults and maintain 99.9% platform availability.</li>
                </Box>

                {/* Section 4: Mobile App Specific Disclosures (ANCHOR FOR APP STORES) */}
                <Box
                  component="section"
                  id="edukra-privacy"
                  sx={{
                    scrollMarginTop: { xs: '80px', sm: '110px' },
                    my: { xs: 3, sm: 4 },
                    p: { xs: 2, sm: 3.5 },
                    borderRadius: { xs: '16px', sm: '20px' },
                    border: '2px solid #1e56a0',
                    backgroundColor: '#f8fafc',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Anchor helper for alternative links */}
                  <div id="edukra-parents" style={{ position: 'absolute', top: '-110px' }} />

                  {/* Header of Section 4 */}
                  <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 2 }}>
                    <PhoneIphoneRoundedIcon sx={{ color: '#1e56a0', fontSize: { xs: 24, sm: 28 }, mt: 0.3, flexShrink: 0 }} />
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          color: '#0f172a',
                          fontFamily: "'Sora', sans-serif",
                          fontSize: { xs: '1.15rem', sm: '1.35rem' },
                          lineHeight: 1.3,
                          wordBreak: 'break-word',
                        }}
                      >
                        4. &quot;Edukra Parents&quot; Mobile App Disclosures
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '0.78rem', sm: '0.82rem' }, color: '#64748b', fontWeight: 600, mt: 0.5, lineHeight: 1.4 }}>
                        Dedicated Compliance for Apple App Store (Guideline 5.1.1) &amp; Google Play Policies
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography sx={{ mb: 2.5, color: '#334155' }}>
                    This section details the specific hardware permissions and data collection mechanisms active within the <strong>Edukra Parents</strong> native iOS and Android applications.
                  </Typography>

                  {/* Subsection 4.1: Location Data */}
                  <Box sx={{ mb: { xs: 2.5, sm: 3.5 }, p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #e2e8f0' }}>
                    <Stack direction="row" spacing={1.2} alignItems="flex-start" sx={{ mb: 1.5 }}>
                      <LocationOnOutlinedIcon sx={{ color: '#e11d48', fontSize: 22, mt: 0.3, flexShrink: 0 }} />
                      <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.98rem', sm: '1.05rem' }, fontFamily: "'Sora', sans-serif", lineHeight: 1.35 }}>
                        4.1 Location Data &amp; The &quot;On My Way&quot; School Pickup Feature
                      </Typography>
                    </Stack>
                    <Typography sx={{ mb: 1.5 }}>
                      The <strong>Edukra Parents</strong> app collects real-time location data <strong>solely and exclusively</strong> to power the student dismissal <em>&quot;On My Way&quot;</em> feature.
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 1.5, color: '#475569' }}>
                      <li><strong>Single Legitimate Purpose:</strong> Location data is used only to calculate estimated times of arrival (ETAs) for school security and dispatch personnel. This ensures that the child is safely escorted to the departure lounge precisely when the parent arrives at the school gate, eliminating student wait times and traffic gridlock.</li>
                      <li><strong>Active Trip Only:</strong> Location tracking is initiated <em>only</em> when the parent explicitly taps the &quot;I&apos;m On My Way&quot; / &quot;Start Pickup Trip&quot; button. Location tracking is never running continuously in the background outside of an active pickup journey.</li>
                      <li><strong>Ephemeral Processing (Zero Permanent Storage):</strong> Geographic coordinates (latitude/longitude) are processed in real time purely to calculate distance and ETA. Coordinates are <strong>never permanently recorded</strong> in our persistent databases, are never logged as historical trip routes, and are immediately discarded from memory once the trip completes or is canceled.</li>
                      <li><strong>No Third-Party Sharing &amp; No Advertising:</strong> Location data is never sold, shared with third parties, brokers, or ad exchanges, and is never used for commercial advertising, audience measurement, or behavioral profiling.</li>
                      <li><strong>Parental Consent &amp; Revocation:</strong> Location access is optional. Parents are prompted with an explicit OS dialog and can revoke or restrict location permissions at any time via device settings. When disabled, parents may still notify the school manually upon arrival.</li>
                    </Box>
                  </Box>

                  {/* Subsection 4.2: Camera & Storage Permissions */}
                  <Box sx={{ mb: { xs: 2.5, sm: 3.5 }, p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #e2e8f0' }}>
                    <Stack direction="row" spacing={1.2} alignItems="flex-start" sx={{ mb: 1.5 }}>
                      <CameraAltOutlinedIcon sx={{ color: '#2563eb', fontSize: 22, mt: 0.3, flexShrink: 0 }} />
                      <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.98rem', sm: '1.05rem' }, fontFamily: "'Sora', sans-serif", lineHeight: 1.35 }}>
                        4.2 Device Permissions (Camera &amp; Photo Library)
                      </Typography>
                    </Stack>
                    <Typography sx={{ mb: 1.5 }}>
                      Edukra Parents requests limited hardware permissions strictly when necessary to deliver safety and account personalization:
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 1.5, color: '#475569' }}>
                      <li>
                        <strong>Camera Access (<code>NSCameraUsageDescription</code> / <code>android.permission.CAMERA</code>):</strong> Requested exclusively to allow parents and guardians to display and scan dynamic, encrypted QR codes at the school checkpoint to authenticate identity during afternoon student dismissal. The camera is active only while the scanner interface is actively open. No video feeds or photos are captured or uploaded during QR scanning.
                      </li>
                      <li>
                        <strong>Photo Library &amp; Storage Access (<code>NSPhotoLibraryUsageDescription</code> / <code>READ_MEDIA_IMAGES</code>):</strong> Requested on an opt-in basis solely if the parent chooses to upload a custom profile avatar or a verified identification photo of an authorized pickup designee. Edukra Parents never inspects, accesses, or indexes photos or files outside the specific image chosen by the user.
                      </li>
                    </Box>
                  </Box>

                  {/* Subsection 4.3: Child Privacy & Google Play Families */}
                  <Box sx={{ p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #e2e8f0' }}>
                    <Stack direction="row" spacing={1.2} alignItems="flex-start" sx={{ mb: 1.5 }}>
                      <ChildCareRoundedIcon sx={{ color: '#059669', fontSize: 22, mt: 0.3, flexShrink: 0 }} />
                      <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.98rem', sm: '1.05rem' }, fontFamily: "'Sora', sans-serif", lineHeight: 1.35 }}>
                        4.3 Child Privacy, COPPA &amp; Google Play Families Policy Compliance
                      </Typography>
                    </Stack>
                    <Typography sx={{ mb: 1.5 }}>
                      Urion Systems Ltd maintains strict safeguards regarding student and minor privacy:
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 1.5, color: '#475569' }}>
                      <li><strong>Adult-Only Target Audience:</strong> The Edukra Parents mobile app is designed and intended strictly for use by adults (parents, legal guardians, and authorized school custodians aged 18 and older). It is not directed at or designed for children under 13.</li>
                      <li><strong>No Direct Data Collection from Children:</strong> The app does not permit children to create accounts, nor does it collect personal data directly from children.</li>
                      <li><strong>Institutional Authority for Student Records:</strong> Student records displayed in the app (such as attendance, grades, and fee notices) are uploaded and managed exclusively by the child&apos;s educational institution in its capacity as Data Controller under Act 843.</li>
                      <li><strong>Zero Advertising SDKs:</strong> Edukra Parents contains zero third-party advertising SDKs, zero social media tracking pixels, and does not conduct behavioral profiling of minors.</li>
                    </Box>
                  </Box>
                </Box>

                {/* Section 5: Security & Infrastructure */}
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  5. Data Security, Encryption &amp; Cloud Infrastructure
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  We deploy multi-layered institutional security controls to protect academic and personal information:
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 2 }}>
                  <li><strong>Encryption in Transit:</strong> All communication between the Edukra Parents mobile application, web portals, and backend servers is secured via TLS 1.3 protocol with mandatory HTTPS.</li>
                  <li><strong>Encryption at Rest:</strong> Database records, parent contact details, and backups are encrypted at rest using AES-256 standard encryption.</li>
                  <li><strong>Authentication &amp; Tokenization:</strong> Passwords are cryptographic hashes (bcrypt/Argon2). Mobile session tokens are rotated regularly and can be revoked instantly upon sign-out.</li>
                  <li><strong>Zero Data Brokerage:</strong> We never sell personal information to brokers, advertisers, or third-party marketing entities.</li>
                </Box>

                {/* Section 6: Account Deletion (Apple & Google Play Mandate) */}
                <Box
                  component="section"
                  id="delete-account"
                  sx={{
                    scrollMarginTop: { xs: '80px', sm: '110px' },
                    my: { xs: 3, sm: 4 },
                    p: { xs: 2, sm: 3.5 },
                    borderRadius: { xs: '16px', sm: '20px' },
                    border: '2px solid #b91c1c',
                    backgroundColor: '#fff8f8',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Anchor aliases for Google Play Console and direct URL queries */}
                  <div id="account-deletion" style={{ position: 'absolute', top: '-110px' }} />

                  {/* Section 6 Header */}
                  <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 2 }}>
                    <DeleteOutlineRoundedIcon sx={{ color: '#b91c1c', fontSize: { xs: 24, sm: 28 }, mt: 0.3, flexShrink: 0 }} />
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          color: '#0f172a',
                          fontFamily: "'Sora', sans-serif",
                          fontSize: { xs: '1.15rem', sm: '1.35rem' },
                          lineHeight: 1.3,
                          wordBreak: 'break-word',
                        }}
                      >
                        6. How to Delete Your Parent Account &amp; Data Retention Policy
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '0.78rem', sm: '0.82rem' }, color: '#991b1b', fontWeight: 600, mt: 0.5, lineHeight: 1.4 }}>
                        App Name on Store Listings: <strong>Edukra Parents</strong> · Compliant with Apple Guideline 5.1.1(v) &amp; Google Play Data Safety
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography sx={{ mb: 2.5, color: '#334155' }}>
                    Parents and guardians can delete their parent account in the <strong>Edukra Parents</strong> mobile app (iOS and Android) or through their subscribing school&apos;s web Parent Portal at any time.
                  </Typography>

                  {/* Step-by-Step Deletion Process (Exact Live App UI) */}
                  <Box sx={{ mb: { xs: 2, sm: 3 }, p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #fee2e2' }}>
                    <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.94rem', sm: '1rem' }, mb: 1.5, fontFamily: "'Sora', sans-serif" }}>
                      How to Delete Your Account (Exact In-App Steps):
                    </Typography>
                    <Box component="ol" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 1.5, color: '#334155', display: 'grid', gap: 1 }}>
                      <li>
                        <strong>Sign in:</strong> Sign in to the <strong>Edukra Parents</strong> app or your school&apos;s Parent Portal with your registered e-mail address and password.
                      </li>
                      <li>
                        <strong>Open Account Settings:</strong> Tap your name or avatar at the top right of the screen and choose <strong>Account settings</strong>.
                      </li>
                      <li>
                        <strong>Locate Deletion:</strong> On the <strong>Profile</strong> tab, scroll to the end of the dialog and choose <strong>Delete my account</strong>.
                      </li>
                      <li>
                        <strong>Confirm:</strong> Type <code style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '2px 7px', borderRadius: '4px', fontWeight: 700, wordBreak: 'break-all' }}>DELETE</code> into the confirmation field and tap confirm.
                      </li>
                    </Box>
                  </Box>

                  {/* 14-Day Cancellation Grace Period */}
                  <Box sx={{ mb: { xs: 2, sm: 3 }, p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #fee2e2' }}>
                    <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.94rem', sm: '1rem' }, mb: 1, fontFamily: "'Sora', sans-serif" }}>
                      14-Day Grace Period &amp; How to Cancel Deletion:
                    </Typography>
                    <Typography sx={{ color: '#475569', mb: 1 }}>
                      Your account is scheduled for deletion <strong>14 days after you request it</strong>. Until then, you can sign in to cancel:
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, color: '#475569', display: 'grid', gap: 0.8 }}>
                      <li>
                        During the 14-day window, signing in to the app displays the message: <em>&quot;Account deletion scheduled&quot;</em> alongside the exact scheduled deletion date.
                      </li>
                      <li>
                        Tap the <strong>Cancel deletion</strong> button on that screen to immediately stop the deletion process and restore full parent access.
                      </li>
                    </Box>
                  </Box>

                  {/* What is Deleted */}
                  <Box sx={{ mb: { xs: 2, sm: 3 }, p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #fee2e2' }}>
                    <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.94rem', sm: '1rem' }, mb: 1, fontFamily: "'Sora', sans-serif" }}>
                      What Data is Deleted:
                    </Typography>
                    <Typography sx={{ color: '#475569', mb: 1 }}>
                      When the 14 days elapse, the system permanently removes your authentication login and your personal details held for that school:
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, color: '#475569', display: 'grid', gap: 0.8 }}>
                      <li>Your login authentication account and credentials (the Supabase login is permanently deleted/unlinked from the school).</li>
                      <li>Your personal details: your e-mail address and home residential address.</li>
                      <li>Your profile photo and uploaded government identity verification documents (<code>guardian_documents</code>).</li>
                      <li>The details, photos, and authorization tokens of the secondary persons you approved to pick up your children.</li>
                      <li>Stored payment card and Mobile Money authorization tokens (the external payment provider retains its own transaction logs under Bank of Ghana regulatory policy).</li>
                    </Box>
                  </Box>

                  {/* What the School Keeps & Retention Period */}
                  <Box sx={{ mb: { xs: 2, sm: 3 }, p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #fee2e2' }}>
                    <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.94rem', sm: '1rem' }, mb: 1, fontFamily: "'Sora', sans-serif" }}>
                      What the School Keeps &amp; Retention Duration (Google Play Data Safety Disclosure):
                    </Typography>
                    <Typography sx={{ color: '#475569', mb: 1 }}>
                      Under the Data Protection Act of Ghana (Act 843) and institutional governance, the subscribing educational institution acts as the legal Data Controller and retains:
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, color: '#475569', display: 'grid', gap: 0.8 }}>
                      <li>
                        <strong>Children&apos;s School Records:</strong> The children&apos;s academic assessments, examination marks, term reports, and class enrollment archives.
                      </li>
                      <li>
                        <strong>Financial Accounting Records:</strong> Tuition fee invoices, transaction numbers, and official payment receipts.
                      </li>
                      <li>
                        <strong>Campus Attendance &amp; Pickup Logs:</strong> Historical attendance registers and student pickup timestamps, retained without your e-mail address or residential address.
                      </li>
                      <li>
                        <strong>Contact Record Continuity:</strong> Your legal name, relationship to the child (e.g. Mother, Father, Guardian), and telephone number remain on your children&apos;s active records as the school&apos;s institutional contact record.
                      </li>
                      <li>
                        <strong>Retention Period:</strong> These records are preserved for as long as the child remains enrolled at the institution, plus statutory academic archiving periods required by the Ghana Education Service (GES) and statutory financial limitation periods under Ghana tax law.
                      </li>
                    </Box>
                  </Box>

                  {/* Multi-School and Staff Roles */}
                  <Box sx={{ mb: { xs: 2, sm: 3 }, p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #fee2e2' }}>
                    <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.94rem', sm: '1rem' }, mb: 1, fontFamily: "'Sora', sans-serif" }}>
                      Multi-School Accounts &amp; Staff-Parent Roles:
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, color: '#475569', display: 'grid', gap: 0.8 }}>
                      <li>
                        <strong>School-Specific Deletion:</strong> The deletion applies specifically to the school where you submit the request. If you use the same e-mail address for children attending a different school, sign in to that school&apos;s portal to delete that profile separately.
                      </li>
                      <li>
                        <strong>Staff Members Who Are Also Parents:</strong> If you are employed by the school as a teacher, administrator, or staff member, deleting your parent profile removes your guardian role while preserving your login credentials for your professional employee duties.
                      </li>
                    </Box>
                  </Box>

                  {/* Fallback Route: Can't Sign In? */}
                  <Box sx={{ p: { xs: 1.8, sm: 2.5 }, bgcolor: '#ffffff', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #fee2e2' }}>
                    <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: { xs: '0.94rem', sm: '1rem' }, mb: 1, fontFamily: "'Sora', sans-serif" }}>
                      Can&apos;t Sign In? Fallback Request Options:
                    </Typography>
                    <Typography sx={{ color: '#475569', mb: 1 }}>
                      If you cannot access your account to initiate self-service deletion:
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, color: '#475569', display: 'grid', gap: 0.8 }}>
                      <li>
                        <strong>Password Reset:</strong> Tap &quot;Forgot password&quot; on the Edukra Parents sign-in screen to recover your login.
                      </li>
                      <li>
                        <strong>School Administration Office:</strong> Contact your school&apos;s administration office directly to request that your guardian account be queued for deletion.
                      </li>
                      <li>
                        <strong>Support Email Fallback:</strong> Submit a manual request by emailing Urion Systems at <a href="mailto:admin@urionsystems.com" style={{ color: '#1e56a0', fontWeight: 600 }}>admin@urionsystems.com</a> with the subject line <em>&quot;Account Deletion Request — Edukra Parents&quot;</em>. Requests sent via email are verified and fulfilled within 30 calendar days.
                      </li>
                    </Box>
                  </Box>
                </Box>

                {/* Section 7: Third-Party Service Providers */}
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  7. Third-Party Service Providers
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  We engage vetted third-party vendors strictly to deliver operational infrastructure:
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 2 }}>
                  <li><strong>Cloud Hosting &amp; CDN:</strong> Enterprise cloud data centers providing high availability, DDoS mitigation, and firewall protection.</li>
                  <li><strong>Telecommunication &amp; SMS Gateways:</strong> Licensed Ghanaian telecom aggregators used strictly to route urgent school notices, attendance alerts, and OTP verification codes.</li>
                  <li><strong>Fintech Payment Processors:</strong> Licensed payment service providers regulated by the Bank of Ghana for automated Mobile Money reconciliation.</li>
                </Box>

                {/* Section 8: Contact */}
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  8. Contact the Data Protection Officer
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  If you have questions, regulatory inquiries, or complaints regarding this Privacy Policy or our mobile app data practices, please contact our Data Protection Officer:
                </Typography>
                <Box sx={{ p: { xs: 1.8, sm: 2.5 }, bgcolor: '#f8fafc', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #e2e8f0', lineHeight: 1.8, fontSize: { xs: '0.88rem', sm: '0.94rem' } }}>
                  <strong>Organization:</strong> Urion Systems Ltd (Operating Edukra &amp; Edukra Parents)
                  <br />
                  <strong>Attn:</strong> Data Protection &amp; Compliance Officer
                  <br />
                  <strong>Email:</strong> <a href="mailto:admin@urionsystems.com" style={{ color: '#1e56a0', textDecoration: 'none' }}>admin@urionsystems.com</a>
                  <br />
                  <strong>Direct Inquiries:</strong> <a href="tel:+233599844836" style={{ color: '#1e56a0', textDecoration: 'none' }}>+233 599 844 836</a>
                  <br />
                  <strong>Physical Address:</strong> Accra, Greater Accra Region, Republic of Ghana
                </Box>
              </Box>
            ) : (
              /* Terms of Service Tab */
              <Box sx={{ color: '#334155', lineHeight: { xs: 1.65, sm: 1.8 }, fontSize: { xs: '0.90rem', sm: '0.96rem' } }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.25rem', sm: '1.45rem', md: '1.6rem' }, lineHeight: 1.3 }}>
                  Edukra Platform &amp; Mobile Terms of Service
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 3, fontSize: { xs: '0.75rem', sm: '0.82rem' }, lineHeight: 1.5 }}>
                  Covers: <strong>Edukra Web Platform</strong> &amp; <strong>Edukra Parents Mobile App (iOS &amp; Android)</strong> · Publisher: <strong>Urion Systems Ltd</strong> · Last Updated: October 2026
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  1. Agreement to Terms
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  By accessing or utilizing the <strong>Edukra</strong> school management system, or downloading and installing the <strong>Edukra Parents</strong> mobile application from the Apple App Store or Google Play Store, you and your educational institution agree to be legally bound by these Terms of Service and all applicable laws of the Republic of Ghana.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  2. Mobile App End-User License &amp; Acceptable Use
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Urion Systems Ltd grants registered parents and guardians a limited, personal, revocable, non-exclusive, non-transferable license to use the <strong>Edukra Parents</strong> app solely for legitimate school-related oversight, academic tracking, fee settlement, and student dismissal management:
                </Typography>
                <Box component="ul" sx={{ pl: { xs: 2.2, sm: 3 }, mb: 2 }}>
                  <li><strong>Account Security:</strong> You are responsible for safeguarding your login credentials and dynamic QR dismissal codes. You agree not to distribute or share student QR credentials with unauthorized parties.</li>
                  <li><strong>Authorized Guardian Verification:</strong> Schools reserve the right to verify the identity of any guardian presenting an Edukra Parents QR token before authorizing student departure.</li>
                  <li><strong>Prohibited Conduct:</strong> You may not reverse-engineer, decompile, attempt to extract source code from, or launch automated scrapers against the Edukra web portal or mobile applications.</li>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  3. Institutional Service Provision &amp; Free Pilot Period
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Urion Systems Ltd delivers cloud access to school administrators, educators, pupils, and parents. Educational institutions subscribing to complimentary trial periods receive complete platform functionality, administrative onboarding, and historical data migration assistance with zero initial financial obligation.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  4. Term-Based Invoicing &amp; Fair Billing
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Edukra institutional subscriptions align directly with the Ghana academic term structure (3 terms per academic year). Licensing is calculated on active student enrollment, ensuring schools are never billed recurring monthly software fees during holiday intercessions.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  5. Data Portability, Export &amp; Termination
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Should an educational institution choose to discontinue its subscription, Urion Systems Ltd guarantees full data export capabilities. All pupil registers, grade archives, examination scores, and financial accounting reports will be provided in standardized formats (CSV, Excel, PDF) within 14 business days, free of proprietary vendor lock-in.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  6. App Store Terms &amp; Platform Independence
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  You acknowledge that these Terms are concluded solely between you and Urion Systems Ltd, and not with Apple Inc. or Google LLC. Apple and Google are not responsible for the Edukra Parents app, its content, or maintenance. However, Apple and Google are third-party beneficiaries of these Terms and have the right to enforce these terms against you upon your acceptance.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: { xs: 3, sm: 4 }, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: { xs: '1.05rem', sm: '1.15rem' }, lineHeight: 1.35 }}>
                  7. Inquiries &amp; Institutional Support
                </Typography>
                <Box sx={{ p: { xs: 1.8, sm: 2.5 }, bgcolor: '#f8fafc', borderRadius: { xs: '12px', sm: '14px' }, border: '1px solid #e2e8f0', lineHeight: 1.8, fontSize: { xs: '0.88rem', sm: '0.94rem' } }}>
                  For billing inquiries, Service Level Agreements (SLAs), or partnership terms, contact:
                  <br />
                  <strong>Publisher:</strong> Urion Systems Ltd (Edukra)
                  <br />
                  <strong>Support Email:</strong> <a href="mailto:admin@urionsystems.com" style={{ color: '#1e56a0', textDecoration: 'none' }}>admin@urionsystems.com</a>
                  <br />
                  <strong>Direct / WhatsApp:</strong> <a href="tel:+233599844836" style={{ color: '#1e56a0', textDecoration: 'none' }}>+233 599 844 836</a>
                  <br />
                  <strong>Location:</strong> Accra, Greater Accra Region, Ghana
                </Box>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

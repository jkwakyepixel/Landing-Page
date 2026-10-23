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
import RevealOnScroll from '../components/RevealOnScroll';

export default function Legal() {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    return hash.includes('terms') ? 'terms' : 'privacy';
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('terms')) {
        setActiveTab('terms');
      } else {
        setActiveTab('privacy');
      }

      // Smooth scroll to Edukra mobile privacy anchor if requested by App Store / Google Play review link
      if (hash.includes('edukra') || hash.includes('mobile')) {
        setTimeout(() => {
          const el = document.getElementById('edukra-privacy');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      } else if (!hash.includes('terms') && !hash.includes('privacy')) {
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
    setTimeout(() => {
      const el = document.getElementById('edukra-privacy');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
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

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <RevealOnScroll variant="init">
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              {/* Badge Pill */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.6,
                  borderRadius: '9999px',
                  bgcolor: 'rgba(30, 86, 160, 0.08)',
                  border: '1px solid rgba(30, 86, 160, 0.16)',
                  color: '#1E56A0',
                  mb: 2,
                }}
              >
                <ShieldOutlinedIcon sx={{ fontSize: 16 }} />
                <Typography sx={{ fontSize: '0.80rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Institutional Trust & Mobile App Compliance
                </Typography>
              </Box>

              {/* Co-Branding Badges (Edukra Web + Edukra Parents iOS & Android) */}
              <Stack
                direction="row"
                spacing={1.2}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                useFlexGap
                sx={{ mb: 2.5 }}
              >
                <Chip
                  icon={<AppleIcon sx={{ '&&': { color: '#0f172a', fontSize: 18 } }} />}
                  label="Apple App Store Compliant"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(15, 23, 42, 0.05)',
                    fontWeight: 650,
                    fontSize: '0.78rem',
                    color: '#0f172a',
                    border: '1px solid rgba(15, 23, 42, 0.12)',
                    py: 1.8,
                  }}
                />
                <Chip
                  icon={<AndroidIcon sx={{ '&&': { color: '#059669', fontSize: 18 } }} />}
                  label="Google Play Families Approved"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(16, 185, 129, 0.08)',
                    fontWeight: 650,
                    fontSize: '0.78rem',
                    color: '#065f46',
                    border: '1px solid rgba(16, 185, 129, 0.22)',
                    py: 1.8,
                  }}
                />
                <Chip
                  icon={<PhoneIphoneRoundedIcon sx={{ '&&': { color: '#1e56a0', fontSize: 17 } }} />}
                  label="Edukra Parents App (iOS & Android)"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(30, 86, 160, 0.08)',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    color: '#1e56a0',
                    border: '1px solid rgba(30, 86, 160, 0.22)',
                    py: 1.8,
                  }}
                />
              </Stack>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 850,
                  fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.4rem' },
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: '#080604',
                  maxWidth: 820,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                Edukra Legal, Privacy & Compliance.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#64748b',
                  fontSize: { xs: '1rem', sm: '1.08rem' },
                  lineHeight: 1.6,
                  maxWidth: 720,
                  mx: 'auto',
                  fontWeight: 450,
                  mb: 3,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Official legal agreements, privacy policies, and store disclosures governing the{' '}
                <strong style={{ color: '#0f172a' }}>Edukra</strong> platform and{' '}
                <strong style={{ color: '#1e56a0' }}>Edukra Parents</strong> mobile applications (iOS & Android),
                maintained by Urion Systems Ltd in strict accordance with the Data Protection Act of Ghana (Act 843),
                Apple App Store Guidelines, and Google Play Policy.
              </Typography>

              {/* Direct Jump to Mobile App Privacy */}
              <Box sx={{ mb: 4 }}>
                <Button
                  onClick={scrollToMobilePrivacy}
                  endIcon={<ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    color: '#1e56a0',
                    bgcolor: 'rgba(30, 86, 160, 0.06)',
                    border: '1px solid rgba(30, 86, 160, 0.2)',
                    borderRadius: '9999px',
                    px: 2.4,
                    py: 0.8,
                    '&:hover': {
                      bgcolor: 'rgba(30, 86, 160, 0.12)',
                    },
                  }}
                >
                  Direct Link: Edukra Parents Mobile App Privacy Policy & Disclosures
                </Button>
              </Box>

              {/* Tabs */}
              <Stack
                direction="row"
                spacing={1.5}
                justifyContent="center"
                sx={{ mt: 1, mb: 1 }}
              >
                <Button
                  variant={activeTab === 'privacy' ? 'contained' : 'outlined'}
                  onClick={() => {
                    setActiveTab('privacy');
                    window.location.hash = '#privacy';
                  }}
                  startIcon={<ShieldOutlinedIcon />}
                  sx={{
                    px: 3.2,
                    py: 1.1,
                    borderRadius: '9999px',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '0.92rem',
                    backgroundColor: activeTab === 'privacy' ? '#1e56a0' : '#ffffff',
                    borderColor: activeTab === 'privacy' ? '#1e56a0' : '#cbd5e1',
                    color: activeTab === 'privacy' ? '#ffffff' : '#475569',
                    boxShadow: activeTab === 'privacy' ? '0 4px 14px rgba(30, 86, 160, 0.25)' : 'none',
                    '&:hover': {
                      backgroundColor: activeTab === 'privacy' ? '#16427d' : '#f8fafc',
                    },
                  }}
                >
                  Privacy Policy (Web & Mobile)
                </Button>
                <Button
                  variant={activeTab === 'terms' ? 'contained' : 'outlined'}
                  onClick={() => {
                    setActiveTab('terms');
                    window.location.hash = '#terms';
                  }}
                  startIcon={<GavelRoundedIcon />}
                  sx={{
                    px: 3.2,
                    py: 1.1,
                    borderRadius: '9999px',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '0.92rem',
                    backgroundColor: activeTab === 'terms' ? '#1e56a0' : '#ffffff',
                    borderColor: activeTab === 'terms' ? '#1e56a0' : '#cbd5e1',
                    color: activeTab === 'terms' ? '#ffffff' : '#475569',
                    boxShadow: activeTab === 'terms' ? '0 4px 14px rgba(30, 86, 160, 0.25)' : 'none',
                    '&:hover': {
                      backgroundColor: activeTab === 'terms' ? '#16427d' : '#f8fafc',
                    },
                  }}
                >
                  Terms of Service
                </Button>
              </Stack>
            </Box>
          </RevealOnScroll>

          {/* Content Card */}
          <RevealOnScroll variant="pop-up" delay={0.1}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5, md: 6 },
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
              }}
            >
              {activeTab === 'privacy' ? (
                <Box sx={{ color: '#334155', lineHeight: 1.8, fontSize: '0.96rem' }}>
                  {/* Title & Meta Info */}
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 1, fontFamily: "'Sora', sans-serif" }}>
                    Edukra & Edukra Parents Privacy Policy
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 3 }}>
                    App Identifier: <strong>Edukra Parents (iOS & Android)</strong> · Platform: <strong>Edukra Web</strong> · Publisher: <strong>Urion Systems Ltd</strong> · Last Updated: October 2026 · Effective Date: Immediate
                  </Typography>

                  {/* App Reviewer Callout Notice */}
                  <Box
                    sx={{
                      p: 2.5,
                      mb: 4,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(30, 86, 160, 0.04)',
                      border: '1px solid rgba(30, 86, 160, 0.15)',
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <ShieldOutlinedIcon sx={{ color: '#1e56a0', mt: 0.3, fontSize: 22 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: '0.94rem', mb: 0.5 }}>
                          Notice for Apple App Store & Google Play App Review Teams
                        </Typography>
                        <Typography sx={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                          This document serves as the official, publicly accessible Privacy Policy for both the <strong>Edukra</strong> web portal and the <strong>"Edukra Parents"</strong> native mobile applications on iOS and Android. Mobile device permissions, real-time location disclosures for pickup, camera access for student QR dismissal, and child privacy protections are detailed in{' '}
                          <a href="#edukra-privacy" onClick={(e) => { e.preventDefault(); scrollToMobilePrivacy(); }} style={{ color: '#1e56a0', fontWeight: 700, textDecoration: 'underline' }}>
                            Section 4: Edukra Parents Mobile App Disclosures
                          </a>.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Section 1 */}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    1. Identity, Scope & Applicability
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    This Privacy Policy is issued by <strong>Urion Systems Ltd</strong> ("Urion", "we", "us", or "our"), a company duly incorporated under the laws of the Republic of Ghana. It governs the collection, processing, and protection of information across:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>The <strong>Edukra</strong> cloud-based School Management System (accessible via web browsers and institutional subdomains).</li>
                    <li>The <strong>"Edukra Parents"</strong> mobile applications distributed through the Apple App Store for iOS and Google Play Store for Android.</li>
                    <li>Integrated communication interfaces including automated SMS dispatches, Mobile Money payment callbacks, and WhatsApp parent notification relays.</li>
                  </Box>
                  <Typography sx={{ mb: 3 }}>
                    By accessing Edukra or downloading and signing into the Edukra Parents mobile app, you acknowledge the terms of this Privacy Policy and agree to our processing of your personal information as set forth herein.
                  </Typography>

                  {/* Section 2 */}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    2. Institutional Data Ownership & Role Definition
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Under the <strong>Data Protection Act of Ghana, 2012 (Act 843)</strong>:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li><strong>The School is the Data Controller:</strong> The subscriber educational institution retains 100% legal ownership of all pupil records, academic marks, attendance registers, parent contacts, teacher files, and institutional accounting data.</li>
                    <li><strong>Urion Systems Ltd is the Data Processor:</strong> We host, compute, and transmit institutional data solely on behalf of, and in accordance with the documented instructions of, the subscriber school. We do not sell, rent, monetize, or repurpose school records for commercial gain or advertising.</li>
                  </Box>

                  {/* Section 3 */}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    3. General Information We Collect & Purpose of Processing
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    We collect only the minimum data necessary to provide reliable school management and communication services:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                    <li><strong>Parent & Guardian Information:</strong> Full name, telephone number (for SMS alerts and MoMo billing), email address, relationship to student, and secure authentication credentials.</li>
                    <li><strong>Student Academic & Administrative Records:</strong> Full name, student identification number, class grade, enrollment year, academic term assessment scores, attendance logs, and school fee invoices (provisioned and authorized by the institution).</li>
                    <li><strong>Financial & Fee Payment Information:</strong> Digital invoice numbers, payment status, and telecom transaction reference IDs (MTN MoMo, Telecel Cash, AT Money). Note: Urion never stores sensitive debit card CVVs or bank PINs; all payments are processed through Bank of Ghana-licensed fintech gateways.</li>
                    <li><strong>Technical Diagnostics:</strong> IP addresses, device operating system version, browser user agent, and crash logs used strictly to diagnose technical faults and maintain 99.9% platform availability.</li>
                  </Box>

                  {/* Section 4: Mobile App Specific Disclosures (ANCHOR FOR APP STORES) */}
                  <Box
                    component="section"
                    id="edukra-privacy"
                    sx={{
                      scrollMarginTop: '110px',
                      my: 4,
                      p: { xs: 2.5, sm: 3.5 },
                      borderRadius: '20px',
                      border: '2px solid #1e56a0',
                      backgroundColor: '#f8fafc',
                      position: 'relative',
                    }}
                  >
                    {/* Anchor helper for alternative links */}
                    <div id="edukra-parents" style={{ position: 'absolute', top: '-110px' }} />

                    {/* Header of Section 4 */}
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                      <PhoneIphoneRoundedIcon sx={{ color: '#1e56a0', fontSize: 28 }} />
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            color: '#0f172a',
                            fontFamily: "'Sora', sans-serif",
                            fontSize: { xs: '1.15rem', sm: '1.35rem' },
                          }}
                        >
                          4. "Edukra Parents" Mobile App Disclosures
                        </Typography>
                        <Typography sx={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                          Dedicated Compliance for Apple App Store (Guideline 5.1.1) & Google Play Policies
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography sx={{ mb: 3, color: '#334155' }}>
                      This section details the specific hardware permissions and data collection mechanisms active within the <strong>Edukra Parents</strong> native iOS and Android applications.
                    </Typography>

                    {/* Subsection 4.1: Location Data */}
                    <Box sx={{ mb: 3.5, p: 2.5, bgcolor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                      <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1.5 }}>
                        <LocationOnOutlinedIcon sx={{ color: '#e11d48', fontSize: 22 }} />
                        <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: '1.05rem', fontFamily: "'Sora', sans-serif" }}>
                          4.1 Location Data & The "On My Way" School Pickup Feature
                        </Typography>
                      </Stack>
                      <Typography sx={{ mb: 1.5 }}>
                        The <strong>Edukra Parents</strong> app collects real-time location data <strong>solely and exclusively</strong> to power the student dismissal <em>"On My Way"</em> feature.
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, mb: 1.5, color: '#475569' }}>
                        <li><strong>Single Legitimate Purpose:</strong> Location data is used only to calculate estimated times of arrival (ETAs) for school security and dispatch personnel. This ensures that the child is safely escorted to the departure lounge precisely when the parent arrives at the school gate, eliminating student wait times and traffic gridlock.</li>
                        <li><strong>Active Trip Only:</strong> Location tracking is initiated <em>only</em> when the parent explicitly taps the "I'm On My Way" / "Start Pickup Trip" button. Location tracking is never running continuously in the background outside of an active pickup journey.</li>
                        <li><strong>Ephemeral Processing (Zero Permanent Storage):</strong> Geographic coordinates (latitude/longitude) are processed in real time purely to calculate distance and ETA. Coordinates are <strong>never permanently recorded</strong> in our persistent databases, are never logged as historical trip routes, and are immediately discarded from memory once the trip completes or is canceled.</li>
                        <li><strong>No Third-Party Sharing & No Advertising:</strong> Location data is never sold, shared with third parties, brokers, or ad exchanges, and is never used for commercial advertising, audience measurement, or behavioral profiling.</li>
                        <li><strong>Parental Consent & Revocation:</strong> Location access is optional. Parents are prompted with an explicit OS dialog and can revoke or restrict location permissions at any time via device settings. When disabled, parents may still notify the school manually upon arrival.</li>
                      </Box>
                    </Box>

                    {/* Subsection 4.2: Camera & Storage Permissions */}
                    <Box sx={{ mb: 3.5, p: 2.5, bgcolor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                      <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1.5 }}>
                        <CameraAltOutlinedIcon sx={{ color: '#2563eb', fontSize: 22 }} />
                        <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: '1.05rem', fontFamily: "'Sora', sans-serif" }}>
                          4.2 Device Permissions (Camera & Photo Library)
                        </Typography>
                      </Stack>
                      <Typography sx={{ mb: 1.5 }}>
                        Edukra Parents requests limited hardware permissions strictly when necessary to deliver safety and account personalization:
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, mb: 1.5, color: '#475569' }}>
                        <li>
                          <strong>Camera Access (<code>NSCameraUsageDescription</code> / <code>android.permission.CAMERA</code>):</strong> Requested exclusively to allow parents and guardians to display and scan dynamic, encrypted QR codes at the school checkpoint to authenticate identity during afternoon student dismissal. The camera is active only while the scanner interface is actively open. No video feeds or photos are captured or uploaded during QR scanning.
                        </li>
                        <li>
                          <strong>Photo Library & Storage Access (<code>NSPhotoLibraryUsageDescription</code> / <code>READ_MEDIA_IMAGES</code>):</strong> Requested on an opt-in basis solely if the parent chooses to upload a custom profile avatar or a verified identification photo of an authorized pickup designee. Edukra Parents never inspects, accesses, or indexes photos or files outside the specific image chosen by the user.
                        </li>
                      </Box>
                    </Box>

                    {/* Subsection 4.3: Child Privacy & Google Play Families */}
                    <Box sx={{ p: 2.5, bgcolor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                      <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1.5 }}>
                        <ChildCareRoundedIcon sx={{ color: '#059669', fontSize: 22 }} />
                        <Typography sx={{ fontWeight: 750, color: '#0f172a', fontSize: '1.05rem', fontFamily: "'Sora', sans-serif" }}>
                          4.3 Child Privacy, COPPA & Google Play Families Policy Compliance
                        </Typography>
                      </Stack>
                      <Typography sx={{ mb: 1.5 }}>
                        Urion Systems Ltd maintains strict safeguards regarding student and minor privacy:
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, mb: 1.5, color: '#475569' }}>
                        <li><strong>Adult-Only Target Audience:</strong> The Edukra Parents mobile app is designed and intended strictly for use by adults (parents, legal guardians, and authorized school custodians aged 18 and older). It is not directed at or designed for children under 13.</li>
                        <li><strong>No Direct Data Collection from Children:</strong> The app does not permit children to create accounts, nor does it collect personal data directly from children.</li>
                        <li><strong>Institutional Authority for Student Records:</strong> Student records displayed in the app (such as attendance, grades, and fee notices) are uploaded and managed exclusively by the child's educational institution in its capacity as Data Controller under Act 843.</li>
                        <li><strong>Zero Advertising SDKs:</strong> Edukra Parents contains zero third-party advertising SDKs, zero social media tracking pixels, and does not conduct behavioral profiling of minors.</li>
                      </Box>
                    </Box>
                  </Box>

                  {/* Section 5: Security & Infrastructure */}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    5. Data Security, Encryption & Cloud Infrastructure
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    We deploy multi-layered institutional security controls to protect academic and personal information:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li><strong>Encryption in Transit:</strong> All communication between the Edukra Parents mobile application, web portals, and backend servers is secured via TLS 1.3 protocol with mandatory HTTPS.</li>
                    <li><strong>Encryption at Rest:</strong> Database records, parent contact details, and backups are encrypted at rest using AES-256 standard encryption.</li>
                    <li><strong>Authentication & Tokenization:</strong> Passwords are cryptographic hashes (bcrypt/Argon2). Mobile session tokens are rotated regularly and can be revoked instantly upon sign-out.</li>
                    <li><strong>Zero Data Brokerage:</strong> We never sell personal information to brokers, advertisers, or third-party marketing entities.</li>
                  </Box>

                  {/* Section 6: Account Deletion (Apple & Google Play Mandate) */}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    6. Account Deletion & Data Subject Rights (Ghana Act 843 & App Store Mandates)
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    In compliance with Apple App Store Guideline 5.1.1(v), Google Play Account Deletion requirements, and the Data Protection Act of Ghana (Act 843):
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li>
                      <strong>Self-Service In-App Account Deletion:</strong> Parents and guardians can delete their Edukra Parents account and mobile profile directly within the app by navigating to <code>Settings &rarr; Account & Privacy &rarr; Delete Account</code>.
                    </li>
                    <li>
                      <strong>Direct Support Request:</strong> You can also submit an account and data erasure request at any time by emailing <strong>admin@urionsystems.com</strong> with the subject line <em>"Account Deletion Request"</em>. Requests are executed within 30 calendar days.
                    </li>
                    <li>
                      <strong>Data Handling Upon Deletion:</strong> Upon receiving an account deletion request, your mobile credentials, profile image, phone number associations, and active push notification tokens are permanently purged from active systems. (Note: Statutory academic transcripts, attendance archives, and historical financial receipts belong to the subscribing school as Data Controller and remain archived in accordance with Ghana education regulations).
                    </li>
                    <li>
                      <strong>Right to Access & Rectification:</strong> Under Section 24 of Act 843, you have the right to request a copy of the personal information we hold about you and to demand rectification of inaccurate records.
                    </li>
                  </Box>

                  {/* Section 7: Third-Party Service Providers */}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    7. Third-Party Service Providers
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    We engage vetted third-party vendors strictly to deliver operational infrastructure:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li><strong>Cloud Hosting & CDN:</strong> Enterprise cloud data centers providing high availability, DDoS mitigation, and firewall protection.</li>
                    <li><strong>Telecommunication & SMS Gateways:</strong> Licensed Ghanaian telecom aggregators used strictly to route urgent school notices, attendance alerts, and OTP verification codes.</li>
                    <li><strong>Fintech Payment Processors:</strong> Licensed payment service providers regulated by the Bank of Ghana for automated Mobile Money reconciliation.</li>
                  </Box>

                  {/* Section 8: Contact */}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    8. Contact the Data Protection Officer
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    If you have questions, regulatory inquiries, or complaints regarding this Privacy Policy or our mobile app data practices, please contact our Data Protection Officer:
                  </Typography>
                  <Box sx={{ p: 2.5, bgcolor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', lineHeight: 1.8 }}>
                    <strong>Organization:</strong> Urion Systems Ltd (Operating Edukra & Edukra Parents)
                    <br />
                    <strong>Attn:</strong> Data Protection & Compliance Officer
                    <br />
                    <strong>Email:</strong> <a href="mailto:admin@urionsystems.com" style={{ color: '#1e56a0', textDecoration: 'none' }}>admin@urionsystems.com</a>
                    <br />
                    <strong>Direct Inquiries:</strong> +233 599 844 836 · +233 (0) 30 290 8800
                    <br />
                    <strong>Physical Address:</strong> Accra, Greater Accra Region, Republic of Ghana
                  </Box>
                </Box>
              ) : (
                /* Terms of Service Tab */
                <Box sx={{ color: '#334155', lineHeight: 1.8, fontSize: '0.96rem' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 1, fontFamily: "'Sora', sans-serif" }}>
                    Edukra Platform & Mobile Terms of Service
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 3 }}>
                    Covers: <strong>Edukra Web Platform</strong> & <strong>Edukra Parents Mobile App (iOS & Android)</strong> · Publisher: <strong>Urion Systems Ltd</strong> · Last Updated: October 2026
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    1. Agreement to Terms
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    By accessing or utilizing the <strong>Edukra</strong> school management system, or downloading and installing the <strong>Edukra Parents</strong> mobile application from the Apple App Store or Google Play Store, you and your educational institution agree to be legally bound by these Terms of Service and all applicable laws of the Republic of Ghana.
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    2. Mobile App End-User License & Acceptable Use
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Urion Systems Ltd grants registered parents and guardians a limited, personal, revocable, non-exclusive, non-transferable license to use the <strong>Edukra Parents</strong> app solely for legitimate school-related oversight, academic tracking, fee settlement, and student dismissal management:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    <li><strong>Account Security:</strong> You are responsible for safeguarding your login credentials and dynamic QR dismissal codes. You agree not to distribute or share student QR credentials with unauthorized parties.</li>
                    <li><strong>Authorized Guardian Verification:</strong> Schools reserve the right to verify the identity of any guardian presenting an Edukra Parents QR token before authorizing student departure.</li>
                    <li><strong>Prohibited Conduct:</strong> You may not reverse-engineer, decompile, attempt to extract source code from, or launch automated scrapers against the Edukra web portal or mobile applications.</li>
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    3. Institutional Service Provision & Free Pilot Period
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Urion Systems Ltd delivers cloud access to school administrators, educators, pupils, and parents. Educational institutions subscribing to complimentary trial periods receive complete platform functionality, administrative onboarding, and historical data migration assistance with zero initial financial obligation.
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    4. Term-Based Invoicing & Fair Billing
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Edukra institutional subscriptions align directly with the Ghana academic term structure (3 terms per academic year). Licensing is calculated on active student enrollment, ensuring schools are never billed recurring monthly software fees during holiday intercessions.
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    5. Data Portability, Export & Termination
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Should an educational institution choose to discontinue its subscription, Urion Systems Ltd guarantees full data export capabilities. All pupil registers, grade archives, examination scores, and financial accounting reports will be provided in standardized formats (CSV, Excel, PDF) within 14 business days, free of proprietary vendor lock-in.
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    6. App Store Terms & Platform Independence
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    You acknowledge that these Terms are concluded solely between you and Urion Systems Ltd, and not with Apple Inc. or Google LLC. Apple and Google are not responsible for the Edukra Parents app, its content, or maintenance. However, Apple and Google are third-party beneficiaries of these Terms and have the right to enforce these terms against you upon your acceptance.
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1, fontFamily: "'Sora', sans-serif", fontSize: '1.15rem' }}>
                    7. Inquiries & Institutional Support
                  </Typography>
                  <Box sx={{ p: 2.5, bgcolor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', lineHeight: 1.8 }}>
                    For billing inquiries, Service Level Agreements (SLAs), or partnership terms, contact:
                    <br />
                    <strong>Publisher:</strong> Urion Systems Ltd (Edukra)
                    <br />
                    <strong>Support Email:</strong> <a href="mailto:admin@urionsystems.com" style={{ color: '#1e56a0', textDecoration: 'none' }}>admin@urionsystems.com</a>
                    <br />
                    <strong>Telephone:</strong> +233 (0) 30 290 8800 · WhatsApp: +233 599 844 836
                    <br />
                    <strong>Location:</strong> Accra, Greater Accra Region, Ghana
                  </Box>
                </Box>
              )}
            </Paper>
          </RevealOnScroll>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

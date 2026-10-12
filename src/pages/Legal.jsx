import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Legal() {
  const [activeTab, setActiveTab] = useState(() => {
    return window.location.hash.includes('terms') ? 'terms' : 'privacy';
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const handleHash = () => {
      if (window.location.hash.includes('terms')) {
        setActiveTab('terms');
      } else if (window.location.hash.includes('privacy')) {
        setActiveTab('privacy');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#faf9f8',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <NavigationBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 14, sm: 17, md: 19 },
          pb: { xs: 10, md: 14 },
          position: 'relative',
        }}
      >
        <Container maxWidth="md">
          {/* Header */}
          <RevealOnScroll variant="init">
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
                  color: '#0f172a',
                  letterSpacing: '-0.03em',
                  mb: 1.5,
                }}
              >
                Legal, Privacy & Compliance
              </Typography>
              <Typography
                sx={{
                  color: '#64748b',
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  maxWidth: 620,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Clear, transparent terms and robust data protection standards compliant with the Data Protection Act of Ghana (Act 843).
              </Typography>

              {/* Tabs */}
              <Stack
                direction="row"
                spacing={1.5}
                justifyContent="center"
                sx={{ mt: 4 }}
              >
                <Button
                  variant={activeTab === 'privacy' ? 'contained' : 'outlined'}
                  onClick={() => {
                    setActiveTab('privacy');
                    window.location.hash = '#privacy';
                  }}
                  startIcon={<ShieldOutlinedIcon />}
                  sx={{
                    px: 3,
                    py: 1.1,
                    borderRadius: '9999px',
                    fontWeight: 650,
                    textTransform: 'none',
                    fontSize: '0.92rem',
                    backgroundColor: activeTab === 'privacy' ? '#1e56a0' : '#ffffff',
                    borderColor: '#cbd5e1',
                    color: activeTab === 'privacy' ? '#ffffff' : '#475569',
                    '&:hover': {
                      backgroundColor: activeTab === 'privacy' ? '#16427d' : '#f8fafc',
                    },
                  }}
                >
                  Privacy Policy
                </Button>
                <Button
                  variant={activeTab === 'terms' ? 'contained' : 'outlined'}
                  onClick={() => {
                    setActiveTab('terms');
                    window.location.hash = '#terms';
                  }}
                  startIcon={<GavelRoundedIcon />}
                  sx={{
                    px: 3,
                    py: 1.1,
                    borderRadius: '9999px',
                    fontWeight: 650,
                    textTransform: 'none',
                    fontSize: '0.92rem',
                    backgroundColor: activeTab === 'terms' ? '#1e56a0' : '#ffffff',
                    borderColor: '#cbd5e1',
                    color: activeTab === 'terms' ? '#ffffff' : '#475569',
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
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3.5, sm: 5, md: 6 },
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            {activeTab === 'privacy' ? (
              <Box sx={{ color: '#334155', lineHeight: 1.7, fontSize: '0.96rem' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 1, fontFamily: "'Sora', sans-serif" }}>
                  Urion SMS Privacy Policy
                </Typography>
                <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', mb: 3 }}>
                  Last Updated: October 2026 · Effective Date: Immediate
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  1. Introduction & Scope
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Urion Systems Ltd ("Urion", "we", "us", or "our") provides the Urion School Management System ("Urion SMS") software platform. We are deeply committed to protecting the privacy, confidentiality, and security of educational institutions, administrators, educators, pupils, and parents across Ghana.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  2. School Data Ownership
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Your school retains 100% ownership of all student records, examination scores, staff files, attendance history, and financial billing data entered into Urion SMS. Urion operates strictly as a data processor on behalf of the subscriber institution (the Data Controller), strictly governed by the Data Protection Act of Ghana (Act 843).
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  3. Information Collected & Usage
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  We collect information strictly necessary to deliver school administration services:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><strong>Student Information:</strong> Name, class level, date of birth, emergency contacts, medical notices, and academic performance.</li>
                  <li><strong>Parent & Guardian Information:</strong> Name, phone number (for SMS notifications and MoMo receipts), and email address.</li>
                  <li><strong>Staff & Teacher Records:</strong> Name, contact details, assigned subjects, and attendance timestamps.</li>
                  <li><strong>Financial & Fee Records:</strong> Invoice numbers, fee categories, payment status, and automated Mobile Money transaction references.</li>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  4. Security & Encryption
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  All data in transit is protected with TLS 1.3 encryption. Backups are automated, encrypted at rest, and stored across redundant cloud infrastructure to ensure 99.9% uptime and zero data loss.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  5. Contact Data Protection Officer
                </Typography>
                <Typography>
                  If your school has inquiries regarding pupil data, privacy rights, or data export requests, please contact:
                  <br />
                  <strong>Email:</strong> admin@urionsystems.com
                  <br />
                  <strong>Direct Line:</strong> +233 599 844 836
                  <br />
                  <strong>Address:</strong> Accra, Greater Accra Region, Ghana
                </Typography>
              </Box>
            ) : (
              <Box sx={{ color: '#334155', lineHeight: 1.7, fontSize: '0.96rem' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 1, fontFamily: "'Sora', sans-serif" }}>
                  Urion SMS Terms of Service
                </Typography>
                <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', mb: 3 }}>
                  Last Updated: October 2026 · Effective Date: Immediate
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  1. Agreement to Terms
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  By accessing or subscribing to Urion SMS, whether during a complimentary trial period or under a formal service agreement, your institution agrees to be bound by these Terms of Service.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  2. Provision of Service & Free Trial
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Urion Systems provides cloud-based access to school administration, academic grading, fee collection, and role-based portals. Schools subscribing to a trial period receive full platform access, staff onboarding assistance, and data migration at no initial obligation.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  3. Term-Based Invoicing & Fair Billing
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Urion SMS subscriptions align directly with the academic term structure (3 terms per school year). Charges are assessed on active student enrolment, preventing recurring monthly billing during school holidays.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  4. Data Portability & Termination
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Should an institution decide to discontinue service, Urion Systems facilitates the complete export of all student files, scorebook grades, and accounting records in standard formats (CSV, Excel, PDF) with zero lock-in restrictions.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mt: 3, mb: 1 }}>
                  5. Inquiries & Support
                </Typography>
                <Typography>
                  For billing questions, service level agreements (SLAs), or institutional partnership terms, reach our executive support desk at:
                  <br />
                  <strong>Email:</strong> admin@urionsystems.com
                  <br />
                  <strong>Telephone:</strong> +233 (0) 30 290 8800 · WhatsApp: +233 599 844 836
                </Typography>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

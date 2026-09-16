import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  Paper,
  Button,
  Divider,
  TextField,
  MenuItem
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// Calendar icon for header chip
function CalendarIcon(props) {
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
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

// Monitor / Screen icon for Online Demo matching mockup
function OnlineDemoIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="3" width="20" height="14" rx="2.5" />
      <polygon points="10 8 15 10 10 12 10 8" fill="currentColor" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

// Location Pin icon for In-Person Demo matching mockup
function InPersonDemoIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// Notepad / Calendar icon for Summary card
function SummaryNoteIcon(props) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

// Headset icon for Prefer to talk first? callout
function HeadsetIcon(props) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

// Checkmark icon for selected radio
function CheckmarkIcon(props) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const steps = [
  { number: 1, label: 'Demo Type' },
  { number: 2, label: 'Date' },
  { number: 3, label: 'Time' },
  { number: 4, label: 'Your Details' },
  { number: 5, label: 'Confirm' },
];

export default function BookDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepDirection, setStepDirection] = useState('next');
  const [demoType, setDemoType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    schoolName: '',
    role: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleNext = async () => {
    if (currentStep < 4) {
      setStepDirection('next');
      setCurrentStep((prev) => prev + 1);
      return;
    }

    if (currentStep === 4) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.schoolName) {
        setErrorMessage('Please fill in all required fields (First Name, Last Name, Email, and School Name).');
        return;
      }

      setIsSubmitting(true);
      setErrorMessage('');

      try {
        const formattedDate = selectedDate ? selectedDate.format('YYYY-MM-DD (dddd, MMMM D)') : 'Not specified';
        const typeLabel = demoType === 'online' ? 'Online Demo' : demoType === 'in-person' ? 'In-Person Demo' : demoType;

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone || 'N/A',
            school_or_organization: formData.schoolName,
            role: formData.role || 'N/A',
            demo_type: typeLabel,
            preferred_date: formattedDate,
            preferred_time: selectedTime || 'Not specified',
            subject: `Urion SMS Demo Booking: ${formData.schoolName} (${formData.firstName} ${formData.lastName})`,
            message: `New Demo Booking Request Details:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nSchool/Organization: ${formData.schoolName}\nRole: ${formData.role || 'N/A'}\nDemo Type: ${typeLabel}\nDate: ${formattedDate}\nTime: ${selectedTime || 'Not specified'}`,
            from_name: 'Urion SMS Booking Form',
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStepDirection('next');
          setCurrentStep(5);
        } else {
          setErrorMessage(data.message || 'Failed to submit demo booking. Please try again.');
        }
      } catch (_err) {
        setErrorMessage('Network error. Please check your internet connection or email admin@urionsystems.com directly.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const handleBack = () => {
    setStepDirection('prev');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#faf9f8', // Subtle warm off-white background matching mockup
        position: 'relative',
      }}
    >
      {/* Top Navigation Bar */}
      <NavigationBar />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 15, sm: 17, md: 19 }, // Generous top padding so content is fully below fixed navbar
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
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.15) 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.15) 92%, transparent 100%)',
          }}
        />

        <Container
          maxWidth={false}
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1020px !important',
            mx: 'auto',
            px: { xs: 2.5, sm: 3 },
          }}
        >
          {/* Hero Header */}
          <RevealOnScroll variant="init">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
                mx: 'auto',
                mb: { xs: 3.8, sm: 4.8 },
              }}
            >
              {/* Pill Chip: BOOK A DEMO */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: '#eaf2ff',
                  border: '1px solid #d4e4fc',
                  borderRadius: '9999px',
                  px: '13px',
                  py: '4.5px',
                  color: '#1e56a0',
                  userSelect: 'none',
                  width: 'fit-content',
                  alignSelf: 'center',
                  mx: 'auto',
                  mb: 1.5,
                }}
              >
                <CalendarIcon style={{ color: '#1e56a0', flexShrink: 0 }} />
                <Typography
                  component="span"
                  sx={{
                    fontSize: '0.67rem',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    lineHeight: 1,
                    color: '#1e56a0',
                    whiteSpace: 'nowrap',
                  }}
                >
                  BOOK A DEMO
                </Typography>
              </Box>

              {/* Main Heading */}
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 850,
                  fontSize: { xs: '2.1rem', sm: '2.7rem', md: '3.15rem' },
                  lineHeight: 1.12,
                  letterSpacing: '-0.038em',
                  color: '#080604',
                  textAlign: 'center',
                  width: '100%',
                  mx: 'auto',
                  mb: 1.2,
                }}
              >
                See the platform in action.
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  color: '#64748b',
                  fontSize: { xs: '0.90rem', sm: '0.94rem' },
                  lineHeight: 1.55,
                  maxWidth: 550,
                  fontWeight: 450,
                  textAlign: 'center',
                  width: '100%',
                  mx: 'auto',
                }}
              >
                Schedule a personalized demonstration and discover how the platform can
                work for your school — online or in person.
              </Typography>
            </Box>
          </RevealOnScroll>

          {/* Stepper Wizard Indicator */}
          <Box
            sx={{
              maxWidth: 540,
              mx: 'auto',
              mb: { xs: 4, md: 5 },
            }}
          >
            {/* Step Items Row */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 0.8, sm: 1.2 }}
            >
              {steps.map((step, index) => {
                const isActive = step.number === currentStep;
                const isCompleted = step.number < currentStep;
                const isLast = index === steps.length - 1;

                return (
                  <React.Fragment key={isCompleted ? <CheckmarkIcon style={{width: 10, height: 10}}/> : step.number}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={0.7}
                      sx={{ userSelect: 'none' }}
                    >
                      {/* Step Circle */}
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.70rem',
                          fontWeight: 700,
                          backgroundColor: isActive || isCompleted ? '#1e56a0' : '#ebedf1',
                          color: isActive || isCompleted ? '#ffffff' : '#94a3b8',
                          flexShrink: 0,
                        }}
                      >
                        {isCompleted ? <CheckmarkIcon style={{width: 10, height: 10}}/> : step.number}
                      </Box>

                      {/* Step Label */}
                      <Typography
                        sx={{
                          fontSize: '0.82rem',
                          fontWeight: isActive || isCompleted ? 700 : 500,
                          color: isActive || isCompleted ? '#1e56a0' : '#94a3b8',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {step.label}
                      </Typography>
                    </Stack>

                    {/* Chevron separator */}
                    {!isLast && (
                      <Typography
                        component="span"
                        sx={{
                          color: '#cbd5e1',
                          fontSize: '0.80rem',
                          fontWeight: 400,
                          px: { xs: 0.2, sm: 0.3 },
                        }}
                      >
                        ›
                      </Typography>
                    )}
                  </React.Fragment>
                );
              })}
            </Stack>

            {/* Blue Progress Underline Track matching mockup */}
            <Box
              sx={{
                mt: 1.4,
                width: '100%',
                height: '2.5px',
                backgroundColor: '#e6eaef',
                borderRadius: '3px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${(currentStep / 5) * 100}%`, transition: 'width 0.3s ease',
                  height: '100%',
                  backgroundColor: '#1e56a0',
                  borderRadius: '3px',
                }}
              />
            </Box>
          </Box>

          {/* 
            Main Two-Column Layout via CSS Grid 
            Guarantees side-by-side display on desktop matching mockup pixel-for-pixel
          */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 310px', lg: '1fr 320px' },
              gap: { xs: 3, md: 3.5 },
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN: Choose Your Demo Type (Wizard Card) */}
            <RevealOnScroll variant="slide-left">
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ede8e1',
                  borderRadius: '16px',
                  p: { xs: 2.8, sm: 3.8 },
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
              
              {/* Dynamic Wizard Content with Directional Step Transition */}
              <Box
                key={currentStep}
                className={stepDirection === 'next' ? 'step-slide-next' : 'step-slide-prev'}
                sx={{ flexGrow: 1 }}
              >
                {currentStep === 1 && (
                  <Box>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.15rem', sm: '1.22rem' }, letterSpacing: '-0.02em', color: '#0b0702', mb: 2.8 }}>
                      Choose your demo type
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, alignItems: 'stretch', mb: { xs: 3.5, sm: 4.5 } }}>
                      {/* 1. Online Demo Card */}
                      <Card
                        variant="outlined"
                        onClick={() => setDemoType('online')}
                        sx={{
                          p: { xs: 2.2, sm: 2.5 },
                          borderRadius: '12px',
                          cursor: 'pointer',
                          border: demoType === 'online' ? '2px solid #1e56a0' : '1px solid #efece7',
                          backgroundColor: demoType === 'online' ? '#ffffff' : '#fdfbf9',
                          boxShadow: demoType === 'online' ? '0 8px 24px rgba(30, 86, 160, 0.12)' : 'none',
                          transform: demoType === 'online' ? 'scale(1.02)' : 'scale(1)',
                          transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          '&:hover': {
                            borderColor: demoType === 'online' ? '#1e56a0' : '#cbd5e1',
                            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.05)',
                            transform: demoType === 'online' ? 'scale(1.02)' : 'translateY(-2px)'
                          }
                        }}
                      >
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                            <Box sx={{ width: 38, height: 38, borderRadius: '8px', backgroundColor: '#eaf2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e56a0', transition: 'transform 0.2s ease' }}>
                              <OnlineDemoIcon />
                            </Box>
                            <Box
                              className={demoType === 'online' ? 'checkmark-pop' : ''}
                              sx={{
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: demoType === 'online' ? '2px solid #1e56a0' : '1.8px solid #cbd5e1',
                                backgroundColor: demoType === 'online' ? '#1e56a0' : 'transparent',
                                color: '#ffffff',
                                transition: 'all 0.2s ease',
                                mt: 0.5
                              }}
                            >
                              {demoType === 'online' && <CheckmarkIcon />}
                            </Box>
                          </Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', letterSpacing: '-0.02em', color: '#0b0702', mt: 1.8, mb: 0.5, lineHeight: 1.25 }}>Online Demo</Typography>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.80rem', color: '#64748b', lineHeight: 1.4 }}>Video meeting with a product specialist.</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '0.76rem', color: '#8c857b', lineHeight: 1.5, fontWeight: 450, pt: 2.2 }}>A guided walkthrough over a video call — perfect for a quick, convenient introduction from anywhere.</Typography>
                      </Card>

                      {/* 2. In-Person Demo Card */}
                      <Card
                        variant="outlined"
                        onClick={() => setDemoType('in-person')}
                        sx={{
                          p: { xs: 2.2, sm: 2.5 },
                          borderRadius: '12px',
                          cursor: 'pointer',
                          border: demoType === 'in-person' ? '2px solid #1e56a0' : '1px solid #efece7',
                          backgroundColor: demoType === 'in-person' ? '#ffffff' : '#fdfbf9',
                          boxShadow: demoType === 'in-person' ? '0 8px 24px rgba(30, 86, 160, 0.12)' : 'none',
                          transform: demoType === 'in-person' ? 'scale(1.02)' : 'scale(1)',
                          transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          '&:hover': {
                            borderColor: demoType === 'in-person' ? '#1e56a0' : '#cbd5e1',
                            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.05)',
                            transform: demoType === 'in-person' ? 'scale(1.02)' : 'translateY(-2px)'
                          }
                        }}
                      >
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                            <Box sx={{ width: 38, height: 38, borderRadius: '8px', backgroundColor: '#eaf2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e56a0', transition: 'transform 0.2s ease' }}>
                              <InPersonDemoIcon />
                            </Box>
                            <Box
                              className={demoType === 'in-person' ? 'checkmark-pop' : ''}
                              sx={{
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: demoType === 'in-person' ? '2px solid #1e56a0' : '1.8px solid #cbd5e1',
                                backgroundColor: demoType === 'in-person' ? '#1e56a0' : 'transparent',
                                color: '#ffffff',
                                transition: 'all 0.2s ease',
                                mt: 0.5
                              }}
                            >
                              {demoType === 'in-person' && <CheckmarkIcon />}
                            </Box>
                          </Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', letterSpacing: '-0.02em', color: '#0b0702', mt: 1.8, mb: 0.5, lineHeight: 1.25 }}>In-Person Demo</Typography>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.80rem', color: '#64748b', lineHeight: 1.4 }}>On-site product presentation at your school.</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '0.76rem', color: '#8c857b', lineHeight: 1.5, fontWeight: 450, pt: 2.2 }}>We come to your school for a hands-on session tailored to your community's specific needs.</Typography>
                      </Card>
                    </Box>
                  </Box>
                )}
                {currentStep === 2 && (
                  <Box>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.15rem', sm: '1.22rem' }, letterSpacing: '-0.02em', color: '#0b0702', mb: 2.8 }}>Select a date</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar 
                          value={selectedDate} 
                          onChange={(newValue) => setSelectedDate(newValue)}
                          disablePast
                          sx={{
                            border: '1px solid #efece7',
                            borderRadius: '12px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                            width: '100%',
                            maxWidth: 320
                          }}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Box>
                )}
                {currentStep === 3 && (
                  <Box>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.15rem', sm: '1.22rem' }, letterSpacing: '-0.02em', color: '#0b0702', mb: 2.8 }}>Select a time for {selectedDate ? selectedDate.format('ddd, MMM D') : ''}</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' }, gap: 1.5, mb: 4 }}>
                      {availableTimes.map(time => (
                        <Card
                          key={time}
                          variant="outlined"
                          onClick={() => setSelectedTime(time)}
                          sx={{
                            p: 1.5,
                            textAlign: 'center',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            border: selectedTime === time ? '2px solid #1e56a0' : '1px solid #efece7',
                            backgroundColor: selectedTime === time ? '#f0f6ff' : '#ffffff',
                            transform: selectedTime === time ? 'scale(1.04)' : 'scale(1)',
                            boxShadow: selectedTime === time ? '0 4px 12px rgba(30, 86, 160, 0.14)' : 'none',
                            transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                            '&:hover': { borderColor: '#1e56a0', transform: selectedTime === time ? 'scale(1.04)' : 'translateY(-1px)' }
                          }}
                        >
                          <Typography sx={{ fontWeight: selectedTime === time ? 700 : 500, color: selectedTime === time ? '#1e56a0' : '#475569', fontSize: '0.85rem' }}>{time}</Typography>
                        </Card>
                      ))}
                    </Box>
                  </Box>
                )}
                {currentStep === 4 && (
                  <Box>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.15rem', sm: '1.22rem' }, letterSpacing: '-0.02em', color: '#0b0702', mb: 2.8 }}>Your details</Typography>
                    {errorMessage && (
                      <Box sx={{ p: 1.5, mb: 2.5, borderRadius: '8px', bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#dc2626', fontSize: '0.85rem', fontWeight: 500 }}>
                        {errorMessage}
                      </Box>
                    )}
                    <Stack spacing={2} sx={{ mb: 4 }}>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleFormChange} size="small" />
                        <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleFormChange} size="small" />
                      </Stack>
                      <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleFormChange} size="small" />
                      <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleFormChange} size="small" />
                      <TextField fullWidth label="School / Organization Name" name="schoolName" value={formData.schoolName} onChange={handleFormChange} size="small" />
                      <TextField fullWidth select label="Your Role" name="role" value={formData.role} onChange={handleFormChange} size="small">
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Teacher">Teacher</MenuItem>
                        <MenuItem value="IT">IT Coordinator</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </TextField>
                    </Stack>
                  </Box>
                )}
                {currentStep === 5 && (
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Box className="checkmark-pop" sx={{ display: 'inline-flex', justifyContent: 'center', mb: 2 }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 64, color: '#10b981' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#0b0702' }}>Demo Confirmed!</Typography>
                    <Typography sx={{ color: '#475569', mb: 4, px: 2 }}>
                      Thank you, {formData.firstName}. Your {demoType === 'online' ? 'Online Demo' : demoType === 'in-person' ? 'In-Person Demo' : demoType} is booked for {selectedDate ? selectedDate.format('ddd, MMM D') : ''} at {selectedTime}. We've received your request and our team will be in touch shortly.
                    </Typography>
                  </Box>
                )}
              </Box>
              
              {/* Action Footer: Back and Continue Buttons */}


                
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 'auto', pt: 2 }}>
                {currentStep < 5 ? (
                  <>
                    <Button
                      onClick={handleBack}
                      disabled={currentStep === 1 || isSubmitting}
                      startIcon={<ArrowBackRoundedIcon sx={{ fontSize: '16px !important' }} />}
                      sx={{
                        color: '#64748b', textTransform: 'none', fontWeight: 600, fontSize: '0.86rem', pl: 0,
                        '&.Mui-disabled': { color: '#cbd5e1' },
                        visibility: currentStep === 1 ? 'hidden' : 'visible'
                      }}
                    >
                      Back
                    </Button>

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      disabled={
                        isSubmitting ||
                        (currentStep === 1 && !demoType) ||
                        (currentStep === 2 && !selectedDate) ||
                        (currentStep === 3 && !selectedTime) ||
                        (currentStep === 4 && (!formData.firstName || !formData.lastName || !formData.email || !formData.schoolName))
                      }
                      endIcon={!isSubmitting && <ArrowForwardRoundedIcon sx={{ fontSize: '16px !important' }} />}
                      sx={{
                        py: 1, px: 3, borderRadius: '8px', fontWeight: 600, fontSize: '0.86rem', textTransform: 'none',
                        backgroundColor: '#1e56a0', boxShadow: '0 2px 8px rgba(30, 86, 160, 0.25)',
                        transition: 'all 0.18s ease',
                        '&:hover': { backgroundColor: '#16427d', boxShadow: '0 4px 12px rgba(30, 86, 160, 0.35)' },
                        '&.Mui-disabled': { backgroundColor: 'rgba(30, 86, 160, 0.45)', color: 'rgba(255, 255, 255, 0.95)' }
                      }}
                    >
                      {currentStep === 4 ? (isSubmitting ? 'Booking Demo...' : 'Confirm Booking') : 'Continue'}
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => { window.location.hash = '#home'; }}
                    sx={{
                      mx: 'auto', py: 1, px: 3, borderRadius: '8px', fontWeight: 600, fontSize: '0.86rem', textTransform: 'none',
                      color: '#1e56a0', borderColor: '#1e56a0'
                    }}
                  >
                    Return to Home
                  </Button>
                )}
              </Box>
              </Paper>
            </RevealOnScroll>


            {/* RIGHT COLUMN: Summary Sidebar (Your demo + Contact Callout) */}
            <RevealOnScroll variant="slide-right">
              <Stack
                spacing={2.2}
              >
              {/* 1. Your Demo Card */}
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ede8e1',
                  borderRadius: '14px',
                  p: 2.5,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                {/* Header with Icon */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: 1.8 }}
                >
                  <Box
                    sx={{
                      color: '#1e56a0',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <SummaryNoteIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      letterSpacing: '-0.01em',
                      color: '#0b0702',
                    }}
                  >
                    Your demo
                  </Typography>
                </Stack>

                <Divider sx={{ mb: 1.4, borderColor: '#f1ede7' }} />

                {/* Body List of Summary Items */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, width: '100%' }}>
                  {/* Type Row */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      py: 0.4,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#64748b',
                        fontSize: '0.84rem',
                        fontWeight: 500,
                      }}
                    >
                      Type
                    </Typography>
                    <Typography
                      key={demoType || 'none'}
                      className="toggle-content-anim"
                      sx={{
                        fontSize: '0.84rem',
                        fontWeight: demoType ? 700 : 500,
                        color: demoType ? '#0b0702' : '#64748b',
                      }}
                    >
                      {demoType === 'online'
                        ? 'Online Demo'
                        : demoType === 'in-person'
                        ? 'In-Person Demo'
                        : '—'}
                    </Typography>
                  </Box>

                  
                  {/* Date Row */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      py: 0.4,
                    }}
                  >
                    <Typography sx={{ color: '#64748b', fontSize: '0.84rem', fontWeight: 500 }}>Date</Typography>
                    <Typography
                      key={selectedDate ? selectedDate.toString() : 'none'}
                      className="toggle-content-anim"
                      sx={{ fontSize: '0.84rem', fontWeight: selectedDate ? 700 : 500, color: selectedDate ? '#0b0702' : '#64748b' }}
                    >
                      {selectedDate ? selectedDate.format('ddd, MMM D') : '—'}
                    </Typography>
                  </Box>

                  {/* Time Row */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      py: 0.4,
                    }}
                  >
                    <Typography sx={{ color: '#64748b', fontSize: '0.84rem', fontWeight: 500 }}>Time</Typography>
                    <Typography
                      key={selectedTime || 'none'}
                      className="toggle-content-anim"
                      sx={{ fontSize: '0.84rem', fontWeight: selectedTime ? 700 : 500, color: selectedTime ? '#0b0702' : '#64748b' }}
                    >
                      {selectedTime || '—'}
                    </Typography>
                  </Box>

                </Box>
              </Card>

              {/* 2. Prefer to talk first? Contact Callout Box */}
              <Box
                sx={{
                  backgroundColor: '#f0f6ff',
                  border: '1px solid #dbeafe',
                  borderRadius: '14px',
                  p: 2.2,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: 0.6 }}
                >
                  <Box sx={{ color: '#1e56a0', display: 'flex' }}>
                    <HeadsetIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      letterSpacing: '-0.01em',
                      color: '#0b0702',
                    }}
                  >
                    Prefer to talk first?
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    color: '#475569',
                    fontSize: '0.80rem',
                    lineHeight: 1.45,
                  }}
                >
                  Have questions before booking? Call / WhatsApp{' '}
                  <Box component="a" href="tel:+233599844836" sx={{ color: '#1e56a0', textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                    +233 599 844 836
                  </Box>{' '}
                  or email{' '}
                  <Box component="a" href="mailto:admin@urionsystems.com" sx={{ color: '#1e56a0', textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                    admin@urionsystems.com
                  </Box>{' '}
                  and our team will assist you.
                </Typography>
              </Box>
            </Stack>
          </RevealOnScroll>
        </Box>
      </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

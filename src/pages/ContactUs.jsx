import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Stack,
} from '@mui/material';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// Top speech bubble icon for CONTACT US pill
function ContactTagIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1D4D87"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

// Info icon for GET IN TOUCH pill
function GetInTouchIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1D4D87"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

// Social Icons matching mockup
function FacebookIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon(props) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FFFFFF" />
    </svg>
  );
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject || `New Contact Inquiry from ${formData.fullName}`,
          message: formData.message,
          from_name: 'Urion SMS Contact Form',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (_err) {
      setErrorMessage('Network error. Please check your internet connection or email admin@urionsystems.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <PhoneRoundedIcon sx={{ fontSize: 18 }} />,
      label: 'PHONE & WHATSAPP',
      value: '+233 599 844 836',
      subtext: 'Landline: +233 (0) 30 290 8800',
      href: 'tel:+233599844836',
    },
    {
      icon: <MailOutlineRoundedIcon sx={{ fontSize: 18 }} />,
      label: 'EMAIL',
      value: 'admin@urionsystems.com',
      href: 'mailto:admin@urionsystems.com',
    },
    {
      icon: <LocationOnOutlinedIcon sx={{ fontSize: 18 }} />,
      label: 'OFFICE',
      value: 'Accra, Greater Accra Region, Ghana',
      href: '#map-section',
    },
    {
      icon: <AccessTimeRoundedIcon sx={{ fontSize: 18 }} />,
      label: 'OFFICE HOURS',
      value: 'Monday – Friday, 8am – 5pm',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#FDFBF9',
        color: '#0B0702',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <NavigationBar />

      {/* Top Banner & Main Section */}
      <Box
        component="main"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 14, sm: 17, md: 19 },
          pb: { xs: 8, md: 12 },
          backgroundColor: '#fbfcfd',
          backgroundImage: `
            radial-gradient(circle at 12% 16%, rgba(191, 219, 254, 0.42) 0%, rgba(219, 234, 254, 0.18) 35%, transparent 60%),
            radial-gradient(circle at 88% 12%, rgba(254, 240, 138, 0.48) 0%, rgba(254, 243, 199, 0.22) 32%, transparent 58%),
            radial-gradient(circle at 50% 30%, rgba(243, 244, 246, 0.5) 0%, transparent 70%)
          `,
        }}
      >
        {/* Background Subtle Architectural Grid Pattern Overlay */}
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
            maxWidth: '1160px !important',
            mx: 'auto',
            px: { xs: 2.5, sm: 3, md: 4 },
          }}
        >
          {/* Header Title & Subtitle */}
          <RevealOnScroll variant="init">
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: { xs: 6, md: 8 },
              }}
            >
              {/* Pill Tag */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  px: '14px',
                  py: '5px',
                  borderRadius: '9999px',
                  backgroundColor: '#DAEDFF',
                  mb: 2.2,
                }}
              >
                <ContactTagIcon />
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#1D4D87',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  CONTACT US
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '32px', sm: '42px', md: '46px' },
                  lineHeight: { xs: '38px', sm: '48px', md: '52px' },
                  letterSpacing: '-0.02em',
                  color: '#0B0702',
                  maxWidth: '750px',
                  mb: 1.8,
                }}
              >
                Let’s talk about your school.
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: '15px', sm: '16px' },
                  lineHeight: '25px',
                  color: '#5B5449',
                  maxWidth: '620px',
                }}
              >
                Have questions about the platform or want to discuss how it could work for your school? We’d love to hear from you.
              </Typography>
            </Box>
          </RevealOnScroll>

          {/* Two Column Section (Contact Info + Contact Form) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '390px 1fr' },
              gap: { xs: 5, md: '44px' },
              alignItems: 'start',
              mb: { xs: 8, md: 11 },
            }}
          >
            {/* Left Column: Get In Touch & Contact Cards */}
            <RevealOnScroll variant="slide-left">
              <Box>
                {/* Overline Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    px: '12px',
                    py: '4px',
                    borderRadius: '9999px',
                    backgroundColor: '#DAEDFF',
                    mb: 1.6,
                  }}
                >
                  <GetInTouchIcon />
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#1D4D87',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    }}
                  >
                    GET IN TOUCH
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: '24px', sm: '28px' },
                    lineHeight: '34px',
                    color: '#0B0702',
                    mb: 1.2,
                  }}
                >
                  We’re here to help.
                </Typography>

                {/* Subtext */}
                <Typography
                  sx={{
                    fontSize: '13.5px',
                    lineHeight: '21px',
                    color: '#6B7280',
                    mb: 3,
                  }}
                >
                  Whether you’re exploring the platform, ready to see a demo, or just have a question, reach out through any of the channels below.
                </Typography>

                {/* 4 Contact Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '11px', mb: 3.5 }}>
                  {contactCards.map((card, idx) => {
                    const CardWrapper = card.href ? 'a' : 'div';
                    return (
                      <Box
                        key={idx}
                        component={CardWrapper}
                        href={card.href || undefined}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          p: '13px 18px',
                          borderRadius: '12px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #EFEBE4',
                          textDecoration: 'none',
                          color: 'inherit',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                          transition: 'all 0.2s ease',
                          '&:hover': card.href
                            ? {
                                transform: 'translateY(-2px)',
                                borderColor: '#CBD5E1',
                                boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                              }
                            : {},
                        }}
                      >
                        {/* Icon Box */}
                        <Box
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '8px',
                            backgroundColor: '#DAEDFF',
                            color: '#2863AB',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {card.icon}
                        </Box>

                        {/* Text */}
                        <Box sx={{ minWidth: 0 }}>
                          <Typography
                            sx={{
                              fontSize: '10.5px',
                              fontWeight: 600,
                              letterSpacing: '0.06em',
                              color: '#8A847C',
                              textTransform: 'uppercase',
                              lineHeight: 1.2,
                              mb: '2px',
                            }}
                          >
                            {card.label}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '13.5px',
                              fontWeight: 700,
                              color: '#111827',
                              lineHeight: 1.3,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {card.value}
                          </Typography>
                          {card.subtext && (
                            <Typography sx={{ fontSize: '11px', color: '#64748B', mt: '2px', fontWeight: 500 }}>
                              {card.subtext}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>

                {/* Follow Us */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#111827',
                      mb: 1.2,
                    }}
                  >
                    Follow us
                  </Typography>
                  <Stack direction="row" spacing={1.2}>
                    {[
                      { icon: <FacebookIcon />, label: 'Facebook', href: '#facebook' },
                      { icon: <InstagramIcon />, label: 'Instagram', href: '#instagram' },
                      { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#linkedin' },
                      { icon: <XIcon />, label: 'X', href: '#x' },
                      { icon: <YouTubeIcon />, label: 'YouTube', href: '#youtube' },
                    ].map((social, i) => (
                      <Box
                        key={i}
                        component="a"
                        href={social.href}
                        aria-label={social.label}
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: '8px',
                          border: '1px solid #E5E7EB',
                          backgroundColor: '#FFFFFF',
                          color: '#4B5563',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: '#2863AB',
                            color: '#2863AB',
                            backgroundColor: '#F0F6FF',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {social.icon}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </RevealOnScroll>

            {/* Right Column: Contact Form Card */}
            <RevealOnScroll variant="slide-right">
              <Card
                elevation={0}
                sx={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EFEBE4',
                  borderRadius: '14px',
                  p: { xs: '26px 20px', sm: '32px 30px' },
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                }}
              >
                {submitted ? (
                  /* Success Confirmation View */
                  <Box
                    className="toggle-content-anim"
                    sx={{
                      textAlign: 'center',
                      py: 6,
                      px: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                  <Box
                    className="checkmark-pop"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: '#DAEDFF',
                      color: '#2863AB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <CheckCircleRoundedIcon sx={{ fontSize: 34 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: '22px',
                      color: '#0B0702',
                      mb: 1,
                    }}
                  >
                    Message Sent Successfully!
                  </Typography>
                  <Typography sx={{ fontSize: '14px', color: '#5B5449', maxWidth: '380px', mb: 3 }}>
                    Thank you, {formData.fullName}. Our team has received your enquiry and will respond within 24 hours.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', subject: '', message: '' });
                      setErrorMessage('');
                    }}
                    sx={{
                      borderColor: '#E5E7EB',
                      color: '#111827',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 3,
                      py: 1,
                      '&:hover': {
                        borderColor: '#CBD5E1',
                        backgroundColor: '#FAF8F5',
                      },
                    }}
                  >
                    Send another message
                  </Button>
                </Box>
              ) : (
                /* Interactive Form */
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Full name and Email address */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: '16px',
                      mb: 2,
                    }}
                  >
                    {/* Full Name */}
                    <Box>
                      <Typography
                        component="label"
                        htmlFor="fullName"
                        sx={{
                          display: 'block',
                          fontSize: '12.5px',
                          fontWeight: 600,
                          color: '#111827',
                          mb: '6px',
                        }}
                      >
                        Full name
                      </Typography>
                      <Box
                        component="input"
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={handleChange}
                        sx={{
                          width: '100%',
                          height: '42px',
                          px: '14px',
                          fontSize: '13.5px',
                          fontFamily: "'Inter', sans-serif",
                          color: '#111827',
                          backgroundColor: '#FAF8F5',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          outline: 'none',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          '&::placeholder': { color: '#9CA3AF' },
                          '&:focus': {
                            borderColor: '#2863AB',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 0 0 3px rgba(40, 99, 171, 0.12)',
                          },
                        }}
                      />
                    </Box>

                    {/* Email address */}
                    <Box>
                      <Typography
                        component="label"
                        htmlFor="email"
                        sx={{
                          display: 'block',
                          fontSize: '12.5px',
                          fontWeight: 600,
                          color: '#111827',
                          mb: '6px',
                        }}
                      >
                        Email address
                      </Typography>
                      <Box
                        component="input"
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@school.com"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{
                          width: '100%',
                          height: '42px',
                          px: '14px',
                          fontSize: '13.5px',
                          fontFamily: "'Inter', sans-serif",
                          color: '#111827',
                          backgroundColor: '#FAF8F5',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          outline: 'none',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          '&::placeholder': { color: '#9CA3AF' },
                          '&:focus': {
                            borderColor: '#2863AB',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 0 0 3px rgba(40, 99, 171, 0.12)',
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Row 2: Subject */}
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      component="label"
                      htmlFor="subject"
                      sx={{
                        display: 'block',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#111827',
                        mb: '6px',
                      }}
                    >
                      Subject
                    </Typography>
                    <Box
                      component="input"
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What would you like to talk about?"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{
                        width: '100%',
                        height: '42px',
                        px: '14px',
                        fontSize: '13.5px',
                        fontFamily: "'Inter', sans-serif",
                        color: '#111827',
                        backgroundColor: '#FAF8F5',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        '&::placeholder': { color: '#9CA3AF' },
                        '&:focus': {
                          borderColor: '#2863AB',
                          backgroundColor: '#FFFFFF',
                          boxShadow: '0 0 0 3px rgba(40, 99, 171, 0.12)',
                        },
                      }}
                    />
                  </Box>

                  {/* Row 3: Message */}
                  <Box sx={{ mb: 1 }}>
                    <Typography
                      component="label"
                      htmlFor="message"
                      sx={{
                        display: 'block',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#111827',
                        mb: '6px',
                      }}
                    >
                      Message
                    </Typography>
                    <Box
                      component="textarea"
                      id="message"
                      name="message"
                      required
                      maxLength={500}
                      rows={5}
                      placeholder="Tell us a little about your school and how we can help."
                      value={formData.message}
                      onChange={handleChange}
                      sx={{
                        width: '100%',
                        minHeight: '128px',
                        p: '12px 14px',
                        fontSize: '13.5px',
                        fontFamily: "'Inter', sans-serif",
                        color: '#111827',
                        backgroundColor: '#FAF8F5',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        '&::placeholder': { color: '#9CA3AF' },
                        '&:focus': {
                          borderColor: '#2863AB',
                          backgroundColor: '#FFFFFF',
                          boxShadow: '0 0 0 3px rgba(40, 99, 171, 0.12)',
                        },
                      }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '4px', mb: 2 }}>
                      <Typography sx={{ fontSize: '11px', color: '#9CA3AF' }}>
                        {formData.message.length > 0 ? `${500 - formData.message.length} characters left` : '500 characters max'}
                      </Typography>
                    </Box>
                  </Box>

                  {errorMessage && (
                    <Box
                      sx={{
                        mb: 2,
                        p: 1.5,
                        borderRadius: '8px',
                        backgroundColor: '#FEF2F2',
                        border: '1px solid #FCA5A5',
                        color: '#991B1B',
                        fontSize: '13px',
                      }}
                    >
                      {errorMessage}
                    </Box>
                  )}

                  {/* Row 4: Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      height: '44px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '14px',
                      textTransform: 'none',
                      backgroundColor: '#2863AB',
                      color: '#FFFFFF',
                      boxShadow: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#1D4D87',
                        boxShadow: '0 4px 12px rgba(40, 99, 171, 0.25)',
                        transform: 'translateY(-1px)',
                      },
                      '&.Mui-disabled': {
                        backgroundColor: '#93C5FD',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <span>{isSubmitting ? 'Sending message...' : 'Send message'}</span>
                    <SendRoundedIcon sx={{ fontSize: 16 }} />
                  </Button>
                </Box>
              )}
            </Card>
          </RevealOnScroll>
        </Box>

        {/* Bottom Interactive Map Component Matching Mockup */}
        <RevealOnScroll variant="pop-up">
          <Box
            id="map-section"
            sx={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #EFEBE4',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
            }}
          >
            {/* Real Interactive Google Map */}
            <Box
              sx={{
                height: { xs: 320, sm: 380, md: 440 },
                width: '100%',
                position: 'relative',
                backgroundColor: '#F4F2EC',
                overflow: 'hidden',
                '& iframe': {
                  width: '100%',
                  height: '100%',
                  border: 0,
                  display: 'block',
                },
              }}
            >
              <iframe
                title="Urion Systems Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.534874755158!2d-0.10424292501425161!3d5.635448194345705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8536e566f01b%3A0xc8a2a7521909ac24!2sUrion%20Systems!5e0!3m2!1sen!2sgh!4v1789383062070!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </Box>

            {/* Bottom Address & Directions Bar */}
            <Box
              sx={{
                px: { xs: 2.5, sm: 3 },
                py: 2,
                backgroundColor: '#FFFFFF',
                borderTop: '1px solid #EFEBE4',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                justifyContent: 'space-between',
                gap: 1.5,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <LocationOnOutlinedIcon sx={{ color: '#2863AB', fontSize: 20 }} />
                <Typography sx={{ fontSize: '13.5px', color: '#374151', fontWeight: 500 }}>
                  Urion Systems · Greater Accra, Ghana
                </Typography>
              </Box>
              <Button
                component="a"
                href="https://www.google.com/maps/search/?api=1&query=Urion+Systems"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#2863AB',
                  fontWeight: 600,
                  fontSize: '13px',
                  textTransform: 'none',
                  p: 0,
                  minWidth: 'auto',
                  '&:hover': {
                    color: '#1D4D87',
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                  },
                }}
              >
                Get directions ↗
              </Button>
            </Box>
          </Box>
          </RevealOnScroll>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

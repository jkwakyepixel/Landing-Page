import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Divider,
} from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RevealOnScroll from './RevealOnScroll';
import edukraIcon from '../assets/edukra-icon.png';

// Social media SVG icons matching mockup
function FacebookIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
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
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0c0a07" />
    </svg>
  );
}

// Official Google Play Store Icon
function GooglePlayIcon(props) {
  return (
    <svg width="17" height="19" viewBox="0 0 512 512" fill="none" {...props}>
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#ea4335" />
      <path d="M47 36.7v438.5L265.8 256 47 36.7z" fill="#4285f4" />
      <path d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" fill="#34a853" />
      <path d="M449.8 238.1l-64.4-37-60.1 60.1 60.1 60.1 64.4-37c15.2-8.7 24.2-24.6 24.2-43.1s-9-34.4-24.2-43.1z" fill="#fbbc04" />
    </svg>
  );
}

// Footer link data mapping
const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Platform Overview', href: '#solution' },
      { label: 'System Modules', href: '#modules' },
      { label: 'Pricing Plans', href: '#pricing' },
      { label: 'Campus Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Administrators', href: '#experiences' },
      { label: 'Teachers', href: '#experiences' },
      { label: 'Staff & HR', href: '#experiences' },
      { label: 'Students', href: '#experiences' },
      { label: 'Parents', href: '#experiences' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story & History', href: '#history' },
      { label: 'Mission & Vision', href: '#mission' },
      { label: 'Why This System', href: '#why-this-system' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'School Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Core Architecture', href: '#solution' },
      { label: 'Module Breakdown', href: '#modules' },
      { label: 'Why Choose Edukra', href: '#why-this-system' },
      { label: 'Book a Demo', href: '#book-demo' },
      { label: 'Make an Enquiry', href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#121214', // Apple dark obsidian
        color: '#ffffff',
        pt: { xs: 4, sm: 5, md: 6 },
        pb: { xs: 5, md: 6 },
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1120px',
          mx: 'auto',
          px: { xs: 2.5, sm: 3, md: 4 },
        }}
      >
        {/* Top Grid Area (Brand Info + 4 Link Columns) */}
        <RevealOnScroll variant="init">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: '3.5fr 2.1fr 2.1fr 2.1fr 2.1fr',
              },
              gap: { xs: 3.5, sm: 4, md: '36px' },
              alignItems: 'flex-start',
            }}
        >
          {/* Left Brand Column */}
          <Box sx={{ gridColumn: { xs: '1 / -1', md: '1 / 2' } }}>
            {/* Logo + Product Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Box
                component="img"
                src={edukraIcon}
                alt="Edukra Logo"
                sx={{
                  width: 30,
                  height: 30,
                  objectFit: 'contain',
                }}
              />
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                  fontWeight: 750,
                  fontSize: '1.15rem',
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                }}
              >
                Edukra
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.58)',
                fontSize: '0.78rem',
                lineHeight: 1.6,
                mt: '12px',
                mb: '16px',
                maxWidth: 260,
              }}
            >
              One connected school management platform for administrators, teachers, staff, students and parents.
            </Typography>

            {/* Contact Details */}
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MailOutlineRoundedIcon sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.45)' }} />
                <Typography
                  component="span"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.65)',
                    fontSize: '0.76rem',
                    fontWeight: 450,
                  }}
                >
                  admin@urionsystems.com
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PhoneOutlinedIcon sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.45)' }} />
                <Typography
                  component="span"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.65)',
                    fontSize: '0.76rem',
                    fontWeight: 450,
                  }}
                >
                  +233 599 844 836
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.45)' }} />
                <Typography
                  component="span"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.65)',
                    fontSize: '0.76rem',
                    fontWeight: 450,
                  }}
                >
                  Accra, Greater Accra, Ghana
                </Typography>
              </Box>
            </Stack>

            {/* Google Play Store Badge */}
            <Box
              component="a"
              href="https://play.google.com/store/apps/details?id=com.urionsystems.edukraparent"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                mt: 2.5,
                px: 1.8,
                py: 0.9,
                borderRadius: '12px',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.14)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-1px)',
                },
                '&:active': {
                  transform: 'scale(0.976)',
                },
              }}
            >
              <GooglePlayIcon />
              <Box sx={{ textAlign: 'left', lineHeight: 1.15 }}>
                <Typography sx={{ fontSize: '0.60rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 600 }}>
                  Get Edukra Parents on
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>
                  Google Play
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right 4 Link Columns */}
          {footerColumns.map((col) => (
            <Box key={col.title}>
              <Typography
                component="h4"
                sx={{
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: 650,
                  letterSpacing: '-0.01em',
                  mb: '14px',
                }}
              >
                {col.title}
              </Typography>

              <Stack spacing={0.8}>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.58)',
                      fontSize: '0.73rem',
                      fontWeight: 400,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Horizontal Divider */}
        <Divider
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.08)',
            my: { xs: 3, md: 3.5 },
          }}
        />

        {/* Bottom Row (Socials & Copyright) */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2.5}
        >
          {/* Social Media Outlined Apple Pills */}
          <Stack direction="row" spacing={1} alignItems="center">
            {[
              { id: 'linkedin', icon: LinkedInIcon, label: 'LinkedIn', url: 'https://linkedin.com' },
              { id: 'facebook', icon: FacebookIcon, label: 'Facebook', url: 'https://facebook.com' },
              { id: 'instagram', icon: InstagramIcon, label: 'Instagram', url: 'https://instagram.com' },
              { id: 'x', icon: XIcon, label: 'X (Twitter)', url: 'https://x.com' },
              { id: 'youtube', icon: YouTubeIcon, label: 'YouTube', url: 'https://youtube.com' },
            ].map((social) => {
              const SocialIcon = social.icon;
              return (
                <Box
                  key={social.id}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    color: 'rgba(255, 255, 255, 0.65)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.32)',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      transform: 'translateY(-1px)',
                    },
                    '&:active': {
                      transform: 'scale(0.95)',
                    },
                  }}
                >
                  <SocialIcon />
                </Box>
              );
            })}
          </Stack>

          {/* Copyright & Legal Links */}
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.52)',
              fontSize: '0.78rem',
              fontWeight: 450,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-end' },
            }}
          >
            <span>© 2026 Urion Systems Ltd. All rights reserved.</span>
            <span>·</span>
            <Link
              href="https://play.google.com/store/apps/details?id=com.urionsystems.edukraparent"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#2997ff',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#70baff',
                  textDecoration: 'underline',
                },
              }}
            >
              Google Play App
            </Link>
            <span>·</span>
            <Link
              href="#privacy"
              sx={{
                color: 'rgba(255, 255, 255, 0.52)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'rgba(255, 255, 255, 0.88)',
                },
              }}
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="#edukra-privacy"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              Edukra Parents Privacy
            </Link>
            <span>·</span>
            <Link
              href="#delete-account"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              Delete Account
            </Link>
            <span>·</span>
            <Link
              href="#terms"
              sx={{
                color: 'rgba(255, 255, 255, 0.52)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'rgba(255, 255, 255, 0.88)',
                },
              }}
            >
              Terms of Service
            </Link>
          </Typography>
        </Stack>
        </RevealOnScroll>
      </Container>
    </Box>
  );
}

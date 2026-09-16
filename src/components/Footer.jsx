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

// Footer link data mapping
const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '#platform' },
      { label: 'Modules', href: '#modules' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Product Showcase', href: '#showcase' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Administrators', href: '#experiences' },
      { label: 'Teachers', href: '#experiences' },
      { label: 'Staff', href: '#experiences' },
      { label: 'Students', href: '#experiences' },
      { label: 'Parents', href: '#experiences' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'History', href: '#history' },
      { label: 'Mission & Vision', href: '#mission' },
      { label: 'Why This System', href: '#why-this-system' },
      { label: 'Contact', href: '#contact' },
      { label: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Manuscript', href: '#manuscript' },
      { label: 'Documentation', href: '#docs' },
      { label: 'FAQs', href: '#faqs' },
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
        backgroundColor: '#0c0a07', // Deep warm obsidian black from mockup
        color: '#ffffff',
        pt: { xs: 2.5, sm: 3, md: 3.5 },
        pb: { xs: 4, md: 5 },
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
              gap: { xs: 3, sm: 3.5, md: '32px' },
              alignItems: 'flex-start',
            }}
        >
          {/* Left Brand Column */}
          <Box sx={{ gridColumn: { xs: '1 / -1', md: '1 / 2' } }}>
            {/* Logo + Product Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: '6px',
                  backgroundColor: '#1d68d8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <SchoolRoundedIcon sx={{ fontSize: 15, color: '#ffffff' }} />
              </Box>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: 750,
                  fontSize: '0.92rem',
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                }}
              >
                Urion SMS
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.52)',
                fontSize: '0.74rem',
                lineHeight: 1.55,
                mt: '10px',
                mb: '14px',
                maxWidth: 260,
              }}
            >
              One connected school management platform for administrators, teachers, staff, students and parents.
            </Typography>

            {/* Contact Details */}
            <Stack spacing={0.8}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MailOutlineRoundedIcon sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.45)' }} />
                <Typography
                  component="span"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.58)',
                    fontSize: '0.72rem',
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
                    color: 'rgba(255, 255, 255, 0.58)',
                    fontSize: '0.72rem',
                    fontWeight: 450,
                  }}
                >
                  +233 599 844 836 / +233 (0) 30 290 8800
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.45)' }} />
                <Typography
                  component="span"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.58)',
                    fontSize: '0.72rem',
                    fontWeight: 450,
                  }}
                >
                  Accra, Greater Accra, Ghana
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right 4 Link Columns */}
          {footerColumns.map((col) => (
            <Box key={col.title}>
              <Typography
                component="h4"
                sx={{
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  mb: '12px',
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
          {/* Social Media Outlined Boxes */}
          <Stack direction="row" spacing={1} alignItems="center">
            {[
              { id: 'facebook', icon: FacebookIcon, label: 'Facebook' },
              { id: 'instagram', icon: InstagramIcon, label: 'Instagram' },
              { id: 'linkedin', icon: LinkedInIcon, label: 'LinkedIn' },
              { id: 'x', icon: XIcon, label: 'X (Twitter)' },
              { id: 'youtube', icon: YouTubeIcon, label: 'YouTube' },
            ].map((social) => {
              const SocialIcon = social.icon;
              return (
                <Box
                  key={social.id}
                  component="a"
                  href={`#${social.id}`}
                  aria-label={social.label}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    color: 'rgba(255, 255, 255, 0.65)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.32)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#ffffff',
                      transform: 'translateY(-1px)',
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
              color: 'rgba(255, 255, 255, 0.48)',
              fontSize: '0.78rem',
              fontWeight: 450,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-end' },
            }}
          >
            <span>© 2026 Urion Systems Ltd. All rights reserved.</span>
            <span>·</span>
            <Link
              href="#privacy"
              sx={{
                color: 'rgba(255, 255, 255, 0.48)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'rgba(255, 255, 255, 0.85)',
                },
              }}
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="#terms"
              sx={{
                color: 'rgba(255, 255, 255, 0.48)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'rgba(255, 255, 255, 0.85)',
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

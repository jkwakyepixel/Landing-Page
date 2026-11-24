import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import RevealOnScroll from './RevealOnScroll';

import crestonLogo from '../assets/partners/creston-college.webp';
import graceBudsLogo from '../assets/partners/grace-buds-montessori.webp';
import childSurvivalLogo from '../assets/partners/child-survival-school.webp';

const partnerSchools = [
  {
    name: 'Creston College',
    category: 'Tertiary & Career College · Accra',
    logo: crestonLogo,
    logoMaxHeight: 86,
    href: 'https://crestoncollege.edu.gh/',
    domainLabel: 'crestoncollege.edu.gh',
    circular: false,
  },
  {
    name: 'Grace Buds Montessori',
    category: 'Early Childhood · North Legon',
    logo: graceBudsLogo,
    logoMaxHeight: 62,
    href: 'https://gracebudsmontessori.com/',
    domainLabel: 'gracebudsmontessori.com',
    circular: false,
  },
  {
    name: 'Child Survival Academy',
    category: 'Basic & Prep School · Nungua, Accra',
    logo: childSurvivalLogo,
    logoMaxHeight: 84,
    href: null,
    domainLabel: 'Verified Partner Campus',
    circular: true,
  },
];

export default function PartnerSchoolsSection() {
  return (
    <Box
      component="section"
      id="partners"
      aria-label="Partner Schools"
      sx={{
        width: '100%',
        backgroundColor: '#f7f6f2',
        pt: { xs: 4, sm: 5, md: 6 },
        pb: { xs: 2, sm: 2.5, md: 3 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1240px',
          mx: 'auto',
          px: { xs: 2.5, sm: 3.5, md: 5 },
        }}
      >
        <RevealOnScroll variant="pop-up">
          <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                px: 1.5,
                py: 0.45,
                borderRadius: '9999px',
                backgroundColor: '#dbeafe',
                border: '1px solid #bfdbfe',
                color: '#1d4ed8',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                mb: 1.4,
              }}
            >
              <VerifiedRoundedIcon sx={{ fontSize: 13 }} />
              Trusted Partner Schools
            </Box>

            <Typography
              component="h2"
              sx={{
                fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '1.45rem', sm: '1.75rem', md: '2rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#141416',
                mb: 0.75,
              }}
            >
              Powering daily operations across forward-thinking institutions.
            </Typography>
            <Typography
              sx={{
                color: '#52525b',
                fontSize: { xs: '0.9rem', sm: '0.96rem' },
                maxWidth: 560,
                mx: 'auto',
                lineHeight: 1.5,
              }}
            >
              Built alongside school leaders, bursars, and teachers across Ghana.
            </Typography>
          </Box>
        </RevealOnScroll>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {partnerSchools.map((school, idx) => {
            const isLinked = Boolean(school.href);
            return (
              <RevealOnScroll key={school.name} variant="pop-up" delay={idx * 0.06} sx={{ height: '100%' }}>
                <Box
                  component={isLinked ? 'a' : 'div'}
                  href={school.href || undefined}
                  target={isLinked ? '_blank' : undefined}
                  rel={isLinked ? 'noopener noreferrer' : undefined}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid #e4e2dc',
                    p: { xs: 2.5, md: 3 },
                    textDecoration: 'none',
                    color: 'inherit',
                    boxShadow: '0 4px 16px rgba(20, 20, 22, 0.035)',
                    transition:
                      'transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.28s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      borderColor: '#93c5fd',
                      boxShadow: '0 14px 32px rgba(0, 113, 227, 0.09)',
                      '& .partner-arrow': {
                        transform: 'translate(2px, -2px)',
                        color: '#0071e3',
                      },
                    },
                  }}
                >
                  {/* Clean Logo Frame */}
                  <Box
                    sx={{
                      height: { xs: 92, md: 104 },
                      width: '100%',
                      borderRadius: '14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 1.75,
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={school.logo}
                      alt={`${school.name} official logo`}
                      loading="lazy"
                      decoding="async"
                      sx={{
                        maxHeight: school.logoMaxHeight,
                        maxWidth: '90%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: school.circular ? '50%' : 0,
                        display: 'block',
                      }}
                    />
                  </Box>

                  {/* School Metadata */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                        fontWeight: 750,
                        fontSize: '1.08rem',
                        color: '#141416',
                        letterSpacing: '-0.015em',
                        lineHeight: 1.25,
                      }}
                    >
                      {school.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.82rem',
                        color: '#52525b',
                        mt: 0.35,
                        lineHeight: 1.4,
                      }}
                    >
                      {school.category}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        mt: 1.75,
                        pt: 1.35,
                        borderTop: '1px solid #f1f5f9',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          color: isLinked ? '#0071e3' : '#64748b',
                        }}
                      >
                        {school.domainLabel}
                      </Typography>
                      {isLinked && (
                        <NorthEastRoundedIcon
                          className="partner-arrow"
                          sx={{
                            fontSize: 15,
                            color: '#64748b',
                            transition: 'transform 0.2s ease, color 0.2s ease',
                          }}
                        />
                      )}
                    </Stack>
                  </Box>
                </Box>
              </RevealOnScroll>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

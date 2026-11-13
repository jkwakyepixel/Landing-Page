import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
} from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import edukraIcon from '../assets/edukra-icon.png';

const navItems = [
  { label: 'Home', hasDropdown: false },
  {
    label: 'About',
    hasDropdown: true,
    dropdownItems: [
      { label: 'History', hash: '#history' },
      { label: 'Mission, Vision & Goals', hash: '#mission' },
      { label: 'Why We Built This', hash: '#why-this-system' },
    ],
  },
  { label: 'Solutions', hasDropdown: false, hash: '#solution' },
  { label: 'Modules', hasDropdown: false, hash: '#modules' },
  { label: 'Gallery', hasDropdown: false, hash: '#gallery' },
  { label: 'Contact', hasDropdown: false, hash: '#contact' },
];

export default function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const [activeDropdownLabel, setActiveDropdownLabel] = useState(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 20);
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleDropdownToggle = (event, label) => {
    if (activeDropdownLabel === label && Boolean(dropdownAnchorEl)) {
      handleDropdownClose();
    } else {
      setDropdownAnchorEl(event.currentTarget);
      setActiveDropdownLabel(label);
    }
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
    setActiveDropdownLabel(null);
  };

  const handleNavClick = (label, hash = null) => {
    handleDropdownClose();

    // Handle dropdown items specifically
    if (hash) {
      if (window.location.hash === hash) {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      } else {
        window.location.hash = hash;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (label === 'Contact') {
      window.location.hash = '#contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (label === 'Modules') {
      window.location.hash = '#modules';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (label === 'Gallery') {
      window.location.hash = '#gallery';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (label === 'Solutions') {
      window.location.hash = '#solution';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const isNonHomeRoute = window.location.hash && window.location.hash !== '' && window.location.hash !== '#';

    if (isNonHomeRoute) {
      window.location.hash = '';
      setTimeout(() => {
        if (label === 'Home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    if (label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (label === 'Solutions') {
      document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isScrolled ? 'rgba(247, 246, 242, 0.88)' : 'rgba(247, 246, 242, 0.72)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: isScrolled ? '1px solid rgba(20, 20, 22, 0.09)' : '1px solid rgba(20, 20, 22, 0.05)',
          boxShadow: isScrolled ? '0 4px 24px -4px rgba(20, 20, 22, 0.05)' : 'none',
          zIndex: 1100,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 74 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 1.5, sm: 2, md: 4 },
          }}
        >
          {/* Left: Product Logo & Brand */}
          <Box
            component="a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.hash) {
                window.location.hash = '';
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.15,
              textDecoration: 'none',
              color: 'inherit',
              userSelect: 'none',
              transition: 'opacity 0.2s ease',
              '&:hover': {
                opacity: 0.85,
              },
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
          >
            {/* Logo Icon Badge */}
            <Box
              component="img"
              src={edukraIcon}
              alt="Edukra Logo"
              sx={{
                width: 34,
                height: 34,
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 8px rgba(0, 113, 227, 0.18))',
              }}
            />

            {/* Editorial Wordmark */}
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '1.25rem', md: '1.42rem' },
                letterSpacing: '-0.04em',
                color: '#141416',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Edukra
              <Box
                component="span"
                aria-hidden="true"
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  backgroundColor: '#0071e3',
                  border: '1.5px solid #141416',
                  display: 'inline-block',
                  mt: 0.35,
                }}
              />
            </Typography>
          </Box>

          {/* Center: Desktop Navigation Links (Clean Editorial) */}
          <Stack
            direction="row"
            spacing={{ md: 0.5, lg: 1.25 }}
            alignItems="center"
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexShrink: 1,
            }}
          >
            {navItems.map((item) => {
              const isOpen = item.hasDropdown && activeDropdownLabel === item.label && Boolean(dropdownAnchorEl);
              const isActive = (item.label === 'Home' && (activeHash === '' || activeHash === '#')) || 
                               (item.hash && activeHash === item.hash) || 
                               (item.hasDropdown && item.dropdownItems.some(di => di.hash === activeHash));

              return (
                <Box key={item.label}>
                  <Button
                    variant="text"
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        handleDropdownToggle(e, item.label);
                      } else {
                        handleNavClick(item.label, item.hash);
                      }
                    }}
                    endIcon={
                      item.hasDropdown ? (
                        <KeyboardArrowDownRoundedIcon
                          sx={{
                            fontSize: '16px !important',
                            ml: -0.5,
                            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                            transform: isOpen ? 'rotate(180deg)' : 'none',
                          }}
                        />
                      ) : null
                    }
                    sx={{
                      color: isActive ? '#141416' : '#52525b',
                      fontWeight: (isActive || isOpen) ? 700 : 500,
                      fontSize: { md: '0.87rem', lg: '0.91rem' },
                      letterSpacing: '-0.015em',
                      px: { md: 1.4, lg: 1.7 },
                      py: 0.7,
                      minWidth: 'auto',
                      whiteSpace: 'nowrap',
                      borderRadius: '9999px',
                      textTransform: 'none',
                      position: 'relative',
                      backgroundColor: isActive ? 'rgba(20, 20, 22, 0.06)' : isOpen ? 'rgba(20, 20, 22, 0.05)' : 'transparent',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      '&:hover': {
                        color: '#141416',
                        backgroundColor: 'rgba(20, 20, 22, 0.05)',
                      },
                      '&:active': {
                        transform: 'scale(0.97)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>

                  {/* Dropdown Menu for items with dropdown */}
                  {item.hasDropdown && (
                    <Menu
                      anchorEl={isOpen ? dropdownAnchorEl : null}
                      open={isOpen}
                      onClose={handleDropdownClose}
                      elevation={0}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      PaperProps={{
                        sx: {
                          mt: 1.2,
                          minWidth: item.label === 'Modules' ? 240 : 220,
                          borderRadius: '16px',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          backgroundColor: 'rgba(255, 255, 255, 0.90)',
                          backdropFilter: 'blur(24px) saturate(190%)',
                          WebkitBackdropFilter: 'blur(24px) saturate(190%)',
                          boxShadow: '0 16px 40px -8px rgba(0, 0, 0, 0.12)',
                          p: 0.8,
                        },
                      }}
                    >
                      {item.dropdownItems?.map((dropItem, idx) => {
                        const isDropItemActive = dropItem.hash === activeHash;
                        
                        return (
                          <MenuItem
                            key={idx}
                            onClick={() => handleNavClick(dropItem.label, dropItem.hash)}
                            sx={{
                              borderRadius: '10px',
                              py: 1,
                              px: 1.6,
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '13.5px',
                              color: isDropItemActive ? '#0071e3' : '#1d1d1f',
                              fontWeight: isDropItemActive ? 600 : 500,
                              backgroundColor: isDropItemActive ? 'rgba(0, 113, 227, 0.08)' : 'transparent',
                              transition: 'all 0.15s ease',
                              '&:hover': {
                                backgroundColor: isDropItemActive ? 'rgba(0, 113, 227, 0.12)' : 'rgba(0, 0, 0, 0.04)',
                                color: '#0071e3',
                                '& .arrow-icon': {
                                  opacity: 1,
                                  transform: 'translateX(0)',
                                  color: '#0071e3',
                                },
                              },
                            }}
                          >
                            {dropItem.label}
                          <ArrowForwardRoundedIcon 
                            className="arrow-icon"
                            sx={{ 
                              fontSize: 13, 
                              opacity: 0.35,
                              color: '#6e6e73',
                              transform: 'translateX(-4px)',
                              transition: 'all 0.2s ease',
                            }} 
                          />
                        </MenuItem>
                        );
                      })}
                    </Menu>
                  )}
                </Box>
              );
            })}
          </Stack>

          {/* Right: CTA Buttons (Desktop) */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexShrink: 0,
            }}
          >
            <Button
              variant="text"
              sx={{
                color: '#141416',
                backgroundColor: 'transparent',
                fontWeight: 600,
                fontSize: '0.88rem',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                height: 40,
                px: { sm: 1.8, md: 2.1 },
                borderRadius: '9999px',
                textTransform: 'none',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(20, 20, 22, 0.05)',
                },
                '&:active': {
                  transform: 'scale(0.976)',
                },
              }}
              onClick={() => {
                window.location.hash = '#contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '15px !important' }} />}
              onClick={() => {
                window.location.hash = '#book-demo';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                fontWeight: 650,
                fontSize: '0.88rem',
                letterSpacing: '-0.015em',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                height: 40,
                px: { sm: 2.2, md: 2.6 },
                borderRadius: '9999px',
                textTransform: 'none',
                backgroundColor: '#141416',
                color: '#ffffff',
                boxShadow: '0 2px 10px rgba(20, 20, 22, 0.16)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  backgroundColor: '#0071e3',
                  boxShadow: '0 6px 18px rgba(0, 113, 227, 0.32)',
                  transform: 'translateY(-1px)',
                },
                '&:active': {
                  transform: 'scale(0.976)',
                },
              }}
            >
              Book a Demo
            </Button>
          </Stack>

          {/* Mobile Hamburger Toggle */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: '#1e293b',
              ml: 1,
            }}
          >
            <MenuRoundedIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>

    {/* Mobile Navigation Drawer - Rendered outside AppBar so it overlays cleanly */}
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better mobile performance
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        zIndex: 1300,
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: { xs: 'min(320px, 86vw)', sm: 340 },
          p: { xs: 2.5, sm: 3 },
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(28px) saturate(190%)',
          WebkitBackdropFilter: 'blur(28px) saturate(190%)',
          borderRadius: { xs: '24px 0 0 24px', sm: '28px 0 0 28px' },
          overflowY: 'auto',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      <Box>
        {/* Drawer Header with Logo & Close Button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5, pt: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <Box
              component="img"
              src={edukraIcon}
              alt="Edukra Logo"
              sx={{
                width: 34,
                height: 34,
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(0, 113, 227, 0.2))',
              }}
            />
            <Typography variant="h6" sx={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif', fontWeight: 750, fontSize: '1.2rem', color: '#1d1d1f', letterSpacing: '-0.03em' }}>
              Edukra
            </Typography>
          </Box>
          <IconButton 
            onClick={handleDrawerToggle} 
            size="small"
            sx={{
              color: '#6e6e73',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              p: 0.75,
              borderRadius: '9999px',
              transition: 'all 0.2s ease',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', color: '#1d1d1f' },
              '&:active': { transform: 'scale(0.95)' },
            }}
          >
            <CloseRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2, borderColor: 'rgba(0, 0, 0, 0.06)' }} />

        <List disablePadding>
          {navItems.map((item) => {
            const isMenuExpanded = item.hasDropdown && mobileExpandedMenu === item.label;
            const isActive = (item.label === 'Home' && (activeHash === '' || activeHash === '#')) || 
                             (item.hash && activeHash === item.hash) || 
                             (item.hasDropdown && item.dropdownItems.some(di => di.hash === activeHash));

            return (
              <React.Fragment key={item.label}>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => {
                      if (item.hasDropdown) {
                        setMobileExpandedMenu(isMenuExpanded ? null : item.label);
                      } else {
                        handleDrawerToggle();
                        handleNavClick(item.label, item.hash);
                      }
                    }}
                    sx={{
                      borderRadius: '12px',
                      py: 1.1,
                      px: 1.6,
                      backgroundColor: isActive ? 'rgba(0, 113, 227, 0.08)' : isMenuExpanded ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: isActive ? 'rgba(0, 113, 227, 0.12)' : 'rgba(0, 0, 0, 0.04)',
                        color: '#0071e3',
                      },
                      '&:active': { transform: 'scale(0.98)' },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: (isActive || isMenuExpanded) ? 650 : 500,
                        fontSize: '0.98rem',
                        letterSpacing: '-0.015em',
                        color: (isActive || isMenuExpanded) ? '#0071e3' : '#1d1d1f',
                      }}
                    />
                    {item.hasDropdown && (
                      <KeyboardArrowDownRoundedIcon 
                        sx={{ 
                          fontSize: 18, 
                          color: isMenuExpanded ? '#0071e3' : '#86868b',
                          transform: isMenuExpanded ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        }} 
                      />
                    )}
                  </ListItemButton>
                </ListItem>
                
                {/* Mobile Dropdown Items */}
                {item.hasDropdown && isMenuExpanded && item.dropdownItems && (
                  <List component="div" disablePadding sx={{ pl: 1, mb: 1 }}>
                    {item.dropdownItems.map((dropItem, idx) => {
                      const isDropItemActive = dropItem.hash === activeHash;
                      
                      return (
                        <ListItemButton 
                          key={idx}
                          sx={{ 
                            pl: 3, 
                            py: 0.9, 
                            borderRadius: '10px', 
                            mb: 0.3,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: isDropItemActive ? 'rgba(0, 113, 227, 0.08)' : 'transparent',
                            transition: 'all 0.15s ease',
                            '&:hover': {
                              backgroundColor: isDropItemActive ? 'rgba(0, 113, 227, 0.12)' : 'rgba(0, 0, 0, 0.04)',
                              color: '#0071e3',
                            },
                            '&:active': { transform: 'scale(0.98)' },
                          }}
                          onClick={() => {
                            handleDrawerToggle();
                            handleNavClick(dropItem.label, dropItem.hash);
                          }}
                        >
                          <ListItemText 
                            primary={dropItem.label} 
                            primaryTypographyProps={{ 
                              fontSize: '0.90rem', 
                              color: isDropItemActive ? '#0071e3' : '#424245',
                              fontWeight: isDropItemActive ? 600 : 450,
                            }} 
                          />
                        <ArrowForwardRoundedIcon 
                          sx={{ 
                            fontSize: 13, 
                            color: '#86868b',
                            opacity: 0.6,
                          }} 
                        />
                        </ListItemButton>
                      );
                    })}
                  </List>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Box>

      {/* Bottom CTA Buttons inside Drawer */}
      <Box sx={{ mt: 3, pt: 2, pb: 1, borderTop: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            handleDrawerToggle();
            window.location.hash = '#contact';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          sx={{
            borderColor: 'rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            color: '#1d1d1f',
            fontWeight: 600,
            py: 1.15,
            borderRadius: '9999px',
            textTransform: 'none',
            fontSize: '0.92rem',
            letterSpacing: '-0.01em',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              borderColor: 'rgba(0, 0, 0, 0.15)',
            },
            '&:active': { transform: 'scale(0.976)' },
          }}
        >
          Contact Us
        </Button>
        <Button
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '15px !important' }} />}
          onClick={() => {
            handleDrawerToggle();
            window.location.hash = '#book-demo';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          sx={{
            fontWeight: 650,
            py: 1.25,
            borderRadius: '9999px',
            backgroundColor: '#141416',
            color: '#ffffff',
            textTransform: 'none',
            fontSize: '0.94rem',
            letterSpacing: '-0.01em',
            boxShadow: '0 4px 14px rgba(20, 20, 22, 0.2)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: '#0071e3',
              boxShadow: '0 6px 18px rgba(0, 113, 227, 0.3)',
            },
            '&:active': { transform: 'scale(0.976)' },
          }}
        >
          Book a Demo
        </Button>
      </Box>
    </Drawer>
  </>
  );
}

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
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.90)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 20px -2px rgba(0, 0, 0, 0.05)' : 'none',
          zIndex: 1100,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 68, md: 76 },
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
              gap: 1.25,
              textDecoration: 'none',
              color: 'inherit',
              userSelect: 'none',
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            {/* Logo Icon Badge */}
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: '9px',
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 3px 10px rgba(30, 86, 160, 0.3)',
              }}
            >
              <SchoolRoundedIcon sx={{ fontSize: 22 }} />
            </Box>

            {/* Logo Text */}
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                letterSpacing: '-0.025em',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Urion SMS
            </Typography>
          </Box>

          {/* Center: Desktop Navigation Links (Hidden on mobile/tablet) */}
          <Stack
            direction="row"
            spacing={{ md: 1, lg: 2, xl: 3 }}
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
                            fontSize: '18px !important',
                            ml: -0.5,
                            transition: 'transform 0.2s ease',
                            transform: isOpen ? 'rotate(180deg)' : 'none',
                          }}
                        />
                      ) : null
                    }
                    sx={{
                      color: isActive ? 'primary.main' : isOpen ? '#0f172a' : '#475569',
                      fontWeight: (isActive || isOpen) ? 650 : 500,
                      fontSize: { md: '0.88rem', lg: '0.94rem' },
                      letterSpacing: '-0.01em',
                      px: { md: 1, lg: 1.4 },
                      py: 0.8,
                      minWidth: 'auto',
                      whiteSpace: 'nowrap',
                      borderRadius: '8px',
                      textTransform: 'none',
                      backgroundColor: isActive ? 'rgba(30, 86, 160, 0.08)' : isOpen ? '#F4F3F0' : 'transparent',
                      '&:hover': {
                        color: (isActive || isOpen) ? 'primary.main' : 'primary.main',
                        backgroundColor: isActive ? 'rgba(30, 86, 160, 0.12)' : isOpen ? '#F4F3F0' : 'rgba(30, 86, 160, 0.05)',
                        '& .MuiSvgIcon-root': {
                          transform: item.hasDropdown && !isOpen ? 'translateY(1px)' : isOpen ? 'rotate(180deg) translateY(-1px)' : 'none',
                        },
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
                          borderRadius: '14px',
                          border: '1px solid #EFEBE4',
                          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.07)',
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
                              borderRadius: '8px',
                              py: 1.1,
                              px: 1.8,
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '14px',
                              color: isDropItemActive ? 'primary.main' : '#334155',
                              fontWeight: isDropItemActive ? 600 : 500,
                              backgroundColor: isDropItemActive ? 'rgba(30, 86, 160, 0.05)' : 'transparent',
                              fontFamily: "'Inter', sans-serif",
                              transition: 'all 0.15s ease',
                              '&:hover': {
                                backgroundColor: isDropItemActive ? 'rgba(30, 86, 160, 0.08)' : '#F8FAFC',
                                color: 'primary.main',
                                '& .arrow-icon': {
                                  opacity: 1,
                                  transform: 'translateX(0)',
                                  color: 'primary.main',
                                },
                              },
                            }}
                          >
                            {dropItem.label}
                          <ArrowForwardRoundedIcon 
                            className="arrow-icon"
                            sx={{ 
                              fontSize: 14, 
                              opacity: 0.35,
                              color: '#94A3B8',
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
            spacing={1.5}
            alignItems="center"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexShrink: 0,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: '#e2e8f0',
                color: '#1e293b',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                fontWeight: 600,
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                height: 40,
                px: { sm: 2, md: 2.4 },
                borderRadius: '8px',
                textTransform: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#cbd5e1',
                  backgroundColor: '#f8fafc',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
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
              color="primary"
              onClick={() => {
                window.location.hash = '#book-demo';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                fontWeight: 600,
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                height: 40,
                px: { sm: 2.2, md: 2.6 },
                borderRadius: '8px',
                textTransform: 'none',
                backgroundColor: '#2863AB',
                boxShadow: '0 3px 10px rgba(40, 99, 171, 0.25)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#1D4D87',
                  boxShadow: '0 6px 16px rgba(40, 99, 171, 0.35)',
                  transform: 'translateY(-1px)',
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
          backgroundColor: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: { xs: 'min(320px, 86vw)', sm: 340 },
          p: { xs: 2.5, sm: 3 },
          backgroundColor: '#ffffff',
          overflowY: 'auto',
          boxShadow: '-10px 0 35px rgba(0, 0, 0, 0.18)',
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
              sx={{
                width: 36,
                height: 36,
                borderRadius: '9px',
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 2px 8px rgba(30, 86, 160, 0.25)',
              }}
            >
              <SchoolRoundedIcon sx={{ fontSize: 20 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.15rem', color: '#0f172a' }}>
              Urion SMS
            </Typography>
          </Box>
          <IconButton 
            onClick={handleDrawerToggle} 
            size="small"
            sx={{
              color: '#475569',
              backgroundColor: '#f1f5f9',
              p: 0.75,
              '&:hover': { backgroundColor: '#e2e8f0', color: '#0f172a' },
            }}
          >
            <CloseRoundedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2, borderColor: '#f1f5f9' }} />

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
                      borderRadius: 1.5,
                      py: 1,
                      backgroundColor: isActive ? 'rgba(30, 86, 160, 0.08)' : isMenuExpanded ? 'rgba(30, 86, 160, 0.04)' : 'transparent',
                      '&:hover': {
                        backgroundColor: isActive ? 'rgba(30, 86, 160, 0.12)' : 'rgba(30, 86, 160, 0.08)',
                        color: 'primary.main',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: (isActive || isMenuExpanded) ? 650 : 600,
                        fontSize: '1rem',
                        color: (isActive || isMenuExpanded) ? 'primary.main' : 'inherit',
                      }}
                    />
                    {item.hasDropdown && (
                      <KeyboardArrowDownRoundedIcon 
                        sx={{ 
                          fontSize: 18, 
                          color: isMenuExpanded ? 'primary.main' : 'text.secondary',
                          transform: isMenuExpanded ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s',
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
                            borderRadius: 1.5, 
                            mb: 0.3,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: isDropItemActive ? 'rgba(30, 86, 160, 0.05)' : 'transparent',
                            '&:hover': {
                              backgroundColor: isDropItemActive ? 'rgba(30, 86, 160, 0.08)' : '#F8FAFC',
                              color: 'primary.main',
                            }
                          }}
                          onClick={() => {
                            handleDrawerToggle();
                            handleNavClick(dropItem.label, dropItem.hash);
                          }}
                        >
                          <ListItemText 
                            primary={dropItem.label} 
                            primaryTypographyProps={{ 
                              fontSize: '0.92rem', 
                              color: isDropItemActive ? 'primary.main' : '#475569',
                              fontWeight: isDropItemActive ? 600 : 500,
                            }} 
                          />
                        <ArrowForwardRoundedIcon 
                          sx={{ 
                            fontSize: 13, 
                            color: '#94A3B8',
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
      <Box sx={{ mt: 3, pt: 2, pb: 1, borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            handleDrawerToggle();
            window.location.hash = '#contact';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          sx={{
            borderColor: '#cbd5e1',
            color: '#1e293b',
            fontWeight: 600,
            py: 1.1,
            borderRadius: '9px',
            textTransform: 'none',
            fontSize: '0.95rem',
          }}
        >
          Contact Us
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            handleDrawerToggle();
            window.location.hash = '#book-demo';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          sx={{
            fontWeight: 600,
            py: 1.1,
            borderRadius: '9px',
            backgroundColor: '#1e56a0',
            textTransform: 'none',
            fontSize: '0.95rem',
            boxShadow: '0 4px 12px rgba(30, 86, 160, 0.3)',
          }}
        >
          Book a Demo
        </Button>
      </Box>
    </Drawer>
  </>
  );
}

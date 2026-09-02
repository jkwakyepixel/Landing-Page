import React, { useState } from 'react';
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
} from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const navItems = [
  { label: 'Home', hasDropdown: false },
  { label: 'About', hasDropdown: true },
  { label: 'Solutions', hasDropdown: true },
  { label: 'Modules', hasDropdown: true },
  { label: 'Gallery', hasDropdown: false },
  { label: 'Contact', hasDropdown: false },
];

export default function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (label) => {
    if (label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (label === 'About' || label === 'Solutions' || label === 'Modules' || label === 'Gallery' || label === 'Contact') {
      document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.7)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          disableEqualPadding
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
              [PRODUCT NAME]
            </Typography>
          </Box>

          {/* Center: Desktop Navigation Links (Hidden on mobile/tablet) */}
          <Stack
            direction="row"
            spacing={{ md: 2.5, lg: 3.5 }}
            alignItems="center"
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="text"
                onClick={() => handleNavClick(item.label)}
                endIcon={
                  item.hasDropdown ? (
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        fontSize: '18px !important',
                        ml: -0.5,
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  ) : null
                }
                sx={{
                  color: '#475569',
                  fontWeight: 500,
                  fontSize: '0.94rem',
                  letterSpacing: '-0.01em',
                  px: 1.2,
                  py: 0.8,
                  minWidth: 'auto',
                  borderRadius: '8px',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(30, 86, 160, 0.05)',
                    '& .MuiSvgIcon-root': {
                      transform: 'translateY(1px)',
                    },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Right: CTA Buttons (Desktop) */}
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: '#e2e8f0',
                color: '#1e293b',
                fontWeight: 600,
                px: { sm: 2, md: 2.5 },
                py: 1,
                borderRadius: '9px',
                '&:hover': {
                  borderColor: '#cbd5e1',
                  backgroundColor: '#f8fafc',
                },
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontWeight: 600,
                px: { sm: 2.2, md: 2.8 },
                py: 1,
                borderRadius: '9px',
                boxShadow: '0 4px 12px rgba(30, 86, 160, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 18px rgba(30, 86, 160, 0.42)',
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

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 290,
            p: 3,
            backgroundColor: '#ffffff',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <SchoolRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0f172a' }}>
              [PRODUCT NAME]
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle} size="small">
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <List disablePadding>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => {
                  handleDrawerToggle();
                  handleNavClick(item.label);
                }}
                sx={{
                  borderRadius: 1.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(30, 86, 160, 0.08)',
                    color: 'primary.main',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                />
                {item.hasDropdown && (
                  <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleDrawerToggle}
            sx={{
              borderColor: '#e2e8f0',
              color: '#1e293b',
              fontWeight: 600,
              py: 1.2,
            }}
          >
            Contact Us
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleDrawerToggle}
            sx={{
              fontWeight: 600,
              py: 1.2,
            }}
          >
            Book a Demo
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

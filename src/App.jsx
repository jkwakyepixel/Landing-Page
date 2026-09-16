import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme/theme';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import RolesSection from './components/RolesSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import RoleExperiencesSection from './components/RoleExperiencesSection';
import SupportSection from './components/SupportSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BookDemo from './pages/BookDemo';
import ContactUs from './pages/ContactUs';
import Modules from './pages/Modules';
import Gallery from './pages/Gallery';
import History from './pages/History';
import MissionVision from './pages/MissionVision';
import Solution from './pages/Solution';
import WhyThisSystem from './pages/WhyThisSystem';
import Pricing from './pages/Pricing';
import HelpCentre from './pages/HelpCentre';

const getRouteFromHash = (hash) => {
  if (!hash || hash === '#' || hash === '') return 'home';
  if (hash === '#book-demo') return 'book-demo';
  if (hash === '#contact') return 'contact';
  if (hash.startsWith('#modules')) return 'modules';
  if (hash === '#pricing') return 'pricing';
  if (hash.startsWith('#solution') || hash === '#solutions' || hash === '#platform') return 'solution';
  if (hash === '#gallery' || hash === '#showcase') return 'gallery';
  if (
    hash === '#mission' ||
    hash === '#mission-vision' ||
    hash === '#mission-and-vision' ||
    hash === '#purpose' ||
    hash === '#goals'
  ) return 'mission';
  if (
    hash === '#history' ||
    hash === '#story' ||
    hash === '#our-story'
  ) return 'history';
  if (hash === '#why-this-system' || hash === '#why-we-built-this' || hash === '#why-this') return 'why-this-system';
  if (hash === '#help-centre' || hash === '#help-center' || hash === '#help') return 'help-centre';
  return 'home';
};

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash(window.location.hash);
      setCurrentRoute(nextRoute);

      // Only scroll to top if not targeting a specific sub-element
      const hash = window.location.hash;
      const isSubHash = (hash.startsWith('#solution-') && hash !== '#solution') ||
                        (hash.startsWith('#modules-') && hash !== '#modules');
      if (!isSubHash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {currentRoute === 'book-demo' ? (
        <BookDemo />
      ) : currentRoute === 'contact' ? (
        <ContactUs />
      ) : currentRoute === 'modules' ? (
        <Modules />
      ) : currentRoute === 'pricing' ? (
        <Pricing />
      ) : currentRoute === 'solution' ? (
        <Solution />
      ) : currentRoute === 'gallery' ? (
        <Gallery />
      ) : currentRoute === 'mission' ? (
        <MissionVision />
      ) : currentRoute === 'history' ? (
        <History />
      ) : currentRoute === 'why-this-system' ? (
        <WhyThisSystem />
      ) : currentRoute === 'help-centre' ? (
        <HelpCentre />
      ) : (
        <Box
          sx={{
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            color: 'text.primary',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          <NavigationBar />
          <HeroSection />
          <RolesSection />
          <ProblemSolutionSection />
          <CapabilitiesSection />
          <RoleExperiencesSection />
          <SupportSection />
          <CTASection />
          <Footer />
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;

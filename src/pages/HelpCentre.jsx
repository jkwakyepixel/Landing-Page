import React, { useEffect } from 'react';
import { Box, Container, Typography, TextField, InputAdornment, Grid, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

export default function HelpCentre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { title: 'Getting Started', desc: 'Setting up Urion SMS for your school' },
    { title: 'Administrator Guide', desc: 'Managing users, roles, and settings' },
    { title: 'Billing & Fees', desc: 'Collecting payments and sending invoices' },
    { title: 'Academic Management', desc: 'Exams, grading, and report cards' },
    { title: 'Parent Portal', desc: 'Navigating the mobile app as a parent' },
    { title: 'Troubleshooting', desc: 'Common issues and how to fix them' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#faf9f7' }}>
      <NavigationBar />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1d68d8', color: 'white', pt: { xs: 15, md: 20 }, pb: { xs: 10, md: 15 }, px: 3, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={800} mb={3}>
            How can we help you?
          </Typography>
          <TextField
            fullWidth
            placeholder="Search for articles, guides, or questions..."
            variant="outlined"
            sx={{
              bgcolor: 'white',
              borderRadius: 2,
              '& .MuiOutlinedInput-root': { borderRadius: 2 },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Box>

      {/* Categories */}
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: { xs: 8, md: 10 } }}>
        <Typography variant="h4" fontWeight={700} color="#0f172a" textAlign="center" mb={6}>
          Browse by Category
        </Typography>
        <Grid container spacing={4}>
          {categories.map((cat, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: 4, 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(29, 104, 216, 0.1)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <ArticleOutlinedIcon sx={{ fontSize: 48, color: '#2563eb', mb: 2 }} />
                  <Typography variant="h6" fontWeight={700} color="#0f172a" mb={1}>
                    {cat.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cat.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Footer />
    </Box>
  );
}

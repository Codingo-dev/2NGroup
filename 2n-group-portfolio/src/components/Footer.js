import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

import logoImage from '../2n_logo.png';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#021526',
  color: '#E2E2B6',
  padding: theme.spacing(6, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#E2E2B6',
  textDecoration: 'none',
  '&:hover': {
    color: '#6EACDA',
  },
}));

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              <img src={logoImage} alt="2N Logo" style={{ width: '30%', height: 'auto', marginLeft: '20px' }} />
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 1 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink 
                  component="button" 
                  onClick={() => scrollToSection('home')}
                  sx={{ 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                >
                  Home
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink 
                  component="button" 
                  onClick={() => scrollToSection('about')}
                  sx={{ 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                >
                  About Us
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink 
                  component="button" 
                  onClick={() => scrollToSection('companies')}
                  sx={{ 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                >
                  Our Companies
                </FooterLink>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 1 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="https://www.facebook.com/2nagencyeg" target="_blank" rel="noopener noreferrer">
                  Facebook
                </FooterLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Codingo. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 
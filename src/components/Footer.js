import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
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
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@2ngroup.com
            </Typography>
            <Typography variant="body2">
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
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
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Facebook
                </FooterLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} 2N Group. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 
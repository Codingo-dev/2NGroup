import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

import logoImage from '../2n_logo.png';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: theme.spacing(6, 10),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#ffffff',
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
              <img src={logoImage} alt="2N Logo" style={{ width: '30%', height: 'auto', marginLeft: '20px', marginRight: '0' }} />
              <p style={{ fontSize: '20px', fontWeight: 'lighter', width: '70%', color: '#ffffff'}}>
                A parent company with multiple brands and online stores.             
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{color: '#ffffff'}}>
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
                  onClick={() => scrollToSection('companies')}
                  sx={{ 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                >
                  Companies
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink 
                  component="button" 
                  onClick={() => scrollToSection('brands')}
                  sx={{ 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                >
                  Brands & Stores
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink 
                  component="button" 
                  onClick={() => scrollToSection('about-detailed')}
                >
                  About Us
                </FooterLink>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{color: '#ffffff'}}>
              Brands & Stores
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 1 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="https://www.globed.eg" target="_blank" rel="noopener noreferrer">
                Globed
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="https://grinpure-future-bloom.lovable.app/" target="_blank" rel="noopener noreferrer">
                Grinpure
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="https://silviny.com/" target="_blank" rel="noopener noreferrer">
                Silviny
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="https://joovely.com" target="_blank" rel="noopener noreferrer">
                Joovely
                </FooterLink>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{color: '#ffffff'}}>
              Companies
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 1 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="https://codingo-launchpad-online.lovable.app/" target="_blank" rel="noopener noreferrer">
                Codingo
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="https://upperhand-amazon-launchpad.lovable.app/" target="_blank" rel="noopener noreferrer">
                UpperHand
                </FooterLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <FooterLink href="https://longneck-reach-further.lovable.app/" target="_blank" rel="noopener noreferrer">
                  LongNeck
                </FooterLink>
              </Box>
            </Box>
          </Grid>

          <Typography variant="h6" gutterBottom
          sx={{
            margin: "0 auto",
            color: '#ffffff'
          }}
          >
            Follow Us on <FooterLink href="https://www.facebook.com/2nagencyeg" target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
          </Typography>
        </Grid>
        <hr style={{ width: '90%' , margin: 'auto', color: '#ffffff'}} />
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
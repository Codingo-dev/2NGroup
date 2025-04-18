import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a237e',
  color: 'white',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              2N Group
            </Typography>
            <Typography variant="body2">
              All together for you
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column">
              <FooterLink href="#about" variant="body2">
                About Us
              </FooterLink>
              <FooterLink href="#companies" variant="body2">
                Our Companies
              </FooterLink>
              <FooterLink href="#contact" variant="body2">
                Contact
              </FooterLink>
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
              Phone: +123 456 7890
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} pt={2} borderTop="1px solid rgba(255, 255, 255, 0.1)">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} 2N Group. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center">
            Website developed by{' '}
            <FooterLink href="https://codingo.com" target="_blank" rel="noopener noreferrer">
              Codingo
            </FooterLink>
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 
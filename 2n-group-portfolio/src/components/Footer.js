import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: '#021526',
  color: '#E2E2B6',
  marginTop: 'auto',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#E2E2B6',
  textDecoration: 'none',
  '&:hover': {
    color: '#6EACDA',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@2ngroup.com
            </Typography>
            <Typography variant="body2">
              Phone: +1 (555) 123-4567
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <FooterLink href="#" variant="body2" display="block">
                Home
              </FooterLink>
              <FooterLink href="#" variant="body2" display="block">
                About Us
              </FooterLink>
              <FooterLink href="#" variant="body2" display="block">
                Our Companies
              </FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <FooterLink href="#" variant="body2" display="block">
                LinkedIn
              </FooterLink>
              <FooterLink href="#" variant="body2" display="block">
                Twitter
              </FooterLink>
              <FooterLink href="#" variant="body2" display="block">
                Instagram
              </FooterLink>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} 2N Group. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 
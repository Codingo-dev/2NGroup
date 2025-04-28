import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import '../App.css';
import logoImage from '../logo_image.jpg';
import background from '../banner_background.jpg';

const BannerContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#E2E2B6',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const MotionTypography = motion(Typography);

const Banner = () => {
  return (
    <BannerContainer id="home">
      <Container>
        <MotionTypography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{ 
            fontSize: { xs: '3rem', md: '4rem' }, 
            fontWeight: 'bold',
            color: '#E2E2B6',
            textShadow: '2px 2px 4px rgb(255, 255, 255)',
          }}
        >
          <img 
            src={logoImage} 
            alt="2N Logo" // Add alt text for accessibility
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              maxHeight: '250px', // Adjust as needed
              borderRadius: '20%',
            }} 
          />
        </MotionTypography>
        <MotionTypography 
          variant="h4" 
          component="h2" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{ 
            fontStyle: 'italic', 
            fontSize: { xs: '1.5rem', md: '2.5rem' },
            color: '#ffffff',
          }}
        >
          For Business Management
        </MotionTypography>
      </Container>
    </BannerContainer>
  );
};

export default Banner; 
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const BannerContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #03346E 30%, #6EACDA 90%)',
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
  scrollMarginTop: '0px',
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
          sx={{ 
            fontSize: { xs: '3rem', md: '4rem' }, 
            fontWeight: 'bold',
            color: '#E2E2B6',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          2N
        </MotionTypography>
        <MotionTypography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontStyle: 'italic', 
            fontSize: { xs: '1.5rem', md: '2.5rem' },
            color: '#E2E2B6',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
          }}
        >
          All together for you
        </MotionTypography>
      </Container>
    </BannerContainer>
  );
};

export default Banner; 
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import image from '../info.jpg';

const InfoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: '#ffffff',
  color: '#000000',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  scrollMarginTop: '0px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
}));

const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Info = () => {
  return (
    <InfoContainer id="info">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: '2rem', md: '3rem' },
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mb: { xs: '2rem', md: 0 },
            }}
          >
            <Box
              component="img"
              src={image}
              alt="2N Group Team"
              sx={{
                width: { xs: '100%', md: '80%' },
                height: { xs: 'auto', md: '400px' },
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '16px',
                margin: '0 auto',
              }}
            />
          </Box>
         
          <MotionGrid item xs={12} md={6} variants={textVariants}>
            <MotionTypography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              sx={{ 
                mb: 4,
                color: '#000000',
                fontWeight: '400',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              }}
            >
              2N Group
            </MotionTypography>
     
            <MotionTypography 
              variant="body1" 
              paragraph
              sx={{ 
                color: '#000000',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                width: '100%',
              }}
            >
              2N Group is a dynamic conglomerate that brings together three specialized companies under one umbrella, 
              each excelling in their respective fields. Our mission is to provide comprehensive solutions that 
              combine technology, media, and wellness to create a better future for our clients and communities.
              <br />
              <br />
              At 2N Group, we believe in the power of synergy. By combining our strengths and expertise, 
              we create innovative solutions that drive growth and success for our partners and clients.
            </MotionTypography>
          </MotionGrid>
        </Box>
      </Container>
    </InfoContainer>
  );
};

export default Info; 
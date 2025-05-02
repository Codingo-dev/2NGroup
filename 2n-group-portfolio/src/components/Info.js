import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import image from '../info.jpg';
// import Button from '@mui/material/Button';


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
    <InfoContainer  id="info">
      <Container maxWidth="lg">
        <div className='InfoContainer'
              style={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: '30px'}}
        >
          <img src={image} alt="2N Group Team" style={{ width: '80%', height: '400px', borderRadius: '16px', marginBottom: '100px', marginRight: 'auto', marginLeft: 'auto'}} />
         
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
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              2N Group
            </MotionTypography>
     
            <MotionTypography 
              variant="body1" 
              paragraph
              sx={{ 
                color: '#000000',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                marginRight: 'auto',
                marginLeft: 'auto',
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
        </div>
      </Container>
    </InfoContainer>
  );
};

export default Info; 
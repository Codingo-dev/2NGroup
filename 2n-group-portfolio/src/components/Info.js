import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import image from '../about_us.jpeg';
// import Button from '@mui/material/Button';


const InfoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#ffffff',
  color: '#000000',
  minHeight: '115vh',
  display: 'flex',
  alignItems: 'center',
  scrollMarginTop: '0px',
}));

// const ImageContainer = styled(Box)(({ theme }) => ({
//   width: '100%',
//   height: '100%',
//   minHeight: '500px',
//   width: '500px',
//   borderRadius: '16px',
//   overflow: 'hidden',
//   position: 'relative',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(45deg, rgba(15, 16, 17, 0.7) 30%, rgba(110, 172, 218, 0.3) 90%)',
//   },
// }));

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

// const imageVariants = {
//   hidden: { opacity: 0, x: 20 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//     },
//   },
// };

const Info = () => {
  return (
    <InfoContainer  id="info">
      <Container maxWidth="lg">
        <MotionGrid 
          container 
          spacing={6}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={image} alt="2N Group Team" style={{ width: '400px', height: '400px', borderRadius: '16px', position: 'absolute'}} />
         
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
                marginLeft: '500px',
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
                marginLeft: '500px',
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
            
            {/* <MotionTypography>
              <Button variant="contained" color="primary"
              style={{
                marginLeft: '700px',
                color: '#000000',
                backgroundColor: '#EFEEEA',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  backgroundColor: '#E2E2B6',
                  transform: 'scale(1.2)',
                },

              }}>
                Discover Our Companies
              </Button>
            </MotionTypography> */}
          </MotionGrid>
        </MotionGrid>
      </Container>
    </InfoContainer>
  );
};

export default Info; 
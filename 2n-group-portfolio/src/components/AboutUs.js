import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#021526',
  color: '#E2E2B6',
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

const AboutUs = () => {
  return (
    <AboutContainer>
      <Container>
        <MotionTypography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ 
            mb: 6,
            color: '#E2E2B6',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
          }}
        >
          About Us
        </MotionTypography>
        <MotionGrid 
          container 
          spacing={4}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MotionGrid item xs={12} variants={textVariants}>
            <MotionTypography 
              variant="body1" 
              paragraph
              sx={{ color: '#E2E2B6' }}
            >
              2N Group is a dynamic conglomerate that brings together three specialized companies under one umbrella, 
              each excelling in their respective fields. Our mission is to provide comprehensive solutions that 
              combine technology, media, and wellness to create a better future for our clients and communities.
            </MotionTypography>
            <MotionTypography 
              variant="body1" 
              paragraph
              sx={{ color: '#E2E2B6' }}
            >
              With our diverse expertise and collaborative approach, we offer integrated solutions that address 
              the complex needs of modern businesses and individuals. Our companies work together to provide 
              seamless services that span across technology development, media production, marketing strategies, 
              and wellness products.
            </MotionTypography>
            <MotionTypography 
              variant="body1"
              sx={{ color: '#E2E2B6' }}
            >
              At 2N Group, we believe in the power of synergy. By combining our strengths and expertise, 
              we create innovative solutions that drive growth and success for our partners and clients.
            </MotionTypography>
          </MotionGrid>
        </MotionGrid>
      </Container>
    </AboutContainer>
  );
};

export default AboutUs; 
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#021526',
  color: '#E2E2B6',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  scrollMarginTop: '0px',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: '500px',
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(2, 21, 38, 0.7) 30%, rgba(110, 172, 218, 0.3) 90%)',
  },
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

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <Container maxWidth="lg">
        <MotionGrid 
          container 
          spacing={6}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MotionGrid 
            item 
            xs={12} 
            md={6} 
            variants={imageVariants}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ImageContainer
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                component="img"
                src="/about-us-image.jpg"
                alt="2N Group Team"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </ImageContainer>
          </MotionGrid>
          <MotionGrid item xs={12} md={6} variants={textVariants}>
            <MotionTypography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              sx={{ 
                mb: 4,
                color: '#E2E2B6',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              About Us
            </MotionTypography>
            <MotionTypography 
              variant="body1" 
              paragraph
              sx={{ 
                color: '#E2E2B6',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
              }}
            >
              2N Group is a dynamic conglomerate that brings together three specialized companies under one umbrella, 
              each excelling in their respective fields. Our mission is to provide comprehensive solutions that 
              combine technology, media, and wellness to create a better future for our clients and communities.
            </MotionTypography>
            <MotionTypography 
              variant="body1" 
              paragraph
              sx={{ 
                color: '#E2E2B6',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
              }}
            >
              With our diverse expertise and collaborative approach, we offer integrated solutions that address 
              the complex needs of modern businesses and individuals. Our companies work together to provide 
              seamless services that span across technology development, media production, marketing strategies, 
              and wellness products.
            </MotionTypography>
            <MotionTypography 
              variant="body1"
              sx={{ 
                color: '#E2E2B6',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
              }}
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
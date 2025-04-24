import React from 'react';
import { Box, Typography, Container, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import JoovelyLogo from '../Joovely_logo2.jpg';
import GlobedLogo from '../globed_logo.jpg';
import GrinpureLogo from '../Grinpure_logo.jpg';
import SilvinyLogo from '../Silviny_logo.jpg';

const BrandsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#021526',
  color: '#E2E2B6',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const BrandCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#03346E',
  color: '#E2E2B6',
  padding: theme.spacing(4),
  borderRadius: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '300px',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    backgroundColor: '#6EACDA',
    color: '#021526',
    '&::before': {
      transform: 'scale(1.1)',
    },
    '& .content': {
      backgroundColor: 'rgba(2, 21, 38, 0.8)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.5,
    transition: 'transform 0.3s ease-in-out',
  },
  '& .content': {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(2, 21, 38, 0.7)',
    padding: theme.spacing(3),
    borderRadius: '12px',
    width: '100%',
    transition: 'background-color 0.3s ease-in-out',
  }
}));

const brandsAndStores = [
  {
    name: 'Globed',
    type: 'Store',
    description: 'A premium retail destination offering curated products from around the world.',
    link: 'https://www.globed.eg',
    image: GlobedLogo
  },
  {
    name: 'Grinpure',
    type: 'Store',
    description: 'Your one-stop shop for natural and organic products that promote a healthy lifestyle.',
    link: 'https://grinpure-future-bloom.lovable.app/',
    image: GrinpureLogo
  },
  {
    name: 'Silviny',
    type: 'Brand',
    description: 'A luxury brand offering exquisite jewelry and accessories crafted with precision and elegance.',
    link: 'https://silviny.com/',
    image: SilvinyLogo// Replace with actual image URL
  },
  {
    name: 'Joovely',
    type: 'Brand',
    description: 'A contemporary lifestyle brand creating beautiful and functional products for everyday life.',
    link: 'https://joovely.com',
    image: JoovelyLogo
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const BrandsAndStores = () => {
  return (
    <BrandsContainer id="brands">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 6,
              color: '#E2E2B6',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Our Brands & Stores
          </Typography>
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: '20px'
            }}
          >
            {brandsAndStores.map((brand, index) => (
              <Grid 
                item 
                key={index}
                sx={{
                  width: { xs: '100%', md: '40%' },
                  maxWidth: '40%',
                  flex: '0 0 40%'
                }}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <a 
                    href={brand.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    <BrandCard 
                      sx={{
                        '&::before': {
                          backgroundImage: `url(${brand.image})`,
                        }
                      }}
                    >
                      <div className="content">
                        <Typography
                          variant="h4"
                          component="h3"
                          gutterBottom
                          sx={{
                            fontWeight: 'bold',
                            color: 'inherit',
                          }}
                        >
                          {brand.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: '#6EACDA',
                            mb: 2,
                            fontWeight: 'bold',
                          }}
                        >
                          {brand.type}
                        </Typography>
                        <Typography 
                          variant="body1"
                        >
                          {brand.description}
                        </Typography>
                      </div>
                    </BrandCard>
                  </a>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </BrandsContainer>
  );
};

export default BrandsAndStores; 
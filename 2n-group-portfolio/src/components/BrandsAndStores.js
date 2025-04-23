import React from 'react';
import { Box, Typography, Container, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

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
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    backgroundColor: '#6EACDA',
    color: '#021526',
    '&::before': {
      transform: 'scale(1.1)',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, #03346E, #6EACDA)',
    opacity: 0.1,
    transition: 'transform 0.3s ease-in-out',
  },
}));

const brandsAndStores = [
  {
    name: 'Globed',
    type: 'Store',
    description: 'A premium retail destination offering curated products from around the world.',
    link: 'https://www.facebook.com/Globedeg/'
  },
  {
    name: 'Grinpure',
    type: 'Store',
    description: 'Your one-stop shop for natural and organic products that promote a healthy lifestyle.',
    link: 'http://grinpure.com/'
  },
  {
    name: 'Silviny',
    type: 'Brand',
    description: 'A luxury brand offering exquisite jewelry and accessories crafted with precision and elegance.',
    link: 'https://www.google.com/search?q=Silviny&sca_esv=cc91aa7b516a412e&sxsrf=AHTn8zokUfUntuw6-LYvQeZdJtUzOz7jFw%3A1745370943840&source=hp&ei=Pz8IaJXfKqOA9u8P-Le74As&iflsig=ACkRmUkAAAAAaAhNTyEmOhy5gNUje8bVt6l4GubGuRVt&ved=0ahUKEwjV-ua4_eyMAxUjgP0HHfjbDrwQ4dUDCBc&uact=5&oq=Silviny&gs_lp=Egdnd3Mtd2l6IgdTaWx2aW55MgcQLhiABBgKMgcQLhiABBgKMgcQLhiABBgKMgcQABiABBgKMgcQLhiABBgKMgcQABiABBgKMgcQLhiABBgKMgcQLhiABBgKMgcQABiABBgKMgcQLhiABBgKSOEHUABYAHAAeACQAQCYAaoBoAGqAaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACvQGYAwCSBwMwLjGgB5wUsgcDMC4xuAe9AQ&sclient=gws-wiz'
  },
  {
    name: 'Joovely',
    type: 'Brand',
    description: 'A contemporary lifestyle brand creating beautiful and functional products for everyday life.',
    link: 'https://joovely.com/'
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
                    <BrandCard>
                      <Typography
                        variant="h4"
                        component="h3"
                        gutterBottom
                        sx={{
                          fontWeight: 'bold',
                          color: 'inherit',
                          position: 'relative',
                          zIndex: 1,
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
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {brand.type}
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {brand.description}
                      </Typography>
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
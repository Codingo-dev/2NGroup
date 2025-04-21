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
  '&:hover': {
    transform: 'translateY(-10px)',
    backgroundColor: '#6EACDA',
    color: '#021526',
  },
}));

const brandsAndStores = [
  {
    name: 'Globed',
    type: 'Store',
    description: 'A premium retail destination offering curated products from around the world.',
  },
  {
    name: 'Grinpure',
    type: 'Store',
    description: 'Your one-stop shop for natural and organic products that promote a healthy lifestyle.',
  },
  {
    name: 'Silviny',
    type: 'Brand',
    description: 'A luxury brand offering exquisite jewelry and accessories crafted with precision and elegance.',
  },
  {
    name: 'Joovely',
    type: 'Brand',
    description: 'A contemporary lifestyle brand creating beautiful and functional products for everyday life.',
  },
];

const BrandsAndStores = () => {
  return (
    <BrandsContainer id="brands">
      <Container>
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
        <Grid container spacing={4}>
          {brandsAndStores.map((brand, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <BrandCard>
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
                  <Typography variant="body1">
                    {brand.description}
                  </Typography>
                </BrandCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BrandsContainer>
  );
};

export default BrandsAndStores; 
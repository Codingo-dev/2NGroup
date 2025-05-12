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
  backgroundColor: '#ffffff',
  color: '#000000',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const BrandCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#000000',
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
  minHeight: '250px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
  },
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
              color: '#000000',
              fontWeight: '400',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Our Brands & Stores
          </Typography>
          <hr style={{ width: '50%' , border: '1px solid #000000', margin: 'auto', color: '#000000', marginBottom: '40px'}} />
            <div className='BrandsContainer'
             style={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: '30px', margin:'auto', width:'80%'}}
            >
            {brandsAndStores.map((brand, index) => (
              <Grid 
                item 
                key={index}
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
                      <div className="content">
                        <Typography
                          variant="h4"
                          component="h3"
                          gutterBottom
                          sx={{
                            fontWeight: 'bold',
                            color: 'inherit',
                            marginTop: '20px',
                          }}
                        >
                          {brand.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: '#ffffff',
                            mb: 2,
                            fontWeight: 'bold',
                            backgroundColor: '#000000',
                            width: '30%',
                            margin: 'auto',
                            borderRadius: '5px',
                            marginTop: '20px',
                          }}
                        >
                          {brand.type}
                        </Typography>
                        <Typography 
                          variant="body1"
                          sx={{
                            color: '#000000',
                            marginTop: '20px',
                          }}
                        >
                          {brand.description}
                        </Typography>
                      </div>
                    </BrandCard>
                  </a>
                </motion.div>
              </Grid>
            ))}
          </div>
        </motion.div>
      </Container>
    </BrandsContainer>
  );
};

export default BrandsAndStores; 
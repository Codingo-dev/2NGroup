import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f5f5f5',
}));

const AboutUs = () => {
  return (
    <AboutContainer>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="body1" paragraph>
              2N Group is a dynamic conglomerate that brings together three specialized companies under one umbrella, 
              each excelling in their respective fields. Our mission is to provide comprehensive solutions that 
              combine technology, media, and wellness to create a better future for our clients and communities.
            </Typography>
            <Typography variant="body1" paragraph>
              With our diverse expertise and collaborative approach, we offer integrated solutions that address 
              the complex needs of modern businesses and individuals. Our companies work together to provide 
              seamless services that span across technology development, media production, marketing strategies, 
              and wellness products.
            </Typography>
            <Typography variant="body1">
              At 2N Group, we believe in the power of synergy. By combining our strengths and expertise, 
              we create innovative solutions that drive growth and success for our partners and clients.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export default AboutUs; 
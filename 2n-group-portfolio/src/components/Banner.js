import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const BannerContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Banner = () => {
  return (
    <BannerContainer>
      <Container>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 'bold' }}>
          2N
        </Typography>
        <Typography variant="h4" component="h2" sx={{ fontStyle: 'italic', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
          All together for you
        </Typography>
      </Container>
    </BannerContainer>
  );
};

export default Banner; 
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutUsDetailed = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          We are a dynamic group of companies dedicated to excellence and innovation.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUsDetailed; 
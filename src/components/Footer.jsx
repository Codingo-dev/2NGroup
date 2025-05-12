import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © 2024 2N Group. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 
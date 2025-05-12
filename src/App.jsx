import React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import BrandsAndStores from './components/BrandsAndStores';
import AboutUsDetailed from './components/AboutUsDetailed';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <BrandsAndStores />
        <AboutUsDetailed />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App; 
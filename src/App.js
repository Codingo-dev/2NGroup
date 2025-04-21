import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Companies from './components/Companies';
import BrandsAndStores from './components/BrandsAndStores';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03346E',
    },
    secondary: {
      main: '#6EACDA',
    },
    background: {
      default: '#021526',
    },
    text: {
      primary: '#E2E2B6',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Banner />
      <AboutUs />
      <Companies />
      <BrandsAndStores />
      <Footer />
    </ThemeProvider>
  );
}

export default App; 
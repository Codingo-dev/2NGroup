import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  useScrollTrigger,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import logo from '../2n_logo.png';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#ffffff',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  zIndex: 1100,
  height: '80px',
  alignItems: 'center',
}));

const Logo = styled('img')({
  height: '60px',
  marginRight: '20px',
});

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  margin: '0 10px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: '0',
    left: '50%',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease-in-out',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '100%',
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'Companies', id: 'companies' },
  { name: 'Brands & Stores', id: 'brands' },
  { name: 'About Us', id: 'about-detailed' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Logo 
              src={logo}
              alt="2N Group Logo" 
              component={motion.img}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {sections.map((section) => (
              <NavButton
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
              </NavButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar; 
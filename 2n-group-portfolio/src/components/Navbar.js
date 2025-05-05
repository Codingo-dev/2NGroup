import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  useScrollTrigger,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../2n_logo.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  color: '#ffffff',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  zIndex: 1100,
  height: '80px',
  alignItems: 'center',
  transition: 'all 0.3s ease-in-out',
  backdropFilter: 'blur(10px)',
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
}));

const Logo = styled('img')(({ theme }) => ({
  height: '60px',
  marginRight: '20px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '50px',
    marginRight: '10px',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  margin: '0 10px',
  position: 'relative',
  fontWeight: 500,
  fontSize: '1rem',
  textTransform: 'none',
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
    color: '#ffffff',
    transform: 'translateY(-2px)',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  margin: 0,
  padding: '0 16px',
  maxWidth: '100% !important',
  [theme.breakpoints.down('sm')]: {
    padding: '0 8px',
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {sections.map((section) => (
          <ListItem 
            key={section.id} 
            button 
            onClick={() => scrollToSection(section.id)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemText primary={section.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar elevation={scrolled ? 4 : 0}>
        <StyledContainer>
          <Toolbar 
            disableGutters 
            sx={{ 
              width: '100%',
              margin: 0,
              padding: 0,
            }}
          >
            <Box sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              alignItems: 'center',
              margin: 0,
              padding: 0,
            }}>
              <Logo 
                src={logo}
                alt="2N Group Logo" 
                component={motion.img}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Box>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ padding: '8px' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
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
            )}
          </Toolbar>
        </StyledContainer>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            color: '#ffffff',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 
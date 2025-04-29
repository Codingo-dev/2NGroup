import React from 'react';
import { Box, Typography, Container, Grid, Card, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const AboutDetailedContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#ffffff',
  color: '#000000',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const ValueCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#ffffff',
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
  minHeight: '300px',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    backgroundColor: '#ffffff',
    color: '#000000',
    '&::before': {
      transform: 'scale(1.1)',
    },
    '& .content': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.5,
    transition: 'transform 0.3s ease-in-out',
  },
  '& .content': {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: theme.spacing(3),
    borderRadius: '12px',
    width: '100%',
    transition: 'background-color 0.3s ease-in-out',
  }
}));

const TeamCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#ffffff',
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
  minHeight: '300px',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    backgroundColor: '#ffffff',
    color: '#000000',
    '&::before': {
      transform: 'scale(1.1)',
    },
    '& .content': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.5,
    transition: 'transform 0.3s ease-in-out',
  },
  '& .content': {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: theme.spacing(3),
    borderRadius: '12px',
    width: '100%',
    transition: 'background-color 0.3s ease-in-out',
  }
}));

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new possibilities to create cutting-edge solutions.',
    icon: '💡',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnerships to achieve greater success.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, delivering quality and reliability.',
    icon: '⭐',
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices.',
    icon: '⚖️',
  },
];

const leadership = [
  {
    name: 'John Smith',
    position: 'Chief Executive Officer',
    image: '/team/ceo.jpg',
    description: 'Visionary leader with 20+ years of experience in technology and business development.',
  },
  {
    name: 'Sarah Johnson',
    position: 'Chief Technology Officer',
    image: '/team/cto.jpg',
    description: 'Tech innovator specializing in digital transformation and software architecture.',
  },
  {
    name: 'Michael Brown',
    position: 'Chief Marketing Officer',
    image: '/team/cmo.jpg',
    description: 'Marketing strategist with expertise in brand development and digital marketing.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
    },
  },
};

const AboutUsDetailed = () => {
  return (
    <AboutDetailedContainer id="about-detailed">
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Story Section */}
          <Box sx={{ mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              align="center"
              sx={{ 
                mb: 4,
                color: '#000000',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: '400',
              }}
            >
              Our Story
            </Typography>
            <hr style={{ width: '50%' , border: '1px solid #000000', margin: 'auto', color: '#000000', marginBottom: '40px'}} />
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                color: '#000000',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              2N Group was founded with a vision to revolutionize the way businesses operate in the digital age. 
              Our journey began with a simple idea: to create a conglomerate that combines technology, media, 
              and wellness to provide comprehensive solutions for modern challenges.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#000000',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Today, we stand as a testament to innovation and collaboration, bringing together diverse expertise 
              under one roof to create solutions that drive growth and success for our partners and clients.
            </Typography>
          </Box>

          {/* Values Section */}
          <Box sx={{ mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              align="center"
              sx={{ 
                mb: 4,
                color: '#000000',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: '400',
              }}
            >
              Our Values
            </Typography>
            <hr style={{ width: '50%' , border: '1px solid #000000', margin: 'auto', color: '#000000', marginBottom: '40px'}} />
            <div className='companies-container'
             style={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: '30px', margin:'auto', width:'80%'}}
            >
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <ValueCard>
                      <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                        {value.icon}
                      </Typography>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {value.title}
                      </Typography>
                      <Typography variant="body1">
                        {value.description}
                      </Typography>
                    </ValueCard>
                  </motion.div>
                </Grid>
              ))}
            </div>
          </Box>

          {/* Leadership Team Section */}
          <Box>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              align="center"
              sx={{ 
                mb: 4,
                color: '#000000',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: '400',
              }}
            >
              Leadership Team
            </Typography>
            <hr style={{ width: '50%' , border: '1px solid #000000', margin: 'auto', color: '#000000', marginBottom: '40px'}} />
            <div className='companies-container'
             style={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: '20px'}}
            >
              {leadership.map((member, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <TeamCard>
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: 120,
                          height: 120,
                          mb: 2,
                          border: '3px solid #000000',
                        }}
                      />
                      <Typography variant="h5" component="h3" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#000000',
                          mb: 2,
                          fontWeight: 'bold',
                        }}
                      >
                        {member.position}
                      </Typography>
                      <Typography variant="body2">
                        {member.description}
                      </Typography>
                    </TeamCard>
                  </motion.div>
                </Grid>
              ))}
            </div>
          </Box>
        </motion.div>
      </Container>
    </AboutDetailedContainer>
  );
};

export default AboutUsDetailed;
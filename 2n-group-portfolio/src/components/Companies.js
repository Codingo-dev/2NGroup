import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { teal } from '@mui/material/colors';

const CompaniesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#021526',
  color: '#E2E2B6',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CompanyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: '#03346E',
  color: '#E2E2B6',
  borderRadius: '16px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.2)',
    fontSize: '1.2rem',
  },
}));

const LogoSection = styled(Box)(({ theme }) => ({
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(45deg, #03346E 30%, #6EACDA 90%)',
  padding: theme.spacing(4),
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionCard = motion(CompanyCard);
const MotionLogoSection = motion(LogoSection);

const companies = [
    {
      name: 'Codingo - Software Development',
      description: 'Specialized in technology solutions, software development, and digital innovation. We create cutting-edge solutions that drive business growth and digital transformation.',
      link: 'https://codingo-launchpad-online.lovable.app/',
    },
    {
      name: 'UpperHand - Amazon SPN partner',
      description: 'focused on maximizing your sales and brand performance. We offer strategic account management, listing optimization, PPC, inventory help, and brand protection, adhering to Amazons best practices. Our goal is to provide expert guidance and hands-on execution, giving you a competitive edge. Partner with Upperhand to unlock your full Amazon potential and achieve tangible growth.',
      link: 'https://upperhand-amazon-launchpad.lovable.app/',
    },
    {
      name: 'LongNeck - Marketing Agency',
      description: 'marketing agency that helps your brand stand out and achieve lasting growth through strategic, creative solutions. Our expert team offers diverse services, focusing on understanding your audience and delivering measurable results. Partner with LongNeck for marketing that reaches further and builds enduring brand connections.',
      link: 'https://longneck-reach-further.lovable.app/',
    },
  ];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.5,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Companies = () => {
  return (
    <CompaniesContainer id="companies">
      <Container>
        <MotionTypography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center" 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{ 
            mb: 6,
            color: '#E2E2B6',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          Our Companies
        </MotionTypography>
        <MotionGrid 
          container 
          spacing={4}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <MotionGrid 
              item 
              xs={12} 
              md={4} 
              key={index}
              variants={itemVariants}
            >
              <MotionCard
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <MotionLogoSection
                  variants={logoVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#E2E2B6',
                      fontWeight: 'bold',
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {company.name}
                  </Typography>
                </MotionLogoSection>
                <ContentSection>
                  <Box>
                    <MotionTypography 
                      variant="body1" 
                      paragraph
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      sx={{ 
                        color: 'inherit',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.8,
                      }}
                    >
                      {company.description}
                    </MotionTypography>
                  </Box>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#E2E2B6',
                        color: '#021526',
                        borderRadius: '8px',
                        padding: '8px 24px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        width: '30%',
                        margin: '0 auto',
                        textAlign: 'center',
                      }}
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </Button>
                  </Box>
                </ContentSection>
              </MotionCard>
            </MotionGrid>
          ))}
        </MotionGrid>
      </Container>
    </CompaniesContainer>
  );
};

export default Companies; 
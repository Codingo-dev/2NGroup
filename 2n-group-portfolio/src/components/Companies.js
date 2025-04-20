import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const CompaniesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#021526',
  color: '#E2E2B6',
}));

const CompanyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: '#03346E',
  color: '#E2E2B6',
  '&:hover': {
    transform: 'translateY(-10px)',
    backgroundColor: '#6EACDA',
    color: '#021526',
  },
}));

const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionCard = motion(CompanyCard);

const companies = [
  {
    name: 'Codingo',
    description: 'Specialized in technology solutions, software development, and digital innovation. We create cutting-edge solutions that drive business growth and digital transformation.',
    link: 'https://codingo.com',
  },
  {
    name: 'Upperhand',
    description: 'A leading media and marketing agency that helps brands tell their stories and reach their target audience through innovative marketing strategies and creative content.',
    link: 'https://upperhand.com',
  },
  {
    name: 'Example',
    description: 'Dedicated to providing high-quality skincare products and solutions. Our mission is to help people achieve healthy, radiant skin through scientifically-backed formulations.',
    link: 'https://example.com',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Companies = () => {
  return (
    <CompaniesContainer>
      <Container>
        <MotionTypography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ 
            mb: 6,
            color: '#E2E2B6',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ color: 'inherit' }}
                  >
                    {company.name}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ color: 'inherit' }}
                  >
                    {company.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#6EACDA',
                      color: '#021526',
                      '&:hover': {
                        backgroundColor: '#E2E2B6',
                      },
                    }}
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </Button>
                </CardContent>
              </MotionCard>
            </MotionGrid>
          ))}
        </MotionGrid>
      </Container>
    </CompaniesContainer>
  );
};

export default Companies; 
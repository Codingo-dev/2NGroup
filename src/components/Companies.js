import React from 'react';
import { Box, Typography, Container, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const CompaniesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#021526',
  color: '#E2E2B6',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const CompanyCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#03346E',
  color: '#E2E2B6',
  padding: theme.spacing(4),
  borderRadius: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    backgroundColor: '#6EACDA',
    color: '#021526',
  },
}));

const companies = [
    {
    name: 'Codingo',
    type: 'Software Development',
      description: 'Specialized in technology solutions, software development, and digital innovation. We create cutting-edge solutions that drive business growth and digital transformation.',
      link: 'https://codingo.com',
    },
    {
    name: 'UpperHand',
    type: 'Amazon SPN Partner',
    description: 'Focused on maximizing your sales and brand performance. We offer strategic account management, listing optimization, PPC, inventory help, and brand protection, adhering to Amazons best practices.',
      link: 'https://upperhand.com',
    },
    {
    name: 'LongNeck',
    type: 'Marketing Agency',
    description: 'Marketing agency that helps your brand stand out and achieve lasting growth through strategic, creative solutions. Our expert team offers diverse services, focusing on understanding your audience and delivering measurable results.',
      link: 'https://example.com',
    },
  ];

const Companies = () => {
  return (
    <CompaniesContainer id="companies">
      <Container>
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center" 
          sx={{ 
            mb: 6,
            color: '#E2E2B6',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          Our Companies
        </Typography>
        <Grid container spacing={4}>
          {companies.map((company, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CompanyCard>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      color: 'inherit',
                    }}
                  >
                    {company.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                      sx={{ 
                      color: '#6EACDA',
                      mb: 2,
                      fontWeight: 'bold',
                    }}
                  >
                    {company.type}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                      {company.description}
                  </Typography>
                  <motion.a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      width: '100%',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Typography
                      variant="button"
                      sx={{
                        display: 'inline-block',
                        backgroundColor: '#6EACDA',
                        color: '#021526',
                        padding: '8px 24px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#E2E2B6',
                        },
                      }}
                    >
                      Visit Website
                    </Typography>
                  </motion.a>
                </CompanyCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </CompaniesContainer>
  );
};

export default Companies; 
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CompaniesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const CompanyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

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

const Companies = () => {
  return (
    <CompaniesContainer>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Our Companies
        </Typography>
        <Grid container spacing={4}>
          {companies.map((company, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CompanyCard>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {company.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {company.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </Button>
                </CardContent>
              </CompanyCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </CompaniesContainer>
  );
};

export default Companies; 
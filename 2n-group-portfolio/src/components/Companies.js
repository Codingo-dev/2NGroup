import React from 'react';
import { Box, Typography, Container, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const CompaniesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#ffffff',
  color: '#000000',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CompanyCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#EFEEEA',
  padding: theme.spacing(4),
  borderRadius: '16px',
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const companies = [
    {
    name: 'Codingo',
    type: 'Software Development',
      description: 'Specialized in technology solutions, software development, and digital innovation. We create cutting-edge solutions that drive business growth and digital transformation.',
      link: 'https://codingo-launchpad-online.lovable.app/',
    },
    {
    name: 'UpperHand',
    type: 'Amazon SPN Partner',
    description: 'Focused on maximizing your sales and brand performance. We offer strategic account management, listing optimization, PPC, inventory help, and brand protection, adhering to Amazons best practices.',
      link: 'https://upperhand-amazon-launchpad.lovable.app/',
    },
    {
    name: 'LongNeck',
    type: 'Marketing Agency',
    description: 'Marketing agency that helps your brand stand out and achieve lasting growth through strategic, creative solutions. Our expert team offers diverse services, focusing on understanding your audience and delivering measurable results.',
      link: 'https://longneck-reach-further.lovable.app/',
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
            mb: 4,
            color: '#000000',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: '400',
          }}
        >
          Companies
        </Typography>
        <hr style={{ width: '50%' , border: '1px solid #000000', margin: 'auto', color: '#000000', marginBottom: '40px'}} />

        <div className='companies-container'
             style={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: '20px'}}
        >
        {companies.map((company, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>       
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
                      color: '#EFEEEA',
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
                        backgroundColor: '#EFEEEA',
                        color: '#000000',
                        padding: '8px 24px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                      }}
                    >
                      Visit Website
                    </Typography>
                  </motion.a>
                </CompanyCard>
              </motion.div>
            </Grid>
          ))}
        </div>


      </Container>
    </CompaniesContainer>
  );
};

export default Companies; 
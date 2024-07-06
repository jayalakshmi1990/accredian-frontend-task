// src/components/HeroSection.js
import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const HeroSection = ({ onReferNowClick }) => (
  <Container sx={{ textAlign: 'center', marginTop: '2rem' }}>
    <Typography variant="h3" gutterBottom>
      Refer & Earn
    </Typography>
    <Button variant="contained" color="primary" onClick={onReferNowClick}>
      Refer Now
    </Button>
  </Container>
);

export default HeroSection;

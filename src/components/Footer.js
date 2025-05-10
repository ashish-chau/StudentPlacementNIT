import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2 }}>
      <Container maxWidth="lg">
        {/* Footer Text in a single line and centered */}
       

        {/* Copyright Section */}
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="inherit">
            © 2025 Naresh i Technologies. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

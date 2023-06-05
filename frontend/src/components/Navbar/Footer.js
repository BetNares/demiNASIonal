import React from 'react'
import { Box, Typography } from '@mui/material'


const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        RiceLovers
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Indonesia sehat dimulai dari sesuap nasi. Salam pecinta nasi!
      </Typography>
    </Box>
    );
  };
  
  export default Footer;
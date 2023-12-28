import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Contact() {
  return (
    <>
      <Box
        sx={{
          paddingTop: '8vh',
          textAlign: 'center',
          height: '60vh',
        }}
        id='contact'
      >
        <Typography variant="h4">Get in touch</Typography>
        <Typography
          sx={{
            mt: 4,
            marginInline: { xs: '5vh', md: '50vh' }, // Responsive horizontal margin
          }}
          variant="body1"
        >
          I’m currently looking for any new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </Typography>
        <Button
          sx={{ 
            mt: 8, 
            border: '.5px solid black', 
            borderRadius: 2,
            fontWeight: 'semi-bold',
            ":hover": { 
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease',
              boxShadow: 3
            } 
          }}
        >
          Say Hello
        </Button>
      </Box>
    </>
  );
}

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'start',
        }}
        id='home'
      >
        <Box
          sx={{
            marginInline: { xs: '5vh', md: '30vh' }, 
          }}
        > 
          <Typography variant="h4" component="h1">Hi! I'm Pavel Garin.</Typography>
          <Typography
            sx={{
              mt: 4,
              marginRight: { xs: '10vh', md: '40vh' },
            }}
            variant="body2"
          >
            I create solutions with Java. As a software engineer, my passion lies in developing impactful software. Right now, I'm all about crafting accessible, user-friendly applications, ready to bring my skills and enthusiasm to a dynamic team.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

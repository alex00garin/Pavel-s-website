import React from 'react';
import { Box, Typography } from '@mui/material';

export default function About() {
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
      > 
        <Box
          sx={{
            marginInline: { xs: '5vh', md: '30vh' }, // Responsive margin inline
          }}
        > 
          <Typography
            sx={{
              marginRight: { xs: '10vh', md: '40vh' }, // Responsive margin right for the first paragraph
            }}
            variant="body1"
          >
            As a Java Engineer with a Mechanical Engineering background from Sochi Marine University, I specialize in developing software that powers complex operations, like those I handled at Imeretinskiy Seaport. My expertise lies in writing high-quality Java code and guiding projects through the full software development lifecycle.
          </Typography>
          <Typography
            sx={{
              mt: 16,
              marginLeft: { xs: '10vh', md: '40vh' }, // Responsive margin left for the second paragraph
            }}
            variant="body1"
          >
            I thrive on collaboration with skilled professionals, using my unique mix of engineering and ChatGPT skills to solve complex problems. Driven by a passion to create impactful software, my goal is to continually grow, embracing new challenges and technologies in the Java domain.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

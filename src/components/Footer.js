import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const footerItems = ['Home', 'About', 'Portfolio', 'Contact'];

function Footer() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box component="footer" sx={{ boxShadow: 4, m: 2, border: '0.5px solid #d3d3d3', borderRadius: 2 }}>
      <Box sx={{ maxWidth: 'xl', mx: 'auto', p: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body2" color="text.secondary" textAlign={{ xs: 'center', sm: 'left' }}>
          © 2024 Pavel Garin
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {footerItems.map((item) => (
            <Button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
            {item}
          </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

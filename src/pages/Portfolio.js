import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '../components/CustomCard';

export default function Portfolio() {
    return (
        <Box 
          sx={{ 
            paddingTop: '10vh', 
            textAlign: 'center', 
            marginBottom: '10vh',
        }} 
          id='portfolio'
        >
            <Typography variant="h4">My Work</Typography>
            <Grid 
              container 
              spacing={2} 
              sx={{ 
                paddingTop: '5vh', 
                paddingInline: { xs: '5vh', md: '10vh' } // Responsive horizontal padding
              }}
            >

                {/* Grid items with CustomCard */}
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CustomCard
                        title="Card Title 1"
                        description="Brief description of the project."
                        imageUrl="path_to_image.jpg"
                        link={{ url: 'https://example.com', text: 'Look at the code' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CustomCard
                        title="Card Title 2"
                        description="Brief description of the project."
                        imageUrl="path_to_image.jpg"
                        link={{ url: 'https://example.com', text: 'Look at the code' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CustomCard
                        title="Card Title 3"
                        description="Brief description of the project."
                        imageUrl="path_to_image.jpg"
                        link={{ url: 'https://example.com', text: 'Look at the code' }}
                    />
                </Grid>

            </Grid>
        </Box>
    );
}

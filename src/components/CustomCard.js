import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-between',
    },
  });

function CustomCard({ title, description, imageUrl, link }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardContent>
        {title && <Typography gutterBottom variant="h5" component="div">{title}</Typography>}
        {description && <Typography variant="body2" color="text.secondary">{description}</Typography>}
        {imageUrl && <CardMedia component="img" image={imageUrl} />}
        </CardContent>
        {link && (
        <CardActions sx={{ display: 'flex', justifyContent: 'end', alignContent: 'end' }}>
            <Button size="small" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
            </Button>
        </CardActions>
        )}
  </Card>
  );
}

export default CustomCard;

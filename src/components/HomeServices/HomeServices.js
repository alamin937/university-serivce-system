import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const HomeServices = (props) => {
    const {img, description} = props.home
    return (
        <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image={img}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0,200)}
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
};

export default HomeServices;
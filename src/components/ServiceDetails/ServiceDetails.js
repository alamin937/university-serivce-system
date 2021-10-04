import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ServiceDetails = (props) => {
    const {img, dept, duration, Fee} = props.service
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
        <h3>Department:  {dept}</h3>
         <h3>Duration: {duration}</h3>
         <h3>Tution Fee: {Fee}</h3>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
};

export default ServiceDetails;
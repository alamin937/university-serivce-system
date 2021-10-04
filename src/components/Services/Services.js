import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div style={{width:'90%', margin:'0 auto', marginTop:'30px'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
                {
                    services.map(service => <Grid item xs={2} sm={4} md={4}>
                           <ServiceDetails service={service}></ServiceDetails>
                        </Grid>)
                }
                     
           </Grid>
            </div>
        </div>
    );
};

export default Services;
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeServices from '../HomeServices/HomeServices';
import './Home.css'

const Home = () => {
    const [homes, setHomes] = useState([])
    useEffect(()=>{
        fetch('./home.json')
        .then(res => res.json())
        .then(data => setHomes(data))
    },[])
    return (
        <div>
            <div className='club'>
                <h1>BUBT CLUB</h1>
            </div>
            <div style={{width:'90%', margin:'0 auto', marginTop:'30px'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
                {
                    homes.map(home => <Grid item xs={2} sm={4} md={4}>
                            <HomeServices home={home}></HomeServices>
                        </Grid>)
                }
                     
           </Grid>
            </div>
        </div>
    );
};

export default Home;
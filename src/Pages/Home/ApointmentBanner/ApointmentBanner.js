import React from 'react';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const AppointmentBannerBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode:'darken, luminosity',
    marginTop:150
}
const ApointmentBanner = () => {
    return (
        <Container sx={{paddingLeft:'0',paddingRight:'0'}}>
       <Box style={AppointmentBannerBg} sx={{ flexGrow: 1,}} >
            
                <Grid container spacing={2} columns={{ xs: 12, md: 12 }} >
            <Grid item xs={12} md={6} >
                <img
                style={{width:'350px', marginTop:-100}} 
                src={doctor} alt="" />
            </Grid>
            <Grid item xs={12} md={6}  sx={{ display: 'flex', justifyContent: 'flex-start',textAlign:'left',alignItems:'center' }}>
                 <Box sx={{flexDirection: 'column'}}>
                    <Typography variant="h6" sx={{mb:3}} style={{color:'#00e5ff'}}>
                        Appointment
                    </Typography>
                            
                    <Typography variant="h4" sx={{mb:3}}  style={{color:'#fff',}}>
                        Make an Appointment Today
                    </Typography>
                            
                    <Typography variant="h4" sx={{mb:3}} style={{color:'#fff', fontSize:14}}>
                       It is a long estavlished fact that a reader will be distractedby the readable content of a page when looking at it's

                    </Typography>  
                    <Button variant='contained' sx={{bgcolor: '#00e5ff'}}>Learn More</Button>        
               </Box>
            </Grid>
             </Grid>
        
       
            </Box>
            </Container>
    );
};

export default ApointmentBanner;
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg.png'
import chair from '../../../images/chair.png'
import { Container, Typography } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';


const bannerBg = {
 background: `url(${bg})`,
}

const AppointmentHeader = ({date, setDate}) => {
    
    return (
        <div>
            <Container sx={{ flexGrow: 1 }} style={bannerBg} >
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">
                            Appointment 
                        </Typography>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src={chair} alt="" />
                    </Grid>
                    
            </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;
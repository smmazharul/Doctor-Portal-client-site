import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Grid from '@mui/material/Grid';
import { Button, Container, Typography,} from '@mui/material';
import  Box  from '@mui/material/Box';



const BannerBg = {
    background: `url(${bg})`,
    
}
const verticleCenter = {
    display: 'flex',
    alignItems: 'center',
    height:400
}
const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1,}} style={BannerBg}>
      <Grid container spacing={2} >
          <Grid item xs={12} md={6} style={{ ...verticleCenter, textAlign: 'left' }}>
                    <Box>

                        <Typography variant='h3' sx={{fontWeight:500, mb:2}}>
                        Your New Smile <br />
                        Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{fontSize:13,fontWeight:300, color:'gray',  mb:2}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odit doloremque distinctio aspernatur nam quis laborum tempore.
                        </Typography>
                        <Button variant='contained' sx={{bgcolor: '#00e5ff'}}>Get Appoinment</Button>    
                    </Box>
               
         </Grid>
      
        <Grid item xs={12} md={6} style={verticleCenter}>
          <img style={{width:'350px'}} src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;
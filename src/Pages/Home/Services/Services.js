import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Service from '../Service/Service'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';


const services = [
    {
        name: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quasi modi itaque, exercitationem error laudantium earum sint optio dolorem.",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quasi modi itaque, exercitationem error laudantium earum sint optio dolorem.",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quasi modi itaque, exercitationem error laudantium earum sint optio dolorem.",
        img: whitening
    },
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{mt:4}} >
                <Typography variant="h6" component="div" color="#00e5ff"  >
                    OUR SERVICES
                 </Typography >
                <Typography variant="h4" component="div"  sx={{mt:2,mb:8, fontWeight:'500'}}>
                    Services We Provide
                 </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                  
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
                
            </Container>
         </Box>
    );
};

export default Services;

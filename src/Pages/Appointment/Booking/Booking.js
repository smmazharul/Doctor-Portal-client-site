import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModale from '../BookingModale/BookingModale';

const Booking = ({ booking,date,setBookingSuccess }) => {
    const { name, time, space } = booking
     const [BookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    
    return (
        <>
        <Grid item xs={12} sm={6} md={4} sx={{mt:5}}>
        
            <Paper elevation={3} sx={{py:5}}>
                <Typography  sx={{color: '#00e5ff'}} variant="h5" component="div" gutterBottom>
                     {name}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                     {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {space} Spaces Available
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained"  sx={{bgcolor: '#00e5ff'}}>Book APPOINTMENT</Button>
            </Paper>

        </Grid>
            <BookingModale
                date={date}
                booking={booking}
            BookingOpen={BookingOpen}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModale>
        
        </>
    );
};

export default Booking;
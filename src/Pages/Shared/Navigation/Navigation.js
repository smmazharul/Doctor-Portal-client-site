import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Navigation = () => {
    const {user,logOut}=useAuth()
    return (
        <div>
            <Box sx={{ flexGrow: 1,  }} >
                <AppBar position="static" >
                    <Toolbar  sx={{bgcolor: '#00e5ff'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                        </Typography>
                        <NavLink to='/appointment' style={{textDecoration:'none'}} >
                            <Button color="inherit" sx={{color:'white',}}>Appointment</Button>
                        </NavLink>
                        {
                            user?.email ?
                            <Box>
                                     <NavLink to='/dashboard' style={{textDecoration:'none'}} >
                            <Button color="inherit" sx={{color:'white',}}>Dashboard</Button>
                            </NavLink>
                                <Button onClick={logOut} color="inherit" sx={{color:'white',}}>Login Out</Button>
                            </Box>
                       
                             :
                            <NavLink to='/login' style={{textDecoration:'none'}} >
                            <Button color="inherit" sx={{color:'white',}}>Login</Button>
                            </NavLink>
                        
                        }
                    
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;
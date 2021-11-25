import { Button, Container, Grid, TextField, Typography,LinearProgress,Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from'./../../../Hooks/useAuth'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser,signInWithGoogle, isLoding, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
        
    }


    const handleGooleSignIn = () => {
        signInWithGoogle(location,history)
    }
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: "#00e5ff" }} variant="body1" gutterBottom>
              Please Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onBlur={handleOnchange}
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnchange}
                variant="standard"
              ></TextField>
              <Button
                sx={{ width: "75%", m: 1, bgcolor: "#00e5ff" }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text" sx={{ color: "#00e5ff" }}>
                  New User? Please Register
                </Button>
              </NavLink>
              {isLoding && <LinearProgress color="secondary" />}
              {user?.email && (
                <Alert severity="success">Login Successfully</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p>--------------------------</p>
            <Button onClick={handleGooleSignIn} variant="contained" sx={{ color: "#fff",bgcolor: "#00e5ff"  }}>
              Google Sign In
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={login} style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Login;
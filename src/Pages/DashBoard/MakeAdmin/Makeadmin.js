import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const Makeadmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admim', {
            method: "PUT",
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                   
                    setSuccess(true);
                }
            
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{width:"50%"}} id="standard-basic" label="Standard" variant="standard"
                    label='Email'
                    variant='standard'
                    type='email'
                    onBlur={handleOnBlur}
                />
                
                <Button type='submit' variant='contained'>Make Admin</Button>

            </form>
            {success && (
                <Alert severity="success">Made Admin Successfully</Alert>
              )}
        </div>
    );
};

export default Makeadmin;
import React, { Component } from 'react';
import { TextField } from '@mui/material';

class Login extends Component {
    render() {
        return (
            <div>
                <TextField id="filled-basic" label="Login" variant="filled" />
                <br /><TextField id="filled-password-input" label="Password" type="password" autoComplete="current-password"
                variant="filled"/>
            </div>
        );
    }
}

export default Login;

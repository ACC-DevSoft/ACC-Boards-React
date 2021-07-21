import React from "react";
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Navbar (){
    return(
        <AppBar position="static">
        <Toolbar>
            <Link  variant="" to="/">
                <Typography>ACC-BOARDS</Typography>
            </Link>
            <Link to="/workSpaces">WorkSpaces</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/ListRole">ListRole</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/Login">Login</Link>
        </Toolbar>
    </AppBar>
    );
}
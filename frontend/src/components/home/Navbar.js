import React from "react";
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import logo from "../../assets/img/Acc_Logo2.png";
import LoginPage from "../auth/LoginPage";
import "./Styles.css";

export default function Navbar (){
    return(
        <AppBar position="static" >
        <Toolbar className="bgHeader">
            <div className="logo">
            <Link to="/">
                <img  src={logo} alt="logo" className="img" />
                {/* <Typography>ACC-BOARDS</Typography> */}
            </Link>
            </div>
            <div className="nav-items">
                <Link  className="btn" to="/workSpaces">WorkSpaces</Link>
                <Link  className="btn" to="/ListRole">ListRole</Link>
            </div>
            <div className="nav-items">
                <Link  className="btn" to="/Profile">Profile</Link>
                <Link className="btn-stroked" to="/register">Sign Up</Link>
                    <LoginPage/>
                {/* <Link className="btn-stroked" to="/Login">Login</Link> */}
            </div>
        </Toolbar>
    </AppBar>
    );
}
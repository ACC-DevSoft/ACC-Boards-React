import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/Acc-logo_Purple.png";
import './Styles.css';

export default function Home(){
    return(
        <Container  className="container" >
            <div className="row">
                <div className="text-home col col-sm-7">
                    <h1 className="title">Take control of your tasks and workspaces</h1>
                <p>Manage your <span>tasks</span> in an organized way, control your <span>work team</span> and improve your productive times</p>
                </div>
                <div className="col col-sm-5">
                    <div className="content-img">
                        <img  src={logo} alt="logo" className="Img" />
                    </div>
                </div>
            </div>
            <div className="content-btn">
                    <Link to="/register" className="btn-start">Empezar</Link>
                {/* <Button variant="contained" color="primary">Empezar</Button> */}
            </div>
        </Container>
    )
}

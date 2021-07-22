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
                    <h1 className="title">Toma el control de tus tareas y espacios de trabajo</h1>
                    <p>Maneja <span>tareas</span> de forma organizada, controla tu <span>equipo de trabajo</span> y mejora tus tiempos prodcutivos.</p>
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
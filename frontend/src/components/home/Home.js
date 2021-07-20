import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <Container  >
            <Grid container item sm={6} >
                <div>
                    <Typography variant="h3">Toma el control de tus tareas y espacios de trabajo</Typography>
                    <p>Maneja <span>tareas</span> de forma organizada, controla tu <span>equipo de trabajo</span> y mejora tus tiempos prodcutivos.</p>
                </div>
                <div>
                        <Link component="button" color="primary" to="/register">Empezar</Link>
                    {/* <Button variant="contained" color="primary">Empezar</Button> */}
                </div>
            </Grid>
            <Grid item sm={6}>
                <img  src="" alt="logo"/>
            </Grid>
        </Container>
    )
}
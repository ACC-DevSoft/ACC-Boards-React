import React, { useContext } from 'react';
import {
	AppBar,
	Button,
	Toolbar,
	Typography,
	makeStyles,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/Acc_Logo2.png';
import LoginPage from '../auth/LoginPage';
import './Styles.css';
import UserContext from '../../UserContext';

const useStyles = makeStyles({
	root: {
		color: 'white',
		padding: '8px',
		marginRight: '5px',
		border: 'white',
		'&:hover': {
			backgroundColor: 'trasnparent',
			border: '1px solid white',
			borderRadius: '0.5rem',
			color: 'white',
			textDecoration: 'none',
		},
	},
});

export default function Navbar() {
	const classes = useStyles();

	const userContext = useContext(UserContext);

	console.log(userContext);

	return (
		<AppBar position="static">
			<Toolbar className="bgHeader">
				<div className="logo">
					<NavLink to="/">
						<img src={logo} alt="logo" className="img" />
						{/* <Typography>ACC-BOARDS</Typography> */}
					</NavLink>
				</div>
				<div className="nav-items">
					{userContext.login && (
						<>
							<NavLink
								exact
								activeClassName="active"
								className={classes.root}
								to="/workSpaces"
							>
								WorkSpaces
							</NavLink>
							<NavLink
								exact
								activeClassName="active"
								className={classes.root}
								to="/ListUsers"
							>
								ListUsers
							</NavLink>
							<NavLink
								exact
								activeClassName="active"
								className={classes.root}
								to="/ListRole"
							>
								ListRole
							</NavLink>
						</>
					)}
				</div>
				<div className="nav-items">
					{userContext.login && (
						<NavLink
							exact
							activeClassName="active"
							className={classes.root}
							to="/Profile"
						>
							Profile
						</NavLink>
					)}

					{!userContext.login && (
						<>
							<NavLink
								exact
								activeClassName="active"
								className={`btn-stroked  ${classes.root}`}
								to="/register"
							>
								Sign Up
							</NavLink>
							<NavLink
								exact
								activeClassName="active"
								className={`btn-stroked  ${classes.root}`}
								to="/login"
							>
								Login
							</NavLink>
						</>
					)}
					{userContext.login && (
						<NavLink
							exact
							activeClassName="active"
							className={`btn-stroked  ${classes.root}`}
							to="/logout"
						>
							Logout
						</NavLink>
					)}

					{/* <span ><LoginPage /></span> */}
					{/* <NavLink className="btn-stroked"> */}
					{/* </NavLink> */}
					{/* <NavLink className={`btn-stroked  ${classes.root}`} to="/Login">Login</NavLink> */}
				</div>
			</Toolbar>
		</AppBar>
	);
}

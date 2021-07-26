import React from 'react';
import './AccBoards.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/home/Navbar";
import Home from "./components/home/Home";
import ListWorkSpaces from "./components/workspaces/ListWorkSpaces";
import Profile from './components/users/Profile';
// import ListWorkSpaces from "./components/workspaces/ListWorkSpaces";
import ListRole from './components/admin/ListRole';
import ListUsers from "./components/admin/ListUsers";
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

function AccBoardsApp() {
	return (
		<>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact><Home/></Route>
				<Route path="/WorkSpaces" ><ListWorkSpaces/></Route>
				<Route path="/Profile" ><Profile/></Route>
				<Route path="/ListRole" ><ListRole/></Route>
				<Route path="/ListUsers" ><ListUsers/></Route>
				<Route path="/register" ><RegisterPage/></Route>
				<Route path="/Login" ><LoginPage/></Route>
			</Switch>
		</Router>
		</>
	);
};


export default AccBoardsApp;


import './AccBoards.css';
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./components/home/Navbar";
import Home from "./components/home/Home";
import  ListWorkSpaces from "./components/workspaces/ListWorkSpaces";
import Profile from './components/users/Profile';
import ListRole from './components/admin/ListRole';
import ListUsers from "./components/admin/ListUsers";
=======
import React from 'react';
import AddWorkSpaces from './components/workspaces/AddWorkSpaces';
>>>>>>> d17ef9a822efc25b4c50be2d65427afc4a46824f
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

		// <div>
		// 	<h1>Acc Boards App</h1>
		// </div>
	)
}
export default AccBoardsApp;


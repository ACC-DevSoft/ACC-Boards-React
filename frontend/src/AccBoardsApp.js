import React from 'react';
import './AccBoards.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./components/home/Navbar";
import Home from "./components/home/Home";
import  ListWorkSpaces from "./components/workspaces/ListWorkSpaces";
import Profile from './components/users/Profile';
import ListRole from './components/admin/ListRole';
import ListUsers from "./components/admin/ListUsers";
// import AddWorkSpaces from './components/workspaces/AddWorkSpaces';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import AddUser from './components/admin/AddUser';
import AppRouter from './routers/AppRouter';


function AccBoardsApp() {
	return (
		<AppRouter />
	)
}
export default AccBoardsApp;


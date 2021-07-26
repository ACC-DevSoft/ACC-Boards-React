import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Navbar from '../components/home/Navbar';
import Home from '../components/home/Home';
import ListRole from '../components/admin/ListRole';
import ListUsers from '../components/admin/ListUsers';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';
import Profile from '../components/users/Profile';
import ListWorkSpaces from '../components/workspaces/ListWorkSpaces';

const AppRouter = () => {
	return (
		<Router>
			<div className="">
				<div className="">
					<Navbar />
					<Switch>
						<Route path="/WorkSpaces">
							<ListWorkSpaces />
						</Route>
						<Route path="/Profile">
							<Profile />
						</Route>
						<Route path="/ListRole">
							<ListRole />
						</Route>
						<Route path="/ListUsers">
							<ListUsers />
						</Route>
						<Route path="/register">
							<RegisterPage />
						</Route>
						<Route path="/Login">
							<LoginPage />
						</Route>
						<Route path="/" exact>
							<Home />
						</Route>
						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default AppRouter;

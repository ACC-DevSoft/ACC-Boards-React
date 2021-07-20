import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

const AppRouter = () => {
	return (
		<Router>
			<div className="">
				<div className="">
					<Switch>
						<Route />

						<Redirect />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default AppRouter;

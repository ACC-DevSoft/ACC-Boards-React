import './AccBoards.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "../src/components/home/Navbar";
import Home from "./components/home/Home";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";


function AccBoardsApp() {
	return (
		<>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact><Home/></Route>
				<Route path="/register"><RegisterPage/></Route>
				<Route path="/login"><LoginPage/></Route>
			</Switch>
		</Router>
		</>

		// <div>
		// 	<h1>Acc Boards App</h1>
		// </div>
	);
}

export default AccBoardsApp;

import './AccBoards.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "../src/components/home/Navbar";
import Home from "./components/home/Home";
import  ListWorkSpaces from "./components/workspaces/ListWorkSpaces";
import Profile from './components/users/Profile';
import ListRole from './components/admin/ListRole';


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
			</Switch>
		</Router>
		</>

		// <div>
		// 	<h1>Acc Boards App</h1>
		// </div>
	);
}

export default AccBoardsApp;

import './AccBoards.css';
import React from 'react';
import LoginPage from './components/auth/LoginPage';
import AddUser from './components/admin/AddUser';
import RegisterRole from './components/admin/RegisterRole';
import AddWorkSpaces from './components/workspaces/AddWorkSpaces';
import SaveBoard from './components/boards/SaveBoard';

function AccBoardsApp() {
	return (
		<section>
			<AddUser />
			<LoginPage />
			<RegisterRole />
			<AddWorkSpaces id={localStorage.getItem("current")}/>
			<SaveBoard id={localStorage.getItem("currentW")}/>
		</section>
	);
};

export default AccBoardsApp;

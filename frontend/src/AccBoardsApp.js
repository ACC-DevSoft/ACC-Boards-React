import './AccBoards.css';
import React from 'react';
// import AddWorkSpaces from './components/workspaces/AddWorkSpaces';
import LoginPage from './components/auth/LoginPage';
import AddUser from './components/admin/AddUser';

function AccBoardsApp() {
	return (
		<section>
			<AddUser />
			<LoginPage />
		</section>
	);
};

export default AccBoardsApp;

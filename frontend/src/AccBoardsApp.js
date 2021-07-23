import './AccBoards.css';
import React from 'react';
import LoginPage from './components/auth/LoginPage';
import AddUser from './components/admin/AddUser';
import RegisterRole from './components/admin/RegisterRole';

function AccBoardsApp() {
	return (
		<section>
			<AddUser />
			<LoginPage />
			<RegisterRole />
		</section>
	);
};

export default AccBoardsApp;

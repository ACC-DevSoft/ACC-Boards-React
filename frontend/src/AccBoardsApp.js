import React from 'react';
import './AccBoards.css';

import AppRouter from './routers/AppRouter';
import UserContext from './UserContext';

function AccBoardsApp() {
	const userLogged = {
		login: false,
		Admin: false,
	};
	return (
		<UserContext.Provider value={userLogged}>
			<AppRouter />
		</UserContext.Provider>
	);
}
export default AccBoardsApp;

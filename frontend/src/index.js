import React from 'react';
import ReactDOM from 'react-dom';
import AccBoardsApp from './AccBoardsApp';
import Profile from './components/users/Profile';
import ListRole from './components/admin/ListRole';
import ListUsers from './components/admin/ListUsers';
import './index.css';

ReactDOM.render(
	// <AccBoardsApp />,
	// <Profile />,
	//<ListRole />,
	<ListUsers />,

	document.getElementById('root')
);

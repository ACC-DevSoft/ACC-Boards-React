import React from 'react';
import ReactDOM from 'react-dom';
import AccBoardsApp from './AccBoardsApp';
import ListUsers from './components/admin/ListUsers';

import './index.css';

ReactDOM.render(
	<>
	<AccBoardsApp />
	<ListUsers />
	</>
	,

	document.getElementById('root')
);

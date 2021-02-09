import React from 'react';
import { useHistory } from 'react-router-dom';

import './HomeButton.css';

const HomeButton = () => {
	const history = useHistory();

	const handleGoHomeClick = () => {
		history.push('/');
	};

	return (
		<button className='home-button' onClick={handleGoHomeClick}>
			<i className='fas fa-arrow-left'></i> Home
		</button>
	);
};

export default HomeButton;

import React from 'react';
import { useHistory } from 'react-router-dom';

import './HomeButton.css';

const HomeButton = () => {
	const history = useHistory();

	const handleGoBackClick = () => {
		history.goBack();
	};

	return (
		<button className='home-button' onClick={handleGoBackClick}>
			<i class='fas fa-arrow-left'></i> Home
		</button>
	);
};

export default HomeButton;

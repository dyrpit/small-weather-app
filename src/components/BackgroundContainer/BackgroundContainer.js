import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './BackgroundContainer.css';
import { ThemeContext } from '../../context/ThemeProvider';

const BackgroundContainer = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`background-container background-container--${theme}`}>
			<div className='backdrop'>{children}</div>
		</div>
	);
};

BackgroundContainer.propTypes = {
	children: PropTypes.object,
};

export default BackgroundContainer;

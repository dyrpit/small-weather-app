import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './AppContainer.css';
import { ThemeContext } from '../../context/ThemeProvider';

const AppContainer = ({ children, properCondition }) => {
	const { theme } = useContext(ThemeContext);

	const style = theme === 'dark' ? 'dark' : properCondition;

	return <div className={`app-container app-container--${style}`}>{children}</div>;
};

AppContainer.propTypes = {
	children: PropTypes.array,
	properCondition: PropTypes.string,
};

export default AppContainer;

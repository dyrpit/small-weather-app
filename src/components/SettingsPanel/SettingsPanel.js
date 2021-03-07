import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

import './SettingsPanel.css';

const SettingsPanel = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<>
			<h3 className='panel__title'>Settings</h3>
			<div className='panel__btn-container'>
				<i className='far fa-moon'></i>
				<button className={`panel__btn panel__btn--${theme}`} onClick={toggleTheme}></button>
				<i className='far fa-sun'></i>
			</div>
		</>
	);
};

export default SettingsPanel;

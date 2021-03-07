import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import LocationsPanel from '../LocationsPanel/LocationsPanel';
import SideMenuButton from '../SideMenuButton/SideMenuButton';
import SettingsPanel from '../SettingsPanel/SettingsPanel';

import { ThemeContext } from '../../context/ThemeProvider';

import './SideMenu.css';

const SideMenu = ({ getWeather }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isSettingOpen, setIsSettingOpen] = useState(false);

	const { theme } = useContext(ThemeContext);

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
		setIsSettingOpen(false);
	};

	const toggleSettings = () => {
		setIsSettingOpen((prevState) => !prevState);
	};

	const isPanelOpen = isOpen ? 'is-open' : '';

	return (
		<>
			<div className='side-menu'>
				<div
					onClick={toggleMenu}
					className={`side-menu__background side-menu--${isPanelOpen} `}
				></div>
				<div
					className={`side-menu__panel side-menu__panel--${isPanelOpen} side-menu__panel--${theme}`}
				>
					<div onClick={toggleMenu} className='side-menu__close-button'>
						<i className='fas fa-times'></i>
					</div>

					<div onClick={toggleSettings} className='settings'>
						{isSettingOpen ? (
							<i className='fas fa-city'></i>
						) : (
							<i className='fas fa-cog settings__icon'></i>
						)}
					</div>
					{isSettingOpen ? <SettingsPanel /> : <LocationsPanel getWeather={getWeather} />}
				</div>
			</div>
			<SideMenuButton toggleMenu={toggleMenu} />
		</>
	);
};

SideMenu.propTypes = {
	getWeather: PropTypes.func,
};

export default SideMenu;

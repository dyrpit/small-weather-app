import React from 'react';
import PropTypes from 'prop-types';

import './SideMenuButton.css';

const SideMenuButton = ({ toggleMenu }) => {
	return (
		<div onClick={toggleMenu} className='side-menu-button'>
			<i className='fas fa-ellipsis-v side-menu-button__icon'></i>
		</div>
	);
};

SideMenuButton.propTypes = {
	toggleMenu: PropTypes.func,
};

export default SideMenuButton;

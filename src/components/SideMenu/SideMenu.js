import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SideMenuButton from '../SideMenuButton/SideMenuButton';

import './SideMenu.css';

const SideMenu = ({ favouriteCities, getWeather, handleFavouriteCitiesChange }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
	};

	const handleRemoveFromStorage = (id) => {
		let favouriteCities = JSON.parse(localStorage.getItem('cities'));
		console.log(id);

		favouriteCities = favouriteCities.filter((city, index) => index !== id);

		localStorage.setItem('cities', JSON.stringify(favouriteCities));
		handleFavouriteCitiesChange(favouriteCities);
	};

	const openedSideMenu = isOpen ? 'side-menu--is-open' : '';
	const openedSidePanel = isOpen ? 'side-menu__panel--is-open' : '';

	return (
		<>
			<div className='side-menu'>
				<div onClick={toggleMenu} className={`side-menu__background ${openedSideMenu}`}></div>
				{/* onClick={toggleMenu} */}
				<div className={`side-menu__panel ${openedSidePanel}`}>
					<div className='settings'>
						<i className='fas fa-cog settings__icon'></i>
					</div>
					<h3 className='panel__title'>Favourite locations</h3>
					<ul className='panel__city-list'>
						{favouriteCities &&
							favouriteCities.map(({ city, lat, lng }, id) => (
								<div key={city + id}>
									<p onClick={() => getWeather(city, lat, lng)}>{city}</p>
									<p onClick={() => handleRemoveFromStorage(id)}>
										<i className='far fa-trash-alt'></i>
									</p>
								</div>
							))}
					</ul>
				</div>
			</div>
			<SideMenuButton toggleMenu={toggleMenu} />
		</>
	);
};

SideMenu.propTypes = {
	favouriteCities: PropTypes.array,
	getWeather: PropTypes.func,
	handleFavouriteCitiesChange: PropTypes.func,
};

export default SideMenu;

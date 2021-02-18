import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading/Loading';

import './Header.css';

const Header = ({ city, err, isLoading, handleFavouriteCitiesChange, lat, lng }) => {
	const day = new Date().toLocaleDateString(undefined, {
		weekday: 'short',
	});

	const time = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	const handleAddToStorage = () => {
		console.log(city, lng, lat);
		const cityLocation = {
			city,
			lng,
			lat,
		};

		const cityStorage = localStorage.getItem('cities');

		if (!cityStorage) {
			const dataToSave = JSON.stringify(Array.of(cityLocation));
			localStorage.setItem('cities', dataToSave);
			handleFavouriteCitiesChange(dataToSave);
			return;
		}

		const data = JSON.parse(cityStorage);
		data.push(cityLocation);
		localStorage.setItem('cities', JSON.stringify(data));
		handleFavouriteCitiesChange(data);
	};

	return (
		<header className='header'>
			<div className='header__container'>
				{isLoading ? (
					<Loading />
				) : (
					<>
						<div className='header__container header__container--row'>
							<p className='header__city-name'>{err || city}</p>
							{Boolean(err) || (
								<div onClick={handleAddToStorage} className='header__add-button'>
									<i className='fas fa-plus add-button__icon'></i>
								</div>
							)}
						</div>
						<p className='header__date'>
							{day}, {time}
						</p>
					</>
				)}
			</div>
		</header>
	);
};

Header.propTypes = {
	city: PropTypes.string,
	err: PropTypes.string,
	isLoading: PropTypes.bool,
};

export default Header;

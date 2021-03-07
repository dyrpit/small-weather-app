import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../context/ThemeProvider';

import './CityItem.css';

const CityItem = ({ city, getWeather, id, lat, lng }) => {
	const { removeFromStorage, theme } = useContext(ThemeContext);

	const handleRemoveFromStorage = (id) => {
		removeFromStorage(id);
	};

	return (
		<div className={`city-item city-item--${theme}`}>
			<p className='city-item__name' onClick={() => getWeather(city, lat, lng)}>
				{city}
			</p>
			<p className='city-item__remove' onClick={() => handleRemoveFromStorage(id)}>
				<i className='far fa-trash-alt'></i>
			</p>
		</div>
	);
};

CityItem.propTypes = {
	city: PropTypes.string,
	getWeather: PropTypes.func,
	id: PropTypes.number,
	lat: PropTypes.number,
	lng: PropTypes.number,
};

export default CityItem;

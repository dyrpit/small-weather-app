import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CityItem from '../CityItem/CityItem';

import { ThemeContext } from '../../context/ThemeProvider';

const LocationsPanel = ({ getWeather }) => {
	const { storedValue } = useContext(ThemeContext);

	return (
		<>
			<h3 className='panel__title'>Favourite locations</h3>
			<ul className='panel__list'>
				{storedValue.map(({ city, lat, lng }, id) => (
					<CityItem
						key={city + id}
						city={city}
						lat={lat}
						lng={lng}
						id={id}
						getWeather={getWeather}
					/>
				))}
			</ul>
		</>
	);
};

LocationsPanel.propTypes = {
	getWeather: PropTypes.func,
};

export default LocationsPanel;

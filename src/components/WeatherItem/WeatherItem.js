import React from 'react';

import { formatTimeFromUnix } from '../../utils/formatTimeFromUnix';
import { getProperImage } from '../../utils/getImage';

import './WeatherItem.css';

const WeatherItem = ({ itemWeather }) => {
	const {
		dt,
		temp,
		weather: [{ main }],
	} = itemWeather;

	const weatherImg = getProperImage(main.toLowerCase());
	const formatedHour = formatTimeFromUnix(dt);

	return (
		<div className='weather-item'>
			<p className='weather-item__text'>{formatedHour}</p>
			<img className='weather-item__img' src={weatherImg} alt={main} />
			<p className='weather-item__text'>{temp.toFixed()}&#176;</p>
		</div>
	);
};

export default WeatherItem;

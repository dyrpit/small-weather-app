import React from 'react';

import './WeatherSection.css';

import { getProperImage } from '../../utils/getImage';
import Container from '../Container/Container';

const WeatherSection = ({ conditions, max, min, temp, sunrise, sunset, weather }) => {
	const weatherImg = getProperImage(conditions, sunrise, sunset);

	return (
		<Container>
			<div className='weather-type-section'>
				<img className='weather-type-img' src={weatherImg} alt={conditions} />
				<p>{weather}</p>
			</div>
			<div className='temp-section'>
				<div className='main-temp-wrapper'>
					<p>{temp}&#176;</p>
				</div>
				<div className='max-min-temp-wrapper'>
					<p>{max}&#176; C</p>
					<p>{min}&#176; C</p>
				</div>
			</div>
		</Container>
	);
};

export default WeatherSection;

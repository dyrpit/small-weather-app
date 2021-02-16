import React from 'react';

import Container from '../Container/Container';
import WeatherHourly from '../WeatherHourly/WeatherHourly';

import { getProperImage } from '../../utils/getImage';

import './WeatherSection.css';

const WeatherSection = ({
	conditions,
	max,
	min,
	temp,
	sunrise,
	sunset,
	weather,
	hourlyWeather,
}) => {
	const weatherImg = getProperImage(conditions, sunrise, sunset);

	return (
		<Container>
			<div className='weather-section'>
				<img className='weather-section__img' src={weatherImg} alt={conditions} />
				<p className='weather-section__text'>{weather}</p>
			</div>
			<div className='weather-section weather-section--grow'>
				<div className='weather-section__container'>
					<p className='weather-section__main-temp'>{temp}&#176;</p>
				</div>
				<div className='weather-section__container'>
					<p className='weather-section__aside-temp'>
						<span>Max: </span>
						{max}&#176; C
					</p>
					<p className='weather-section__aside-temp weather-section__aside-temp--border-top'>
						<span>Min: </span>
						{min}&#176; C
					</p>
				</div>
			</div>
			<WeatherHourly hourlyWeather={hourlyWeather} />
		</Container>
	);
};

export default WeatherSection;

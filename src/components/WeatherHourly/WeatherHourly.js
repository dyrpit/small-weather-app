import React from 'react';
import PropTypes from 'prop-types';

import WeatherItem from '../WeatherItem/WeatherItem';

import './WeatherHourly.css';

const WeatherHourly = ({ hourlyWeather }) => {
	const handleRightScroll = () => {
		const outerWrapper = document.querySelector('.hourly-weather-section');
		const innerWrapper = document.querySelector('.hourly-weather-section__container');
		const item = document.querySelector('.weather-item');
		const buttonLeft = document.querySelector('.hourly-weather-section__button--left');
		const buttonRight = document.querySelector('.hourly-weather-section__button--right');

		const fromLeft = innerWrapper.offsetLeft;
		const currentMovedWidth =
			outerWrapper.getBoundingClientRect().width + innerWrapper.offsetLeft * -1;
		const innerWrapperWidth = innerWrapper.offsetWidth;
		const itemWidth = item.clientWidth;
		const maxFromLeftPosition = -(
			innerWrapper.offsetWidth - outerWrapper.getBoundingClientRect().width
		);

		if (fromLeft - itemWidth < 0) {
			buttonLeft.style.display = 'block';
		}

		if (currentMovedWidth + itemWidth >= innerWrapperWidth) {
			buttonRight.style.display = 'none';
			innerWrapper.style.left = `${maxFromLeftPosition}px`;
			return;
		}

		innerWrapper.style.left = `${fromLeft - itemWidth}px`;
	};

	const handleLeftScroll = () => {
		const outerWrapper = document.querySelector('.hourly-weather-section');
		const innerWrapper = document.querySelector('.hourly-weather-section__container');
		const item = document.querySelector('.weather-item');
		const buttonLeft = document.querySelector('.hourly-weather-section__button--left');
		const buttonRight = document.querySelector('.hourly-weather-section__button--right');

		const fromLeft = innerWrapper.offsetLeft;
		const itemWidth = item.clientWidth;
		const maxFromLeftPosition = -(
			innerWrapper.offsetWidth - outerWrapper.getBoundingClientRect().width
		);

		if (fromLeft + itemWidth >= 0) {
			buttonLeft.style.display = 'none';
			innerWrapper.style.left = '0px';
			return;
		}

		if (fromLeft + itemWidth > maxFromLeftPosition) {
			buttonRight.style.display = 'block';
		}

		innerWrapper.style.left = `${fromLeft + itemWidth}px`;
	};

	return (
		<div className='hourly-weather-section'>
			<button
				className='hourly-weather-section__button hourly-weather-section__button--left'
				onClick={handleLeftScroll}
			>
				<i className='fas fa-angle-left'></i>
			</button>
			<div className='hourly-weather-section__container'>
				{hourlyWeather &&
					hourlyWeather.map((itemWeather, id) => (
						<WeatherItem key={id} itemWeather={itemWeather} />
					))}
			</div>
			<button
				className='hourly-weather-section__button hourly-weather-section__button--right'
				onClick={handleRightScroll}
			>
				<i className='fas fa-angle-right'></i>
			</button>
		</div>
	);
};

WeatherHourly.propTypes = {
	hourlyWeather: PropTypes.arrayOf(PropTypes.object),
};

export default WeatherHourly;

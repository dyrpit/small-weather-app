import React from 'react';
import './Header.css';

const Header = ({ city, err }) => {
	const day = new Date().toLocaleDateString(undefined, {
		weekday: 'short',
	});

	const time = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	return err ? (
		<div className='weather-container'>
			<p className='warn'>City not found</p>
		</div>
	) : (
		<header className='weather-container'>
			<div className='city-container'>
				<p>{city}</p>
				<p>
					{day}, {time}
				</p>
			</div>
		</header>
	);
};

export default Header;

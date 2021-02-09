import React from 'react';

import Loading from '../Loading/Loading';

import './Header.css';

const Header = ({ city, err, isLoading }) => {
	const day = new Date().toLocaleDateString(undefined, {
		weekday: 'short',
	});

	const time = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	return (
		<header className='weather-container'>
			<div className='city-container'>
				{isLoading ? (
					<Loading />
				) : (
					<>
						<p>{err || city}</p>
						<p>
							{day}, {time}
						</p>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;

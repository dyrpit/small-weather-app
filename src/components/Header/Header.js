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
		<header className='header'>
			<div className='header__container'>
				{isLoading ? (
					<Loading />
				) : (
					<>
						<p className='header__city-name'>{err || city}</p>
						<p className='header__date'>
							{day}, {time}
						</p>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;

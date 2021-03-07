import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading/Loading';

import { ThemeContext } from '../../context/ThemeProvider';

import './Header.css';

const Header = ({ city, err, isLoading, lat, lng }) => {
	const { addToStorage, theme } = useContext(ThemeContext);

	const day = new Date().toLocaleDateString(undefined, {
		weekday: 'short',
	});

	const time = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	const handleAddToStorage = () => {
		const cityLocation = {
			city,
			lng,
			lat,
		};

		addToStorage(cityLocation);
	};

	return (
		<header className={`header ${theme}`}>
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
	lat: PropTypes.number,
	lng: PropTypes.number,
};

export default Header;

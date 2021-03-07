import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import alert from '../../svg/alert.svg';
import details from '../../svg/info.svg';
import logo from '../../images/logo512.png';
import pollution from '../../svg/co2.svg';

import './Nav.css';
import { ThemeContext } from '../../context/ThemeProvider';

const Nav = ({ properCondition }) => {
	const { theme } = useContext(ThemeContext);

	const style = theme === 'dark' ? 'dark' : properCondition;

	return (
		<nav className={`menu menu--${style}`}>
			<ul className='menu__list'>
				<li className='menu__item'>
					<Link className='menu__link' to='/pollution'>
						<img className='menu__image' src={pollution} alt='pollution menu icon' />
						<p className='menu__name'>Air Pollution</p>
					</Link>
				</li>
				<li className='menu__item'>
					<Link className='menu__link' to='/details'>
						<img className='menu__image' src={details} alt='details menu icon' />
						<p className='menu__name'>Details</p>
					</Link>
				</li>
				<li className='menu__item'>
					<Link className='menu__link' to='/alerts'>
						<img className='menu__image' src={alert} alt='alert menu icon' />
						<p className='menu__name'>Alerts</p>
					</Link>
				</li>
			</ul>
			<div className='menu__logo'>
				<img className='logo__image' src={logo} alt='logo' />
				<span className='logo__title'>Small weather app</span>
			</div>
		</nav>
	);
};

Nav.propTypes = {
	properCondition: PropTypes.string,
};

export default Nav;

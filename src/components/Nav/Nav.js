import React from 'react';
import { Link } from 'react-router-dom';

import alert from '../../svg/alert.svg';
import details from '../../svg/info.svg';
import pollution from '../../svg/co2.svg';

import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<ul>
				<li className='nav-item'>
					<Link>
						<img src={pollution} alt='pollution menu icon' />
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/details'>
						<img src={details} alt='details menu icon' />
					</Link>
				</li>
				<li className='nav-item'>
					<Link>
						<img src={alert} alt='alert menu icon' />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

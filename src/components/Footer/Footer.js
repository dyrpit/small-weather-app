import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__copyright'>
				<p className='footer__made-by'>Piotr Dyrda &copy;</p>
			</div>
			<div className='footer__credits'>
				Icons made by{' '}
				<a
					className='footer__link'
					href='https://www.flaticon.com/authors/vitaly-gorbachev'
					title='Vitaly Gorbachev'
				>
					Vitaly Gorbachev
				</a>{' '}
				and{' '}
				<a className='footer__link' href='https://www.freepik.com' title='Freepik'>
					Freepik
				</a>{' '}
				from{' '}
				<a className='footer__link' href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;

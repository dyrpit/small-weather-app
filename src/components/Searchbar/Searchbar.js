import React from 'react';
import PropTypes from 'prop-types';

import './Searchbar.css';

const Searchbar = ({ handleInputChange, value, handleSubmit }) => {
	return (
		<form className='search'>
			<input
				className='search__input'
				type='text'
				placeholder='Type city'
				value={value}
				onChange={handleInputChange}
			></input>
			<button className='search__btn' onClick={handleSubmit}>
				<i className='fas fa-search'></i>
			</button>
		</form>
	);
};

Searchbar.propTypes = {
	handleInputChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	value: PropTypes.string,
};

export default Searchbar;

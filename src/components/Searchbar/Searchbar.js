import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Searchbar.css';

const Searchbar = ({ getWeather }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		const { value } = e.target;
		setInputValue(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		getWeather(inputValue);
	};

	return (
		<form className='search'>
			<input
				className='search__input'
				type='text'
				placeholder='Type city'
				value={inputValue}
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

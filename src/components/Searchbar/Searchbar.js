import React from 'react';
import './Searchbar.css';

const Searchbar = ({ handleInputChange, value, handleSubmit }) => {
	return (
		<form>
			<input type='text' placeholder='Type city' value={value} onChange={handleInputChange}></input>
			<button onClick={handleSubmit}>
				<i className='fas fa-search'></i>
			</button>
		</form>
	);
};

export default Searchbar;

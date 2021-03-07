import React from 'react';

import './Loading.css';

const Loading = ({ main }) => {
	const mainCLass = main ? 'main' : '';

	return (
		<div className={`loading ${mainCLass}`}>
			<p className='loading__text'>Loading...</p>
		</div>
	);
};

export default Loading;

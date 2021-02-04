import React from 'react';

import { formatTimeFromUnix } from '../../utils/formatTimeFromUnix';
import { getProperImage } from '../../utils/getProperImage';

import './DetailsItem.css';

const DetailsItem = ({ value, title }) => {
	const icon = getProperImage(title);
	const formatedtime = formatTimeFromUnix(value);
	let suffix = '';

	if (title === 'wind') {
		suffix = ' km/h';
	} else if (title === 'humidity') {
		suffix = '%';
	}

	return (
		<div className='details-item-wrapper'>
			<div className='details-description'>
				<img src={icon} alt={title} />
				<span>{title}</span>
				<p>
					{formatedtime}
					{suffix}
				</p>
			</div>
		</div>
	);
};

export default DetailsItem;

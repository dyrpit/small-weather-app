import React from 'react';

import { formatTimeFromUnix } from '../../utils/formatTimeFromUnix';
import { getProperImage } from '../../utils/getImage';

import './DetailsItem.css';

const DetailsItem = ({ value, title }) => {
	const icon = getProperImage(title);
	let displayedValue = value;
	let suffix = '';

	if (title === 'wind') {
		suffix = ' km/h';
	} else if (title === 'humidity') {
		suffix = '%';
	} else if (title === 'sunrise' || title === 'sunset') {
		displayedValue = formatTimeFromUnix(value);
	}

	return (
		<div className='details-item-wrapper'>
			<div className='details-description'>
				<img src={icon} alt={title} />
				<span>{title}</span>
				<p>
					{displayedValue}
					{suffix}
				</p>
			</div>
		</div>
	);
};

export default DetailsItem;

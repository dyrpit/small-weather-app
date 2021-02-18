import React from 'react';
import PropTypes from 'prop-types';

import { formatTimeFromUnix } from '../../utils/formatTimeFromUnix';
import { getProperImage } from '../../utils/getImage';

import './DetailsItem.css';

const DetailsItem = ({ value, title }) => {
	const icon = getProperImage(title);
	let displayedValue = value;
	let suffix = '';

	if (title === 'wind') {
		suffix = ' km/h';
	} else if (title === 'humidity' || title === 'cloudy') {
		suffix = '%';
	} else if (title === 'sunrise' || title === 'sunset') {
		displayedValue = formatTimeFromUnix(value);
	} else if (title === 'pressure') {
		suffix = ' hPa';
	}

	return (
		<section className='details-section'>
			<div className='details-section__item'>
				<img className='details-section__img' src={icon} alt={title} />
				<span className='details-section__title'>{title}</span>
				<p className='details-section__value'>
					{displayedValue}
					{suffix}
				</p>
			</div>
		</section>
	);
};

DetailsItem.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string,
};

export default DetailsItem;

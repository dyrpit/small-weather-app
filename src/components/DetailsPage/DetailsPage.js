import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container/Container';
import DetailsItem from '../DetailsItem/DetailsItem';
import HomeButton from '../HomeButton/HomeButton';

import './DetailsPage.css';

const DetailsPage = (props) => {
	const detailsArray = Object.entries(props);

	return (
		<Container>
			<HomeButton />
			{detailsArray.map(([title, value]) => (
				<DetailsItem key={title} value={value} title={title} />
			))}
		</Container>
	);
};

DetailsPage.propTypes = {
	props: PropTypes.object,
};

export default DetailsPage;

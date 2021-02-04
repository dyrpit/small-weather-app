import React from 'react';

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
				<DetailsItem value={value} title={title} />
			))}
		</Container>
	);
};

export default DetailsPage;

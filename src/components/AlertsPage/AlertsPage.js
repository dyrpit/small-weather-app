import React, { useEffect, useState } from 'react';

import Container from '../Container/Container';
import HomeButton from '../HomeButton/HomeButton';
import Loading from '../Loading/Loading';

import { fetchWeatherAlerts } from '../../utils/fetch';

const AlertsPage = ({ lat, lng }) => {
	const [alert, setAlert] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState(null);

	useEffect(() => {
		const fetchWeatherAlertsData = async (lat, lng) => {
			setIsLoading(true);
			try {
				const weatherAlertsData = await fetchWeatherAlerts(lat, lng);

				setIsLoading(false);

				if (!weatherAlertsData) {
					setAlert('No weather alerts');
					return;
				}

				setAlert(weatherAlertsData.description);
			} catch (e) {
				console.log(e);
				setErr(e.message);
				setIsLoading(false);
			}
		};

		fetchWeatherAlertsData(lat, lng);
	}, [lat, lng]);

	return (
		<Container>
			<HomeButton />
			<div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{isLoading ? <Loading /> : <p>{err || alert}</p>}
			</div>
		</Container>
	);
};

export default AlertsPage;

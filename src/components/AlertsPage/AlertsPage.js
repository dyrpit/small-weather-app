import React, { useEffect, useState } from 'react';

import Container from '../Container/Container';
import HomeButton from '../HomeButton/HomeButton';
import Loading from '../Loading/Loading';

import { fetchWeatherAlerts } from '../../utils/fetch';

import './AlertsPage.css';

const AlertsPage = ({ lat, lng }) => {
	const [alert, setAlert] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		const fetchWeatherAlertsData = async (lat, lng) => {
			setIsLoading(true);
			try {
				const weatherAlertsData = await fetchWeatherAlerts(lat, lng, {
					signal: abortController.signal,
				});

				setIsLoading(false);

				if (!weatherAlertsData || !weatherAlertsData.description) {
					setAlert('No weather alerts');
					return;
				}

				setAlert(weatherAlertsData.description);
			} catch (e) {
				setErr(e.message);
				setIsLoading(false);
			}
		};

		fetchWeatherAlertsData(lat, lng);

		return () => {
			abortController.abort();
		};
	}, [lat, lng]);

	return (
		<Container>
			<HomeButton />
			<div className='alerts-section'>
				{isLoading ? <Loading /> : <p className='alerts-section__description'>{err || alert}</p>}
			</div>
		</Container>
	);
};

export default AlertsPage;

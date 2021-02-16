export const fetchWeather = (location = 'Warsaw', lat, lng) => {
	let URL = `https://weather-app-dyrpit.herokuapp.com/weather?location=${location}`;
	if (lat && lng) {
		URL = `https://weather-app-dyrpit.herokuapp.com/weather?lat=${lat}&lng=${lng}`;
	}

	return fetch(URL)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response;
		})
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((e) => {
			if (e.message === '400') {
				throw new Error('City not found');
			}

			throw new Error(e.message);
		});
};

export const fetchWeatherAlerts = (lat, lng, signal) => {
	const URL = `https://weather-app-dyrpit.herokuapp.com/weather/alerts?lat=${lat}&lng=${lng}`;
	return fetch(URL, signal)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response;
		})
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			const { alerts } = res;
			if (!alerts) {
				return null;
			}

			return alerts[0];
		})
		.catch((e) => {
			if (e.message === '400') {
				throw new Error('No alerts for this city');
			}

			throw new Error(e.message);
		});
};

export const fetchWeatherHourly = (lat, lng) => {
	const URL = `https://weather-app-dyrpit.herokuapp.com/weather/hourly?lat=${lat}&lng=${lng}`;
	return fetch(URL)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response;
		})
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			const { hourly } = res;
			if (!hourly) {
				return null;
			}

			return hourly;
		})
		.catch((e) => {
			if (e.message === '400') {
				throw new Error('No hourly weather for this city');
			}

			throw new Error(e.message);
		});
};

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AlertsPage from '../AlertsPage/AlertsPage';
import AppContainer from '../AppContainer/AppConatiner';
import BackgroundContainer from '../BackgroundContainer/BackgroundContainer';
import DetailsPage from '../DetailsPage/DetailsPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Nav from '../Nav/Nav';
import PollutionPage from '../PollutionPage/PollutionPage';
import Searchbar from '../Searchbar/Searchbar';
import SideMenu from '../SideMenu/SideMenu';
import WeatherSection from '../WeatherSection/WeatherSection';

import { fetchWeather, fetchWeatherHourly } from '../../utils/fetch';
import { getProperCondition } from '../../utils/getProperConditon';

import ThemeProvider from '../../context/ThemeProvider';

import './App.css';

const App = () => {
	//TODO1: add setting to change units
	const [isLoading, setIsLoading] = useState(true);
	const [weatherData, setWeatherData] = useState(null);
	const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
	const [errMessage, setErrMessage] = useState('');
	const [properCondition, setProperConditions] = useState('');
	const [initialLoading, setInitialLoading] = useState(true);

	const getWeather = async (location, lat, lng) => {
		setIsLoading(true);
		!weatherData ? setInitialLoading(true) : setInitialLoading(false);

		try {
			const weatherData = await fetchWeather(location, lat, lng);

			if (weatherData) {
				const {
					clouds: { all: cloudy },
					coord: { lon: lng, lat },
					main: { temp, temp_max, temp_min, humidity, pressure },
					name: city,
					sys: { sunrise, sunset },
					wind: { speed },
					weather: [{ main, description }],
				} = weatherData;

				setWeatherData({
					temp: Number(temp.toFixed()),
					maxTemp: Number(temp_max.toFixed()),
					minTemp: Number(temp_min.toFixed()),
					city,
					humidity,
					pressure,
					wind: Number(speed.toFixed()),
					conditions: main.toLowerCase(),
					conditionsDescription: description,
					cloudy,
					sunrise,
					sunset,
					lng,
					lat,
				});

				const hourlyWeatherData = await fetchWeatherHourly(
					weatherData.coord.lat,
					weatherData.coord.lon
				);

				setIsLoading(false);
				setInitialLoading(false);

				if (hourlyWeatherData) {
					setHourlyWeatherData(hourlyWeatherData);
				}
			}
		} catch (e) {
			setIsLoading(false);
			setErrMessage(e.message);
		}
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			getWeather(undefined, position.coords.latitude, position.coords.longitude);
		});
	}, []);

	useEffect(() => {
		const properCondition = getProperCondition(
			weatherData?.conditions,
			weatherData?.sunrise,
			weatherData?.sunset
		);

		setProperConditions(properCondition);
	}, [weatherData]);

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<ThemeProvider>
				<BackgroundContainer>
					{initialLoading ? (
						<Loading main={true} />
					) : (
						<>
							<SideMenu getWeather={getWeather} />
							<AppContainer properCondition={properCondition}>
								<Header
									city={weatherData.city}
									err={errMessage}
									isLoading={isLoading}
									lat={weatherData.lat}
									lng={weatherData.lng}
								/>
								<Searchbar getWeather={getWeather} />
								<Route
									exact
									path='/'
									component={() => (
										<WeatherSection
											conditions={properCondition}
											weather={weatherData.conditions}
											temp={weatherData.temp}
											max={weatherData.maxTemp}
											min={weatherData.minTemp}
											sunrise={weatherData.sunrise}
											sunset={weatherData.sunset}
											hourlyWeather={hourlyWeatherData}
										/>
									)}
								/>
								<Route
									path='/details'
									component={() => (
										<DetailsPage
											cloudy={weatherData.cloudy}
											humidity={weatherData.humidity}
											pressure={weatherData.pressure}
											sunrise={weatherData.sunrise}
											sunset={weatherData.sunset}
											wind={weatherData.wind}
										/>
									)}
								/>
								<Route
									path='/alerts'
									component={() => <AlertsPage lat={weatherData.lat} lng={weatherData.lng} />}
								/>
								<Route path='/pollution' component={() => <PollutionPage />} />
								<Nav properCondition={properCondition} />
								<Footer />
							</AppContainer>
						</>
					)}
				</BackgroundContainer>
			</ThemeProvider>
		</Router>
	);
};

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AlertsPage from '../AlertsPage/AlertsPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Searchbar from '../Searchbar/Searchbar';
import WeatherSection from '../WeatherSection/WeatherSection';

// import { ThemeContext, colors } from '../../context/themeContext';
import { fetchWeather, fetchWeatherHourly } from '../../utils/fetch';
import { getProperCondition } from '../../utils/getProperConditon';

import './App.css';

class App extends Component {
	//TODO1: add debouce to reduce input onchange refresh, minimize child re-renders
	//TODO2: add theme to switch for dark mode
	//TODO3: add prop types
	state = {
		value: '',
		temp: '',
		humidity: '',
		maxTemp: '',
		minTemp: '',
		pressure: '',
		wind: '',
		conditions: '',
		conditionsDescription: '',
		city: '',
		cloudy: '',
		sunrise: '',
		sunset: '',
		err: false,
		lat: '',
		lng: '',
		isLoading: false,
		hourlyWeather: null,
	};

	handleInputChange = (e) => {
		const { value } = e.target;
		this.setState({ value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.getWeather(this.state.value);
	};

	getWeather = async (location, lat, lng) => {
		this.setState({ isLoading: true });
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

				this.setState({
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
					err: false,
					width: null,
					hourlyWeather: null,
				});

				const hourlyWeatherData = await fetchWeatherHourly(
					weatherData.coord.lat,
					weatherData.coord.lon
				);

				this.setState({ isLoading: false });

				if (hourlyWeatherData) {
					this.setState({
						hourlyWeather: hourlyWeatherData,
					});
				}
			}
		} catch (e) {
			this.setState({ err: e.message, isLoading: false });
		}
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			this.getWeather(undefined, position.coords.latitude, position.coords.longitude);
		});
	}

	render() {
		const {
			city,
			conditions,
			cloudy,
			err,
			humidity,
			lat,
			lng,
			maxTemp,
			minTemp,
			pressure,
			sunrise,
			sunset,
			temp,
			value,
			wind,
			isLoading,
			hourlyWeather,
		} = this.state;

		const properCondition = getProperCondition(conditions, sunrise, sunset);

		return (
			<Router>
				{/* <ThemeContext.Provider value={theme}> */}
				<div className='background-container'>
					<div className='backdrop'>
						<div className={`app-container ${properCondition}`}>
							<Header city={city} err={err} isLoading={isLoading} />
							<Searchbar
								handleInputChange={this.handleInputChange}
								handleSubmit={this.handleSubmit}
								value={value}
							/>
							<Route
								exact
								path='/'
								component={() => (
									<WeatherSection
										conditions={properCondition}
										weather={conditions}
										temp={temp}
										max={maxTemp}
										min={minTemp}
										sunrise={sunrise}
										sunset={sunset}
										hourlyWeather={hourlyWeather}
									/>
								)}
							/>
							<Route
								path='/details'
								component={() => (
									<DetailsPage
										cloudy={cloudy}
										humidity={humidity}
										pressure={pressure}
										sunrise={sunrise}
										sunset={sunset}
										wind={wind}
									/>
								)}
							/>
							<Route path='/alerts' component={() => <AlertsPage lat={lat} lng={lng} />} />
							<Nav properCondition={properCondition} />
							<Footer />
						</div>
					</div>
				</div>
				{/* </ThemeContext.Provider> */}
			</Router>
		);
	}
}

export default App;

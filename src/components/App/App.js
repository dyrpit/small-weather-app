import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AlertsPage from '../AlertsPage/AlertsPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Searchbar from '../Searchbar/Searchbar';
import WeatherSection from '../WeatherSection/WeatherSection';

import { fetchWeather } from '../../utils/fetch';
import { getBackgroundImage } from '../../utils/getBackgroundImage';
import { getProperCondition } from '../../utils/getProperConditon';

import './App.css';

class App extends Component {
	//TODO1: add debouce to reduce input onchange refresh, minimize child re-renders
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

			this.setState({ isLoading: false });

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
				});
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
			err,
			humidity,
			lat,
			lng,
			maxTemp,
			minTemp,
			sunrise,
			sunset,
			temp,
			value,
			wind,
			isLoading,
		} = this.state;

		const properCondition = getProperCondition(conditions, sunrise, sunset);
		getBackgroundImage();

		return (
			<Router>
				<div className='background-container' img={''}>
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
									/>
								)}
							/>
							<Route
								path='/details'
								component={() => (
									<DetailsPage humidity={humidity} sunrise={sunrise} sunset={sunset} wind={wind} />
								)}
							/>
							<Route path='/alerts' component={() => <AlertsPage lat={lat} lng={lng} />} />
							<Nav />
							<Footer />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

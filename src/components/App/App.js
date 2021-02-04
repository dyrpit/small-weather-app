import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DetailsPage from '../DetailsPage/DetailsPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Searchbar from '../Searchbar/Searchbar';
import WeatherSection from '../WeatherSection/WeatherSection';

import { getProperCondition } from '../../utils/getProperConditon';

import './App.css';

class App extends Component {
	//TODO1: add debouce to reduce input onchange refresh, minimize child re-renders
	//TODO2: extract fetch method to utils
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
	};

	handleInputChange = (e) => {
		const { value } = e.target;
		this.setState({ value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.fetchWeather();
		this.setState({
			value: '',
		});
	};

	fetchWeather = (lat, lng) => {
		const defaultValue = this.state.value || 'Warsaw';
		let URL = `https://weather-app-dyrpit.herokuapp.com/weather?location=${defaultValue}`;
		if (lat && lng) {
			URL = `https://weather-app-dyrpit.herokuapp.com/weather?lat=${lat}&lng=${lng}`;
		}
		fetch(URL)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				}
				return response;
			})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({
					temp: data.main.temp.toFixed(),
					maxTemp: data.main.temp_max.toFixed(),
					minTemp: data.main.temp_min.toFixed(),
					city: data.name,
					humidity: data.main.humidity,
					pressure: data.main.pressure,
					wind: data.wind.speed.toFixed(),
					conditions: data.weather[0].main.toLowerCase(),
					conditionsDescription: data.weather[0].description,
					cloudy: data.clouds.all,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					err: false,
				});
			})
			.catch((err) => {
				this.setState({
					err: true,
				});
				console.log(err);
			});
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			this.fetchWeather(position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2));
		});
	}

	render() {
		const {
			city,
			conditions,
			err,
			humidity,
			maxTemp,
			minTemp,
			sunrise,
			sunset,
			temp,
			value,
			wind,
		} = this.state;

		const properCondition = getProperCondition(conditions, sunrise, sunset);

		return (
			<Router>
				<div className={`app-container ${properCondition}`}>
					<Header city={city} err={err} />
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
					<Nav />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;

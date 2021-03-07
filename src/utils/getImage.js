import ash from '../svg/ash.svg';
import clearDay from '../svg/clear-day.svg';
import clearNight from '../svg/clear-night.svg';
import clouds from '../svg/clouds.svg';
import cloudy from '../svg/cloudy.svg';
import humidity from '../svg/humidity.svg';
import mist from '../svg/mist.svg';
import pressure from '../svg/pressure.svg';
import rain from '../svg/rain.svg';
import sand from '../svg/sand.svg';
import sunrise from '../svg/sunrise.svg';
import sunset from '../svg/sunset.svg';
import snow from '../svg/snow.svg';
import thunderstorm from '../svg/thunderstorm.svg';
import tornado from '../svg/tornado.svg';
import wind from '../svg/wind.svg';

import { isDay } from './isDay';

const weatherImages = {
	ash,
	clearDay,
	clearNight,
	clouds,
	cloudy,
	humidity,
	mist,
	pressure,
	rain,
	sand,
	snow,
	sunrise,
	sunset,
	thunderstorm,
	tornado,
	wind,
};

export const getProperImage = (conditions = '', sunRise, sunSet) => {
	if (conditions.includes('clear')) {
		return isDay(sunRise, sunSet) ? weatherImages['clearDay'] : weatherImages['clearNight'];
	} else {
		return weatherImages[conditions];
	}
};

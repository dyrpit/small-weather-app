import { isDay } from './isDay';

const mistConditions = ['mist', 'smoke', 'haze', 'fog', 'squall'];
const sandConditions = ['sand', 'dust'];
const rainConditions = ['rain', 'drizzle'];

export const getProperCondition = (conditon, sunrise, sunset) => {
	if (mistConditions.includes(conditon)) {
		return 'mist';
	} else if (sandConditions.includes(conditon)) {
		return 'sand';
	} else if (rainConditions.includes(conditon)) {
		return 'rain';
	} else if (conditon === 'clear') {
		return isDay(sunrise, sunset) ? 'clearDay' : 'clearNight';
	} else {
		return conditon;
	}
};

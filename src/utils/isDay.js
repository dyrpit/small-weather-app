export const isDay = (sunrise, sunset) => {
	const sunriseInMiliseconds = sunrise * 1000;
	const sunsetInMiliseconds = sunset * 1000;
	const currentTime = Date.now();

	return currentTime < sunsetInMiliseconds && currentTime > sunriseInMiliseconds ? true : false;
};

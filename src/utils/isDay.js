export const isDay = (sunrise, sunset) => {
	if (!sunrise || !sunset) {
		return true;
	}

	const sunriseInMiliseconds = sunrise * 1000;
	const sunsetInMiliseconds = sunset * 1000;
	const currentTime = Date.now();

	return currentTime < sunsetInMiliseconds && currentTime > sunriseInMiliseconds ? true : false;
};

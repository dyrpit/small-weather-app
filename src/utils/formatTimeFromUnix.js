export const formatTimeFromUnix = (unixTime) => {
	const timeInMiliseconds = unixTime * 1000;
	const time = new Date(timeInMiliseconds).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	return time;
};

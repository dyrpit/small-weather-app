import { useEffect, useState } from 'react';

const useFavouriteCitiesStorage = (key) => {
	const [storedValue, setStoredValue] = useState(null);

	useEffect(() => {
		const storageValue = localStorage.getItem(key);

		const valueToStore = storageValue != null ? JSON.parse(storageValue) : null;

		setStoredValue(valueToStore);
	}, [key]);

	const removeFromStorage = (id) => {
		const valueToStore = storedValue.filter((city, index) => index !== id);

		localStorage.setItem(key, JSON.stringify(valueToStore));

		setStoredValue(valueToStore);
	};

	const addToStorage = (value) => {
		const valueToStore = storedValue != null ? [...storedValue, value] : Array.of(value);

		localStorage.setItem(key, JSON.stringify(valueToStore));

		setStoredValue(valueToStore);
	};

	return [storedValue, addToStorage, removeFromStorage];
};

export default useFavouriteCitiesStorage;

import React, { createContext, useState } from 'react';
import useFavouriteCitiesStorage from '../hooks/useFavouriteCitiesStorage';
import { citiesKey } from '../keys/storageKey';

export const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');
	const [storedValue, addToStorage, removeFromStorage] = useFavouriteCitiesStorage(citiesKey);

	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<ThemeContext.Provider
			value={{ theme, toggleTheme, storedValue, addToStorage, removeFromStorage }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

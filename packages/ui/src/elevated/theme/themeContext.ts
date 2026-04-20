import { createContext } from 'react';

export type ThemeContextValue = {
	initialTheme: string;
	setTheme: (nextTheme: string) => void;
	availableThemes: string[];
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

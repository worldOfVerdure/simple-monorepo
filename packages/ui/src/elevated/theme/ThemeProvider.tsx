import {
  useState,
  type CSSProperties,
  type ReactNode
} from 'react';
import { ThemeContext, type ThemeContextValue } from './themeContext';

type ThemeTokens = Record<string, string>;
type ThemeRegistry = Record<string, ThemeTokens>;

type ThemeProviderProps = {
  children: ReactNode;
  themes: ThemeRegistry;
  initialTheme: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'header';
  className?: string;
};

export const ThemeProvider = ({
  children,
  themes,
  initialTheme,
  as = 'div',
  className
}: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<string>(initialTheme);

  const resolvedTokens = themes[currentTheme];
  if (!resolvedTokens) {
    throw new Error(`ThemeProvider: theme "${currentTheme}" not found in themes.`);
  }
  const style = resolvedTokens as CSSProperties;

  const contextValue: ThemeContextValue = {
    initialTheme: currentTheme,
    setTheme: (nextTheme: string) => {
      if (themes[nextTheme]) setCurrentTheme(nextTheme);
    },
    availableThemes: Object.keys(themes)
  };

  const Component = as;

  return (
    <ThemeContext value={contextValue}>
      <Component data-theme={currentTheme} className={className} style={style}>
        {children}
      </Component>
    </ThemeContext>
  );
}

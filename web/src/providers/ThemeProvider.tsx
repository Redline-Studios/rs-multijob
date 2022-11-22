import React from 'react';

interface IThemeContext {
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<IThemeContext>({
    theme: '',
    setTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState('redline');

    React.useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            setTheme(theme);
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider };



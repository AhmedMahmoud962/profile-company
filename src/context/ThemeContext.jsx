// src/ThemeContext.jsx
import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

export const ColorModeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: '#8F6DFF',
        },
        background: {
          default: mode === 'light' ? '#f9f9f9' : '#121212',
          paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
        },
        text: {
          primary: mode === 'light' ? '#1a1a1a' : '#ffffff',
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
      },
    });
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

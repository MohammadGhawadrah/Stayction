import './App.css';
import Router from './Route';
import customTheme from './theme';
import { ThemeProvider } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

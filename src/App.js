import './App.css';
import Router from './Route';
import customTheme from './theme';
import { ThemeProvider } from '@mui/material'
import ProductProvider from './ContextProvider';

function App() {
  return (
    <ProductProvider>
      <ThemeProvider theme={customTheme}>
        <Router />
      </ThemeProvider>
    </ProductProvider>
  );
}

export default App;
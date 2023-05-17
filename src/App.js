import './App.css';
import Router from './Route';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'
const theme = createTheme({
  palette: {
    primary: {
      main: '#152C5B'
    },
    secondary: {
      main: '#3252DF'
    },
    action:{
      hover: purple
  }
  }
  
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

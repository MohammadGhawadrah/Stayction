import './App.css';
import Router from './Route';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'
import IconsDetailPage from './../src/Component/IconsHomePage'
const theme = createTheme({
  palette: {
    primary: {
      main: '#152C5B'
    },
    secondary: {
      main: '#3252DF'
    },
    thired: {
      main: '#B0B0B0'
    },
    action: {
      hover: purple
    }
  }

})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <IconsDetailPage />
    </ThemeProvider>
  );
}

export default App;

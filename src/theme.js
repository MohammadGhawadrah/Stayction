import { createTheme } from '@mui/material/styles';
import { white } from '@mui/material/colors';

const customTheme = createTheme({
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
        forth: {
            main: '#FF498B'
        },
        /*fifth: {
            main: '#FFFFFF'
        },*/

    },

    typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","), // override default font family
        h1: { // override h1 styles
            fontSize: '2rem' // change default font size
        },
        myVariant: { // adding my custom variant
            fontSize: '2rem',
            color: '#152C5B',
        },
        detail: { // adding my custom variant
            fontSize: '1rem',
            color: '#B0B0B0',
        },
    },
}
)
export default customTheme;
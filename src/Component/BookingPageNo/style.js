import { createTheme } from "@mui/material";
export const theme = createTheme({
    AddBooktheme:
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,
        columnGap: 2,
    },
    AddNumber:
    {
        width: 50,
        height: 50,
        bgcolor: '#1ABC9C',
        margin: .4,
    },
    AddNumberWithoutColor:
    {
        width: 50,
        height: 50,
        margin: .4,
    },

    AddCircle:
    {
        color: '#E5E5E5',
        border: 2,
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    AddLine:
    {
        color: '#E5E5E5',
        borderTop: 3,
        width: 50,
        marginTop: 4,
        marginLeft: -2,
        marginRight: -2
    }
});
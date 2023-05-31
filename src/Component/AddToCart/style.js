import { createTheme } from "@mui/material";
export const theme = createTheme({
    AddCarttheme:
    {
        width: 265,
        height: 41,
        position: "absolute",
        marginTop: 18,
        color: "#FFFFFF",
        fontFamily: "Poppins",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 500,
        "&:hover": {
            backgroundColor: "#FF498B",
        }
    },
});
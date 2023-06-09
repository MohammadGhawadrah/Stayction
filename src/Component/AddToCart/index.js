import React from "react";
import { Button, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "./style";
const AddToCart = ({ id }) => {

    return (
        <>
            <Link style={{ textDecoration: "none" }} to={`/Details/${id}`}>
                <Button sx={theme.AddCarttheme}>show Details</Button>
            </Link>
        </>
    );
};
export default AddToCart;

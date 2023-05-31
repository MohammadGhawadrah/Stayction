import React from "react";
import { Button, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "./style";
const AddToCart = ({ id }) => {

    return (
        <>
            <Link style={{ textDecoration: "none" }} to={`/Detailes/${id}`}>
                <Button sx={theme.AddCarttheme}>show Detailes</Button>
            </Link>
        </>
    );
};
export default AddToCart;

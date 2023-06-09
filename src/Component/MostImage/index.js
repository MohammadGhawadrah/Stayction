import React from "react";
import style from "./style.module.css";
import Box from "@mui/material/Box";

function MostImage({ img }) {
  return (
    <Box>
      <img className={style.mostImg} src={img} />
    </Box>
  );
}
export default MostImage;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./style.module.css";

function PurpleComment({ text }) {
  return (
    <Box className={style.topComment}>
      <Typography
        className={style.topComment}
        color={"white"}
        backgroundColor={"forth.main"}
        variant="h6"
      >
        {text}
      </Typography>
    </Box>
  );
}

export default PurpleComment;

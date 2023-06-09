import { Box, Grid } from "@mui/material";
import React from "react";
import MainTitle from "../MainTitle";
import PurpleComment from "../PurpleComment";
import MostImage from "../MostImage";
import { Typography } from "@mui/material";
import { StyleTreasure, ThemeTreasure } from "./style";
import Loading from "../Loading";
import AddToCart from "../AddToCart";
import { useContext } from "react";
import ProductContext from "../Context";

const Treasure = () => {
  const products = useContext(ProductContext);
  const TreasureData = Array.isArray(products)
    ? products.filter(({ title }) => title === "Treasure")
    : [];
  return (
    <Grid sx={{ position: "relative", marginBottom: 10 }}>
      <MainTitle text={"Treasure to Choose"} />
      {TreasureData ? (
        <Grid container>
          {TreasureData.map(
            (product, index) =>
              index < 4 && (
                <Grid key={product.id} item xs={12} sm={6} md={3}>
                  <MostImage img={product.img} />
                  <AddToCart id={product.id} />
                  <Box>
                    <StyleTreasure>
                      {product.topComment ? (
                        <PurpleComment text={product.topComment} />
                      ) : null}
                    </StyleTreasure>
                  </Box>
                  <Box sx={{ marginTop: 25 }}>
                    <ThemeTreasure>
                      <Typography variant="myVariant">
                        {product.name}
                      </Typography>
                      <Grid>
                        <Typography variant="detail">
                          {product.description}
                        </Typography>
                      </Grid>
                    </ThemeTreasure>
                  </Box>
                </Grid>
              )
          )}
        </Grid>
      ) : (
        <Loading />
      )}
    </Grid>
  );
};
export default Treasure;

import { Box, Grid } from "@mui/material";
import React from "react";
import MainTitle from "../MainTitle";
import PurpleComment from "../PurpleComment";
import MostImage from "../MostImage";
import { Typography } from "@mui/material";
import { StyleHouse, ThemeHouse } from "./style";
import Loading from "../Loading";
import AddToCart from "../AddToCart";
import { useContext } from "react";
import ProductContext from "../Context";

const HousesBackyard = () => {
  const products = useContext(ProductContext);
  const HousesBackyardData = Array.isArray(products)
    ? products.filter(({ title }) => title === "Houses")
    : [];
  return (
    <Grid sx={{ position: "relative" }}>
      <MainTitle text={"Houses with beauty backyard"} />
      {HousesBackyardData ? (
        <Grid container>
          {HousesBackyardData.map(
            (product, index) =>
              index < 4 && (
                <Grid key={product.id} item xs={12} sm={6} md={3}>
                  <MostImage img={product.img} />
                  <AddToCart id={product.id} />
                  <Box>
                    <StyleHouse>
                      {product.topComment ? (
                        <PurpleComment text={product.topComment} />
                      ) : null}
                    </StyleHouse>
                  </Box>
                  <Box sx={{ marginTop: 25 }}>
                    <ThemeHouse>
                      <Typography variant="myVariant">
                        {product.name}
                      </Typography>
                      <Grid>
                        <Typography variant="detail">
                          {product.describtion}
                        </Typography>
                      </Grid>
                    </ThemeHouse>
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
export default HousesBackyard;

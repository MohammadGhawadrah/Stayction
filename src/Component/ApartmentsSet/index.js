import { Box, Grid } from "@mui/material";
import React from "react";
import MainTitle from "../MainTitle";
import PurpleComment from "../PurpleComment";
import MostImage from "../MostImage";
import { Typography } from "@mui/material";
import { ThemeApartment } from "./style";
import Loading from "../Loading";
import AddToCart from "../AddToCart";
import { useContext } from "react";
import ProductContext from "../Context";

const ApartmentsSet = () => {
  const products = useContext(ProductContext);
  const ApartmentsSetData = Array.isArray(products)
    ? products.filter(({ title }) => title === "Apartments")
    : [];
  return (
    <Grid sx={{ position: "relative", marginTop: 5 }}>
      <MainTitle text={"Apartments with kitchen set"} />
      {ApartmentsSetData ? (
        <Grid container>
          {ApartmentsSetData.map(
            (product, index) =>
              index < 4 && (
                <Grid
                  key={product.id}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{ position: "relative" }}
                >
                  <MostImage img={product.img} />
                  <AddToCart id={product.id} />
                  <Box>
                    {product.topComment ? (
                      <PurpleComment text={product.topComment} />
                    ) : null}
                  </Box>
                  <Box>
                    <ThemeApartment>
                      <Typography variant="myVariant">
                        {product.name}
                      </Typography>
                      <Grid>
                        <Typography variant="detail">
                          {product.description}
                        </Typography>
                      </Grid>
                    </ThemeApartment>
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
export default ApartmentsSet;

import React, { useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelResultsApi } from "../store/redux/reducer/products";
import { RootState } from "../store/redux/store";
import ProductCard from "../components/product/ProductCard";

function LandingPage() {
  const dispatch = useDispatch();
  const productCartApiRes = useSelector(
    (state: RootState) => state.productsStates?.productsApiData
  );
  const productList = productCartApiRes.data?.products
    ? productCartApiRes.data?.products
    : [];

  useEffect(() => {
    dispatch(fetchHotelResultsApi(""));
  }, []);

  return (
    <Container className="landing">
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={2}>
        {productList.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Container>
  );
}

export default LandingPage;

import { Box, Grid } from "@mui/material";
import React from "react";
import MyCar from "./card-header";
import CarListing from "./car-listing";
import MyIncome from "./my-income";
import AddCars from "./add-cars";
import HireAndCancel from "./hire-and-cancel";
import ActiveCars from "./active-cars";
import Reviews from "./reviews";
const Index = () => {
  return (
    <Box sx={{ px: { md: 4, xs: 0 } }}>
      <Grid sx={{ mt: 5 }} container spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <CarListing />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <MyIncome />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <AddCars />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <HireAndCancel />
        </Grid>
        <Grid item xs={12} md={12}>
          <ActiveCars />
        </Grid>
        <Grid item xs={12} md={12}>
          <Reviews />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;

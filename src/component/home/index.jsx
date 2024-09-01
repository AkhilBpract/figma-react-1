import { Box, Grid } from "@mui/material";
import React from "react";
import MyCar from "./card-header";
import CarListing from "./car-listing";
import AddCars from "./my-income";
const Index = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid sx={{ mt: 5 }} container spacing={2}>
        <Grid item xs={12} md={6}>
          <CarListing />
        </Grid>
        <Grid item xs={12} md={6}>
          <AddCars />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;

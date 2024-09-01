import { Box, Card, Link, Stack, Typography } from "@mui/material";
import React from "react";
import CardHeader from "./card-header";
import Audi from "src/images/audi-car.png";
import Car from "src/images/car-income.png";
const AddCars = () => {
  return (
    <Card
      sx={{
        height: 340,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CardHeader
        title="Add Cars to your car listing / Upload"
        icon="basil:add-solid"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 150,
        }}
      >
        <img
          src={Car}
          style={{
            width: 200,
            position: "absolute",
            transform: "translateX(33%)",
            zIndex: 1,
          }}
          alt="Car"
        />
        <img
          src={Audi}
          style={{
            width: 200,
            position: "absolute",
            transform: "scaleX(-1) translateX(50%)",

            zIndex: 2,
          }}
          alt="Audi"
        />
      </Box>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 4,
          alignItems: "end",
        }}
      >
        <Stack>
          <Typography variant="h4">Click & Upload</Typography>
          <Typography variant="subtitle2" color="gray">
            View all your listing
          </Typography>
        </Stack>
        <Link color="#F0B64F" to="">
          Upload
        </Link>
      </Stack>
    </Card>
  );
};

export default AddCars;

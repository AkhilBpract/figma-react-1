import React from "react";
import MyCar from "./card-header";
import CardHeader from "./card-header";
import useGetData from "./hooks/use-get-data";
import { Card, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const CarListing = () => {
  const { palette } = useTheme();
  const data = useGetData();
  return (
    <Card sx={{ p: 2, height: 340 }}>
      <CardHeader
        title="My Car Listing / Status"
        icon="material-symbols-light:menu"
        expandIcon="rivet-icons:expand"
        link="See all"
      />
      <Stack
        mt={3}
        spacing={2}
        sx={{
          maxHeight: "220px",
          overflowY: "auto",
          pr: 1,
        }}
      >
        {data.map(({ Mfr_Name, Mfr_CommonName, VehicleTypes, Mfr_ID }) => {
          const carColor = VehicleTypes[0]?.IsPrimary ? "Blue" : "Silver";
          return (
            <Card
              key={Mfr_ID}
              sx={{
                display: "flex",
                alignItems: "baseline",
                backgroundColor: palette.grey[900],
                columnGap: 2,
                minHeight: 60,
                overflowX: "auto",
              }}
            >
              <Stack
                sx={{ alignItems: "flex-end" }}
                spacing={2}
                direction="row"
              >
                <Typography variant="subtitle2">
                  {Mfr_Name.slice(0, 5)}...
                </Typography>
                <Typography color="text.secondary" variant="caption">
                  {Mfr_CommonName}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  color: VehicleTypes[0]?.IsPrimary ? "green" : "red",
                  fontWeight: 500,
                }}
                variant="caption"
                gutterBottom
              >
                {VehicleTypes[0]?.IsPrimary
                  ? "Running - in route"
                  : "idle - not in route"}
              </Typography>
              <Typography color="text.secondary" variant="caption">
                {carColor} Color
              </Typography>
              <Typography
                color="text.secondary"
                variant="overline"
                gutterBottom
                sx={{ display: "block", fontSize: "10px" }}
              >
                REG No : H {Mfr_ID} Dubai
              </Typography>
            </Card>
          );
        })}
      </Stack>
    </Card>
  );
};

export default CarListing;

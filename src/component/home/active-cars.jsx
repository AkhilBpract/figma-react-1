import React from "react";
import MyCar from "./card-header";
import CardHeader from "./card-header";
import useGetData from "./hooks/use-get-data";
import { Card, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import useGetCarLocationDetails from "./hooks/use-get-car-location-details";

const ActiveCars = () => {
  const { palette } = useTheme();
  const data = useGetCarLocationDetails();
  console.log(data);
  return (
    <Card sx={{ p: 2, height: 340 }}>
      <CardHeader
        title="My Active Car Location List / Status"
        icon="charm:circle-tick"
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
        {data.map(({ category, date, title_orig, title, hebrew }, i) => {
          // const carColor = VehicleTypes[0]?.IsPrimary ? "Blue" : "Silver";
          return (
            <Card
              key={i}
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
                  {category.slice(0, 5)}...
                </Typography>
                <Typography color="text.secondary" variant="caption">
                  {title_orig}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  fontWeight: 500,
                }}
                variant="caption"
                gutterBottom
              >
                {hebrew}
              </Typography>
              <Typography color="text.secondary" variant="caption">
                {title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="overline"
                gutterBottom
                sx={{ display: "block", fontSize: "10px" }}
              >
                REG No : H {title} Dubai
              </Typography>
            </Card>
          );
        })}
      </Stack>
    </Card>
  );
};

export default ActiveCars;

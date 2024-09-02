import React from "react";
import MyCar from "./card-header";
import CardHeader from "./card-header";
import useGetData from "./hooks/use-get-data";
import { Box, Card, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const CarListing = () => {
  const { palette } = useTheme();
  const isDark = palette.mode === "dark";
  const data = useGetData();
  return (
    <Card sx={{ p: 2, height: 300 }}>
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
          maxHeight: "200px",
          overflowX: "auto",
          // pr: 1,
          width: "100%",
          flexDirection: "column",
        }}
      >
        {data.map(({ Mfr_Name, Mfr_CommonName, VehicleTypes, Mfr_ID }, i) => {
          const carColor = VehicleTypes[0]?.IsPrimary ? "Blue" : "Silver";
          return (
            <Box width="100%">
              <Card
                key={Mfr_ID}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: isDark ? "#212325" : "",
                  flexDirection: { xs: "column", sm: "row" },
                  overflowX: "auto",
                  width: "100%",
                  whiteSpace: "nowrap",
                  columnGap: 2,
                }}
              >
                <Typography sx={{ fontWeight: 900 }} variant="subtitle2">
                  {i + 1}
                </Typography>
                <Typography variant="subtitle2">
                  {Mfr_Name.slice(0, 10)}
                </Typography>
                <Typography color="text.secondary" variant="caption">
                  {Mfr_CommonName}
                </Typography>

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
            </Box>
          );
        })}
      </Stack>
    </Card>
  );
};

export default CarListing;

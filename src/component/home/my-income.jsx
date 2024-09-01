import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CardHeader from "./card-header";
import { Icon } from "@iconify/react";
const MyIncome = () => {
  return (
    <Card
      sx={{
        height: 340,

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#1B1600",
        // opacity: 0.5,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${"/image/car-income.png"})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.2, // Opacity only affects the image
          zIndex: 1,
        }}
      />
      <CardHeader
        title="My Income (January)"
        icon="game-icons:files"
        // expandIcon="rivet-icons:expand"
        link="See all"
        subtitle="My monthly income status"
      />
      <Divider />

      <Stack
        direction="row"
        sx={{ px: 4, mt: 2, p: 2, justifyContent: "space-between" }}
      >
        <Stack sx={{ textAlign: "right" }} spacing={2}>
          <Stack>
            <Typography variant="h5">AED 3750.00</Typography>
            <Typography color="gray" variant="body1">
              january 2024
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ textAlign: "right" }} spacing={2}>
          <Stack>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Icon
                style={{ height: 25, width: 25, color: "#F0B64F" }}
                icon="fluent-mdl2:sort-up"
              />
              <Typography sx={{ color: "#F0B64F" }} variant="h4">
                20 %
              </Typography>
            </Stack>
            <Typography color="gray" variant="body1">
              january 2024
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ mt: 2, px: 4, justifyContent: "space-between" }}
      >
        <TextData title="Yesterday Total Earning" code="AED 1100.00" />
        <TextData title="Yesterday Total Earning" code="AED31000.00" />
      </Stack>
    </Card>
  );
};
const TextData = ({ title, code, color }) => {
  return (
    <Stack sx={{ textAlign: "right" }} spacing={2}>
      <Stack>
        <Typography sx={{ color: color }} variant="subtitle2">
          {title}
        </Typography>
        <Typography color="#F0B64F" variant="body1">
          {code}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default MyIncome;

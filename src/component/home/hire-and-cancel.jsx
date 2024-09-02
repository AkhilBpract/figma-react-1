import {
  Box,
  Card,
  Divider,
  Grid,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useMemo } from "react";
import CardHeader from "./card-header";
import { PieChart } from "@mui/x-charts/PieChart";
import { Icon } from "@iconify/react";

const data = [
  { value: 20, color: "#2DC24E", name: "Total Completed" },
  { value: 15, color: "#EA2D2D", name: "Total Canceled" },
  { value: 8, color: "#FFCA00", name: "Total Pending" },
  { value: 57, color: "#1e1e1e", name: "" },
];

const HireAndCancel = () => {
  const matches = useMediaQuery("(min-width:800px)");
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: { md: 300 },
        position: "relative",
        overflow: "hidden",
        padding: 2,
      }}
    >
      <CardHeader
        title="Hire & Cancel"
        icon="ph:car-profile-fill"
        expandIcon="rivet-icons:expand"
        link="See all"
        subtitle="Today"
        subTitleColor="gray"
      />
      <Divider sx={{ borderBottomWidth: 2 }} />

      <Grid container>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={12}
          sm={12}
          md={6}
        >
          <PieChart
            series={[
              {
                data: data,
                innerRadius: 30,
                outerRadius: 70,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -160,
                cx: matches ? 80 : 20,
                cy: matches ? 80 : 60,
              },
            ]}
            height={160}
            width={matches ? 160 : 120}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={12}
          sm={12}
          md={6}
        >
          <Stack
            spacing={1}
            sx={{
              [theme.breakpoints.down("sm")]: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              pr: 3,
              mt: 2,
            }}
          >
            {data.slice(0, -1).map(({ name, color }) => (
              <ListItem key={name} sx={{ padding: 0 }}>
                <Icon
                  icon="ic:round-square"
                  style={{ color: color, marginRight: "5px", fontSize: 24 }}
                />
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HireAndCancel;

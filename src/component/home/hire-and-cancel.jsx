import {
  Box,
  Card,
  Divider,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
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
  return (
    <Card
      sx={{
        height: 340,
        position: "relative",
        overflow: "hidden",
        padding: 2, // Added padding
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

      <Stack direction="row" sx={{ justifyContent: "space-between", mt: 2 }}>
        {/* PieChart Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PieChart
            series={[
              {
                data: data,
                innerRadius: 30,
                outerRadius: 80,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -160,
                cx: 150,
                cy: 150,
              },
            ]}
            height={250}
            width={250}
          />
        </Box>

        {/* Legend Section */}
        <Stack spacing={1} sx={{ justifyContent: "center", pr: 3 }}>
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
      </Stack>
    </Card>
  );
};

export default HireAndCancel;

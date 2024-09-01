import { Box, Card, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import CardHeader from "./card-header";
import { PieChart } from "@mui/x-charts/PieChart";

const HireAndCancel = () => {
  return (
    <Card
      sx={{
        height: 340,
        position: "relative",
        overflow: "hidden",
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
      <PieChart
        series={[
          {
            data: [
              { value: 20, color: "#2DC24E" },
              { value: 15, color: "#EA2D2D" },
              { value: 8, color: "#FFCA00" },
              { value: 57, color: "#1e1e1e" },
            ],
            innerRadius: 30,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -160,
            // endAngle: 0,
            cx: 150,
            cy: 150,
          },
        ]}
      />
    </Card>
  );
};

export default HireAndCancel;

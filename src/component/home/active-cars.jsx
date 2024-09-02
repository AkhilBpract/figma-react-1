import React from "react";
import MyCar from "./card-header";
import CardHeader from "./card-header";
import useGetData from "./hooks/use-get-data";
import {
  Box,
  Card,
  Chip,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import useGetCarLocationDetails from "./hooks/use-get-car-location-details";
import { capitalCase, constantCase } from "change-case";
import { Icon } from "@iconify/react";
import moment from "moment";
const ActiveCars = () => {
  const { palette } = useTheme();
  const isDark = palette.mode === "dark";
  const data = useGetCarLocationDetails();

  return (
    <Card sx={{ p: 2, height: 440 }}>
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
          maxHeight: "325px",
          overflowX: "auto",
          pr: 1,
          width: "100%",
          flexDirection: "column",
        }}
      >
        {data.map(({ category, date, memo, title_orig, title, hebrew }, i) => {
          return (
            <Box width="100%">
              <Card
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  backgroundColor: isDark ? "#151718" : "",
                  flexDirection: { xs: "column", sm: "row" },
                  width: "100%",
                  whiteSpace: "wrap",
                  columnGap: 2,
                  overflow: "scroll",
                }}
              >
                <Details title={category} index={i} caption={title_orig} />
                <DateDetails title={category} index={i} date={date} />
                <DateDetails title={title} index={i} date={date} />
                <Chip
                  sx={{ height: 40, borderRadius: "40px" }}
                  label={
                    <Stack
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      direction="row"
                    >
                      <Icon
                        height={20}
                        width={20}
                        icon={i % 2 === 0 ? "charm:tick" : "bx:pie-chart"}
                        style={{ color: i % 2 === 0 ? "#6dce7d" : "#fecb1b" }}
                      />
                      <Typography sx={{ color: "#6dce7d" }}>
                        {i % 2 === 0
                          ? "Arrived & Handover Done"
                          : "Running in - Route"}
                      </Typography>
                    </Stack>
                  }
                />
                <Link color="#F0B64F">More</Link>
              </Card>
            </Box>
          );
        })}
      </Stack>
    </Card>
  );
};
const Details = ({ title, index, caption }) => {
  return (
    <Box sx={{ display: "flex", columnGap: 1 }}>
      <Typography sx={{ fontWeight: 900 }} variant="subtitle2">
        {index + 1}
      </Typography>
      <Box>
        <Typography variant="subtitle2">
          {capitalCase(title).slice(0, 10)}{" "}
          <span style={{ color: "grey", marginLeft: 1, fontSize: "11px" }}>
            {caption}
          </span>
        </Typography>
        <Typography color="text.secondary" variant="caption">
          {caption}
        </Typography>
      </Box>
    </Box>
  );
};
const DateDetails = ({ title, index, date }) => {
  return (
    <Box sx={{ display: "flex", columnGap: 1 }}>
      <Box>
        <Icon
          height={25}
          width={25}
          icon="subway:location"
          style={{ color: "gray" }}
        />
      </Box>
      <Box>
        <Typography color="text.secondary" variant="subtitle2">
          {capitalCase(title).slice(0, 10)} & {capitalCase(title).slice(0, 10)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderColor: "divider",
            borderRadius: 2,
            color: "text.secondary",
            columnGap: 1,
          }}
        >
          <Typography color="text.secondary" variant="subtitle2">
            {moment(date).format("DD MMM YYYY")}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography color="text.secondary" variant="caption">
            {moment(date).format("DD MMM YYYY")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ActiveCars;

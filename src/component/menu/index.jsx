import { Box, Typography } from "@mui/material";
import React from "react";

const Index = ({ title }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="H4">{title} </Typography>
    </Box>
  );
};

export default Index;

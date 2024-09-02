import { Box, Icon, makeStyles } from "@mui/material";
import React from "react";

export default function SvgIconStyle({ src, sx }) {
  return (
    <Box
      component="span"
      sx={{
        width: 22,
        height: 22,
        display: "inline-block",
        bgcolor: "currentColor",
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        mr: 2,
        ...sx,
      }}
    />
  );
}

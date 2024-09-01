import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
import React from "react";

const Notification = () => {
  const { palette } = useTheme();
  console.log(palette);
  const isDark = palette.mode === "dark";

  return (
    <IconButton
      sx={{
        p: "10px",
        backgroundColor: isDark ? "#0d0d0d" : palette.grey[100],
      }}
      size="small"
      aria-label="menu"
    >
      <Icon icon="clarity:notification-outline-badged" />
    </IconButton>
  );
};

export default Notification;

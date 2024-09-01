import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  const { palette } = useTheme();
  const isDark = palette.mode === "dark";
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 260,
        borderRadius: 8,
      }}
    >
      <IconButton
        sx={{
          p: "10px",
          backgroundColor: isDark ? palette.grey[900] : palette.grey[100],
        }}
        size="small"
        aria-label="menu"
      >
        <Icon icon="iconamoon:search" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontStyle: "italic", fontSize: "13px" }}
        placeholder="Search your car activity log"
        inputProps={{ "aria-label": "Search your car activity log" }}
      />
    </Paper>
  );
};

export default SearchBar;

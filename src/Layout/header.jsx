import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { styled, useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import SearchBar from "./search-bar";
import Notification from "./notification";
import MyProfile from "./my-profile";
const drawerWidth = 220;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  const isDark = theme.palette.mode === "dark";
  return {
    width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
    marginLeft: open ? `${drawerWidth}px` : "0",
    backgroundColor: isDark ? theme.palette.background.default : "transparent",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: "none",
    color: "inherit",
    background:
      "radial-gradient(circle at top right, #473c28 30%, transparent 60%)", // Radial gradient fixed at the top-right corner
    // padding: "40px",
  };
});
const CustomToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  // maxWidth: "1200px",
  // width: "100%",
  // margin: "0 auto",
  marginTop: "20px",
}));
const Header = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar onClick={handleDrawerOpen} position="fixed" open={open}>
      <CustomToolBar>
        <Stack spacing={2} direction="row">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Stack>
            <Typography variant="h5" noWrap component="div">
              Merchant Dashboard
            </Typography>
            <Typography
              sx={{ fontStyle: "italic" }}
              color="#F0B64F"
              variant="caption"
            >
              Updated on 08 Jan 2024
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <SearchBar />
          <Notification />
          <MyProfile />
        </Stack>
      </CustomToolBar>
    </AppBar>
  );
};

export default Header;

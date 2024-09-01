import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router";
import SideBar from "./side-bar";
import Header from "./header";
import { Button, useMediaQuery } from "@mui/material";
import { useSettings } from "src/theme-provide/theme-context";
import { useState } from "react";
import { useEffect } from "react";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const drawerWidth = 220;
export default function Layout() {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:800px)");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(matches);
  }, [matches]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        background:
          "radial-gradient(circle at top right, #473c28 30%, transparent 70%)", // Radial gradient fixed at the top-right corner
        minHeight: "100vh", // Ensure it covers the full height of the viewport
      }}
    >
      <CssBaseline />
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        drawerWidth={drawerWidth}
      />
      <SideBar
        handleDrawerClose={handleDrawerClose}
        open={open}
        drawerWidth={drawerWidth}
      />

      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}

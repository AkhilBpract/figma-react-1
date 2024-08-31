import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIconStyle from "src/component/login/icons";
import { bottom_icons, top_icons } from "./menu";
import { IconButton } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const drawerWidth = 240;
const SideBar = ({ handleDrawerClose, open }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {/* {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )} */}
          Click
        </IconButton>
      </DrawerHeader>
      {/* <Divider /> */}
      <List>
        {top_icons.map(({ name, icon }, index) => {
          return (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SvgIconStyle src={icon} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Typography sx={{ textAlign: "left", ml: 2, mt: 5 }} variant="h5">
        Reports
      </Typography>
      <List>
        {bottom_icons.map(({ name, icon }, index) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SvgIconStyle src={icon} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

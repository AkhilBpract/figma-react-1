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
import { Box, Button, IconButton, Paper, Stack } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import { useSettings } from "src/theme-provide/theme-context";
import { useState } from "react";
import { Icon } from "@iconify/react";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import { Link, useLocation } from "react-router-dom";
import logo from "src/images/logo.png";
const DrawerHeader = styled("div")(({ theme }) => ({
  marginTop: "40px",
  marginLeft: "30px",
  marginBottom: "30px",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,

    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));
const CustomList = styled(List)(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: "8px",
  // boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  width: "100%",
}));

const ListItemSideBar = ({ handleDrawerClose }) => {
  const { settings, onToggleMode } = useSettings();
  const [themeColor, setThemeColor] = useState("dark");
  const handleTheme = (event, newTheme) => {
    setThemeColor((prev) => {
      return newTheme ? newTheme : prev === "dark" ? "light" : "dark";
    });
    onToggleMode();
  };
  const location = useLocation();
  return (
    <Box>
      <DrawerHeader>
        <Box sx={{ p: 2, mr: 2 }}>
          <img src={logo} style={{ width: 100, height: "auto" }} />
        </Box>
        <IconButton onClick={handleDrawerClose}>
          <Icon icon="uiw:left" />
        </IconButton>
      </DrawerHeader>
      {/* <Divider /> */}
      <CustomList>
        {top_icons.map(({ name, icon, path }, index) => {
          const isSelected = location.pathname === path;
          return (
            <ListItem key={name} disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: isSelected ? "#F0B64F" : "transparent",
                  borderRadius: "30px",
                  mt: 1,
                  "&:hover": {
                    backgroundColor: "#F0B64F",
                    "& .MuiTypography-root": {
                      color: "#000",
                    },
                  },
                }}
                to={path}
                component={Link}
              >
                <SvgIconStyle
                  src={icon}
                  sx={{ color: isSelected ? "#000" : "" }}
                />

                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "14px",
                    fontWeight: 200,
                    color: isSelected ? "#000" : "inherit",
                  }}
                  primary={name}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </CustomList>

      <CustomList>
        <Typography sx={{ ml: 2, mt: 5, mb: 1, fontWeight: 600 }} variant="h6">
          Reports
        </Typography>
        {bottom_icons.map(({ name, icon, path }, index) => (
          <ListItem key={name} disablePadding>
            <ListItemButton to={path} component={Link}>
              <SvgIconStyle src={icon} />

              <ListItemText
                primaryTypographyProps={{
                  fontSize: "12px",
                  fontWeight: 200,
                }}
                primary={name}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Stack sx={{ ml: 2, mt: 5 }} spacing={2}>
          <Box>
            <Button
              sx={{
                color: settings.isDark ? "#fff" : "#000",
                fontSize: "0.75rem",
                padding: "4px 8px",
              }}
              size="small"
              startIcon={<Icon icon="solar:logout-outline" />}
            >
              Logout
            </Button>
          </Box>

          <StyledToggleButtonGroup
            size="small"
            value={themeColor}
            exclusive
            onChange={handleTheme}
            aria-label="text alignment"
            sx={(theme) => ({
              display: "flex",
              border: `1px solid ${theme.palette.divider}`,
              flexWrap: "wrap",
              width: "100px",
              justifyContent: "space-between",
              borderRadius: "20px",
            })}
          >
            <ToggleButton
              sx={{
                ...style,
                padding: "4px",
                width: "30px",
                height: "30px",
              }}
              value="light"
              aria-label="left aligned"
            >
              <Icon icon="iconoir:sun-light" />
            </ToggleButton>
            <ToggleButton
              sx={{
                ...style,
                padding: "4px",
                width: "30px",
                height: "30px",
              }}
              value="dark"
              aria-label="centered"
            >
              <Icon icon="fontisto:night-clear" />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Stack>
      </CustomList>
    </Box>
  );
};

export const SideBar = ({ handleDrawerClose, open, drawerWidth }) => {
  const { palette } = useTheme();
  const isDark = palette.mode === "dark";
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.5)",
            backgroundColor: isDark ? "#131311" : "#cccccc",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <ListItemSideBar handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </>
  );
};
export const SideBarResponsive = ({
  handleDrawerClose,
  open,
  drawerWidth,
  handleDrawerOpen,
}) => {
  return (
    <>
      <Drawer
        open={open}
        onClose={handleDrawerOpen}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: drawerWidth } }}
      >
        <ListItemSideBar handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </>
  );
};
const style = {
  borderRadius: "50% !important",
  padding: "10px",
  "&.Mui-selected": {
    backgroundColor: "#F0B64F",
    "&:hover": {
      backgroundColor: "#F0B64F", // background color on hover
    },
  },
};

// F0B64F
// export default SideBar;

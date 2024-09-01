import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import myProfile from "src/images/profile-image.jpg";

const menu = [{ name: "Home" }, { name: "Dashboard" }];
const MyProfile = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <Box
        sx={{
          columnGap: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={handleOpen}
      >
        <Avatar alt="Profile" src={myProfile} />
        <Typography variant="subtitle2">Name</Typography>
        <IconButton>
          <Icon
            icon={
              Boolean(open) ? "icon-park-outline:up" : "icon-park-outline:down"
            }
          />
        </IconButton>
      </Box>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
       
      >
        {menu.map(({ name }, i) => (
          <MenuItem onClick={handleClose}>{name}</MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default MyProfile;

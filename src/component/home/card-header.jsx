import { Box, Card, IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";
import useGetData from "./hooks/use-get-data";

const list = [
  { name: "Honda", route: "Running", color: "Red", region: "TEST" },
];
const CardHeader = ({
  title,
  icon,
  expandIcon,
  link,
  subtitle,
  subTitleColor,
}) => {
  const { palette } = useTheme();

  return (
    <Stack
      sx={{ alignItems: "end", justifyContent: "space-between", p: 1 }}
      direction="row"
    >
      <Stack>
        <Stack sx={{ alignItems: "center" }} direction="row">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ color: "#F0B64F" }}
          >
            <Icon style={{ width: 30, height: 30 }} icon={icon} />
          </IconButton>
          <Typography variant="h5">{title}</Typography>
        </Stack>
        <Typography
          sx={{ display: "flex", justifyContent: "flex-end" }}
          color={subTitleColor}
          variant="caption"
        >
          {subtitle}
        </Typography>
      </Stack>
      {Boolean(link) && (
        <Stack>
          {Boolean(expandIcon) && (
            <IconButton>
              <Icon
                style={{ width: 15, height: 15, color: palette.grey[500] }}
                icon={expandIcon}
              />
            </IconButton>
          )}

          <Link sx={{ fontSize: "12px", color: "#F0B64F" }}>{link}</Link>
        </Stack>
      )}
    </Stack>
  );
};

export default CardHeader;

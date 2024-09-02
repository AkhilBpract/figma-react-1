import { Icon } from "@iconify/react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Grid,
  Paper,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import useGetUser from "./hooks/use-get-user";
import myProfile from "src/images/profile-image.jpg";
import Profile2 from "src/images/images.jpeg";
import Profile1 from "src/images/avatart_1.jpg";
import useGetUsers from "./hooks/use-get-users";

const Reviews = () => {
  return (
    <Card>
      <Grid spacing={3} container>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
          }}
          item
          xs={12}
          sm={3}
        >
          <TotalReviews />
        </Grid>
        <Grid item xs={12} sm={3}>
          <UserCard id={1} profile={myProfile} />
        </Grid>

        <Grid item xs={12} sm={3}>
          <UserCard id={2} profile={Profile1} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <UserCard id={3} profile={Profile2} />
        </Grid>
      </Grid>
    </Card>
  );
};
const TotalReviews = () => {
  const data = useGetUsers();
  console.log(data);
  return (
    <>
      <Box sx={{ display: "flex", p: 1, mb: 3 }}>
        <Icon
          height={50}
          width={50}
          icon="material-symbols:reviews-sharp"
          color="#F0B64F"
        />
        <Box>
          <Typography sx={{ marginBottom: "0px", fontSize: "17px" }}>
            Review
          </Typography>
          <Typography
            color="text.secondary"
            variant="caption"
            gutterBottom
            sx={{ display: "block" }}
          >
            Review from Customer
          </Typography>
        </Box>
      </Box>
      <Box>
        <AvatarGroup total={data.length}>
          <Avatar alt="Remy Sharp" src={myProfile} />
          <Avatar alt="Travis Howard" src={Profile1} />
          <Avatar alt="Cindy Baker" src={Profile2} />
          <Avatar alt="Agnes Walker" src={myProfile} />
          <Avatar
            sx={{ bgcolor: "#F0B64F" }}
            alt="Trevor Henderson"
            src="/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Box>
    </>
  );
};

const UserCard = ({ id, profile, rating = 5 }) => {
  const { palette } = useTheme();
  const isDark = palette.mode === "dark";
  const user = useGetUser(id);
  const { firstname, lastname, address } = user;
  return (
    <>
      <Box sx={{ p: 1, py: 3, mt: 2 }}>
        <Paper sx={{ p: 1, borderRadius: "16px", backgroundColor: "#fff" }}>
          <Typography
            sx={{ fontSize: "11px", color: isDark ? "#000" : "#fff" }}
            variant="caption"
          >
            review from customer review from customer review from customer
          </Typography>
        </Paper>
        <Box sx={{ display: "flex", alignItems: "end", columnGap: 1 }}>
          <Avatar
            sx={{ border: "2px solid #fff", width: 50, height: 50 }}
            alt="Profile"
            src={profile}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box mb={3} mt={2}>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                {firstname} {lastname}
              </Typography>
              <Typography
                sx={{ fontSize: "11px" }}
                color="text.secondary"
                variant="caption"
              >
                {address?.city} {address?.street}
              </Typography>
            </Box>
            <Rating size="small" name="simple-controlled" value={rating} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Reviews;

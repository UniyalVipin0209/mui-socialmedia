import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import {
  CustomToolbar,
  IconBox,
  SearchBox,
  UserBox,
  MenuBox,
} from "./HeaderStyled";

const Header = ({ mode, setMode }) => {
  const [open, SetOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }} variant="h6">
          kid<span>Book</span>
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBox>
          <InputBase placeholder="Search..." />
        </SearchBox>
        <IconBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => SetOpen(true)}
            sx={{ width: 25, height: 25 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </IconBox>
        <UserBox onClick={(e) => SetOpen(true)}>
          <Avatar
            onClick={(e) => SetOpen(true)}
            sx={{ width: 25, height: 25 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </UserBox>
      </CustomToolbar>
      <MenuBox>
        <Menu
          id="basic-menu"
          open={open}
          onClose={(e) => SetOpen(false)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </MenuBox>
    </AppBar>
  );
};

export default Header;

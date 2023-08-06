import { Toolbar, Box, styled, Modal } from "@mui/material";
const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  maxHeight: "45px",
});
const SearchBox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "35%",
}));

const IconBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "none",

  gap: "18px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
    flexDirection: "row",
  },
}));
const UserPostBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  marginBottom: "20px",
}));
const MenuBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#D6EAF8",
}));
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export {
  CustomToolbar,
  SearchBox,
  IconBox,
  UserPostBox,
  UserBox,
  MenuBox,
  StyledModal,
};

import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";

export const AppNavBarStyled = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 50px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const TypographyHeadingStyled = styled(Typography)(({ theme }) => ({
  color: "rgba(0, 183, 255, 1)",
  // color: theme.palette.primary.main,
  textDecoration: "none",
  fontSize: "2em",
  fontWeight: 300,
}));

export const ImgStyled = styled("img")(({ theme }) => ({
  marginLeft: "10px",
  marginTop: "5px",
}));

export const LinkBrandContainerStyled = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  width: "400px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    marginTop: 20,
    justifyContent: "center",
  },
}));

export const DivProfileStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "400px",
}));

export const AvatarPurpleStyled = styled(Avatar)(({ theme }) => ({
  color: "white",
  backgroundColor: "purple",
}));

export const TypographyUserNameStyled = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
}));

export const ButtonLogoutStyled = styled(Button)(({ theme }) => ({
  marginLeft: "20px",
}));

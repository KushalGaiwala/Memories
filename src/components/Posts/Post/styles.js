import { styled } from "@mui/material/styles";

import {
  Card,
  CardActions,
  CardMedia,
  Typography,
  ButtonBase,
} from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
}));

export const StyledOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
}));

export const StyledOverlay2 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
}));

export const StyledDetails = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
}));

export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  padding: "0 16px",
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  display: "block",
  textAlign: "initial",
}));

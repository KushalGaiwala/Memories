import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaperStyled = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#e1084f",
}));

export const FormStyled = styled("form")(({ theme }) => ({
  width: "100%", // Fix IE 11 issue.
  marginTop: theme.spacing(3),
}));

export const ButtomSubmitStyled = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export const ButtonGoogleStyled = styled(Button)(({ theme }) => ({}));

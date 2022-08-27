import { Paper, Button, TextField, autocompleteClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "15px",
}));

export const StyledDivFileInput = styled("div")(({ theme }) => ({
  width: "97%",
  margin: "0 0 15px 0",
}));

export const StyledButtonSubmit = styled(Button)(({ theme }) => ({
  marginBottom: 10,
}));

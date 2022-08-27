import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledDivSmMargin = styled("div")(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const StyledDivAction = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

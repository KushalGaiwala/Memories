import { styled } from "@mui/material/styles";
import { AppBar, Grid, Paper, Button } from "@mui/material";

export const GridMainContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column-reverse",
  },
}));

export const AppBarSearchStyled = styled(AppBar)(({ theme }) => ({
  borderRadius: 4,
  marginBottom: "1rem",
  display: "flex",
  padding: "16px",
}));

export const PaperPaginationStyled = styled(Paper)(({ theme }) => ({
  borderRadius: 4,
  marginTop: "1rem",
  padding: "16px",
}));

export const ButtonSearchStyled = styled(Button)(({ theme }) => ({}));

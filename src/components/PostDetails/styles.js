import { styled } from "@mui/material/styles";

export const StyledCard = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    flexDirection: "column",
  },
}));

export const StyledSection = styled("div")(({ theme }) => ({
  borderRadius: "20px",
  margin: "10px",
  flex: 1,
}));

export const StyledMedia = styled("div")(({ theme }) => ({
  borderRadius: "20px",
  objectFit: "cover",
  width: "100%",
  maxHeight: "600px",
}));

export const StyledImageSection = styled("div")(({ theme }) => ({
  marginLeft: "20px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

export const StyledRecommendedPosts = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const StyledLoadingPaper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "15px",
  height: "39vh",
}));

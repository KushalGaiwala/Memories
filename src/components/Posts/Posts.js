import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

import { CircularProgress, Grid } from "@mui/material";
import {
  StyledGridContainer,
  StyledDivSmMargin,
  StyledDivAction,
} from "./styles";

const Posts = () => {
  const { data: posts, isLoading } = useSelector((state) => state.posts);

  if (!posts.length && !isLoading) return "No posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <StyledGridContainer container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} />
        </Grid>
      ))}
    </StyledGridContainer>
  );
};

export default Posts;

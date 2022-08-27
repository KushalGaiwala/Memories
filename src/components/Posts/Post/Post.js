import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { CardContent, Button, Typography } from "@mui/material";
import moment from "moment";
import {
  ThumbUp,
  ThumbUpOffAlt,
  Delete,
  MoreHoriz,
} from "@mui/icons-material/";

import {
  StyledCard,
  StyledCardMedia,
  StyledOverlay,
  StyledOverlay2,
  StyledDetails,
  StyledTypographyTitle,
  StyledCardActions,
  StyledButtonBase,
} from "./styles";
// import { getPostById, saveCurrentPostId } from "../../../actions/posts";
import {
  saveCurrentPostId,
  deletePost,
  likePost,
} from "../../../actions/posts";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  // To re-render after logout
  const location = useLocation();
  useEffect(() => {}, [location]);

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === user?.result?._id) ? (
        <>
          <ThumbUp fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others `
            : `${post.likes.length} ${
                post.likes.length > 1 ? "Likes" : "Like"
              }`}
        </>
      ) : (
        <>
          <ThumbUpOffAlt fontSize="small" />
          &nbsp;
          {post.likes.length} {post.likes.length === 1 ? "like" : "likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpOffAlt disabled fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openPost = () => navigate(`/posts/${post._id}`);

  return (
    <StyledCard size="small" raised elevation={6}>
      <StyledButtonBase onClick={openPost}>
        <StyledCardMedia image={post.selectedFile} title={post.title} />
        <StyledOverlay>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </StyledOverlay>
        {post.creator === user?.result?._id && (
          <StyledOverlay2>
            <Button
              style={{ color: "white" }}
              size="small"
              // onClick={() => dispatch(getPostById(post._id))}
              // onClick={() => dispatch(saveCurrentPost(post))}
              onClick={() => dispatch(saveCurrentPostId(post._id))}
            >
              <MoreHoriz fontSize="default" />
            </Button>
          </StyledOverlay2>
        )}
        <StyledDetails>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </StyledDetails>
        <StyledTypographyTitle variant="h5" gutterBottom>
          {post.title}
        </StyledTypographyTitle>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
      </StyledButtonBase>

      <StyledCardActions>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {post.creator === user?.result?._id && (
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
          >
            <Delete fontSize="small" />
            Delete
          </Button>
        )}
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;

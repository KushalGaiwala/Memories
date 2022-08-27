import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FileBase from "react-file-base64";
import { Typography, Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { createPost, saveCurrentPostId, updatePost } from "../../actions/posts";

import {
  StyledTextField,
  StyledPaper,
  StyledForm,
  StyledDivFileInput,
  StyledButtonSubmit,
} from "./styles";

const Form = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const postId = useSelector((state) => state.post._id);
  const post = useSelector((state) =>
    postId ? state.posts.find((p) => p._id === postId) : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (postId !== null && postId !== "") {
      setPostData({
        ...postData,
        title: post.title,
        message: post.message,
        tags: post.tags,
        selectedFile: post.selectedFile,
      });
    }
  }, [post, location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postId)
      dispatch(updatePost(post._id, { ...postData, name: user?.result?.name }));
    else dispatch(createPost({ ...postData, name: user?.result?.name }));
    clear();
  };

  const clear = () => {
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    dispatch(saveCurrentPostId(null));
  };

  if (!user?.result?.name) {
    return (
      <StyledPaper>
        <Typography variant="h6" align="center">
          Please sign in to create your own memories and like other's memories
        </Typography>
      </StyledPaper>
    );
  }

  return (
    <StyledPaper>
      <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">
          {postId ? "Editing" : "Creating"} a Memory
        </Typography>
        <StyledTextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <StyledTextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <StyledTextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <StyledDivFileInput>
          <FileBase
            type="file"
            multiple={false}
            value={postData.selectedFile}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </StyledDivFileInput>
        <StyledButtonSubmit
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </StyledButtonSubmit>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </StyledForm>
    </StyledPaper>
  );
};

export default Form;

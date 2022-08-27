import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Paginate from "../Pagination/Pagination";

import {
  Container,
  Grid,
  Grow,
  AppBar,
  TextField,
  Button,
} from "@mui/material";
// import ChipInput from "material-ui-chip-input";
import {
  AppBarSearchStyled,
  GridMainContainer,
  PaperPaginationStyled,
  ButtonSearchStyled,
} from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const handleKeyPress = (e) => {
    // if (e.key === "Enter") {
    //   console.log(e.keyCode);
    //   searchPost();
    // }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  const searchPost = (e) => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  return (
    <Grow in>
      <Container maxWidth="100%">
        <GridMainContainer container spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBarSearchStyled position="static" color="inherit">
              <TextField
                name="search"
                variant="outlined"
                label="Search memories"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              {/* <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              /> */}
              <ButtonSearchStyled
                onClick={searchPost}
                variant="contained"
                color="primary"
              >
                Search
              </ButtonSearchStyled>
            </AppBarSearchStyled>
            <Form />

            {!searchQuery && !tags.length && (
              <PaperPaginationStyled elevation={6}>
                <Paginate page={page} />
              </PaperPaginationStyled>
            )}
          </Grid>
        </GridMainContainer>
      </Container>
    </Grow>
  );
};

export default Home;

import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import { getPosts } from "../../actions/posts";

const Search = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState(search);
  const classes = useStyles();
  const searchPost = (search) => {
    setItem(search);
    if (search === "") return;
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>
        <b>Search</b> food Items
      </Typography>
      <TextField
        style={{ marginBottom: "3rem" }}
        autoFocus
        className={classes.search}
        name="search"
        variant="outlined"
        label={`Search Restaurant`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => searchPost(search)}>
                <Tooltip title="Search food Items">
                  <SearchIcon />
                </Tooltip>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        {posts.map((post) => (
          <div key={post._id}>
            {(post.title.toLowerCase().split(" ")[0] ===
              item.toLowerCase().split(" ")[0] ||
              post.title.toLowerCase().split(" ")[1] === item.toLowerCase() ||
              post.title.toLowerCase().split(" ")[0] ===
                item.toLowerCase().split(" ")[1]) && <Post post={post} />}
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Search;

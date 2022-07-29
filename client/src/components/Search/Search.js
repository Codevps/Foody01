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
import Posts from "../Posts/Posts";
import { getPosts } from "../../actions/posts";

const Search = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState(search);
  const classes = useStyles();
  let x = "";
  let y = "";
  const searchPost = (search) => {
    setItem(search);
    if (item !== search) x = "";
    console.log(x);
    if (search === "") return;
    if (x.split(" ").length - 1 === posts.length) {
      setSearch("");
      setItem("");
      x = "";
      return window.alert("No item found");
    }
    console.log(x.split(" ").length);
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
        fullWidth
        style={{ margin: "1rem", marginBottom: "3rem" }}
        autoFocus
        className={classes.search}
        name="search"
        variant="outlined"
        label={`Search a dish...`}
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
        {search !== "" ? (
          posts.map((post) => (
            <div key={post._id}>
              {post.title.toLowerCase().split(" ")[0] ===
                item.toLowerCase().split(" ")[0] ||
              post.title.toLowerCase().split(" ")[1] ===
                item.toLowerCase().split(" ")[0] ||
              post.title.toLowerCase().split(" ")[0] ===
                item.toLowerCase().split(" ")[1] ? (
                <div>
                  {x === ""}
                  <Post post={post} />
                </div>
              ) : (
                <div style={{ display: "none" }}>{(x += "true ")}</div>
              )}
            </div>
          ))
        ) : (
          <Grid item xs={12} sm={12} md={12}>
            <div style={{ display: "none" }}>{(x = "")}</div>
            <Posts y={true} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Search;

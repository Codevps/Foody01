import {
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import MuiAlert from "@mui/material/Alert";
import Posts from "../Posts/Posts";
import { getPosts } from "../../actions/posts";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Search1 = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(search);
  const classes = useStyles();
  let x = "";
  let y = "";
  const searchPost = (search) => {
    setItem(search);
    if (item !== search) x = "";
    if (search === "") return;
    if (x.split(" ").length - 1 === posts.length) {
      setOpen(true);
      setSearch("");
      setItem("");
      x = "";
      return;
    }
  };
  const searchPost2 = (search, e) => {
    if (e.key === "Enter") {
      setItem(search);
      if (item !== search) x = "";
      if (search === "") return;
      if (x.split(" ").length - 1 === posts.length) {
        setOpen(true);
        setSearch("");
        setItem("");
        x = "";
        return;
      }
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center " }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "50%" }}>
          Item not found
        </Alert>
      </Snackbar>
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
        placeholder="French Fries , Crispy"
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
        onKeyPress={(e) => searchPost2(search, e)}
      />
      {item ? (
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
      ) : (
        <div style={{ textAlign: "center" }}>
          <Typography variant="h6">
            No <b>dish</b> available by this name.
          </Typography>
          <Typography variant="h6">Check spelling or words.</Typography>
          <Typography variant="h6">Try again.</Typography>
        </div>
      )}
    </div>
  );
};

export default Search1;

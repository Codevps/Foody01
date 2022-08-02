import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { getRes } from "../../actions/restaurant";
import ResCard from "./ResCard";

const ResCards = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { rest, restaurant } = useSelector((state) => state.restaurant);
  const [search, setSearch] = useState("");

  const searchPost = (search) => {
    console.log(search);
  };
  const searchPost2 = (search, e) => {
    if (e.key === "Enter") {
    }
  }; //keypress

  useEffect(() => {
    dispatch(getRes());
  }, [dispatch]);
  return (
    <div>
      <div>
        <Typography className={classes.heading}>
          <b>Restaurants</b> for <b>You</b>
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
          onKeyPress={(e) => searchPost2(search, e)}
        />{" "}
      </div>
      {restaurant.map((item) => (
        <Grid
          style={{ margin: "1rem" }}
          item
          xs={6}
          sm={4}
          md={3}
          lg={2}
          xl={2}
          key={item.id}
        >
          <ResCard item={item} />
        </Grid>
      ))}
    </div>
  );
};

export default ResCards;

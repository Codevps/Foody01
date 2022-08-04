import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRes } from "../../actions/restaurant";
import ResCard from "./ResCard";
import useStyles from "./styles";

const ResCards = ({ y }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state.restaurant);
  const [search, setSearch] = useState("");
  // const [nama, setNama] = useState("");
  //   const searchPost2 = (search, e) => {
  //     if (e.key === "Enter") {
  //     setNama(search)
  //     console.log(search);
  // };

  useEffect(() => {
    dispatch(getRes());
  }, [dispatch]);
  return (
    <div style={{ width: "90vw" }}>
      {!y && (
        <div className={classes.sizing}>
          <Typography className={classes.heading2}>
            <b>Restaurants</b> for <b>You</b>
          </Typography>
          <TextField
            fullWidth
            className={classes.search}
            name="search"
            placeholder="eg.Pangat || McDonalds"
            variant="outlined"
            label={`Search Restaurant`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <IconButton
            //       // onClick={() => searchPost(search)}
            //       >
            //         <Tooltip title="Search food Items">
            //           <SearchIcon />
            //         </Tooltip>
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
            // onKeyPress={(e) => searchPost(search, e)}
          />
        </div>
      )}
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        style={{
          marginLeft: "1px",
        }}
        className={classes.container}
      >
        {restaurant.map((item) => (
          <div>
            {search ? (
              <div>
                {(item.name.toLowerCase().split(" ")[0] ===
                  search.toLowerCase().split(" ")[0] ||
                  item.name.toLowerCase().split(" ")[1] ===
                    search.toLowerCase().split(" ")[0] ||
                  item.name.toLowerCase().split(" ")[0] ===
                    search.toLowerCase().split(" ")[1]) && (
                  <div key={item.id}>
                    <ResCard item={item} />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Grid
                  style={{
                    margin: "1rem",
                    display: "flex",
                    flexDirection: "row",
                  }}
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
              </div>
            )}
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default ResCards;

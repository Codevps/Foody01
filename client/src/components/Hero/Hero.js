import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";
import "./styles.css";

const Hero = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="hero">
        <Typography variant="h3" className={classes.mainHeading}>
          Foody
        </Typography>
        <Typography variant="h5" className={classes.heading}>
          <i> safe & fast food delivery with great discounts</i>
        </Typography>
        <TextField
          className={classes.search}
          name="search"
          variant="outlined"
          label={`Search for Restaurants`}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <IconButton>
                  <MyLocationIcon style={{ color: "coral" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

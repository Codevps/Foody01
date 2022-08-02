import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPostsBySearch } from "../../actions/posts";
import useStyles from "./styles";
import "./styles.css";

const Hero = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sp = () => {
    window.alert("Geolocation coming soon...");
  };
  const classes = useStyles();
  const searchPost = () => {
    dispatch(getPostsBySearch({ search }));
    navigate(`/posts/search`);
  };

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
          label={`GeoLocation coming soon...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon onClick={() => searchPost()} />
                </IconButton>
                <IconButton>
                  <MyLocationIcon
                    onClick={() => sp()}
                    style={{ color: "coral" }}
                  />
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

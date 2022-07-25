import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import useStyles from "./styles";
import "./styles.css";

const Hero = () => {
  const classes = useStyles();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const sp = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    console.log(latitude, longitude);
  };
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  // first find latlng of place typed and find restaurants in 3-4km of the radius
  return (
    <div>
      <div className="hero">
        <Typography variant="h3" className={classes.mainHeading}>
          Foody
        </Typography>
        <Typography variant="h5" className={classes.heading}>
          <i> safe & fast food delivery with great discounts</i>
        </Typography>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>

              <input {...getInputProps({ placeholder: "Type address" })} />

              <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
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

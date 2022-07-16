import { Typography } from "@mui/material";
import React from "react";

const ResProfile = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  // Restaurant Address is changed manually cause it requires manual inspection.
  return (
    user && (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            marginLeft: "1.5rem",
            marginTop: "1rem",
            paddingRight: "2rem",
          }}
        >
          <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
            <b>Restaurant Info:</b>
          </Typography>
          <Typography>
            <b style={{ color: "grey" }}>User Id: {user?.result._id}</b>
          </Typography>
          <Typography>
            <b>Name: </b>
            <b style={{ color: "green" }}>{user?.result.name}</b>
          </Typography>
          <Typography>
            <b>Email: </b>
            {user?.result.email}
          </Typography>
          <Typography>
            <b>Contact No: </b>
            {user?.result.number}
          </Typography>
        </div>
        <br />
        <div
          style={{
            marginLeft: "1.5rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
            <b>Location Info:</b>
          </Typography>
          <Typography>
            <b> Apartment Name:</b>
            {user?.result?.apartmentName}
          </Typography>
          <Typography>
            <b>Locality:</b> {user?.result?.locality}
          </Typography>
          <Typography>
            <b>Street:</b> {user?.result?.street}
          </Typography>
          <Typography>
            <b>Zip Code:</b> {user?.result?.zipCode}
          </Typography>
        </div>
      </div>
    )
  );
};

export default ResProfile;

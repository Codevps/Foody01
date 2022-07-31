import { Typography } from "@mui/material";
import React from "react";

const ResProfile = ({ rest }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  // Restaurant Address is changed manually cause it requires manual inspection.
  return (
    (user || rest) && (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginLeft: "1.5rem",
            marginTop: "1rem",
            paddingRight: "2rem",
          }}
        >
          <Typography
            variant="h5"
            style={{
              fontSize: "2rem",
              color: "black",
              marginTop: "1rem",
            }}
          >
            <b>{rest ? rest.name : user?.result.name} Info:</b>
          </Typography>
          <Typography>
            <b style={{ color: "grey" }}>
              User Id: {!rest ? user?.result._id : rest._id}
            </b>
          </Typography>
          <Typography>
            <b>Name: </b>
            <b style={{ color: "green" }}>
              {!rest ? user?.result.name : rest.name}
            </b>
          </Typography>
          <Typography>
            <b>Email: </b>
            {!rest ? user?.result.email : rest.email}
          </Typography>
          <Typography>
            <b>Contact No: </b>
            {!rest ? user?.result.number : rest.number}
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
            {!rest ? user?.result?.apartmentName : rest.apartmentName}
          </Typography>
          <Typography>
            <b>Locality:</b> {!rest ? user?.result?.locality : rest.locality}
          </Typography>
          <Typography>
            <b>Street:</b> {!rest ? user?.result?.street : rest.street}
          </Typography>
          <Typography>
            <b>Zip Code:</b> {!rest ? user?.result?.zipCode : rest.zipCode}
          </Typography>
        </div>
      </div>
    )
  );
};

export default ResProfile;

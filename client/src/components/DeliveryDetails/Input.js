import React from "react";
import { Grid, TextField } from "@mui/material";
const Input = ({ half, extend, name, handleChange, label, autoFocus }) => {
  return (
    <div>
      <Grid
        item
        xs={12}
        sm={half ? 7 : 12}
        style={{ margin: ".3rem", fontSize: "3rem" }}
      >
        <TextField
          rows={extend ? 2 : 1}
          name={name}
          required
          onChange={handleChange}
          label={label}
          autoFocus={autoFocus}
          fullWidth
          variant="standard"
        />
      </Grid>
    </div>
  );
};

export default Input;

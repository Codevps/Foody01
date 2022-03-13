import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const Input = ({
  half,
  name,
  handleChange,
  label,
  type,
  handleShowPassword,
  autoFocus,
  extend,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        rows={extend ? 2 : 1}
        sx={{
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "black",
            },
          },
        }}
        name={name}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        label={label}
        type={type}
        autoFocus={autoFocus}
        required
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? (
                        <Visibility style={{ color: "coral" }} />
                      ) : (
                        <VisibilityOff style={{ color: "coral" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;

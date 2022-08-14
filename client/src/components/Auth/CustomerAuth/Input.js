// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
// import React from "react";

// const Input = ({
//   half,
//   name,
//   handleChange,
//   label,
//   type,
//   handleShowPassword,
//   autoFocus,
// }) => {
//   return (
//     <Grid item xs={12} sm={half ? 6 : 12}>
//       <TextField
//         sx={{
//           "& .MuiOutlinedInput-root:hover": {
//             "& > fieldset": {
//               borderColor: "black",
//             },
//           },
//         }}
//         name={name}
//         onChange={handleChange}
//         fullWidth
//         variant="outlined"
//         label={label}
//         type={type}
//         required
//         autoFocus={autoFocus}
//         InputProps={
//           name === "password"
//             ? {
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleShowPassword}>
//                       {type === "password" ? (
//                         <Visibility style={{ color: "coral" }} />
//                       ) : (
//                         <VisibilityOff style={{ color: "coral" }} />
//                       )}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }
//             : null
//         }
//       />
//     </Grid>
//   );
// };

// export default Input;
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  number: yup
    .string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  password: yup
    .string()
    .min(4)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
});

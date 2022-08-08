// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
// import { Field } from "formik";
// import React from "react";

// const Input = ({
//   half,
//   name,
//   onChange,
//   label,
//   type,
//   handleShowPassword,
//   autoFocus,
//   extend,
//   value,
//   placeholder,
// }) => {
//   return (
//     <Grid item xs={12} sm={half ? 6 : 12}>
//       <Field
//         component={TextField}
//         rows={extend ? 2 : 1}
//         // sx={{
//         //   "& .MuiOutlinedInput-root:hover": {
//         //     "& > fieldset": {
//         //       borderColor: "black",
//         //     },
//         //   },
//         // }}
//         name={name}
//         value={value}
//         onChange={onChange}
//         fullWidth
//         variant="outlined"
//         label={label}
//         type={type}
//         autoFocus={autoFocus}
//         placeholder={placeholder}
//         required
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

//zipcode must be 5

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
  zipCode: yup
    .string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 10 digits")
    .max(6, "Must be exactly 10 digits"),
});

export const advancedSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
});

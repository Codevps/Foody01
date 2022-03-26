import {
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const Payment = () => {
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <Typography
        variant="h4"
        component="p"
        style={{ marginTop: "1rem", color: "black" }}
      >
        Payments:
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="payment"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="upi" control={<Radio />} label="UPI" />
          <FormControlLabel
            value="card"
            control={<Radio />}
            label="Debit / Debit / ATM Card"
          />
          <FormControlLabel
            value="cod"
            control={<Radio />}
            label="Cash On Delivery"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default Payment;

import { Typography } from "@mui/material";
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
      </div>
    </div>
  );
};

export default Hero;

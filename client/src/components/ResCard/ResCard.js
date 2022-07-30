import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getImages } from "../../actions/images";
import Carousel1 from "../Carousel1/Carousel1";
import useStyles from "./styles";

const ResCard = ({ item }) => {
  const { images } = useSelector((state) => state.images);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // USE OPEN POST OF MEMORIES FOR OPENING RESTAURANT CARD AND SHOWING RESTAURANT DETAILS
  let arr = [];
  function sp(images) {
    arr.push(images);
  }
  images.map((image) => item._id === image?.creator && sp(image.images));
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  return (
    <div>
      <div>
        <Card
          style={{ margin: "1rem", paddingRight: "1rem" }}
          elevation={6}
          onClick={() => navigate(`/restaurant/${item._id})}`)}
        >
          <ButtonBase
            component="span"
            name="test"
            // className={classes.cardAction}
          >
            <CardMedia
              className={classes.media}
              image={<Carousel1 slides={arr} />}
            />
          </ButtonBase>
          <div>{/* <Carousel1 slides={arr} /> */}</div>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="h5">{item.email}</Typography>
              <Typography variant="h5">
                {item.town}, {item.city}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResCard;

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
import bg from "../../images/bg.png";

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
  console.log(arr);
  return (
    <div>
      <div>
        <Card elevation={6} className={classes.card}>
          <ButtonBase
            component="span"
            onClick={() => navigate(`/restaurant/${item._id})}`)}
            name="test"
            className={classes.cardAction}
          >
            <CardMedia className={classes.media} image={arr[0] || bg} />
          </ButtonBase>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "0.1rem",
                marginLeft: "0.1rem",
              }}
            >
              <Typography variant="h6" style={{ fontSize: "1rem" }}>
                Name: <b>{item.name} </b>
              </Typography>
              <Typography variant="h6" style={{ fontSize: "1rem" }}>
                Email: <b>{item.email}</b>
              </Typography>
              <Typography variant="h6" style={{ fontSize: "1rem" }}>
                Location:{" "}
                <b>
                  {item.town}, {item.city}
                </b>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResCard;

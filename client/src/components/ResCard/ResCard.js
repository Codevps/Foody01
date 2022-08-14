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
import bg from "../../images/bg.png";
import useStyles from "./styles";

const ResCard = ({ item }) => {
  const { images } = useSelector((state) => state.images);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let arr = [];
  function sp(images) {
    arr.push(images);
  }
  images.map((image) => item._id === image?.creator && sp(image.images));
  const openPost = (id) => {
    navigate(`/restaurant/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  return (
    <div>
      <div>
        <Card elevation={6} className={classes.card}>
          <ButtonBase
            component="span"
            onClick={() => openPost(item._id)}
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
                // margin: "0.1rem",
                // marginLeft: "0.1rem",
              }}
            >
              <Typography variant="h6" style={{ fontSize: "1rem" }}>
                Name:
                <b style={{ fontSize: "1rem", color: "green" }}>{item.name} </b>
              </Typography>
              <Typography variant="h6" style={{ fontSize: "1rem" }}>
                Tags:
                <b style={{ fontSize: "1rem", color: "coral" }}>
                  {item.tags === "Both" ? " Veg & NonVeg" : ` ${item.tags}`}
                </b>
              </Typography>
              <Typography variant="h6" style={{ fontSize: "1rem" }}>
                Location:
                <b style={{ fontSize: "1rem", color: "black" }}>
                  {` ${item.town} ${item.city}`}
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

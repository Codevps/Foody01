import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createImage, getImages } from "../../actions/images";
import { CarouselData } from "./CarouselData";
import "./styles.css";
const Carousel1 = ({ slides }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { images } = useSelector((state) => state.images);
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState({
    selectedFile: "",
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleSubmit = () => {
    dispatch(createImage(images));
  };

  let arr = [];
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  let x = false;
  function sp(images) {
    arr.push(images);
    x = true;
  }
  images.map(
    (image) => user?.result._id === image?.creator && sp(image.images)
  );
  console.log(arr);
  return x ? (
    <div className="slider">
      <ChevronLeftIcon className="left-arrow" onClick={prevSlide} />
      <ChevronRightIcon className="right-arrow" onClick={nextSlide} />
      {arr.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
            style={{ alignContent: "center", alignItems: "center" }}
          >
            {index === current && (
              <img src={arr[index]} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <Container>
      <Paper style={{ margin: "auto", padding: "1rem", textAlign: "center" }}>
        <Typography> Add Images: </Typography>
        <AddPhotoAlternateIcon style={{ color: "green" }} />
        <div>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setNewImage({ ...newImage, images: base64 })
              }
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Add image
            </Button>
          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default Carousel1;

// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

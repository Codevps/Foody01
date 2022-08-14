import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createImage, getImages } from "../../actions/images";
import "./styles.css";
const Carousel1 = ({ slides, rest }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createImage(newImage));
  };

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  let x = false;
  function sp() {
    x = true;
  }
  images.map(
    (image) =>
      (user?.result._id === image?.creator || rest._id === image?.creator) &&
      sp()
  );
  return x ? (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="slider">
          <Button
            style={{
              position: "relative",
              color: "black",
              fontWeight: "500",
              fontSize: "2rem",
            }}
            onClick={prevSlide}
          >
            <ChevronLeftIcon />
          </Button>
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
                style={{
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {index === current && (
                  <img src={slide} alt="image" className="image" />
                )}
              </div>
            );
          })}
          <Button
            style={{
              position: "relative",
              color: "black",
              fontWeight: "500",
              fontSize: "2rem",
            }}
            onClick={nextSlide}
          >
            <ChevronRightIcon />
          </Button>
        </div>
        {user?.result.role && (
          <div
            style={{
              marginTop: "5rem",
            }}
          >
            <form
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setNewImage({ ...newImage, images: base64 })
                }
              />
              <IconButton type="submit">
                <AddIcon />
              </IconButton>
            </form>
          </div>
        )}
      </div>
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
            <IconButton type="submit">
              <AddIcon />
            </IconButton>
          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default Carousel1;

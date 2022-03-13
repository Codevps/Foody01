import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./styles.css";

const Carousel1 = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <ChevronLeftIcon className="left-arrow" onClick={prevSlide} />
      <ChevronRightIcon className="right-arrow" onClick={nextSlide} />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel1;

// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

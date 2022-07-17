import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrders } from "../../actions/orders";
import { getPosts } from "../../actions/posts";
import Add from "../Add/Add";
import { CarouselData } from "../Carousel1/CarouselData";
import Carousel1 from "../Carousel1/Carousel1";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Posts from "../Posts/Posts";
// import ResCard from "../ResCard/ResCard";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div style={{ width: "auto" }}>
      <Hero />
      {/* <Carousel1 slides={CarouselData} /> */}
      <Category />
      {/* <ResCard /> */}
      <Posts />
      <Add />
      <Footer />
    </div>
  );
};

export default Home;

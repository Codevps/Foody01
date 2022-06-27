import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Add from "../Add/Add";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Posts from "../Posts/Posts";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Hero />
      {/* <Carousel1 slides={CarouselData} /> */}
      <Category />
      <Posts />
      <Add />
      <Footer />
    </div>
  );
};

export default Home;

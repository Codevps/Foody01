import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrders } from "../../actions/orders";
import { getPosts } from "../../actions/posts";
import Add from "../Add/Add";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Posts from "../Posts/Posts";
import ResCard from "../ResCard/ResCards";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div style={{ width: "auto" }}>
      <Hero />
      <Category />
      <ResCard />
      <Posts />
      <Add />
      <Footer />
    </div>
  );
};

export default Home;

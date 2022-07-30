import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getResById } from "../../actions/restaurant";

const PostDetails = () => {
  const { rest } = useSelector((state) => state.restaurant);
  //   const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  // const classes = useStyles();
  const { id } = useParams();
  let x = id.substr(0, id.length - 2);
  console.log(x);
  useEffect(() => {
    dispatch(getResById(x));
  }, [id]);
  console.log(rest);

  if (!rest) return null;

  return <div>{rest.name}</div>;
};

export default PostDetails;

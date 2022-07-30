// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { getRes, getResById } from "../../actions/restaurant";

// const PostDetails = () => {
//   const { res } = useSelector((state) => state.restaurant);
//   const { posts } = useSelector((state) => state.posts);
//   const dispatch = useDispatch();
//   // const classes = useStyles();
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(getResById(id));
//   }, [id]);

//   if (!res) return null;

//   return <div>PostDetails</div>;
// };

// export default PostDetails;

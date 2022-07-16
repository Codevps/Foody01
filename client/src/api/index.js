import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
// auth for customer
export const customerSignIn = (customerAuthData) =>
  API.post("/customer/signin", customerAuthData);
export const customerSignUp = (customerAuthData) =>
  API.post("/customer/signup", customerAuthData);

// auth for seller
export const restaurantSignIn = (restaurantAuthData) =>
  API.post("/restaurant/signin", restaurantAuthData);
export const restaurantSignUp = (restaurantAuthData) =>
  API.post("/restaurant/signup", restaurantAuthData);
export const fetchRes = () => API.get("/getRes");

// routes for crud of posts
export const fetchPosts = () => API.get("/restaurant/posts");
export const createPost = (newPost) => API.post("/restaurant/posts", newPost);
export const deletePost = (id) => API.delete(`/restaurant/posts/${id}`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/restaurant/posts/${id}`, updatedPost);

// routes for crud of items
export const fetchItems = () => API.get("/customer/cart");
export const createItem = (newItem) => API.post("/customer/cart", newItem);
export const deleteItem = (id) => API.delete(`/customer/cart/${id}`);
export const addItem = (id, updatedPost) =>
  API.patch(`/customer/cart/${id}/addItem`, updatedPost);
export const removeItem = (id, updatedPost) =>
  API.patch(`/customer/cart/${id}/removeItem`, updatedPost);

// routes for crud address:
export const getAddress = () => API.get(`/customer/checkout`);
export const saveAddress = (newOrder) =>
  API.post("/customer/checkout", newOrder);

//routes for crud of orders
export const fetchOrders = () => API.get("/customer/orders");
export const createOrder = (newOrder) => API.post("/customer/orders", newOrder);
export const cusUpdateOrder = (id, updatedOrder) =>
  API.patch(`/customer/orders/${id}/cusUpdateOrder`, updatedOrder);
export const resUpdateOrder = (id, updatedOrder) =>
  API.patch(`/customer/orders/${id}/resUpdateOrder`, updatedOrder);

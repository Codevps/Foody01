import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerAuth from "./components/Auth/CustomerAuth/CustomerAuth";
import RestaurantAuth from "./components/Auth/RestaurantAuth/RestaurantAuth";
import DashBoard from "./components/DashBoard/DashBoard";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user?.result._id);

  return (
    <div>
      <BrowserRouter>
        <Container maxWidth="xl">
          <NavBar />
        </Container>
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route
            path="/home"
            exact
            element={user?.result.role ? <DashBoard /> : <Home />}
          />
          <Route
            path="/customerAuth"
            exact
            element={user?.result ? <Navigate to="/home" /> : <CustomerAuth />}
          />
          <Route
            path="/restaurantAuth"
            exact
            element={
              user?.result ? <Navigate to="/home" /> : <RestaurantAuth />
            }
          />
          <Route
            path={`/dashboard/${user?.result._id}`}
            exact
            element={<DashBoard />}
          />
          <Route path={`/cart`} exact element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

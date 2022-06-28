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
import DeliveryDetails from "./components/DeliveryDetails/DeliveryDetails";
import Breakfast from "./components/Category/Breakfast/Breakfast";
import Lunch from "./components/Category/Lunch/Lunch";
import Dinner from "./components/Category/Dinner/Dinner";
import CusOrder from "./components/OrderPage/CusOrder/CusOrder";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

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
          <Route path={`/cart/checkout`} exact element={<DeliveryDetails />} />
          <Route path={`breakfastCategory`} exact element={<Breakfast />} />
          <Route path={`/lunchCategory`} exact element={<Lunch />} />
          <Route path={`/dinnerCategory`} exact element={<Dinner />} />
          <Route path={`/cart/ordered`} exact element={<CusOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGOUT } from "../../constants/actionTypes";
import useStyles from "./styles";
import "./style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  let t = false;

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <AppBar className={classes.appBar} color="inherit">
        <Typography
          className={classes.headline}
          variant="h4"
          component={Link}
          to="/home"
        >
          Foody
        </Typography>
        <Toolbar className={classes.toolbar}>
          {user?.result && (
            <Button
              className={!user?.result.role ? classes.btn2 : classes.btn}
              variant="contained"
              component={Link}
              to={!user?.result.role ? "/cart/ordered" : "/orders"}
            >
              Orders
            </Button>
          )}
          {user?.result.role && (
            <Button
              style={{ marginRight: "1rem" }}
              className={classes.btn2}
              variant="contained"
              component={Link}
              to={`/dashboard/${user?.result._id}`}
            >
              Dashboard
            </Button>
          )}
          {user?.result ? (
            <div className={classes.profile}>
              {!user?.result.role && (
                <>
                  <Button>
                    <ShoppingCartIcon
                      fontSize="large"
                      style={{ color: "green", paddingRight: ".1rem" }}
                      onClick={() => navigate(`/cart`)}
                    />
                  </Button>
                </>
              )}
              <div className="dropdown">
                <Avatar
                  className={classes.purple}
                  alt={user?.result.name}
                  src={user?.result.imageUrl}
                >
                  {user?.result.name.charAt(0)}
                </Avatar>
                <div className="dropdown-content">
                  <p className={classes.userName} variant="h6">
                    {user?.result.name.split(" ")[0]}
                  </p>
                  <button
                    className={classes.btn}
                    variant="contained"
                    color="secondary"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Button
                className={classes.btn}
                variant="contained"
                component={Link}
                to="/customerAuth"
              >
                Login / SignUp
              </Button>
              <Button
                className={classes.btn2}
                variant="contained"
                component={Link}
                to="/restaurantAuth"
              >
                Add a Restaurant
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

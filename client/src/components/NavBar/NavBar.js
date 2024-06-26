import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Snackbar,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import decode from "jwt-decode";
import MuiAlert from "@mui/material/Alert";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGOUT } from "../../constants/actionTypes";
import "./style.css";
import useStyles from "./styles";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const NavBar = () => {
  const { items } = useSelector((state) => state.items);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  let noItem = false;

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate("/");
  };

  const pp = () => {
    items.map((item) => item.creator === user?.result.email && (noItem = true));
    if (!noItem) {
      return false;
    } else {
      return true;
    }
  };
  const sp = () => {
    setOpen(true);
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
  noItem = false;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center " }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "50%" }}>
          No items in cart yet, continue Shopping
        </Alert>
      </Snackbar>
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
                  {pp() ? (
                    <Button disabled={!pp() ? true : false}>
                      <ShoppingCartIcon
                        fontSize="large"
                        style={{ color: "green", paddingRight: ".1rem" }}
                        onClick={() => navigate(`/cart`)}
                      />
                    </Button>
                  ) : (
                    <Button>
                      <RemoveShoppingCartIcon
                        fontSize="large"
                        style={{ color: "grey", paddingRight: ".1rem" }}
                        onClick={() => sp()}
                      />
                    </Button>
                  )}
                </>
              )}
              <div className="dropdown">
                <Avatar
                  className={classes.purple}
                  alt={user?.result.name}
                  src={user?.result.imageUrl}
                  style={{ textTransform: "uppercase" }}
                >
                  {user?.result.name.charAt(0)}
                </Avatar>
                <div className="dropdown-content">
                  <p
                    className={classes.userName}
                    variant="h6"
                    style={{ textTransform: "uppercase" }}
                  >
                    {user?.result.name.split(" ")[0]}
                  </p>
                  <button
                    className={classes.btn}
                    variant="contained"
                    color="secondary"
                    onClick={logout}
                    style={{ margin: "0.5rem" }}
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

          {!user?.result.role && user?.result && (
            <Tooltip title="Search food Items">
              <IconButton
                onClick={() => navigate("/search")}
                style={{ marginLeft: "0.5rem" }}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

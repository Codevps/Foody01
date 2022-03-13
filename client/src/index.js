import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import { reducers } from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createTheme();
ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

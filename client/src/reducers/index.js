import { combineReducers } from "redux";
import customer from "./customer";
import restaurant from "./restaurant";
import posts from "./posts";
import items from "./cart";

export const reducers = combineReducers({
  customer,
  restaurant,
  posts,
  items,
});

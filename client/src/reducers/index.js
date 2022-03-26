import { combineReducers } from "redux";
import customer from "./customer";
import restaurant from "./restaurant";
import posts from "./posts";
import items from "./cart";
import address from "./address";

export const reducers = combineReducers({
  customer,
  restaurant,
  posts,
  items,
  address,
});

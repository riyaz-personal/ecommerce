/**
 * Redux core component
 */
import { combineReducers } from "redux";

/**
 * Import reducer list to be added in store
 */
import productReducer from "./product";
import searchReducer from "./search";
import orderReducer from "./orderProcess";

/**
 * Combine all reducer lists
 */
export default combineReducers({
  productReducer,
  searchReducer,
  orderReducer,
});

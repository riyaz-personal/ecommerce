/**
|--------------------------------------------------
| Import required constant 
|--------------------------------------------------
*/
import {
  RESET_ORDER_STATE,
  PRODUCT_SEARCH_START,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_ERROR,
  SELECTED_PRODUCT_START,
  SELECTED_PRODUCT_SUCCESS,
  SELECTED_PRODUCT_ERROR,
} from "../Constants";

//setInitialValues
export const initialValues = {
  searchList: [],
  selectedProduct: "",
};

/**
|--------------------------------------------------
| Set reducer value to appropriate constant 
|--------------------------------------------------
*/

export default (state = initialValues, action) => {
  switch (action.type) {
    case RESET_ORDER_STATE:
      return {
        ...initialValues,
      };
    case PRODUCT_SEARCH_START:
      return {
        ...state,
      };
    case PRODUCT_SEARCH_SUCCESS:
      return {
        ...state,
        searchList: action.searchList,
      };
    case PRODUCT_SEARCH_ERROR:
      return {
        ...state,
      };
    case SELECTED_PRODUCT_START:
      return {
        ...state,
      };
    case SELECTED_PRODUCT_SUCCESS:
      return {
        ...state,
        selectedProduct: action.selectedProduct,
      };
    case SELECTED_PRODUCT_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

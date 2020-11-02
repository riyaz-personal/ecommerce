/**
|--------------------------------------------------
| Import required constant 
|--------------------------------------------------
*/
import {
  PRODUCT_SEARCH_START,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_ERROR,
  SELECTED_PRODUCT_START,
  SELECTED_PRODUCT_SUCCESS,
  SELECTED_PRODUCT_ERROR,
} from "../Constants";

/**
|--------------------------------------------------
| product stores
|--------------------------------------------------
*/
export function searchProductList(data) {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_SEARCH_START,
    });
    try {
      dispatch({
        type: PRODUCT_SEARCH_SUCCESS,
        searchList: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_SEARCH_ERROR,
      });
      return false;
    }
    return true;
  };
}

/**
|--------------------------------------------------
| stores selected product
|--------------------------------------------------
*/
export function selectedProductImage(data) {
  return async (dispatch) => {
    dispatch({
      type: SELECTED_PRODUCT_START,
    });
    try {
      dispatch({
        type: SELECTED_PRODUCT_SUCCESS,
        selectedProduct: data,
      });
    } catch (error) {
      dispatch({
        type: SELECTED_PRODUCT_ERROR,
      });
      return false;
    }
    return true;
  };
}

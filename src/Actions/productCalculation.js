/**
|--------------------------------------------------
| Import required constant 
|--------------------------------------------------
*/
import {
  COUNT_START,
  COUNT_SUCCESS,
  COUNT_ERROR
} from "../Constants";

/**
|--------------------------------------------------
| product stores
|--------------------------------------------------
*/
export function storeSelectList(data, subtotal) {
  return async (dispatch) => {
    dispatch({
      type: COUNT_START,
    });
    try {
      dispatch({
        type: COUNT_SUCCESS,
        selectedList: data,
        subtotal
      });
    } catch (error) {
      dispatch({
        type: COUNT_ERROR,        
      });
      return false;
    }
    return true;
  };
}

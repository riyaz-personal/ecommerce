/**
|--------------------------------------------------
| Import required constant 
|--------------------------------------------------
*/
import {
    USER_DATA_START,
    USER_DATA_SUCCESS,
    USER_DATA_ERROR
  } from "../Constants";
  
  /**
  |--------------------------------------------------
  | product stores
  |--------------------------------------------------
  */
  export function userDetailsData(data) {
    return async (dispatch) => {
      dispatch({
        type: USER_DATA_START,
      });
      try {
        dispatch({
          type: USER_DATA_SUCCESS,
          userDetails: data,
        });
      } catch (error) {
        dispatch({
          type: USER_DATA_ERROR,        
        });
        return false;
      }
      return true;
    };
  }
  
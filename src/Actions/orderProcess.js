/**
|--------------------------------------------------
| Import required constant 
|--------------------------------------------------
*/
import {
  RESET_ORDER_STATE,
  ORDER_PROCESS_START,
  ORDER_PROCESS_SUCCESS,
  ORDER_PROCESS_ERROR,
  STORE_PAYMODE_START,
  STORE_PAYMODE_SUCCESS,
  STORE_PAYMODE_ERROR,
  SELECTED_ORDER_PROCESS_START,
  SELECTED_ORDER_PROCESS_SUCCESS,
  SELECTED_ORDER_PROCESS_ERROR,
  STORE_ORDER_NUMBER_START,
  STORE_ORDER_NUMBER_SUCCESS,
  STORE_ORDER_NUMBER_ERROR,
} from "../Constants";

/**
|--------------------------------------------------
| current popup order process page
|--------------------------------------------------
*/
export function currentOrderProcess(data) {
  return async (dispatch) => {
    dispatch({
      type: ORDER_PROCESS_START,
    });
    try {
      dispatch({
        type: ORDER_PROCESS_SUCCESS,
        currentPopup: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_PROCESS_ERROR,
      });
      return false;
    }
    return true;
  };
}

/**
|--------------------------------------------------
| store the address for order
|--------------------------------------------------
*/
export function selectedAddress(data) {
  return async (dispatch) => {
    dispatch({
      type: SELECTED_ORDER_PROCESS_START,
    });
    try {
      dispatch({
        type: SELECTED_ORDER_PROCESS_SUCCESS,
        selectedAddress: data,
      });
    } catch (error) {
      dispatch({
        type: SELECTED_ORDER_PROCESS_ERROR,
      });
      return false;
    }
    return true;
  };
}

/**
|--------------------------------------------------
| store the paymode for order
|--------------------------------------------------
*/
export function storePaymode(data) {
  return async (dispatch) => {
    dispatch({
      type: STORE_PAYMODE_START,
    });
    try {
      dispatch({
        type: STORE_PAYMODE_SUCCESS,
        selectedPayment: data,
      });
    } catch (error) {
      dispatch({
        type: STORE_PAYMODE_ERROR,
      });
      return false;
    }
    return true;
  };
}

/**
|--------------------------------------------------
| store the success order number in redux store
|--------------------------------------------------
*/
export function storeOrderNumber(data) {
  return async (dispatch) => {
    dispatch({
      type: STORE_ORDER_NUMBER_START,
    });
    try {
      dispatch({
        type: STORE_ORDER_NUMBER_SUCCESS,
        orderNumber: data,
      });
      dispatch({
        type: RESET_ORDER_STATE
      })
    } catch (error) {
      dispatch({
        type: STORE_ORDER_NUMBER_ERROR,
      });
      return false;
    }
    return true;
  };
}

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
  STORE_ORDER_NUMBER_START,
  STORE_ORDER_NUMBER_SUCCESS,
  STORE_ORDER_NUMBER_ERROR,
  SELECTED_ORDER_PROCESS_START,
  SELECTED_ORDER_PROCESS_SUCCESS,
  SELECTED_ORDER_PROCESS_ERROR,
} from "../Constants";

//setInitialValues
export const initialValues = {
  currentPopup: "",
  selectedAddress: {},
  selectedPayment: "cod",
  orderNumber: 0
};

/**
|--------------------------------------------------
| Set reducer value to appropriate constant 
|--------------------------------------------------
*/

export default (state = initialValues, action) => {
  switch (action.type) {
    case RESET_ORDER_STATE:
      const orderNumber = state && state.orderNumber ? state.orderNumber : 0
      return {
        ...initialValues, ...{ orderNumber }
      }
    case ORDER_PROCESS_START:
      return {
        ...state,
      };
    case ORDER_PROCESS_SUCCESS:
      return {
        ...state,
        currentPopup: action.currentPopup,
      };
    case ORDER_PROCESS_ERROR:
      return {
        ...state,
      };
    case SELECTED_ORDER_PROCESS_START:
      return {
        ...state,
      };
    case SELECTED_ORDER_PROCESS_SUCCESS:
      return {
        ...state,
        selectedAddress: action.selectedAddress,
      };
    case SELECTED_ORDER_PROCESS_ERROR:
      return {
        ...state,
      };
    case STORE_PAYMODE_START:
      return {
        ...state,
      };
    case STORE_PAYMODE_SUCCESS:
      return {
        ...state,
        selectedPayment: action.selectedPayment,
      };
    case STORE_PAYMODE_ERROR:
      return {
        ...state,
      };
      case STORE_ORDER_NUMBER_START:
        return {
          ...state,
        };
      case STORE_ORDER_NUMBER_SUCCESS:
        return {
          ...state,
          orderNumber: action.orderNumber,
        };
      case STORE_ORDER_NUMBER_ERROR:
        return {
          ...state,
        };
    default:
      return state;
  }
};

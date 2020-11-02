/**
|--------------------------------------------------
| Import required constant 
|--------------------------------------------------
*/
import { RESET_ORDER_STATE, COUNT_START, COUNT_SUCCESS, COUNT_ERROR } from "../Constants";

//setInitialValues
export const initialValues = {
 selectedList: [],
 subtotal: 0 
}

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
    case COUNT_START:
      return {
        ...state,
      };
    case COUNT_SUCCESS:
      return {
        ...state,
        selectedList: action.selectedList,
        subtotal: action.subtotal,
      };
    case COUNT_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

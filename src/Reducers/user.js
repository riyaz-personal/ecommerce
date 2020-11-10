/**
|--------------------------------------------------
| Import required constant 
|--------------------------------------------------
*/
import { RESET_ORDER_STATE, USER_DATA_START, USER_DATA_SUCCESS, USER_DATA_ERROR } from "../Constants";

//setInitialValues
export const initialValues = {
 userDetails: {},
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
    case USER_DATA_START:
      return {
        ...state,
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    case USER_DATA_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

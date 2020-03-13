import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case userTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;

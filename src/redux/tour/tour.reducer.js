import tourTypes from "./tours.type";

const INITIAL_STATE = {
  tours: [],
  erros: null
};

const tourReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tourTypes.GET_TOURS_SUCCESS:
      return {
        ...state,
        tours: action.payload,
        erros: null
      };
    case tourTypes.GET_TOURS_FAILURE:
      return {
        ...state,
        erros: action.payload
      };

    default:
      return state;
  }
};

export default tourReducer;

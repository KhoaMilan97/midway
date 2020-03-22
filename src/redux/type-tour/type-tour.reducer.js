import { typeTypeTours } from "./type_tour.type";

const INITIAL_STATE = {
  type: [],
  error: ""
};

const typeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeTypeTours.GET_TYPE_SUCCESS:
      return {};
    case typeTypeTours.GET_TYPE_FAILURE:
      return {};

    default:
      return state;
  }
};

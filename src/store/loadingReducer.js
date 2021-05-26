import { SET_TRUE, SET_FALSE } from "./actionTypes";

// const initialState = 0;

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_TRUE:
      return true;
    case SET_FALSE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;

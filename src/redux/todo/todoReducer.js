import { ADDED } from "./actionTypes";
import initialState from "./initialState";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          ...action.payload,
        },
      ];
    default:
      return state;
  }
};

export default todoReducer;

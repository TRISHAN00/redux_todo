import { ADDED } from "./actionTypes";

export const addedTodo = (todo) => {
  return {
    type: ADDED,
    payload: todo,
  };
};

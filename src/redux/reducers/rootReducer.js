import { DUMMY_ACTION } from "../../services/CONSTANT";

const initialState = {
  todoData: null,
};
export const rootReducer = (state = initialState, action) => {
  const {type,payload} = action;
  switch (type) {
    case DUMMY_ACTION:
      state = { ...state, todoData: payload };
      break;
    default:
      state = { ...state };
      break;
  }

  return state;
};

import { DUMMY_ACTION } from "../../services/CONSTANT";

export const TodoActionCreator = (res) => {
  return { type: DUMMY_ACTION, payload: res };
};

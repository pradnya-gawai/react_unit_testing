import { DUMMY_ACTION } from "../../services/CONSTANT";

export const TodoActionCreator = (res) => {
  console.log(res)
  return { type: DUMMY_ACTION, payload: res };
};

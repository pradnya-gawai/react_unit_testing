import { getRequest } from "../../services/axiosRequests";
import { TodoActionCreator } from "../actioncreators/DummyActionCreator";

export const DummyAction = () => async (dispatch) => {
  let response = await getRequest("https://jsonplaceholder.typicode.com/users");
  await dispatch(TodoActionCreator(response));
};

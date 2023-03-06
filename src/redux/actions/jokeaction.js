import { getRequest } from "../../services/axiosRequests";
import { TodoActionCreator } from "../actioncreators/DummyActionCreator";

export const jokeAction = () => async (dispatch) => {
  let response = await getRequest(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  await dispatch(TodoActionCreator(response));
};

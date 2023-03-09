import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import store from "../../redux/store";

export function WithProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
export function WithRouter({ children }) {
  const history = createMemoryHistory();
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
}

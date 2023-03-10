import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import {MemoryRouter } from "react-router-dom";
import {store} from "../../redux/store";

export function WithRouter({ children }) {
  const history = createMemoryHistory();
  return (
    <Provider store={store}>
      <MemoryRouter history={history}>{children}</MemoryRouter>
    </Provider>
  );
}

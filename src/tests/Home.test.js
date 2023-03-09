import { WithProvider, WithRouter } from "./helper/RouteProvider";
import {
  screen,
  render,
  waitFor,
  fireEvent,
  findByTestId,
  getByTestId,
} from "@testing-library/react";
import Home from "../pages/Home";

test("Home page title", () => {
  render(
    // <WithProvider>
    //   <WithRouter>
        <Home />
    //   </WithRouter>
    // </WithProvider>
  );
  let pageTilte = screen.getByTestId("page-title");
  expect(pageTilte).toHaveTextContent(
    "What is Unit Testing for React Apps? Why is it important?"
  );
});

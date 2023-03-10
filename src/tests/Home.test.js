import {  WithRouter } from "./helper/RouteProvider";
import { screen, render } from "@testing-library/react";
import Home from "../pages/Home";

test("Home page title", () => {
  render(
       <WithRouter>
        <Home />
       </WithRouter>
  );
  let pageTilte = screen.getByTestId("page-title");
  expect(pageTilte).toHaveTextContent(
    "What is Unit Testing for React Apps? Why is it important?"
  );
});

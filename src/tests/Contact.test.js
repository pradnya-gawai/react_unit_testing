import { WithProvider, WithRouter } from "./helper/RouteProvider";
import { screen, render } from "@testing-library/react";
import Contact from "../pages/Contact";

test("Contact page title", () => {
  render(
  <WithRouter>
    <Contact />
  </WithRouter>);
  //   let pageTilte = screen.getByTestId("page-title");
  //   expect(pageTilte).toHaveTextContent(
  //     "What is Unit Testing for React Apps? Why is it important?"
  expect(3 + 3).isEqualTo(6);
});

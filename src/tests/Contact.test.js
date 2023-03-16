import { WithRouter } from "./helper/RouteProvider";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { logRoles } from "@testing-library/dom";
import {prettyDOM} from '@testing-library/dom'


import Contact from "../pages/Contact";
import { userData } from "./mocks/userData";

test("user data button", () => {
  const onClick = jest.fn();
  const { container } = render(
    <WithRouter>
      <Contact onClick={onClick} />
    </WithRouter>
  );
  // logRoles(container);

  const userDataButton = screen.getByRole("button", { name: "User Data" });
  console.log(prettyDOM(userDataButton))

  expect(userDataButton).toBeInTheDocument();
  // fireEvent.click(userDataButton);
  userEvent.click(userDataButton);
  expect(onClick).toHaveBeenCalledTimes(1);
});

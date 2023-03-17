import { WithRouter } from "./helper/RouteProvider";
import { screen, render, fireEvent } from "@testing-library/react";
import { rest } from "msw";

import userEvent from "@testing-library/user-event";
import { logRoles } from "@testing-library/dom";
import { prettyDOM } from "@testing-library/dom";
import Contact from "../pages/Contact";
// import { userData } from "./mocks/userData";
import { server } from "./mocks/server";
const user = userEvent.setup();

test("user data button", () => {
  const onClick = jest.fn();
  const { container } = render(
    <WithRouter>
      <Contact onClick={onClick} />
    </WithRouter>
  );
  // logRoles(container);

  const userDataButton = screen.getByRole("button", { name: "User Data" });
  console.log(prettyDOM(userDataButton));

  expect(userDataButton).toBeInTheDocument();
  fireEvent.click(userDataButton);
  // userEvent.click(userDataButton);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("test the api call", async () => {
  const onClick = jest.fn();

  server.use(
    rest.post("https://jsonplaceholder.typicode.com/users", (_req, res, ctx) =>
      res(ctx.status(200), ctx.json(userData))
    )
  );
  render(
    <WithRouter>
      <Contact onClick={onClick} />
    </WithRouter>
  );
  const userDataButton = screen.getByRole("button", { name: "User Data" });
  await user.click(userDataButton);
  expect(await screen.findByText("Pradnya Gawai")).toBeInTheDocument();
});

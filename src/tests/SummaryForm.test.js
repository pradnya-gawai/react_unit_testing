import { WithRouter } from "./helper/RouteProvider";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../pages/SummaryForm";

const user = userEvent.setup();

test("test the initial state of confrim button and checkbox", () => {
  render(
    <WithRouter>
      <SummaryForm />
    </WithRouter>
  );
  const checkBox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  expect(checkBox).not.toBeChecked();
  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  expect(confirmButton).not.toBeEnabled();
});
test("checkbox enables confrim button on first click and disables on second click", async () => {
  render(
    <WithRouter>
      <SummaryForm />
    </WithRouter>
  );

  const checkBox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  await user.click(checkBox);
  expect(confirmButton).toBeEnabled();
  await user.click(checkBox);
  expect(confirmButton).toBeDisabled();
});
test("popover response to over ", async () => {
  render(
    <WithRouter>
      <SummaryForm />
    </WithRouter>
  );

  // pop over should be hidden when page loads
  const nullPopover = screen.queryByText(
    /No ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();
  //   popover appers on moseover of checkbox label
  const termsAndConditions = screen.getByText("Terms and Conditions");
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/No ice cream will actually be delivered/i);

  expect(popover).toBeInTheDocument();
  // popover disapper on mose out
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});

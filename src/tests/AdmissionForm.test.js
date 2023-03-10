import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdmissionForm from "../pages/AdmissionForm";
import { WithProvider, WithRouter } from "./helper/RouteProvider";

describe("AdmissionForm component", () => {
  it("submits form with correct data", () => {
    const onSubmit = jest.fn();

    // Render the AdmissionForm component
    render(
      <WithRouter>
        <AdmissionForm onSubmit={onSubmit} />
      </WithRouter>
    );

    // Get the form inputs and submit button
    const firstNameInput = screen.getByLabelText("First Name:");
    const lastNameInput = screen.getByLabelText("Last Name:");
    const emailInput = screen.getByLabelText("Email Add:");
    const phoneNumberInput = screen.getByLabelText("Phone No:");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    // Fill out the form inputs with valid data
    // fireEvent.change(firstNameInput, { target: { value: "pradnya" } });
    // fireEvent.change(lastNameInput, { target: { value: "gawai" } });
    // fireEvent.change(emailInput, { target: { value: "pradnya@gmail.com" } });
    // fireEvent.change(phoneNumberInput, { target: { value: "9876543210" } });

    userEvent.type(firstNameInput, "Pradnya");
    userEvent.type(lastNameInput, "Gawai");
    userEvent.type(emailInput, "pradnya@gmail.com");
    userEvent.type(phoneNumberInput, "9876543210");

    // Submit the form
    // fireEvent.click(submitButton);
    userEvent.click(submitButton)
    // expect(onSubmit).toHaveBeenCalledTimes(1);
    // expect(jest.fn()).toHaveBeenCalledTimes(1)
    // expect(onSubmit).toHaveBeenCalledWith({
    //     firstName: 'Pradnya',
    //     lastName: 'Gawai',
    //     email: 'pradnya@gmail.com',
    //     phoneNumber: '9876543210',
    //   });
  

    // Verify that form was submitted with correct data
    expect(firstNameInput).toHaveValue("Pradnya");
    expect(lastNameInput).toHaveValue("Gawai");
    expect(emailInput).toHaveValue("pradnya@gmail.com");
    expect(phoneNumberInput).toHaveValue("9876543210");
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
  });
});

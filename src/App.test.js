import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./components/Header";

describe("Header component", () => {
  test("renders Navbar brand text", () => {
    render(<Header />);
    const brandElement = screen.getByText("React Testing Library");
    expect(brandElement).toBeInTheDocument();
  });
});

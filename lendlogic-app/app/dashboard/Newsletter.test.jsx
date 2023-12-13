import { render, screen, fireEvent } from "@testing-library/react";
import Newsletter from "./Newsletter";
import { describe, it } from "node:test";

describe("Newsletter", () => {
  it("correct content is rendered", () => {
    // locator
    render(<Newsletter />);
    //assertion
    expect(screen.getByText("Sign up for our newsletter")).toBeInTheDocument();
  });
  it("correct input is rendered", () => {
    // locator
    render(<Newsletter />);
    //assertion
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
  });
  it("correct button is rendered", () => {
    // locator
    render(<Newsletter />);
    //assertion
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Header from "../app/components/Header";
import { describe } from "node:test";

describe("Header", () => {
  it("renders the correct content", () => {
    // locator
    render(<Header />);
    //assertion
    expect(screen.getByAltText("LandLogic Logo")).toBeInTheDocument();
    expect(screen.getByText("LendLogic")).toBeInTheDocument();
  });
  it("renders the logo with the correct source and attributes", () => {
    // locator
    render(<Header />);
    const logoImage = screen.getByAltText("LandLogic Logo");
    // assertion
    // Image component is rendered with the correct source and attributes
    expect(logoImage).toHaveAttribute("src", "/Logo_lendlogic.png");
    expect(logoImage).toHaveAttribute("width", "100");
  });
  it("has the correct CSS classes", () => {
    // locator
    render(<Header />);
    //assertion
    expect(screen.getByRole("header")).toHaveClass("your-header-class");
  });
  it("renders the correct title", () => {
    // locator
    render(<Header />);
    const titleElement = screen.getByText("LendLogic");
    //assertion
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("text-purple-300");
  });
  it("has the correct CSS classes", () => {
    // locator
    render(<Header />);
    // assertion
    expect(screen.getByRole("header")).toHaveClass("flex-row");
  });
});

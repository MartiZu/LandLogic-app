import { render, screen, fireEvent } from "@testing-library/react";
//userEvent is an alternative to fireEvent
import { describe } from "node:test";
import PreferenceTool from "./PreferenceTool";
import { useRouter } from "next/router";

// Mock the next/router module
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("PreferenceTool", () => {
  describe("Render", () => {
  it("renders the PreferenceTool page", () => {
    //arrange
    render(<PreferenceTool />)
    expect(screen.getByText("Which of the following best describe you?")).toBeInTheDocument();
  });
});
}); 

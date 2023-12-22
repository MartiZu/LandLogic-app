import { render, screen, fireEvent } from "@testing-library/react";
//userEvent is an alternative to fireEvent
import { describe } from "node:test";
import PreferenceTool from "./PreferenceTool";


async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

// Mock the next/router module
jest.mock("next/router", () => ({
  _esModule: true,
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const mockCookieHandler = jest.fn()

describe("PreferenceTool", () => {
  describe("Render", () => {
  it("renders the PreferenceTool page", async () => {
    //arrange
    const PreferenceToolResolved = await resolvedComponent(PreferenceTool, mockCookieHandler);
    render(<PreferenceToolResolved />)
    // render(<PreferenceTool value={mockCookieHandler} />)
    expect(screen.getByText("Which of the following best describes you?")).toBeInTheDocument();
  });
});
}); 

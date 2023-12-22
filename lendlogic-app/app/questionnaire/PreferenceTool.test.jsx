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
    const PreferenceToolResolved = await resolvedComponent(PreferenceTool);
    render(<PreferenceToolResolved value={mockCookieHandler} />)
    // render(<PreferenceTool value={mockCookieHandler} />)
    expect(screen.getByText("Which of the following best describes you?")).toBeInTheDocument();
  });
});
}); 


// // Mock the next/router module
// jest.mock("next/router", () => ({
//   useRouter: () => ({
//     push: jest.fn(),
//   }),
// }));

// const mockCookieHandler = jest.fn();

// // Updated resolvedComponent function
// async function resolvedComponent(Component, props) {
//   // Mock the useRouter function for the duration of the test
//   jest.mock("next/router", () => ({
//     useRouter: () => ({
//       push: jest.fn(),
//     }),
//   }));

//   const ComponentResolved = await Component(props);
//   return () => ComponentResolved;
// }

// describe("PreferenceTool", () => {
//   it("renders the PreferenceTool page", async () => {
//     // Arrange
//     const PreferenceToolResolved = await resolvedComponent(PreferenceTool, {
//       cookieHandler: mockCookieHandler,
//     });

//     // Act
//     render(<PreferenceToolResolved />);

//     // Assert
//     expect(screen.getByText("Which of the following best describes you?")).toBeInTheDocument();
//   });
// });
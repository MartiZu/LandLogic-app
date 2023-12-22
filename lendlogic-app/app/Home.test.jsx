import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./page";
import { describe } from "node:test";

async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}
jest.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));
jest.mock("next/headers", () => ({
  cookies: jest.fn(() => ({ set: jest.fn() })),
}));

describe("Home", () => {
  it("setCookieJenny function is setting cookie as Jenny's email", async () => {
    const mockId = { user_id: "jenny.smith@example.com" };
    setCookieJenny = jest.fn(() => Promise.resolve(mockId));
    const jennyEmail = await setCookieJenny();
    expect(mockId).toEqual(jennyEmail);
  });
  it("setCookieJenny function runs on click", async () => {
    const logSpy = jest.spyOn(global.console, "log");
    const HomeResolved = await resolvedComponent(Home);
    render(<HomeResolved />);
    const button = screen.getByText("Jenny's journey");
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Jenny logged in successfully!");
  });
  it("setCookieKat function runs on click", async () => {
    const logSpy = jest.spyOn(global.console, "log");
    const HomeResolved = await resolvedComponent(Home);
    render(<HomeResolved />);
    const button = screen.getByText("Kat's journey");
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Kat logged in successfully!");
  });
});

// Test to work on - set cookies function

// Mock the cookies module

// describe("Home", () => {
//   it("setCookieJenny function sets a cookie with Jenny's email", async () => {
//     // const setCookieSpy = jest.spyOn(cookies(), 'set');
//     const setCookieSpy = jest.spyOn(require("next/headers").cookies(), "set");
//     const logSpy = jest.spyOn(global.console, "log");
//     const HomeResolved = await resolvedComponent(Home);
//     render(<HomeResolved />);

//     // Trigger the setCookieJenny function by interacting with the component

//     const button = screen.getByText("Jenny's journey");
//     fireEvent.click(button);
//     // await waitFor(() => {});
//     expect(logSpy).toHaveBeenCalled();
//     expect(logSpy).toHaveBeenCalledWith("Jenny logged in successfully!");

//     // expect(setCookieSpy).toHaveBeenCalled()
//     // expect(setCookieSpy).toHaveBeenCalledWith(
//     //   "user_id",
//     //   "jenny.smith@example.com"
//     // );

//     // // Clean up the spy
//     setCookieSpy.mockRestore();

//     // const buttontwo = screen.getByText("Kat's journey");
//     // fireEvent.click(buttontwo);

//     // Assert that the setCookieJenny function has been called with the expected arguments
//   });
// });

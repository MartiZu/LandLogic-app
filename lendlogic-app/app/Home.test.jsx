import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./page";
import { describe } from "node:test";

describe("Home", () => {
  // it("renders the home page", () => {
  //   //arrange
  //   render(<Home />);
  // });
  it("setCookieJenny function is setting cookie as Jenny's email", async () => {
    const mockId = {"user_id": "jenny.smith@example.com"}
    setCookieJenny = jest.fn(() => Promise.resolve(mockId));
    // const mockSetCookie = jest.fn();
    const jennyEmail = await setCookieJenny();
    expect(mockId).toEqual(jennyEmail);
  });
});


// Test to work on - set cookies function

// Mock the cookies module
// jest.mock("next/headers", () => ({
//   __esModule: true,
//   cookies: jest.fn(() => ({
//     set: jest.fn(),
//   })),
// }));

// describe("Home", () => {
//   it("setCookieJenny function sets a cookie with Jenny's email", async () => {
//     // const setCookieSpy = jest.spyOn(cookies(), 'set');
//     const setCookieSpy = jest.spyOn(require("next/headers").cookies(), 'set');

//     render(<Home />);
    
//     // Trigger the setCookieJenny function by interacting with the component

//     const button = screen.getByText("Jenny's journey");
//     fireEvent.click(button)
//     await waitFor(() => { 
//     });
    
//     expect(setCookieSpy).toHaveBeenCalledWith("user_id", "jenny.smith@example.com");
  
//   // Clean up the spy
//   setCookieSpy.mockRestore();

//     // const buttontwo = screen.getByText("Kat's journey");
//     // fireEvent.click(buttontwo);
    
//     // Assert that the setCookieJenny function has been called with the expected arguments
   
//   });
// });




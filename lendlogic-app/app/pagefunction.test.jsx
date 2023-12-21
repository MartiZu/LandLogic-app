import { describe } from "node:test";
import Home from "./page.jsx";
import { cookies } from "next/headers";

jest.mock("next/headers", () => ({
  __esModule: true,
  cookies: jest.fn(() => ({
    set: jest.fn(),
  })),
}));

// in my test i would like to run the function
describe("setCookieJenny", async () => {
  it("run cookie function, expect cookies().set to be called", async () => {
    await setCookieJenny();
    // I would expect the cookies.set function to to be called
    expect(cookies().set).toHaveBeenCalled();
  });
});

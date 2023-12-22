import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "node:test";
import DisplayNewBuyerInformation from "./DisplayNewBuyerInformation";

jest.mock("../../customHooks/DisplayUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockValue = {
propertyValue: 100000,
monthlySaving: 500,
years: 5,
months: 0,
};

describe("NewBuyer", () => {
  describe("Render", () => {
    it("should render the component", () => {
      render(<DisplayNewBuyerInformation value={mockValue} />);
      expect(
        screen.getByText("Your monthly saving could be")
      ).toBeInTheDocument();
    });
  });
});
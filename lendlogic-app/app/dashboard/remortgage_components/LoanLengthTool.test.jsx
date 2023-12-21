import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "node:test";
import LoanLengthTool from "./LoanLengthTool";

// Mock the custom hook
jest.mock("../../customHooks/DisplayUser", () => ({
    __esModule: true,
    default: jest.fn(),
  }));

// provide mock data to the custom hook
const mockValue = {
    loanLength: 25,
    loanAmount: 100000,
    userMonthlyPayment: 1000,
    userInterestRate: 3.5,
  };

describe("LoanLengthTool", () => {
    describe("Render", () => {
      it("should render the component", () => {
        render(<LoanLengthTool value={mockValue}/>);
        expect(screen.getByText("Your new mortgage term length could be")).toBeInTheDocument();
      });
    });
});
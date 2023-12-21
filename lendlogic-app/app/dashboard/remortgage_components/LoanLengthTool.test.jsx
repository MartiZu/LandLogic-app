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
    describe("Function", () => {
        it("should update the monthly payment when the loan term is changed", () => {
            render(<LoanLengthTool value={mockValue}/>);
            
           // store input element in a variable
           const input = screen.getByTestId("loanTerm");
           fireEvent.change(input, { target: { value: 15 } });

           expect(screen.getByText("Loan Term: 15")).toBeInTheDocument();
        });
});
});
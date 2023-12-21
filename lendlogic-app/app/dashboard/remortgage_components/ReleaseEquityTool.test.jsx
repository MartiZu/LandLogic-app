import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "node:test";
import ReleaseEquityTool from "./ReleaseEquityTool";

const mockValue = {
  loanLength: 30,
  loanAmount: 100000,
  userMonthlyPayment: 1500,
  userInterestRate: 3.5,
};

describe("ReleaseEquityTool", () => {
  it("renders the component with initial values", () => {
    render(<ReleaseEquityTool value={mockValue} />);

    expect(
      screen.getByText("Your monthly equity payment will be")
    ).toBeInTheDocument();
  });

  it("updates equity and monthly payment when adjusting the borrowing amount", () => {
    render(<ReleaseEquityTool value={mockValue} />);

    const equityInput = screen.getByTestId("interestRate");
    fireEvent.change(equityInput, { target: { value: 150000 } });

    expect(screen.getByText("£150000")).toBeInTheDocument();
    expect(screen.getByText("£500")).toBeInTheDocument(); // Adjust this based on your expected output
  });
  it("calls updateMonthlyPayment with correct arguments when adjusting borrowing amount", () => {
    // Arrange
    const updateMonthlyPaymentMock = jest.fn();
    render(
      <ReleaseEquityTool
        value={mockValue}
        updateMonthlyPayment={updateMonthlyPaymentMock}
      />
    );

    const equity = 150000;
    const borrowTime = 15;

    // Act
    fireEvent.change(screen.getByTestId("equityValue"), {
      target: { value: equity },
    });

    // Assert
    expect(updateMonthlyPaymentMock).toHaveBeenCalledWith(equity, borrowTime);
  });
});

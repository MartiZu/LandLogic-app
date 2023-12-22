import Step from "./Step";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "node:test";

// create mock for props
jest.mock ("../../customHooks/DisplayUser" , () => ({
    __esModule: true,
    default: jest.fn(),
}));

const mockTask =[{
    id: 1,
    tasks: [
        "Calculate upfront funds and potential borrowing.",
        "Use an affordability calculator and get an agreement in principle (AIP) for added attractiveness."
    ],
} ]

describe("Step", () => {
    describe("Render", () => {
      it("should render the component", () => {
        render(<Step id={1} tasks={mockTask[0].tasks} />);
        expect(
          screen.getByText("Calculate upfront funds and potential borrowing.")
        ).toBeInTheDocument();
      });
    });
  });
  
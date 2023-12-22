import Step from "./Step";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "node:test";

// create mock for props
jest.mock ("../../customHooks/DisplayUser" , () => ({
    __esModule: true,
    default: jest.fn(),
}));

  
const mockTask =[{
   
    tasks: [
        "Calculate upfront funds and potential borrowing.",
        "Use an affordability calculator and get an agreement in principle (AIP) for added attractiveness."
    ],
} ]

const id = 1;
  describe("Step", () => {
    describe("Render", () => {
      it("should render the component", () => {
        render(<Step id={id} tasks={mockTask[0].tasks} />);
        expect(
          screen.getByText("Calculate upfront funds and potential borrowing.")
        ).toBeInTheDocument();
      });
    });
  });

// describe('Step', () => { 
//     describe('Render', () => {
//     const tasks = [
//         "Calculate upfront funds and potential borrowing.",
//         "Use an affordability calculator and get an agreement in principle (AIP) for added attractiveness."
//       ];
//     it('renders a specific task based on ID', () => {
     
//       const id = 1; // Specify the desired ID
      
//       render(<Step id={id} tasks={tasks} />);
      
//       const ulElement = screen.getByTestId('task-list'); // Get the ul element by data-testid
      
//       // Check if the ul element exists
//       expect(ulElement).toBeInTheDocument();
      
//       // Check if the ul element contains the expected task content based on the specified ID
//       expect(ulElement).toHaveTextContent("Calculate upfront funds and potential borrowing.");
//     });
// });
//   });
  

import { render, screen, fireEvent } from "@testing-library/react";
//userEvent is an alternative to fireEvent
import { describe, it } from "node:test";
import PreferenceTool from "./PreferenceTool";

describe("PreferenceTool", () => {
  it("renders the PreferenceTool page", () => {
    //arrange
    render(<PreferenceTool />);
  });
});

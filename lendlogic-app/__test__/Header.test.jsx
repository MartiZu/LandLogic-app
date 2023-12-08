import { render, screen } from "@testing-library/react";
import Header from "../app/components/Header";
import { describe } from "node:test";

describe("Header", () => {
  it("renders the header page", () => {
    //arrange
    render(<Header />);
  });
});

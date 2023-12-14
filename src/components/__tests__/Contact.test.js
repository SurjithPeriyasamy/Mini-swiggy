import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact us Component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});

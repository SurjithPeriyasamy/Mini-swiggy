import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { appRouter } from "../../App";
import Header from "../Header";

describe("Should load the Header Component", () => {
  it("Should load the login botton", () => {
    render(
      <BrowserRouter>
        <RouterProvider router={appRouter}>
          <Header />
        </RouterProvider>
      </BrowserRouter>
    );
    //Querying
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });
});

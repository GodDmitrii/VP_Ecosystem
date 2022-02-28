import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "./error-page";
import { MemoryRouter } from "react-router-dom";

describe("Error page", () => {
  it("Should render", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "@testing-library/react";
import { If } from "../index";

describe("if without then", () => {
  beforeEach(cleanup);
  it("renders children when condition matches", () => {
    const { queryByText } = render(
      <If condition={true}>
        <div>first</div>
        <div>second</div>
      </If>
    );

    expect(queryByText("first")).toBeInTheDocument();
    expect(queryByText("second")).toBeInTheDocument();
  });

  it("renders children when condition matches", () => {
    const { queryByText } = render(
      <If condition={false}>
        <div>first</div>
        <div>second</div>
      </If>
    );

    expect(queryByText("first")).not.toBeInTheDocument();
  });
});

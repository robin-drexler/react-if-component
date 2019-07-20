import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Else, If, Then } from "../index";

describe("nested cases", () => {
  beforeEach(cleanup);
  it("renders if in if with", () => {
    const { queryByText } = render(
      <If condition={true}>
        <Then>
          <If condition={true}>
            <div>:nested</div>
            <If condition={false}>
              <Then>
                <div>:nested-not</div>
              </Then>
              <Else>
                <div>:nested-nested</div>
              </Else>
            </If>
          </If>
        </Then>
      </If>
    );

    expect(queryByText(":nested")).toBeInTheDocument();
    expect(queryByText(":nested-nested")).toBeInTheDocument();
    expect(queryByText(":nested-not")).not.toBeInTheDocument();
  });
});

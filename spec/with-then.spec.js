import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Else, If, Then } from "../index";

describe("if with then", () => {
  beforeEach(cleanup);
  it("renders Then when condition matches and there is no Else", () => {
    const { queryByText } = render(
      <If condition={true}>
        <Then>
          <div>:then</div>
        </Then>
      </If>
    );

    expect(queryByText(":then")).toBeInTheDocument();
  });

  it("renders Else but not Then when condition does not match", () => {
    const { queryByText } = render(
      <If condition={false}>
        <Then>
          <div>:then</div>
        </Then>
        <Else>
          <div>:else</div>
          <div>:another-else</div>
        </Else>
      </If>
    );

    expect(queryByText(":then")).not.toBeInTheDocument();
    expect(queryByText(":else")).toBeInTheDocument();
    expect(queryByText(":another-else")).toBeInTheDocument();
  });

  it("renders Then but not Else when condition matches", () => {
    const { queryByText } = render(
      <If condition={true}>
        <Then>
          <div>:then</div>
          <div>:another-then</div>
        </Then>
        <Else>
          <div>:else</div>
        </Else>
      </If>
    );

    expect(queryByText(":then")).toBeInTheDocument();
    expect(queryByText(":another-then")).toBeInTheDocument();

    expect(queryByText(":else")).not.toBeInTheDocument();
  });
});

import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import { Else, If, Then } from '../index';

describe('if with then', () => {
  it('renders Then when condition matches and there is no Else', () => {
    const { queryByText } = render(
      <If condition={true}>
        <Then>
          <div>:then</div>
        </Then>
      </If>
    );

    expect(queryByText(':then')).toBeInTheDOM();
  });

  it('renders Else but not Then when condition does not match', () => {
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

    expect(queryByText(':then')).not.toBeInTheDOM();
    expect(queryByText(':else')).toBeInTheDOM();
    expect(queryByText(':another-else')).toBeInTheDOM();
  });

  it('renders Then but not Else when condition matches', () => {
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

    expect(queryByText(':then')).toBeInTheDOM();
    expect(queryByText(':another-then')).toBeInTheDOM();

    expect(queryByText(':else')).not.toBeInTheDOM();
  });
});

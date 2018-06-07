import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import { If } from '../index';

describe('if without then', () => {
  it('renders children when condition matches', () => {
    const { queryByText } = render(
      <If condition={true}>
        <div>first</div>
        <div>second</div>
      </If>
    );

    expect(queryByText('first')).toBeInTheDOM();
    expect(queryByText('second')).toBeInTheDOM();
  });

  it('renders children when condition matches', () => {
    const { queryByText } = render(
      <If condition={false}>
        <div>first</div>
        <div>second</div>
      </If>
    );

    expect(queryByText('first')).not.toBeInTheDOM();
  });
});

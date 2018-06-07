import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import { Else, If, Then } from '../index';

describe('nested cases', () => {
  it('renders if in if with', () => {
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

    expect(queryByText(':nested')).toBeInTheDOM();
    expect(queryByText(':nested-nested')).toBeInTheDOM();
    expect(queryByText(':nested-not')).not.toBeInTheDOM();
  });
});

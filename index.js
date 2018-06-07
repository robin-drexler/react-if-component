import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class If extends PureComponent {
  renderWithoutThen() {
    const { children, condition } = this.props;
    return condition ? children : null;
  }
  renderWithThen() {
    const { children, condition } = this.props;

    return React.Children.toArray(children).reduce(
      (childrenToRender, child) => {
        if (child.type === Then && condition) {
          childrenToRender.push(child);
        }

        if (child.type === Else && !condition) {
          childrenToRender.push(child);
        }

        return childrenToRender;
      },
      []
    );
  }

  render() {
    const { children, condition } = this.props;

    const containsThen = React.Children.toArray(children).some(
      (child) => child.type === Then
    );

    return containsThen ? this.renderWithThen() : this.renderWithoutThen();
  }
}

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

const Then = ({ children }) => children || null;
const Else = ({ children }) => children || null;

Then.propTypes = {
  children: PropTypes.node.isRequired
};
Then.displayName = 'Then';

Else.propTypes = { children: PropTypes.node.isRequired };
Else.displayName = 'Else';

export { If, Then, Else };

import React from 'react';

import PropTypes from 'prop-types';

export default class Increment extends React.PureComponent {
  render() {
    const { currentValue, incrementValue, decrementValue } = this.props;
    return (
      <div>
        <span
          onClick={() => incrementValue()}
          role="button"
          tabIndex={0}
          onKeyUp={() => incrementValue()}
        >
          +1
        </span>
        <span>Value {currentValue}</span>
        <span
          role="button"
          tabIndex={0}
          onClick={() => decrementValue()}
          onKeyDown={() => decrementValue()}
        >
          -1
        </span>
      </div>
    );
  }
}

Increment.propTypes = {
  currentValue: PropTypes.number,
  incrementValue: PropTypes.func,
  decrementValue: PropTypes.func,
};

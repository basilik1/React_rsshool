import React from 'react';

class ErrorButton extends React.Component {
  render(): React.ReactNode {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={onClick}>
        Error
      </button>
    );
  }
}

export default ErrorButton;

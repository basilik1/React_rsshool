import { FC } from 'react';

const ErrorButton: FC = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Error
    </button>
  );
};

export default ErrorButton;

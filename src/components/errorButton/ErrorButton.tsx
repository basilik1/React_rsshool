import { FC } from 'react';

const ErrorButton: FC = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="btn_error">
      Error
    </button>
  );
};

export default ErrorButton;

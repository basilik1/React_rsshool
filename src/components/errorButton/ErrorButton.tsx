import { FC } from 'react';
import { IErrorButton } from '../interface/interface';

const ErrorButton: FC<IErrorButton> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="btn_error">
      Error
    </button>
  );
};

export default ErrorButton;

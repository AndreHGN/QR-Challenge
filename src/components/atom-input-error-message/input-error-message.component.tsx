import { ErrorMessage } from 'formik';
import ErrorMessageStyled from './input-error-message.styled';

interface InputErrorMessageProps {
  name: string;
}

const InputErrorMessage = ({
  name,
}: InputErrorMessageProps): React.ReactElement => {
  return (
    <div>
      <ErrorMessage name={name} component={ErrorMessageStyled} />
    </div>
  );
};

export default InputErrorMessage;

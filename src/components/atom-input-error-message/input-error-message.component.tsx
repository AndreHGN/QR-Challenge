import { ErrorMessage } from 'formik';
import ErrorMessageStyled from './input-error-message.styled';

interface InputErrorMessageProps {
  name: string;
}

const InputErrorMessage = ({
  name,
}: InputErrorMessageProps): React.ReactElement => {
  return <ErrorMessage name={name} component={ErrorMessageStyled} />;
};

export default InputErrorMessage;

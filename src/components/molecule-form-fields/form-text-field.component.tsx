import { FieldAttributes } from 'formik';
import FieldWrapper from './field-wrapper.component';
import FieldStyled from './field.styled';

type TextFieldType = 'email' | 'password' | 'text';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FormTextFieldProps extends FieldAttributes<any> {
  name: string;
  type?: TextFieldType;
  label?: string;
}

const FormTextField = ({
  name,
  type,
  label,
  ...props
}: FormTextFieldProps): React.ReactElement => {
  return (
    <FieldWrapper name={name} label={label}>
      <FieldStyled name={name} type={type || 'text'} {...props} />
    </FieldWrapper>
  );
};

export default FormTextField;

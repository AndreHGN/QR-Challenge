import { FieldAttributes } from 'formik';
import FieldWrapper, { CommonFieldProps } from './field-wrapper.component';
import FieldStyled from './field.styled';

type TextFieldType = 'email' | 'password' | 'text';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FormTextFieldProps extends FieldAttributes<any>, CommonFieldProps {
  type?: TextFieldType;
}

const FormTextField = ({
  name,
  type,
  label,
  required,
  marginBottom,
  ...props
}: FormTextFieldProps): React.ReactElement => {
  return (
    <FieldWrapper
      required={required}
      name={name}
      label={label}
      marginBottom={marginBottom}
    >
      <FieldStyled name={name} type={type || 'text'} {...props} />
    </FieldWrapper>
  );
};

export default FormTextField;

import { FieldAttributes } from 'formik';
import FieldWrapper, { CommonFieldProps } from './field-wrapper.component';
import FieldStyled from './field.styled';

interface FormTextFieldProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends Omit<FieldAttributes<any>, 'type'>,
    CommonFieldProps {}

const FormDateField = ({
  name,
  label,
  required,
  marginBottom,
  dataTestId,
  ...props
}: FormTextFieldProps): React.ReactElement => {
  return (
    <FieldWrapper
      required={required}
      name={name}
      label={label}
      marginBottom={marginBottom}
    >
      <FieldStyled
        width='auto'
        name={name}
        type='date'
        data-testid={dataTestId}
        {...props}
      />
    </FieldWrapper>
  );
};

export default FormDateField;

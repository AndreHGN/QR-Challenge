import { FieldAttributes } from 'formik';
import FieldWrapper from './field-wrapper.component';
import FieldStyled from './field.styled';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FormTextFieldProps extends Omit<FieldAttributes<any>, 'type'> {
  name: string;
  label: string;
}

const FormDateField = ({
  name,
  label,
  ...props
}: FormTextFieldProps): React.ReactElement => {
  return (
    <FieldWrapper name={name} label={label}>
      <FieldStyled width='auto' name={name} type='date' {...props} />
    </FieldWrapper>
  );
};

export default FormDateField;

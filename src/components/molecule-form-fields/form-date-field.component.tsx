import { FieldAttributes } from 'formik';
import FieldWrapper from './field-wrapper.component';
import FieldStyled from './field.styled';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FormTextFieldProps extends Omit<FieldAttributes<any>, 'type'> {
  name: string;
  label: string;
  required?: boolean;
}

const FormDateField = ({
  name,
  label,
  required,
  ...props
}: FormTextFieldProps): React.ReactElement => {
  return (
    <FieldWrapper required={required} name={name} label={label}>
      <FieldStyled width='auto' name={name} type='date' {...props} />
    </FieldWrapper>
  );
};

export default FormDateField;

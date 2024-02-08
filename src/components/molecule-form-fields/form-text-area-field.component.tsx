import { FieldAttributes, useField } from 'formik';
import FieldWrapper, { CommonFieldProps } from './field-wrapper.component';
import { TextAreaStyled } from './field.styled';

interface FormTextFieldProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends Omit<FieldAttributes<any>, 'type'>,
    CommonFieldProps {}

const FormTextAreaField = ({
  name,
  label,
  required,
  marginBottom,
  dataTestId,
  ...props
}: FormTextFieldProps): React.ReactElement => {
  const [field, meta] = useField<string>({ type: 'text', name, ...props });

  return (
    <FieldWrapper
      required={required}
      name={name}
      label={label}
      marginBottom={marginBottom}
    >
      <TextAreaStyled
        name={name}
        value={meta.value}
        onChange={field.onChange}
        data-testid={dataTestId}
      />
    </FieldWrapper>
  );
};

export default FormTextAreaField;

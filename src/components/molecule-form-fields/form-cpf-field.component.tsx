import { FieldAttributes, useFormikContext } from 'formik';
import FieldWrapper, { CommonFieldProps } from './field-wrapper.component';
import FieldStyled from './field.styled';
import { formatCpf } from '../../utils/cpf-formatter';

interface FormCpfFieldProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends Omit<FieldAttributes<any>, 'type'>,
    CommonFieldProps {}

const FormCpfField = ({
  name,
  label,
  required,
  marginBottom,
  onChange,
  dataTestId,
  ...props
}: FormCpfFieldProps): React.ReactElement => {
  const { setFieldValue } = useFormikContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const cpfValue = e.target.value;

    const formattedCpf = formatCpf(cpfValue);

    await setFieldValue(name, formattedCpf);

    onChange && onChange(e);
  };

  return (
    <FieldWrapper
      required={required}
      name={name}
      label={label}
      marginBottom={marginBottom}
    >
      <FieldStyled
        name={name}
        type='text'
        onChange={handleChange}
        maxLength={14}
        data-testid={dataTestId}
        {...props}
      />
    </FieldWrapper>
  );
};

export default FormCpfField;

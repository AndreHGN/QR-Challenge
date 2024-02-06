import { FieldAttributes, useFormikContext } from 'formik';
import FieldWrapper from './field-wrapper.component';
import FieldStyled from './field.styled';
import { formatCpf } from '../../utils/cpf-formatter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FormCpfFieldProps extends Omit<FieldAttributes<any>, 'type'> {
  name: string;
  label: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormCpfField = ({
  name,
  label,
  required,
  onChange,
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
    <FieldWrapper required={required} name={name} label={label}>
      <FieldStyled
        name={name}
        type='text'
        onChange={handleChange}
        maxLength={14}
        {...props}
      />
    </FieldWrapper>
  );
};

export default FormCpfField;

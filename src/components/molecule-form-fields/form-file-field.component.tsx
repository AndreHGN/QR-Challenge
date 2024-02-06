import { useRef } from 'react';
import { FieldAttributes } from 'formik';
import FieldWrapper from './field-wrapper.component';
import { FileFieldStyled } from './field.styled';
import Button from '../atom-button/button.styled';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FormFileFieldProps extends Omit<FieldAttributes<any>, 'type'> {
  name: string;
  label?: string;
  accept?: string;
  onFileChange?: (file: File) => void;
}

const FormFileField = ({
  name,
  label,
  accept,
  onFileChange,
  ...props
}: FormFileFieldProps): React.ReactElement => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const fileInput = ref.current;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      onFileChange && onFileChange(file);
    }
  };

  return (
    <FieldWrapper name={name}>
      <FileFieldStyled
        innerRef={ref}
        name={name}
        type='file'
        accept={accept}
        onChange={handleFileChange}
        {...props}
      />
      <Button type='button' action='secondary' size='sm' onClick={handleClick}>
        {label || 'Carregar arquivo'}
      </Button>
    </FieldWrapper>
  );
};

export default FormFileField;

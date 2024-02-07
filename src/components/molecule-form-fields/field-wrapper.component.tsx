import { PropsWithChildren } from 'react';
import InputLabel from '../atom-input-label/input-label.styled';
import Layout from '../atom-layout/layout.styled';
import InputErrorMessage from '../atom-input-error-message/input-error-message.component';

export interface FieldWrapperProps extends PropsWithChildren {
  name: string;
  label?: string;
  required?: boolean;
  marginBottom?: boolean;
}

export interface CommonFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  marginBottom?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FieldWrapper = ({
  name,
  label,
  children,
  required,
  marginBottom,
}: FieldWrapperProps): React.ReactElement => {
  return (
    <Layout $mb={marginBottom ? 'md' : undefined}>
      {label && (
        <Layout $mb='xs'>
          <InputLabel>
            {label}
            {required && '*'}
          </InputLabel>
        </Layout>
      )}
      {children}
      <InputErrorMessage name={name} />
    </Layout>
  );
};

export default FieldWrapper;

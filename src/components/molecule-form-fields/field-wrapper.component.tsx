import { PropsWithChildren } from 'react';
import InputLabel from '../atom-input-label/input-label.styled';
import Layout from '../atom-layout/layout.styled';
import InputErrorMessage from '../atom-input-error-message/input-error-message.component';

export interface FieldWrapperProps extends PropsWithChildren {
  name: string;
  label?: string;
  required?: boolean;
}

const FieldWrapper = ({
  name,
  label,
  children,
  required,
}: FieldWrapperProps): React.ReactElement => {
  return (
    <Layout $mb='md'>
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

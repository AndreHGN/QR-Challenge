import { PropsWithChildren } from 'react';
import InputLabel from '../atom-input-label/input-label.styled';
import Layout from '../atom-layout/layout.styled';
import InputErrorMessage from '../atom-input-error-message/input-error-message.component';

interface FieldWrapperProps extends PropsWithChildren {
  name: string;
  label?: string;
}

const FieldWrapper = ({
  name,
  label,
  children,
}: FieldWrapperProps): React.ReactElement => {
  return (
    <Layout $mb='md'>
      {label && (
        <Layout $mb='xs'>
          <InputLabel>{label}</InputLabel>
        </Layout>
      )}
      {children}
      <InputErrorMessage name={name} />
    </Layout>
  );
};

export default FieldWrapper;

import { Field } from 'formik';
import styled from 'styled-components';

interface FieldStyledProps {
  width?: string;
}

const FieldStyled = styled(Field)<FieldStyledProps>`
  padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.sm}`};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.primary};
  width: ${({ width }) => width || '100%'};
`;

export const FileFieldStyled = styled(Field)`
  opacity: 0;
  display: none;
`;

export default FieldStyled;

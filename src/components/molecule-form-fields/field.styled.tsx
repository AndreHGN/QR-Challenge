import { Field } from 'formik';
import styled, { css } from 'styled-components';

interface FieldStyledProps {
  width?: string;
}

const fieldStyles = (width?: string) => css`
  padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.sm}`};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.primary};
  width: ${width || '100%'};
`;

const FieldStyled = styled(Field)<FieldStyledProps>`
  ${({ width }) => fieldStyles(width)}
`;

export const TextAreaStyled = styled.textarea<FieldStyledProps>`
  ${({ width }) => fieldStyles(width)}
  resize: vertical;
`;

export const FileFieldStyled = styled(Field)`
  opacity: 0;
  display: none;
`;

export default FieldStyled;

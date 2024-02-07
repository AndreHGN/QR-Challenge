import { keyframes, styled } from 'styled-components';
import { Colors, SpinnerSizes } from '../../styles/styled';

interface SpinnerProps {
  size: SpinnerSizes;
  color: Colors;
}

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const mapSizeToBorder = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
};

const mapSizeToHeight = {
  xs: '16px',
  sm: '28px',
  md: '48px',
  lg: '60px',
  xl: '80px',
};

const Spinner = styled.div<SpinnerProps>`
  border: ${({ size }) => mapSizeToBorder[size]} solid transparent;
  border-top: ${({ size, color, theme }) =>
    `${mapSizeToBorder[size]} solid ${theme.colors[color]}`};
  border-radius: 50%;
  width: ${({ size }) => mapSizeToHeight[size]};
  height: ${({ size }) => mapSizeToHeight[size]};
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;

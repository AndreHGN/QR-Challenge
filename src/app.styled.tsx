import styled from 'styled-components';
import { device } from './styles/breakpoints';

const PageWrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.paddings.xl} ${theme.paddings.md} ${theme.paddings.xxxl}`};
  margin: 0 auto;

  @media ${device.xs} {
    max-width: 480px;
  }
  @media ${device.sm} {
    max-width: 640px;
  }
  @media ${device.md} {
    max-width: 768px;
  }
  @media ${device.lg} {
    max-width: 1024px;
  }
`;

export default PageWrapper;

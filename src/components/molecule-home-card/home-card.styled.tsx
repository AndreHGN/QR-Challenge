import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeCardStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  position: relative;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

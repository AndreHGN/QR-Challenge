import 'react-toastify/dist/ReactToastify.css';
import styled, { css } from 'styled-components';

export const CustomToastContainerStyled = styled.div`
  ${({ theme }) => css`
    .Toastify__toast-theme--dark {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
    }
    .Toastify__toast-theme--light {
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.black};
    }
    .Toastify__toast-theme--colored.Toastify__toast--default {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    .Toastify__toast-theme--colored.Toastify__toast--info {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }
    .Toastify__toast-theme--colored.Toastify__toast--success {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
    }
    .Toastify__toast-theme--colored.Toastify__toast--warning {
      background-color: ${theme.colors.warning};
      color: ${theme.colors.black};
    }
    .Toastify__toast-theme--colored.Toastify__toast--error {
      background-color: ${theme.colors.danger};
      color: ${theme.colors.white};
    }
  `}
`;

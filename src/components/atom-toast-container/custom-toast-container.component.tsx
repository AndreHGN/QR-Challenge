import { ToastContainer } from 'react-toastify';
import { CustomToastContainerStyled } from './custom-toast-container.styled';
import { ToastContainerProps } from 'react-toastify/dist/types';

const CustomToastContainer = (props: ToastContainerProps) => {
  return (
    <CustomToastContainerStyled>
      <ToastContainer {...props} />
    </CustomToastContainerStyled>
  );
};

export default CustomToastContainer;

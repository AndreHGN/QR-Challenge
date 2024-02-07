import ButtonStyled, { ButtonStyledProps } from './button.styled';
import Spinner from '../atom-spinner/spinner.styled';
import { SpinnerSizes } from '../../styles/styled';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyledProps {}

const Button = ({
  action,
  size,
  loading,
  children,
  ...props
}: ButtonProps): React.ReactElement => {
  const spinnerColor = action === 'secondary' ? 'primary' : 'white';
  const spinnerSize = size ? mapButtonSizeToSpinnerSize[size] : 'sm';

  return (
    <ButtonStyled action={action} size={size} disabled={loading} {...props}>
      {loading ? (
        <Spinner color={spinnerColor} size={spinnerSize as SpinnerSizes} />
      ) : (
        children
      )}
    </ButtonStyled>
  );
};

const mapButtonSizeToSpinnerSize = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

export default Button;

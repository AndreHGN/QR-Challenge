import { Colors, IconSizes } from '../../styles/styled';
import Icon, { IconTypes } from '../atom-icon/icon.component';
import Layout from '../atom-layout/layout.styled';
import Spinner from '../atom-spinner/spinner.styled';
import IconButtonStyled, { IconButtonStyledProps } from './icon-button.styled';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IconButtonStyledProps {
  color: Colors;
  size: IconSizes;
  iconType: IconTypes;
  loading?: boolean;
}

const IconButton = ({
  iconType,
  color,
  size,
  type,
  loading,
  ...props
}: IconButtonProps): React.ReactElement => {
  return (
    <IconButtonStyled type={type || 'button'} disabled={loading} {...props}>
      <Layout $display='flex' $alignItems='center' $justifyContent='center'>
        {loading ? (
          <Spinner color={color} size={size} />
        ) : (
          <Icon type={iconType} color={color} size={size} />
        )}
      </Layout>
    </IconButtonStyled>
  );
};

export default IconButton;

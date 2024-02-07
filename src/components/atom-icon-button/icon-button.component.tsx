import { Colors, IconSizes } from '../../styles/styled';
import Icon, { IconTypes } from '../atom-icon/icon.component';
import Layout from '../atom-layout/layout.styled';
import IconButtonStyled, { IconButtonStyledProps } from './icon-button.styled';

interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    IconButtonStyledProps {
  color: Colors;
  size: IconSizes;
  iconType: IconTypes;
}

const IconButton = ({
  iconType,
  color,
  size,
  ...props
}: IconButtonProps): React.ReactElement => {
  return (
    <IconButtonStyled type='button' {...props}>
      <Layout $display='flex' $alignItems='center' $justifyContent='center'>
        <Icon type={iconType} color={color} size={size} />
      </Layout>
    </IconButtonStyled>
  );
};

export default IconButton;

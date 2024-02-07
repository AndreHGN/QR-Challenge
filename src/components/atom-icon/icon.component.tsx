import { IconBaseProps, IconType } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import { Colors, IconSizes } from '../../styles/styled';
import { useTheme } from 'styled-components';

export type IconTypes = 'remove';

const getIcon: Record<IconTypes, IconType> = {
  remove: AiOutlineClose,
};

export interface IconProps extends IconBaseProps {
  color: Colors;
  size: IconSizes;
  type: IconTypes;
}

const Icon = ({
  color,
  size,
  type,
  ...props
}: IconProps): React.ReactElement => {
  const theme = useTheme();

  const IconComponent = getIcon[type];

  const colorValue = theme.colors[color];
  const sizeValue = theme.iconSizes[size];

  return <IconComponent color={colorValue} size={sizeValue} {...props} />;
};

export default Icon;

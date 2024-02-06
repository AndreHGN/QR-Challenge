import AvatarStyled from './avatar.styled';
import { AvatarPlaceholder } from '../../assets/img';
import { AvatarSizes } from '../../styles/styled';

export interface AvatarProps {
  img?: string;
  size?: AvatarSizes;
}

const Avatar = ({ img, size }: AvatarProps): React.ReactElement => {
  const source = img || (AvatarPlaceholder as string);

  return <AvatarStyled src={source} alt='Avatar image' size={size || 'md'} />;
};

export default Avatar;

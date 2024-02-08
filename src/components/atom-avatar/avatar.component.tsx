import AvatarStyled from './avatar.styled';
import { AvatarPlaceholder, NoImagePlaceholder } from '../../assets/img';
import { AvatarSizes } from '../../styles/styled';
import { useState } from 'react';

export interface AvatarProps {
  img?: string;
  size?: AvatarSizes;
}

const Avatar = ({ img, size }: AvatarProps): React.ReactElement => {
  const [isBroken, setIsBroken] = useState(false);

  const source = isBroken
    ? (NoImagePlaceholder as string)
    : img || (AvatarPlaceholder as string);

  const handleError = () => {
    setIsBroken(true);
  };

  return (
    <AvatarStyled
      src={source}
      alt='Avatar image'
      size={size || 'md'}
      onError={handleError}
    />
  );
};

export default Avatar;

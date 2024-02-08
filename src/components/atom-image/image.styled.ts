import styled from 'styled-components';

interface ImageProps {
  $width?: string;
  $height?: string;
}

export const Image = styled.img<ImageProps>`
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
`;

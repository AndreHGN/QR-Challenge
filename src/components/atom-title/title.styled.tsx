import styled from 'styled-components';

interface TitleProps {
  color?: string;
}

const Title = styled.h1<TitleProps>`
  color: ${(props) => props.color || props.theme.colors.black};
`;

export default Title;

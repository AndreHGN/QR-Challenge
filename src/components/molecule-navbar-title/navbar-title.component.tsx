import NavbarLink from '../atom-navbar-link/navbar-link.styled';
import Title from '../atom-title/title.styled';
import NavbarTitleStyled from './navbar-title.styled.component';

interface NavbarTitleProps {
  to: string;
  title: string;
}

const NavbarTitle = ({ to, title }: NavbarTitleProps): React.ReactElement => {
  return (
    <NavbarTitleStyled>
      <NavbarLink to={to}>
        <Title>{title}</Title>
      </NavbarLink>
    </NavbarTitleStyled>
  );
};

export default NavbarTitle;

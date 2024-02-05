import NavbarStyled from './navbar.styled';
import NavbarItem from '../molecule-navbar-item/navbar-item.component';
import Layout from '../atom-layout/layout.styled';
import NavbarTitle from '../molecule-navbar-title/navbar-title.component';

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps): React.ReactElement => {
  return (
    <NavbarStyled>
      <Layout $mr='md'>
        <NavbarTitle to='/' title={title} />
      </Layout>
      <NavbarItem to='users' text='Colaborador' />
    </NavbarStyled>
  );
};

export default Navbar;

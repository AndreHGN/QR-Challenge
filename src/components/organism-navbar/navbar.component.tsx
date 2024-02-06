import NavbarStyled from './navbar.styled';
import NavbarItem from '../molecule-navbar-item/navbar-item.component';
import Layout from '../atom-layout/layout.styled';
import NavbarTitle from '../molecule-navbar-title/navbar-title.component';
import { strings } from './strings';

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <Layout $mr='md'>
        <NavbarTitle to='/' title={strings.title} />
      </Layout>
      <NavbarItem to='users' text={strings.userNavItem} />
    </NavbarStyled>
  );
};

export default Navbar;

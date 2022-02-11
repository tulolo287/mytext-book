import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";
import { FaBars } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/catalog">Catalog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn><NavBtnLink to="/signin">Sign in</NavBtnLink></NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;

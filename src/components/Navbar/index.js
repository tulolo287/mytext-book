import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeScrollNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeScrollNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            
            <NavItem>
              <NavLinks to="catalog" smooth={true} duration={500} spy={true} offset={-80} exact='true'>Catalog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} offset={-80} exact='true'>About</NavLinks>
            </NavItem>
      
          </NavMenu>

          <NavBtn>
            <NavBtnLink to='/signin'>Sign in</NavBtnLink>
          </NavBtn>
          
          <NavBtn>
            <NavBtnLink to='/cart'>Cart</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;

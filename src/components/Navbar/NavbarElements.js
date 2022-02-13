import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  position: sticky;
    
  z-index: 10; 
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
 
   
`;

export const NavLogo = styled(LinkR)`
color: red;
text-decoration: none;
`

export const MobileIcon = styled.div`
display: none;
color: white;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
}
`

export const NavMenu = styled.ul`
display: flex;
list-style: none;
align-items: center;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(LinkR)`
display: flex;
padding: 0 1rem;
cursor: pointer;
hight: 100%;
color: #fff;
text-decoration: none;
align-items: center;

&:active {
  border-bottom: 3px solid green;
}
`
export const NavBtn = styled.nav`
align-items: center;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background-color: green;
color: #fff;
padding: 10px 20px;
font-size: 16px;
text-decoration: none;

&:hover {

background-color: #000;
color: #fff;
border: 1px solid green;
}

`

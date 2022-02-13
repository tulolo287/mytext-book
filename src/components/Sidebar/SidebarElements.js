import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  background-color: black;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "50%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  color: #790023;
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-aligh: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkR)`
  display: flex;
  justify-content: center;
  list-style: none;
  align-items: center;
  text-decoration: none;
  color: white;

  transition: 0.2s ease-in;
  &:hover {
    color: green;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarButton = styled(LinkR)`
  background-color: green;
  border-radius: 50px;
  text-decoration: none;
  padding: 16px 60px;
  color: black;
  font-size: 16px;
  white-space: no-wrap;
`;

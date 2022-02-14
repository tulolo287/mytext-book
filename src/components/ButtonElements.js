import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background-color: green;
  cursor: pointer;
  padding: 16px 60px;
  text-decoration: none;
  transition: all 0.2s ease-in;
  align-items: center;

  color: ${({ dark }) => (dark ? "red" : "white")};

  &:hover {
    background-color: black;
    border: 1px solid green;
  }
`;

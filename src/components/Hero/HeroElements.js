import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`
  border: 1px solid green;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0, 0,0,0.2) 0%, rgba(0, 0,0,0.8) 100%),
    linear-gradient(180deg, rgba(0, 0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #452256;
`;

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
`;

export const HeroH1 = styled.h1`
  color: white;
`;

export const HeroP = styled.p`
  color: white;
`;

export const HeroBtnWrapper = styled.div``;

export const Button = styled(LinkR)`
color: white;
text-decoration: none;
  border-radius: 50px;
  background-color: green;
  padding: 16px 60px;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid green;
  }
`;

export const ArrowForward = styled(MdArrowForward)``;

export const ArrowRight = styled(MdKeyboardArrowRight)``;

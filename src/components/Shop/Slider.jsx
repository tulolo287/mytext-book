import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { sliderItems } from "../../shopData";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  background-color: pink;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: grey;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.sliderItem * -100}vw);
  transition: 1s ease-in-out;
`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Image = styled.img`
  height: 80%;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 20px;
`;

const Slider = () => {
  const [sliderItem, setSliderItem] = useState(0);

  const arrowClick = (direction) => {
    if (direction == "left") {
      setSliderItem(sliderItem > 0 ? sliderItem - 1 : 1);
    } else if (direction == "right") {
      setSliderItem(sliderItem > 0 ? 0 : sliderItem + 1);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => arrowClick("left")}>
        <FaArrowLeft />
      </Arrow>
      <Wrapper sliderItem={sliderItem}>
        {sliderItems.map((slide) => (
          <Slide key={slide.id} bg={slide.bg}>
            <ImageContainer>
              <Image src={slide.img} alt={slide.title} />
            </ImageContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Desc>{slide.description}</Desc>
              <Button>Go</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => arrowClick("right")}>
        <FaArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;

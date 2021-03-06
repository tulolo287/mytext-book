import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { useState } from "react";
import { Button } from "../ButtonElements";


const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Bank jllllj kttt</HeroH1>
        <HeroP>lorem inpjkl ljj ljlj l l l l lllj;; kjlj</HeroP>
        <HeroBtnWrapper>
          <Button dark={true} to="/signin" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
export default Hero;

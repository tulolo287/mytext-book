import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  BtnWrap,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Image
} from "./InfoElements";
import { Button } from "../ButtonElements";
import img from "../../images/svg-1.svg";

export const InfoSection = ({topLine, headLine, id, buttonLabel, description, alt, dark, link, start}) => {
  return (
    <>
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow start={start}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headLine}</Heading>
              <Subtitle>{description}</Subtitle>
              <BtnWrap>
                <Button dark={dark} to={link}>
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Image src={img} alt={alt}/>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>


    </>
  );
};
export default InfoSection;

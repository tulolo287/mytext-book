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

export const InfoSection = ({topLine, headLine, id, buttonLabel, description, alt}) => {
  return (
    <>
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headLine}</Heading>
              <Subtitle>{description}</Subtitle>
              <BtnWrap>
                <Button dark={true} to="/catalog">
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

  <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headLine}</Heading>
              <Subtitle>{description}</Subtitle>
              <BtnWrap>
                <Button dark={true} to="/info">
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

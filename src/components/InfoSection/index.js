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
  Subtitle
} from "./InfoElements";
import Button from "../ButtonElements";

export const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrap>
                <Button dark={true} to="/info">
                  Info
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2></Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};
export default InfoSection;

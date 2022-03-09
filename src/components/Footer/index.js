import {FooterContainer, FooterWrapper, FooterItem, FooterTitle, SocialMedia, SocialMediaLogo, SocialMediaIcons, SocialMediaLink, SocialMediaWrites, FooterWrap} from './FooteElements'
import {FaFacebook, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterWrap>
    <FooterContainer>
        <FooterWrapper>
            <FooterTitle>Some title</FooterTitle>
            <FooterItem>How it works</FooterItem>
            <FooterItem>About us</FooterItem>
            <FooterItem>Contacts</FooterItem>
        </FooterWrapper>
        <FooterWrapper>
            <FooterTitle>Some title</FooterTitle>
            <FooterItem to="/how">How it works</FooterItem>
            <FooterItem to="/about">About us</FooterItem>
            <FooterItem to="/contacts">Contacts</FooterItem>
        </FooterWrapper>
    </FooterContainer>

        <SocialMedia>
          <SocialMediaLogo>Logo</SocialMediaLogo>
          <SocialMediaIcons>
            <SocialMediaLink to="/"><FaFacebook/></SocialMediaLink>
            <SocialMediaLink to="/"><FaYoutube/></SocialMediaLink>
          </SocialMediaIcons>
          <SocialMediaWrites>my writes {new Date().getFullYear()}</SocialMediaWrites>
        </SocialMedia>
        
    </FooterWrap>
  )
}

export default Footer
import {FooterContainer, FooterWrapper, FooterItem, FooterTitle} from './FooteElements'

const Footer = () => {
  return (
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
  )
}

export default Footer
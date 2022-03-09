import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const FooterContainer = styled.div `
background-color: black;
display: flex;
justify-content: space-around;
max-width: 1000px;
justify-content: center;
align-items: center;
margin: 0 auto;
@media screen and (max-width: 468px){
    display: flex;
    flex-direction: column;
}
`
export const FooterWrapper = styled.div `
display: flex;
flex-direction: column;
padding: 16px 60px;
`
export const FooterTitle = styled.h1 `
color: white;
margin-bottom: 16px;
`
export const FooterItem = styled.a`
color: white;
`
export const SocialMedia = styled.div`
color: white;
display: flex;
justify-content: space-around;
max-width: 1000px;
margin-top: 50px;

@media screen and (max-width: 480px) {
    flex-direction: column;
}
`
export const SocialMediaLogo = styled.div`
color: white;
margin-bottom: 10px;
`
export const SocialMediaIcons = styled.div`
color: white;
margin-bottom: 10px;
`
export const SocialMediaLink = styled(Link)`
color: white;
margin: 0 10px 0 10px;
`
export const SocialMediaWrites = styled.div`
color: white;
margin-bottom: 10px;
`
export const FooterWrap = styled.div`
background-color: black;
display: flex;
flex-direction: column;
`
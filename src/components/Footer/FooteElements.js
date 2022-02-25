import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const FooterContainer = styled.div `
background-color: black;
display: flex;

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
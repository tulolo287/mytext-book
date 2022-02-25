import styled from 'styled-components';

export const InfoContainer = styled.div`
background-color: grey;
`
export const InfoWrapper = styled.div`
display: grid;
height: 500px;
width: 100%;
max-width: 1100px;

`

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;

grid-template-areas: ${({start}) => (start ? `"col1 col2"` : `"col2 col1"`)};

`
export const BtnWrap = styled.div`

`

export const Column1 = styled.div`
grid-area: col1;
`
export const Column2 = styled.div`
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 500px;
`

export const TopLine = styled.p`
color: blue;

`
export const Heading = styled.h1`

`
export const Subtitle = styled.p`
color: red;
`
export const ImgWrap = styled.div`
max-width: 500px;
height: 100%;
`
export const Image = styled.img`
width: 100%;
height: 100%;

`
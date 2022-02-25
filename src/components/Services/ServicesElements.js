import styled from 'styled-components';

export const ServicesContainer = styled.div`
height: 500px;
display: flex;
background: blue;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    height: 800px;
}
@media screen and (max-width: 468px){
    height: 1000px;
}
`

export const ServicesH1= styled.h1`
color: red;
`
export const ServicesWrapper= styled.div`
display: grid;
max-width: 1000px;
margin: 0 auto;
grid-gap: 16px;

grid-template-columns: 1fr 1fr 1fr;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    max-width: 
}

@media screen and (max-width: 468px) {
    grid-template-columns: 1fr;
}
`
export const ServicesCard= styled.div`
max-height: 300px;
background-color: #fff;
border-radius: 10px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: flex-start;
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon= styled.img`
height: 150px;
width: 150xp
`
export const ServicesH2= styled.h2`

`
export const ServicesP= styled.p`

`
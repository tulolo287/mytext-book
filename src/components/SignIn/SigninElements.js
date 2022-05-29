import styled from 'styled-components';


export const Container = styled.div`
position: fixed;
min-height: 600px;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(100deg, rgba(1, 147, 86, 1)0%,
rgba(10, 201, 122, 1)100%);
`
export const FormWrap = styled.div`
display: flex;
flex-direction: column;
`
export const Icon = styled.div`

`
export const FormContent = styled.div`

`
export const Form = styled.form`
background: #010101;
color: white;
padding: 60px;
max-width: 400px;
margin: 0 auto;
border-radius: 4px;
display: grid;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
@media screen and(max-width: 400px) {
    padding: 30px;
}
`
export const FormH1 = styled.h1`
font-size: 20xp;
font-weight: 400;
text-align: center;
`
export const FormLabel = styled.div`

`
export const FormButton = styled.div`

`
export const FormInput = styled.div`

`
export const Text = styled.p`

`
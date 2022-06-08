import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Container = styled.div`
    background-color: black;
    text-align: center;
    align-items: center;
    color: white;

`

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Header = () => {
    return (
        <Container><Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>input<FaSearch /></SearchContainer>
            </Left>
            <Center>sdfas</Center><Right>sdfsaf</Right></Wrapper></Container>

    )
}

export default Header
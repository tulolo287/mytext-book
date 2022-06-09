import styled from 'styled-components'
import { FaIdBadge, FaSearch, FaShoppingCart } from 'react-icons/fa'

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
    display: flex;
    justify-content: flex-end;

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
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Header = () => {
    return (
        <Container><Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <FaSearch style={{ color: "grey", fontSize: 16 }} />
                </SearchContainer>
            </Left>
            <Center><Logo>Lama.</Logo></Center><Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem><FaIdBadge /><FaShoppingCart /></MenuItem>
            </Right></Wrapper></Container>

    )
}

export default Header
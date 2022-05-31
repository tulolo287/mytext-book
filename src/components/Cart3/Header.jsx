
import { Badge, Nav, Navbar, Container, FormControl, Dropdown } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"



export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a href='/#'>Shopping cart</a>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl style={{ width: 500 }} placeholder='Search' className='m-auto'></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='red' fontSize='25px' />
              <Badge>{3}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 344 }}>
              <span style={{ padding: 10 }}>Cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

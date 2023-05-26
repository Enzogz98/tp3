import {Container, Navbar, Nav} from "react-bootstrap"
const Header = () => {
  return (
    <div>
        <Navbar>
            <Container>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
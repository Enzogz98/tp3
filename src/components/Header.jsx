import {Container, Navbar, Nav} from "react-bootstrap"
import "../css/Header.css"
import {FcHome, FcFeedback } from "react-icons/fc";
const Header = () => {
  return (
    <div>
        <Navbar className="navbar">
            <Container>
                <Nav>
                    <Nav.Link className="navlink btn-light" href="/"><FcHome/>Home</Nav.Link>
                    <Nav.Link className="navlink btn-light" href="/contact"><FcFeedback/>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

function MyNavbar() {
  return (
    <div className='navbar-bg'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto actived" >
              <Nav.Link href="#home">home</Nav.Link>
              <Nav.Link href="#proejcts">proejcts</Nav.Link>
              <Nav.Link href="#aboutme">about me</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
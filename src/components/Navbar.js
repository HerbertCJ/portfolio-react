import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'



function CollapsibleExample() {
  const [active, setActive] = useState(false)
  

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto actived" >
            <Nav.Link href="#features">home</Nav.Link>
            <Nav.Link href="#pricing" >proejcts</Nav.Link>
            <Nav.Link href="#pricing">about me</Nav.Link>
            <Nav.Link href="#pricing">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
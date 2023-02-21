import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

function MyNavbar() {
  return (
    <div className='navbar-bg'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand>    
          <Nav.Link href='#home' className='nav-link' eventKey="1">
            <img src={logo} alt="logo" /> 
          </Nav.Link>                          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto actived" >
              <Nav.Link href='#home' className='nav-link' eventKey="1">home</Nav.Link>
              <Nav.Link href='#projects' className='nav-link' eventKey="2" >projects</Nav.Link>
              <Nav.Link href='#aboutme' className='nav-link' eventKey="3" >about me</Nav.Link>
              <Nav.Link href='#contact' className='nav-link' eventKey="4" >contact</Nav.Link>           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
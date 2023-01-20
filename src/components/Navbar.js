import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

function MyNavbar() {
  return (
    <div className='navbar-bg'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto actived" >
              <Nav.Link>
                <Link to='/' className='nav-link'>home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/projects' className='nav-link'>projects</Link>
              </Nav.Link>
              <Nav.Link>
              <Link to='/aboutme' className='nav-link'>about me</Link>
              </Nav.Link>
              <Nav.Link>
              <Link to='/contact' className='nav-link'>contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
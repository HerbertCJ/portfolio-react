import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'


function MyNavbar() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  return (
    <div className='navbar-bg'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" fixed='top'>
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" onClick={() => scrollToSection('home')} eventKey="0" style={{cursor: 'pointer'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto actived justify-content-end" style={{ width: '100%' }} >
              <Nav.Link href='' className='nav-link' eventKey="1" onClick={() => scrollToSection('home')}>home</Nav.Link>
              <Nav.Link href='' className='nav-link' eventKey="2" onClick={() => scrollToSection('projects')} >projects</Nav.Link>
              <Nav.Link href='' className='nav-link' eventKey="3" onClick={() => scrollToSection('aboutme')} >about me</Nav.Link>
              <Nav.Link href='' className='nav-link' eventKey="4" onClick={() => scrollToSection('contact')} >contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
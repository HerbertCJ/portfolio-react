import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";

function MyNavbar() {
  function scrollToSection(id, yOffset = 0) {
    const element = document.getElementById(id);
    if (element) {
      const scrollOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      };

      const topPosition =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ ...scrollOptions, top: topPosition });
    }
  }

  return (
    <div className="navbar-bg">
      <Navbar collapseOnSelect expand="lg" className="navbar-color" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              onClick={() => scrollToSection("home", -120)}
              eventKey="0"
              className="nav-logo"
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto actived justify-content-end"
              style={{ width: "100%" }}
            >
              <Nav.Link
                href=""
                className="nav-link"
                eventKey="1"
                onClick={() => scrollToSection("home", -100)}
              >
                home
              </Nav.Link>
              <Nav.Link
                href=""
                className="nav-link"
                eventKey="2"
                onClick={() => scrollToSection("about")}
              >
                about me
              </Nav.Link>
              <Nav.Link
                href=""
                className="nav-link"
                eventKey="3"
                onClick={() => scrollToSection("projects")}
              >
                projects
              </Nav.Link>
              <Nav.Link
                href=""
                className="nav-link"
                eventKey="4"
                onClick={() => scrollToSection("contact")}
              >
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;

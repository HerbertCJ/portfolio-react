import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profileImg from "../../images/profile.png";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="about" id="about">
      <h2 className="title">About Me</h2>
      <Row className="about-row">
        <Col className="profile-col" lg={6} md={6} sm={12}>
          <img src={profileImg} alt="Profile" />
        </Col>
        <Col lg={6} md={6} sm={12} className="profile-info-col">
          <h4>Herbert Cabus Jacby</h4>
          <p>Front-End Developer</p>
          <p className="mt-5 mb-5">
            Hello, it's a pleasure to have you here. I'm Herbert and I have 3
            years of experience in coding. I usually work with React and Angular
            and I also have knowledge in React Native, NodeJS and NestJS, Styled
            Components, SASS , Material UI, Tailwind, Redux, Zustand, Storybook,
            MySQL, MongoDB, Jest, Cypress.
          </p>
          <div className="socials">
            <a
              href="https://github.com/HerbertCJ"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="icongithub" />
            </a>

            <a
              href="https://www.linkedin.com/in/herbertcj"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="iconlinkedin" />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;

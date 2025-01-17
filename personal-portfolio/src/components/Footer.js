import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${require('../assets/img/footer-bg.svg')})` }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/devanshmohansinha" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/dsinha12345" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="https://drive.google.com/file/d/14PglUSjpZOl1xjHoT8NOTR3hy1sA0mzx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Google Drive" />
                </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
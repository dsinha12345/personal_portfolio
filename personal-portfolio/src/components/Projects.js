import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Corneal Pathological Classifier",
      description: "Image Classification using CNN and ResNet50",
      imgUrl: projImg1, 
    },
    {
      title: "StylePitch",
      description: "Fashion Design App connecting designers and companies",
      imgUrl: projImg2, 
    },
    {
      title: "Modi Script Character Recognition",
      description: "AI Model for Modi Script Character Recognition",
      imgUrl: projImg3, 
    },
    {
      title: "Soccer Prediction App",
      description: "Prediction Software using Flask and TensorFlow",
      imgUrl: projImg4, 
      link : "https://github.com/dsinha12345/Football_prediction",
    },
    {
      title: "RNAseq Analysis",
      description: "Data Analysis for Gene Sequencing using Python and R",
      imgUrl: projImg5, 
      link: "https://pubmed.ncbi.nlm.nih.gov/37683796/",
    },
    {
      title: "BeeSafeAI",
      description: "A secure web application for password management, featuring a password generator powered by generative AI and built using Django, HTML, and CSS.",
      imgUrl: projImg6,
      link: "https://aibeesafe.onrender.com"
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Throughout my career, I have worked on a variety of projects that showcase my skills in web development, software engineering, Machine Learning and AI. Below are some of the key projects that highlight my experience and expertise in the field.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                          <Col>
                            <h3>More projects coming soon</h3>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col>
                            <h3>More projects coming soon</h3>
                          </Col>
                        </Row>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

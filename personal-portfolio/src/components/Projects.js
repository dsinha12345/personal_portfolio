import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import schimg from "../assets/img/school.png";
import bsimg from "../assets/img/college.png";
import aiEngineerImg from "../assets/img/aiengineer.png";
import researchInternImg from "../assets/img/research-intern.png";
import desktopSupportImg from "../assets/img/desktop-support.png";  
import taImg from "../assets/img/ta.png";
import housingAssistantImg from "../assets/img/housing-assistant.png";
import researchAssistantImg from "../assets/img/ugra.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const [activeTab, setActiveTab] = useState("first");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = (project) => {
    console.log("Selected Project", project);
    setSelectedProject(project);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

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
      description: "A web application for password management, featuring a password generator powered by generative AI.",
      imgUrl: projImg6,
      link: "https://aibeesafe.onrender.com"
    },
  ];

  const education = [
    {
      title: "High School Diploma",
      description: "Cambridge School, India\n2018-2021",
      imgUrl : schimg,
    },
    {
      title: "Bachelor of Science in Computer Science",
      description: "Georgia State University\n2022-2025",
      imgUrl : bsimg,
    },
  ];

  const experience = [
    {
      title: "Artificial Intelligence Engineer Intern",
      description: "University of Missouri\nMay 2024 – July 2024",
      imgUrl: aiEngineerImg,
    },
    {
      title: "Desktop Support Technician",
      description: "Georgia State University\nSeptember 2022 – Present",
      imgUrl: desktopSupportImg,
    },
    {
      title: "Undergraduate Computer Science Research Assistant",
      description: "Georgia State University\nOctober 2023 – May 2024",
      imgUrl: researchAssistantImg,
    },
    {
      title: "Software Engineer Intern",
      description: "University of Missouri\nMay 2023 – August 2023",
      imgUrl: researchInternImg,
    },
    {
      title: "Teaching Assistant",
      description: "Georgia State University\nAugust 2022 – October 2022",
      imgUrl: taImg,
    },
    {
      title: "Student Assistant - University Housing",
      description: "Georgia State University\nJuly 2022 – October 2022",
      imgUrl: housingAssistantImg,
    },
  ];

  const modalStyles = {
    content: {
      color: '#333', // Dark text color for content
    },
    title: {
      color: '#000', // Black text color for title
    },
    description: {
      color: '#444', // Slightly lighter text color for description
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "first":
        return (
          <>
            <h2>Projects</h2>
            <p>Throughout my career, I have worked on a variety of projects that showcase my skills in web development, software engineering, Machine Learning and AI. Below are some of the key projects that highlight my experience and expertise in the field.</p>
          </>
        );
      case "second":
        return (
          <>
            <h2>Education</h2>
            <p>Here is a summary of my educational background, including degrees and institutions attended.</p>
          </>
        );
      case "third":
        return (
          <>
            <h2>Experience</h2>
            <p>Explore a summary of my diverse experiences, showcasing my technical skills, professional growth, and dedication to excellence.</p>
            </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  {renderContent()}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={(k) => setActiveTab(k)}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
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
                                  onClick={() => handleShow(project)}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            education.map((edu, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...edu}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            experience.map((exp, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...exp}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        centered
        size="lg"
        className="project-modal"
      >
        <Modal.Header closeButton style={modalStyles.content}>
          <Modal.Title className="fs-4" style={modalStyles.title}>
            {selectedProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyles.content}>
          {selectedProject && (
            <div className="project-modal-content">
              <div className="text-center mb-4">
                <img 
                  src={selectedProject.imgUrl} 
                  alt={selectedProject.title} 
                  className="img-fluid rounded"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
              <div className="project-details">
                <h5 className="mb-3" style={modalStyles.title}>Description</h5>
                <p className="mb-4" style={modalStyles.description}>
                  {selectedProject.description}
                </p>
                {selectedProject.link && (
                  <div className="text-center">
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={modalStyles.content}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </section>
  );
};
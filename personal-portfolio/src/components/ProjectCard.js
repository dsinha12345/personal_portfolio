import React from "react";
import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, onClick }) => {
  return (
    <Col size={12} sm={6} md={4} onClick={onClick}>
      <div className="proj-imgbx project-card">
        <img src={imgUrl} alt={title} className="project-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              <Button variant="light" className="mt-2">View Project</Button>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};

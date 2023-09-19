import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectData from "./data";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Mes <strong className="purple">Projets </strong>
				</h1>
				<p style={{ color: "white" }}>
					Découvrez les projets sur lesquels j'ai travaillé!
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					{projectData.map((project, idx) => (
						<Col md={4} className="project-card" key={idx}>
							<ProjectCard
								imgPath={project.imgPath}
								title={project.title}
								description={project.description}
								ghLink={project.ghLink}
								demoLink={project.demoLink}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;

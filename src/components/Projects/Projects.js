import React, { lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCards";
import projectData from "./data";

const Particle = lazy(() => import("../Particle"));

function Projects() {
	return (
		<Container fluid className="project-section">
			<Suspense fallback={<div>Loading...</div>}>
				<Particle />
			</Suspense>
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

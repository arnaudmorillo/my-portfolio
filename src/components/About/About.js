import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.webp";
import Toolstack from "./Toolstack";

function About() {
	return (
		<Container fluid className="about-section">
			<Particle />
			<Container>
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col
						md={7}
						style={{
							justifyContent: "center",
							paddingTop: "30px",
							paddingBottom: "50px",
						}}
					>
						<h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
							Mon <strong className="purple">Parcours</strong>
						</h1>
						<Aboutcard />
					</Col>
					<Col
						md={5}
						style={{ paddingTop: "80px", paddingBottom: "50px" }}
						className="about-img"
					>
						<img
							src={laptopImg}
							alt="about"
							className="img-fluid"
							width="350"
							height="350"
						/>
					</Col>
				</Row>
				<h2 className="project-heading">
					<strong className="purple">Compétences</strong> Professionnelles
				</h2>

				<Techstack />

				<h2 className="project-heading">
					<strong className="purple">Outils de développement</strong> que
					j'utilise
				</h2>
				<Toolstack />

				<Github />
			</Container>
		</Container>
	);
}

export default About;

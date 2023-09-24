import React, { lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import laptopImg from "../../Assets/about.webp";
import Aboutcard from "./AboutCard";

const Particle = lazy(() => import("../Particle"));
const Techstack = lazy(() => import("./Techstack"));
const Toolstack = lazy(() => import("./Toolstack"));
const Github = lazy(() => import("./Github"));

function About() {
	return (
		<Container fluid className="about-section">
			<Suspense fallback={<div>Loading...</div>}>
				<Particle />
			</Suspense>
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

				<Suspense fallback={<div>Loading...</div>}>
					<Techstack />
				</Suspense>

				<h2 className="project-heading">
					<strong className="purple">Outils de développement</strong> que
					j'utilise
				</h2>
				<Suspense fallback={<div>Loading...</div>}>
					<Toolstack />
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					<Github />
				</Suspense>
			</Container>
		</Container>
	);
}

export default About;

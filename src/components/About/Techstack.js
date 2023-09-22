import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiHtml5,
	DiGit,
	DiSass,
	DiGithubBadge,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

function Techstack() {
	return (
		<Row className="techstack">
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiSass />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNextdotjs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGithubBadge />
			</Col>
		</Row>
	);
}

export default Techstack;

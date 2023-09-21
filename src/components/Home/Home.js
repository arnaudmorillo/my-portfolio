import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.webp";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={5} className="home-image">
							<img src={homeLogo} alt="home pic" className="img-fluid" />
						</Col>
						<Col md={7} className="home-header">
							<h1>
								<span style={{ lineHeight: 2 }} className="heading">
									Bonjour!{" "}
									<span className="wave" role="img" aria-labelledby="wave">
										👋🏻
									</span>
								</span>{" "}
								<br></br>
								<span className="heading-name">
									Je suis
									<strong className="main-name"> Arnaud Morillo</strong>
								</span>
							</h1>
							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;

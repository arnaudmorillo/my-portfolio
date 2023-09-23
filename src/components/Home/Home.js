import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import homeLogo from "../../Assets/home-main.webp";
import { lazy, Suspense } from "react";

const Particle = lazy(() => import("../Particle"));
const Home2 = lazy(() => import("./Home2"));
const Type = lazy(() => import("./Type"));

function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Suspense fallback={<div>Loading...</div>}>
					<Particle />
				</Suspense>
				<Container className="home-content">
					<Row>
						<Col md={5} className="home-image">
							<img
								src={homeLogo}
								alt="home pic"
								className="img-fluid"
								width="320"
								height="320"
								priority
							/>
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
								<Suspense fallback={<div>Loading...</div>}>
									<Type />
								</Suspense>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
			<Suspense fallback={<div>Loading...</div>}>
				<Home2 />
			</Suspense>
		</section>
	);
}

export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/arnaud.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h2 style={{ fontSize: "2.6em" }}>
							En quelques <span className="purple"> mots </span>
						</h2>
						<p className="home-about-body">
							D'abord ingénieur en bureau d'étude, j'ai pu toucher du doigt la
							programmation via la simulation numérique. Passionné
							d'informatique et féru de résolution de problèmes en tous genres,
							j'ai choisi de poursuivre ma vie professionnelle en tant que
							développeur web.
							<br />
							<br />
							Après une formation complète et quelques premiers projets
							challengeants, j'interviens en tant que{" "}
							<i>
								<b className="purple">développeur Full Stack</b>
							</i>
							.
							<br />
							<br />
							Je maîtrise particulièrement{" "}
							<i>
								<b className="purple">Html, CSS et Javascript</b>
							</i>{" "}
							et les environnements{" "}
							<i>
								<b className="purple">React.js, Next.js et Node.js</b>
							</i>
							. Mes derniers projets m'ont conduit à développer un intérêt tout
							particulier pour la{" "}
							<i>
								<b className="purple">Blockchain</b>
							</i>{" "}
							et les questions de sécurité.
							<br />
							<br />
							Vous trouverez plus d'informations sur mon parcours et mes
							compétences dans la page "Profil" de ce Portfolio.
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={myImg}
								className="img-fluid"
								alt="avatar"
								width="500"
								height="500"
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<p>Retrouvez moi sur les réseaux !</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/arnaudmorillo"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/arnaud-morillo-60493b69"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;

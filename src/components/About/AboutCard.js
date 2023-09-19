import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						<span className="purple">Développeur Web professionnel </span>
						et diplômé, je possède également un diplôme d'ingénieur des Arts et
						Métiers ainsi qu'un master en Administration des Entreprises (IAE).
						<br />
						<br />
						Grâce à cette formation à 360° et à mes 10 ans d'expérience
						professionnelle dans l'ingénierie, j'allie{" "}
						<span className="purple">maîtrise technique</span> et parfaite
						compréhension de la{" "}
						<span className="purple">gestion d'un projet</span>
						.
						<br />
						<br />
						J'interviens actuellement comme freelance sur tous vos projets Front
						et/ou Back.
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;

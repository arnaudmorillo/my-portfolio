import kasa from "../../Assets/Projects/Kasa.png";
import grimmoire from "../../Assets/Projects/mon-vieux-grimmoire.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import architecte from "../../Assets/Projects/achitecte.png";
import booki from "../../Assets/Projects/booki.png";

const projectData = [
	{
		imgPath: portfolio,
		title: "Mon portfolio",
		description:
			"Création et mise en ligne de mon portfolio afin de montrer mes aventures de développeur. Ce site a été développé avec React (Create React App) et avec l'utilisation des outils Bootstrap. Un template a été utilisé comme inspiration pour les aspects design.",
		ghLink: "https://github.com/arnaudmorillo/my-portfolio",
	},
	{
		imgPath: grimmoire,
		title: "Mon Vieux Grimmoire",
		description:
			"Mise en place du backend avec Node.js (Express) associé à une base de données MongoDB pour une application de notation de livres. Gestion des routes API permettant la création et l'authentification des utilisateurs puis de routes sécurisées permettant d'interagir avec les livres du site.",
		ghLink: "https://github.com/arnaudmorillo/OCProject7",
	},
	{
		imgPath: kasa,
		title: "Kasa",
		description:
			"Création d'une application web de location immobilière avec React en se basant sur une maquette design sur Figma. SASS et Create React App ont notamment été utilisés.",
		ghLink: "https://github.com/arnaudmorillo/OCProject6",
	},
	{
		imgPath: architecte,
		title: "Sophie Bluel - Architecte d'intérieur",
		description:
			"Développement du frontend de ce site pour un architecte d'intérieur avec javascript. Possibilité pour le propriétaire du site de se connecter et de modifier sa gallerie en ajoutant ou supprimant des projets.",
		ghLink: "https://github.com/arnaudmorillo/OCproject3",
	},
	{
		imgPath: booki,
		title: "Booki - Agence de voyage",
		description:
			"Mon premier projet pour démarrer mon parcours de développeur! Page web d'une agence de voyage réalisée en html et CSS afin de dévouvrir les bases du développement web.",
		ghLink: "https://github.com/arnaudmorillo/OCProjet2",
	},
];

export default projectData;

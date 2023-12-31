import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.webp";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);

	return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "sticky" : "navbar"}
		>
			<Container>
				<Link as={Link} to="/">
					<img
						src={logo}
						className="img-fluid logo"
						alt="brand"
						width="52.5"
						height="48"
					/>
				</Link>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						updateExpanded(expand ? false : "expanded");
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: "2px" }} /> A propos
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/profil"
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineUser style={{ marginBottom: "2px" }} /> Profil
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/projets"
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: "2px" }}
								/>{" "}
								Projets
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className="fork-btn">
							<Button
								href="https://github.com/arnaudmorillo"
								target="_blank"
								className="fork-btn-inner"
							>
								<AiFillGithub style={{ fontSize: "1.5em" }} />{" "}
								<CgGitFork style={{ fontSize: "1.5em" }} />{" "}
							</Button>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
